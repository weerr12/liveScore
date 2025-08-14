<script setup lang="ts">
import type { MockMatchStats } from "@/types";

const props = defineProps<{
  matchStats: MockMatchStats;
  formatDate: (dateString: string) => string;
}>();
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div
      class="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 text-white"
    >
      <div class="flex items-center space-x-4">
        <div
          class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center"
        >
          <img
            :src="matchStats.league.logo"
            :alt="matchStats.league.name"
            class="w-8 h-8"
          />
        </div>
        <div>
          <h2 class="text-2xl font-bold">{{ matchStats.league.name }}</h2>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="text-center mb-8">
        <div class="flex items-center justify-center space-x-12 mb-6">
          <div class="text-center group">
            <div
              class="w-24 h-24 rounded-full shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex items-center justify-center transform transition-transform group-hover:scale-105 mx-auto mb-4"
            >
              <img
                :src="matchStats.teams.home.logo"
                :alt="matchStats.teams.home.name"
                class="w-16 h-16 object-contain"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-1">
              {{ matchStats.teams.home.name }}
            </h3>
            <p class="text-sm text-gray-500">เจ้าบ้าน</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-2"
            >
              <span class="text-2xl font-bold text-gray-600">VS</span>
            </div>
            <div
              class="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            ></div>
          </div>

          <div class="text-center group">
            <div
              class="w-24 h-24 rounded-full shadow-lg bg-gradient-to-r from-red-50 to-red-100 p-4 flex items-center justify-center transform transition-transform group-hover:scale-105 mx-auto mb-4"
            >
              <img
                :src="matchStats.teams.away.logo"
                :alt="matchStats.teams.away.name"
                class="w-16 h-16 object-contain"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-1">
              {{ matchStats.teams.away.name }}
            </h3>
            <p class="text-sm text-gray-500">ทีมเยือน</p>
          </div>
        </div>

        <div class="bg-gray-50 rounded-xl p-6">
          <div class="text-center">
            <div class="text-lg font-bold text-gray-800 mb-1">
              {{ formatDate(matchStats.fixture.date) }}
            </div>
            <p class="text-gray-600">วันเวลาแข่งขัน</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
