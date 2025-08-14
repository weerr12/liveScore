<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { mockStats } from "../mock-data";
import TeamName from "../components/match-info/TeamName.vue";
import MatchEvent from "../components/match-info/MatchEvent.vue";
import MatchOdd from "../components/match-info/MatchOdd.vue";
import MatchInjuries from "../components/match-info/MatchInjuries.vue";
import MatchLineUp from "../components/match-info/MatchLineUp.vue";
import type { PlayerLineup } from "@/types/matchH2h";

const route = useRoute();
const matchId = ref<number>();
const isLoading = ref(true);

const getFormationLines = (formation: string, players: PlayerLineup[]) => {
  const lines: {
    goalkeeper: PlayerLineup[];
    defense: PlayerLineup[];
    midfield: PlayerLineup[];
    forward: PlayerLineup[];
  } = {
    goalkeeper: [],
    defense: [],
    midfield: [],
    forward: [],
  };

  players.forEach((player) => {
    const position = player.position.toUpperCase();

    if (position === "GK") {
      lines.goalkeeper.push(player);
    } else if (["CB", "LB", "RB", "LWB", "RWB", "DF"].includes(position)) {
      lines.defense.push(player);
    } else if (["LW", "RW", "ST", "CF", "FW"].includes(position)) {
      lines.forward.push(player);
    } else {
      lines.midfield.push(player);
    }
  });

  return lines;
};

const matchStats = computed(() => {
  if (!matchId.value) return null;

  const match = mockStats.find((stat) => stat.fixture.id === matchId.value);

  if (match) {
    return {
      league: match.league,
      fixture: match.fixture,
      teams: match.teams,
      goals: match.goals,
      events: match.events.map((event) => ({
        ...event,
        time: String(event.time),
      })),
      injuries: match.injuries,
      lineups: match.lineups,
      odds: {
        home: match.odds.home,
        draw: match.odds.draw,
        away: match.odds.away,
      },
      topScorers: match.topScorers,
      statistics: match.statistics,
    };
  }
  return null;
});

const matchStatsForOdds = computed(() => {
  if (!matchStats.value) return null;

  return {
    odds: {
      home: parseFloat(matchStats.value.odds.home),
      draw: parseFloat(matchStats.value.odds.draw),
      away: parseFloat(matchStats.value.odds.away),
    },
    teams: matchStats.value.teams,
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

const getEventColor = (type: string) => {
  switch (type) {
    case "Goal":
      return "bg-green-100 text-green-800 border-green-200";
    case "Yellow Card":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Red Card":
      return "bg-red-100 text-red-800 border-red-200";
    case "Substitution":
      return "bg-blue-100 text-blue-800 border-blue-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

onMounted(() => {
  matchId.value = parseInt(route.params.fixtureId as string);

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
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดข้อมูลการแข่งขัน...</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-8">
      <div
        v-if="!isLoading && matchStats && matchStatsForOdds"
        class="space-y-8"
      >
        <TeamName :matchStats="matchStats" :formatDate="formatDate" />
        <MatchEvent :matchStats="matchStats" :getEventColor="getEventColor" />
        <MatchOdd :matchStats="matchStatsForOdds" />
        <MatchInjuries :matchStats="matchStats" :formatDate="formatDate" />
        <MatchLineUp
          :matchStats="matchStats"
          :getFormationLines="getFormationLines"
        />
      </div>

      <div v-else-if="!isLoading && !matchStats" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            ไม่มีข้อมูลการแข่งขัน
          </h3>
          <p class="text-gray-500">ไม่พบข้อมูลการแข่งขันที่คุณค้นหา</p>
        </div>
      </div>
    </div>
  </div>
</template>
