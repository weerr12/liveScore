<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { mockTeamFixturesStats } from "../mock-data";
import type { TeamOverview } from "../types";
import NextMatch from "../components/NextMatch.vue";
import RecentFormCard from "../components/RecentFormCard.vue";
import CardHeader from "../components/team-overview/CardHeader.vue";

const route = useRoute();
const teamId = ref<number>();

const teamStat = computed((): TeamOverview | null => {
  if (!teamId.value) return null;

  for (const league of mockTeamFixturesStats) {
    const team = league.team.find((t) => t.id === teamId.value);
    console.log("Found team:", team);
    if (team) {
      return {
        league: league.league,
        country: league.country,
        team: {
          ...team,
          last5: team.last5.map((match) => ({
            ...match,
            result: match.result as "W" | "L" | "D",
          })),
        },
      };
    }
  }

  return null;
});

const getResultColor = (result: string) => {
  switch (result) {
    case "W":
      return "bg-green-500 text-white";
    case "L":
      return "bg-red-500 text-white";
    case "D":
      return "bg-yellow-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

onMounted(() => {
  teamId.value = parseInt(route.params.teamId as string);
});
</script>

<template>
  <div class="min-h-screen">
    <div v-if="!teamStat" class="flex justify-center items-center py-20">
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <span class="text-lg text-gray-600">กำลังโหลดข้อมูลทีม...</span>
      </div>
    </div>

    <div v-else class="container mx-auto px-6 py-8">
      <CardHeader :teamStat="teamStat" />

      <div class="grid lg:grid-cols-2 gap-8">
        <NextMatch :teamStat="teamStat" />
        <RecentFormCard :teamStat="teamStat" :getResultColor="getResultColor" />
      </div>
    </div>
  </div>
</template>
