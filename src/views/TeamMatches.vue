<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { mockTeamsByLeague, mockFixturesToday } from "../mock-data";
import { useRoute } from "vue-router";
import MatchContent from "../components/team-match/MatchContent.vue";
import MatchHeader from "../components/team-match/MatchHeader.vue";
import FilterMatch from "../components/team-match/FilterMatch.vue";

const teamId = ref<number>();
const route = useRoute();
const isLoading = ref(true);
const currentTeam = ref<any>(null);
const selectedFilter = ref("all");

const findTeamData = () => {
  if (!teamId.value) return null;

  for (const leagueData of mockTeamsByLeague) {
    const team = leagueData.teams.find((t) => t.id === teamId.value);
    console.log("Team", JSON.stringify(team, null, 2));
    if (team) {
      return { team };
    }
  }
  return null;
};

const teamName = computed(() => currentTeam.value?.team?.name || "ทีมไม่ทราบ");
const teamLogo = computed(() => currentTeam.value?.team?.logo || "");

const findFixturesTeam = computed(() => {
  if (!teamId.value) return [];
  return mockFixturesToday.filter(
    (match) =>
      match.teams.home.id === teamId.value ||
      match.teams.away.id === teamId.value
  );
});

const filteredFixtures = computed(() => {
  const fixtures = findFixturesTeam.value;

  switch (selectedFilter.value) {
    case "upcoming":
      return fixtures.filter(
        (f) =>
          f.fixture.status.short === "NS" || f.fixture.status.short === "TBD"
      );
    case "completed":
      return fixtures.filter(
        (f) =>
          f.fixture.status.short === "FT" || f.fixture.status.short === "AET"
      );
    default:
      return fixtures;
  }
});

const matchStats = computed(() => {
  const total = findFixturesTeam.value.length;
  const upcoming = findFixturesTeam.value.filter(
    (f) => f.fixture.status.short === "NS" || f.fixture.status.short === "TBD"
  ).length;
  const completed = findFixturesTeam.value.filter(
    (f) => f.fixture.status.short === "FT" || f.fixture.status.short === "AET"
  ).length;

  return { total, upcoming, completed };
});

const formatMatchDate = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const isTeamHome = (fixture: any) => fixture.teams.home.id === teamId.value;

onMounted(() => {
  teamId.value = parseInt(route.params.teamId as string);
  currentTeam.value = findTeamData();

  setTimeout(() => {
    isLoading.value = false;
  }, 500);
});
</script>

<template>
  <div class="min-h-screen">
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดตารางแข่งขัน...</p>
      </div>
    </div>

    <MatchHeader
      :teamName="teamName"
      :teamLogo="teamLogo"
      :matchStats="matchStats"
    />

    <FilterMatch
      :matchStats="matchStats"
      :selectedFilter="selectedFilter"
      @filterChange="(filter) => (selectedFilter = filter)"
    />

    <div class="max-w-7xl mx-auto px-6 py-8">
      <div v-if="!isLoading && filteredFixtures.length" class="space-y-4">
        <div
          v-for="fixture in filteredFixtures"
          :key="fixture.fixture.id"
          class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div
            class="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-3 border-b border-gray-100"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <img
                  :src="fixture.league.logo"
                  :alt="fixture.league.name"
                  class="w-6 h-6"
                />
                <span class="font-semibold text-gray-800">{{
                  fixture.league.name
                }}</span>
              </div>
              <div class="text-sm text-gray-500 font-medium">
                {{ formatMatchDate(fixture.fixture.date) }}
              </div>
            </div>
          </div>
          <MatchContent :fixture="fixture" :isTeamHome="isTeamHome" />
        </div>
      </div>

      <div
        v-else-if="!isLoading && filteredFixtures.length === 0"
        class="text-center py-16"
      >
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            ไม่มีข้อมูลการแข่งขัน
          </h3>
          <p class="text-gray-500">ไม่พบข้อมูลการแข่งขันในหมวดหมู่ที่เลือก</p>
        </div>
      </div>
    </div>
  </div>
</template>
