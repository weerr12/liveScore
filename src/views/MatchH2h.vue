<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { mockH2HWithFixtures } from "../mock-data";
import MatchVs from "../components/match-h2h/MatchVs.vue";
import MatchHistory from "../components/match-h2h/MatchHistory.vue";
import type { MatchResult } from "@/types";
import type { H2HData, Fixture } from "@/types/matchH2h";

const RESULT_COLORS = {
  WIN: "bg-green-500",
  LOSE: "bg-red-500",
  DRAW: "bg-yellow-500",
  DEFAULT: "bg-gray-300",
} as const;

const RESULT_TEXT: Record<MatchResult, string> = {
  WIN: "ชนะ",
  LOSE: "แพ้",
  DRAW: "เสมอ",
};

const RESULT_TEXT_COLORS: Record<MatchResult, string> = {
  WIN: "text-green-600",
  LOSE: "text-red-600",
  DRAW: "text-yellow-600",
};

const route = useRoute();
const matchId = ref<number>();
const isLoading = ref(true);

const parseScore = (scoreString: string): { home: number; away: number } => {
  const [home = 0, away = 0] = scoreString.split("-").map(Number);
  return { home, away };
};

const getMatchResult = (
  fixture: Fixture,
  referenceTeam: string
): MatchResult => {
  const { home: homeScore, away: awayScore } = parseScore(fixture.score);

  if (homeScore === awayScore) return "DRAW";

  const isReferenceTeamHome = fixture.home === referenceTeam;

  const didReferenceTeamWin = isReferenceTeamHome
    ? homeScore > awayScore
    : awayScore > homeScore;

  return didReferenceTeamWin ? "WIN" : "LOSE";
};

const getTeamLogo = (teamName: string): string => {
  if (!matchH2h.value) return "";

  const { home, away } = matchH2h.value.teams;
  return teamName === home.name
    ? home.logo
    : teamName === away.name
    ? away.logo
    : "";
};

const getMatchResultColor = (
  fixture: Fixture,
  homeTeamName: string
): string => {
  const result = getMatchResult(fixture, homeTeamName);
  return RESULT_COLORS[result];
};

const getResultTextClass = (result: MatchResult): string => {
  return RESULT_TEXT_COLORS[result];
};

const matchH2h = computed((): H2HData | null => {
  if (!matchId.value) return null;

  for (const league of mockH2HWithFixtures) {
    const match = league.fixtures.find(
      (fixture) => fixture.fixture_id === matchId.value
    );

    if (match) {
      return {
        league: league.league,
        teams: league.teams,
        fixtures: league.fixtures,
      };
    }
  }

  return null;
});

const sortedFixtures = computed(() => {
  if (!matchH2h.value?.fixtures) return [];

  return [...matchH2h.value.fixtures].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
});

onMounted(() => {
  matchId.value = parseInt(route.params.fixtureId as string);
  console.log("Match ID:", matchId.value);

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
        <MatchVs :matchH2h="matchH2h" />
        <MatchHistory
          :matchH2h="matchH2h"
          :sortedFixtures="sortedFixtures"
          :getTeamLogo="getTeamLogo"
          :getResultTextClass="getResultTextClass"
          :getMatchResult="getMatchResult"
          :getMatchResultColor="getMatchResultColor"
        />
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
