<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import {
  mockTeamsByLeague,
  mockLeagues,
  mockFixturesToday,
  mockStandingsByLeague,
} from "../mock-data";
import HeaderLive from "../components/live-match/HeaderLive.vue";
import SearchTeam from "../components/live-match/SearchTeam.vue";
import Top5league from "../components/live-match/Top5league.vue";
import MatchCard from "../components/live-match/MatchCard.vue";
import Standing from "../components/live-match/Standing.vue";
import LeagueTeam from "../components/live-match/LeagueTeam.vue";
import type { League, Team, TeamStanding, Fixture } from "@/types";

const leagues = ref<League[]>([]);
const leagueTeams = ref<Record<number, Team[]>>({});
const standings = ref<Record<number, TeamStanding[]>>({});
const fixturesToday = ref<Fixture[]>([]);
const selectedLeagueId = ref<number>();
const selectedTeamId = ref<number>();
const isLoading = ref(false);

const bigFiveLeagueIds = [39, 140, 135, 78, 61];

const loadData = () => {
  isLoading.value = true;
  // ปกติถ้าใช้ API
  // leagues.value = await getLeagues();
  leagues.value = mockLeagues;
  fixturesToday.value = mockFixturesToday;
  leagueTeams.value = mockTeamsByLeague;
  standings.value = mockStandingsByLeague;
  isLoading.value = false;
};

onMounted(loadData);

watch(selectedLeagueId, () => {
  selectedTeamId.value = undefined;
});

const filteredLeagues = computed(() =>
  leagues.value.filter(
    (league) =>
      bigFiveLeagueIds.includes(league.league.id) &&
      ["England", "Spain", "Italy", "Germany", "France"].includes(
        league.country.name
      )
  )
);

// ถ้าเลือกลีกแล้ว → แสดงทีมในลีกนั้น, ถ้าไม่เลือก → default Premier League (39)
const selectedLeagueTeams = computed(() => {
  if (selectedLeagueId.value) {
    return leagueTeams.value[selectedLeagueId.value] ?? [];
  }
  return leagueTeams.value[39] ?? [];
});

// แสดงแมตช์วันนี้ของลีกที่เลือก
const selectedLeagueFixtures = computed(() => {
  if (selectedLeagueId.value) {
    return fixturesToday.value.filter(
      (match) => match.league.id === selectedLeagueId.value
    );
  }
  return [];
});

const selectedTeamFixtures = computed(() => {
  if (selectedTeamId.value) {
    return fixturesToday.value.filter(
      (match) =>
        match.teams.home.id === selectedTeamId.value ||
        match.teams.away.id === selectedTeamId.value
    );
  }
  return [];
});

const displayFixtures = computed(() => {
  if (selectedTeamFixtures.value.length > 0) return selectedTeamFixtures.value;
  if (selectedLeagueFixtures.value.length > 0)
    return selectedLeagueFixtures.value;
  return fixturesToday.value;
});

const handleLeagueClick = (leagueId: number) => {
  if (selectedLeagueId.value !== leagueId) {
    selectedLeagueId.value = leagueId;
  }
};

const handleTeamClick = (teamId: number) => {
  selectedTeamId.value = teamId;
};

const filteredResults = computed(() => {
  return selectedLeagueId.value
    ? leagueTeams.value[selectedLeagueId.value] ?? []
    : [];
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderLive />

    <div class="container mx-auto px-6">
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
        ></div>
        <span class="ml-3 text-lg text-gray-600">กำลังโหลดข้อมูล...</span>
      </div>
      <div v-else class="grid lg:grid-cols-3 gap-8 mt-4">
        <div class="lg:col-span-1 space-y-6">
          <SearchTeam
            :filteredResults="filteredResults"
            @click="handleTeamClick"
            @search="(searchTerm) => console.log('Search:', searchTerm)"
          />
          <!-- <pre>{{ filteredLeagues }}</pre> -->
          <Top5league
            :filteredLeagues="filteredLeagues"
            :selectedLeagueId="selectedLeagueId"
            @leagueClick="handleLeagueClick"
          />
          <!-- <pre>{{ selectedLeagueTeams }}</pre> -->
          <LeagueTeam
            :selectedLeagueTeams="selectedLeagueTeams"
            @teamClick="handleTeamClick"
          />
        </div>
        <div class="lg:col-span-2 space-y-6">
          <MatchCard :displayFixtures="displayFixtures" />
          <Standing
            :standings="standings"
            :selectedLeagueId="selectedLeagueId"
          />
        </div>
      </div>
    </div>
  </div>
</template>
