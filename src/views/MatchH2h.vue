<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import H2HHeader from "../components/match-h2h/H2HHeader.vue";
import H2HTeamsComparison from "../components/match-h2h/H2HTeamsCompare.vue";
import H2HStatistics from "../components/match-h2h/H2HStatistics.vue";

// api จริงๆ
import { getMatchDataByFixtureId } from "@/api/service";
import type { Match } from "@/api/types";

const route = useRoute();
const isLoading = ref(true);
const matchH2hData = ref<Match>();

const fixtureId = computed(() => Number(route.params.fixtureId));

const fetchMatchH2h = async () => {
  try {
    const response = await getMatchDataByFixtureId(fixtureId.value);
    if (response.data.success) {
      matchH2hData.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching H2H data:", error);
  }
};

const matchH2h = computed(() => {
  if (!matchH2hData.value) return null;

  const match = matchH2hData.value;

  return {
    id: match.id,
    fixture_id: match.fixtureId,
    date: match.date,
    status: {
      short: match.status,
      long:
        match.status === "LIVE"
          ? "Live"
          : match.status === "FT"
          ? "Full Time"
          : "Scheduled",
    },
    league: match.league,
    teams: {
      home: match.homeTeam,
      away: match.awayTeam,
    },
    goals: {
      home: match.score.home,
      away: match.score.away,
    },
    score: {
      fulltime: { home: match.score.home, away: match.score.away },
    },
  };
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(() => {
  fetchMatchH2h();
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
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
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดประวัติการเจอกัน...</p>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-6 py-8">
      <div v-if="!isLoading && matchH2h" class="space-y-8">
        <div
          class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <H2HHeader :leagueName="matchH2h.league.name" />

          <H2HTeamsComparison
            :teams="matchH2h.teams"
            :goals="matchH2h.goals"
            :status="matchH2h.status"
            :date="matchH2h.date"
            :formatDate="formatDate"
          />
        </div>

        <H2HStatistics
          :teams="matchH2h.teams"
          :score="matchH2h.score"
          :status="matchH2h.status"
          :date="matchH2h.date"
          :league="matchH2h.league"
          :formatDate="formatDate"
        />

        <!-- <H2HMatchHistory /> -->
      </div>

      <div v-else-if="!isLoading && !matchH2h" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            ไม่มีข้อมูลประวัติการเจอกัน
          </h3>
          <p class="text-gray-500">
            ไม่พบข้อมูลการแข่งขันระหว่างทีมที่คุณค้นหา
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
