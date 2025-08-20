<script setup lang="ts">
import type { Team, Score } from "@/api/types";

defineProps<{
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  status: string;
  date: string;
  formatDate: (dateString: string) => string;
}>();

const getStatusClass = (status: string) => {
  switch (status) {
    case "LIVE":
      return "bg-red-100 text-red-800";
    case "FT":
      return "bg-green-100 text-green-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};
</script>

<template>
  <div class="p-8">
    <div class="flex items-center justify-between">
      <div class="flex-1 text-center">
        <div class="mb-4">
          <img
            :src="homeTeam.logo"
            :alt="homeTeam.name"
            class="w-20 h-20 mx-auto rounded-full shadow-lg object-contain"
          />
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">
          {{ homeTeam.name }}
        </h2>
        <div class="text-3xl font-bold text-green-600">
          {{ score.home }}
        </div>
      </div>

      <div class="flex-1 text-center px-8">
        <div class="mb-4">
          <span
            class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
            :class="getStatusClass(status)"
          >
            {{ status }}
          </span>
        </div>
        <div class="text-gray-600 text-sm font-medium">
          {{ formatDate(date) }}
        </div>
        <div class="mt-2 text-2xl font-bold text-gray-400">VS</div>
      </div>

      <div class="flex-1 text-center">
        <div class="mb-4">
          <img
            :src="awayTeam.logo"
            :alt="awayTeam.name"
            class="w-20 h-20 mx-auto rounded-full shadow-lg object-contain"
          />
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">
          {{ awayTeam.name }}
        </h2>
        <div class="text-3xl font-bold text-green-600">
          {{ score.away }}
        </div>
      </div>
    </div>
  </div>
</template>
