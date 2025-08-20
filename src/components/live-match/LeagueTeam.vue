<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { Team, Match } from "@/api/types";

const props = defineProps<{
  selectedLeagueTeams?: Team[];
}>();
const emit = defineEmits<{
  (e: "teamClick", teamId: number): void;
}>();

const handleTeamClick = (teamId: number) => {
  emit("teamClick", teamId);
};
</script>

<template>
  <div
    v-if="selectedLeagueTeams"
    class="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
  >
    <div class="flex items-center mb-4">
      <h3 class="text-lg font-semibold text-gray-800">ทีมในลีก</h3>
    </div>

    <div class="max-h-80 overflow-y-auto space-y-2">
      <!-- :to="`/team/${match.id}/overview`" -->
      <RouterLink
        v-for="team in selectedLeagueTeams"
        :key="team.id"
        :to="`/team/${team.id}/overview`"
        @click="handleTeamClick(team.id!)"
        class="flex items-center p-2 hover:bg-purple-50 rounded-lg transition-colors group border border-transparent hover:border-purple-200"
      >
        <!-- {{ team.id }} -->
        <img
          :src="team.logo"
          :alt="team.name"
          class="w-6 h-6 mr-3 rounded-full"
        />
        <span
          class="text-sm font-medium text-gray-700 group-hover:text-purple-600"
          >{{ team.name }}
          <!-- {{ team.team.id }} -->
        </span>
      </RouterLink>
    </div>
  </div>
</template>
