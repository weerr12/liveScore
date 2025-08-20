<script setup lang="ts">
import type { Team } from "@/api/types";

defineProps<{
  teams: {
    home: Team;
    away: Team;
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  status: {
    short: string;
    long: string;
  };
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
            :src="teams.home.logo"
            :alt="teams.home.name"
            class="w-24 h-24 mx-auto rounded-full shadow-lg object-contain"
          />
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">
          {{ teams.home.name }}
        </h2>
        <div class="text-4xl font-bold text-blue-600">
          {{ goals.home }}
        </div>
      </div>

      <div class="flex-1 text-center px-8">
        <div class="mb-4">
          <span
            class="inline-flex items-center px-6 py-3 rounded-full text-lg font-bold"
            :class="getStatusClass(status.short)"
          >
            {{ status.long }}
          </span>
        </div>
        <div class="text-gray-600 text-sm font-medium mb-2">
          {{ formatDate(date) }}
        </div>
        <div class="text-3xl font-bold text-gray-400">VS</div>
      </div>

      <div class="flex-1 text-center">
        <div class="mb-4">
          <img
            :src="teams.away.logo"
            :alt="teams.away.name"
            class="w-24 h-24 mx-auto rounded-full shadow-lg object-contain"
          />
        </div>
        <h2 class="text-xl font-bold text-gray-800 mb-2">
          {{ teams.away.name }}
        </h2>
        <div class="text-4xl font-bold text-blue-600">
          {{ goals.away }}
        </div>
      </div>
    </div>
  </div>
</template>
