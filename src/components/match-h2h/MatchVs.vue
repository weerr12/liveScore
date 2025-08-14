<script setup lang="ts">
import type { H2HData } from "@/types/matchH2h";

const props = defineProps<{
  matchH2h: H2HData;
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
        <div>
          <h1 class="text-2xl font-bold">ประวัติการเจอกัน (H2H)</h1>
          <p class="text-green-100 opacity-90">{{ matchH2h.league.name }}</p>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="flex items-center space-x-4 mb-8">
        <div
          class="w-16 h-16 bg-gray-50 rounded-xl p-3 flex items-center justify-center"
        >
          <img
            :src="matchH2h.league.logo"
            :alt="matchH2h.league.name"
            class="w-10 h-10"
          />
        </div>
        <div>
          <h2 class="text-xl font-bold text-gray-900">
            {{ matchH2h.league.name }}
          </h2>
          <p class="text-gray-600">การแข่งขันประจำฤดูกาล</p>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-12 mb-8">
        <div class="text-center group">
          <div
            class="w-24 h-24 rounded-full shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex items-center justify-center transform transition-transform group-hover:scale-105 mx-auto mb-4"
          >
            <img
              :src="matchH2h.teams.home.logo"
              :alt="matchH2h.teams.home.name"
              class="w-16 h-16 object-contain"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800">
            {{ matchH2h.teams.home.name }}
          </h3>
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
              :src="matchH2h.teams.away.logo"
              :alt="matchH2h.teams.away.name"
              class="w-16 h-16 object-contain"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-800">
            {{ matchH2h.teams.away.name }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
