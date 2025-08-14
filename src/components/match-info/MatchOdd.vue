<script setup lang="ts">

interface MatchStats {
  odds: {
    home: number;
    draw: number;
    away: number;
  };
  teams: {
    home: {
      name: string;
      logo: string;
    };
    away: {
      name: string;
      logo: string;
    };
  };
}

const props = defineProps<{
    matchStats: MatchStats;
}>();
</script>

<template>
  <div
    v-if="matchStats.odds"
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div
      class="bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-6 text-white"
    >
      <div class="flex items-center space-x-3">
        <div>
          <h3 class="text-xl font-bold">อัตราต่อรอง</h3>
          <p class="text-purple-100 opacity-90">ราคาเปิดต่อรอง</p>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all duration-200"
        >
          <div
            class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
          >
            <img
              :src="matchStats.teams.home.logo"
              :alt="matchStats.teams.home.name"
              class="w-10 h-10"
            />
          </div>
          <p class="font-semibold text-gray-800 mb-2">
            {{ matchStats.teams.home.name }}
          </p>
          <p class="text-3xl font-bold text-blue-600">
            {{ matchStats.odds.home }}
          </p>
        </div>

        <div
          class="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-all duration-200"
        >
          <div
            class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
          >
            <span class="text-2xl">🤝</span>
          </div>
          <p class="font-semibold text-gray-800 mb-2">เสมอ</p>
          <p class="text-3xl font-bold text-gray-600">
            {{ matchStats.odds.draw }}
          </p>
        </div>

        <div
          class="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border-2 border-red-200 hover:shadow-lg transition-all duration-200"
        >
          <div
            class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm"
          >
            <img
              :src="matchStats.teams.away.logo"
              :alt="matchStats.teams.away.name"
              class="w-10 h-10"
            />
          </div>
          <p class="font-semibold text-gray-800 mb-2">
            {{ matchStats.teams.away.name }}
          </p>
          <p class="text-3xl font-bold text-red-600">
            {{ matchStats.odds.away }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
