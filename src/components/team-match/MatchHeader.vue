<script setup lang="ts">

const props = defineProps<{
    teamName: string;
    teamLogo?: string;
    matchStats: {
        total: number;
        upcoming: number;
        completed: number;
    };
}>();
</script>

<template>
  <div class="bg-white shadow-lg border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div
            class="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5"
          >
            <div
              class="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <img
                v-if="teamLogo"
                :src="teamLogo"
                :alt="teamName"
                class="w-12 h-12 object-contain team-logo"
              />
            </div>
          </div>
          <div>
            <h1 class="text-3xl font-bold text-gray-900 gradient-text">
              {{ teamName }}
            </h1>
            <p class="text-gray-600 mt-1">ตารางแข่งขัน</p>
          </div>
        </div>

        <div class="hidden md:flex space-x-4 stats-cards">
          <div class="bg-blue-50 rounded-xl px-4 py-3 text-center min-w-[80px]">
            <div class="text-2xl font-bold text-blue-600">
              {{ matchStats.total }}
            </div>
            <div class="text-xs text-blue-500 font-medium">ทั้งหมด</div>
          </div>
          <div
            class="bg-yellow-50 rounded-xl px-4 py-3 text-center min-w-[80px]"
          >
            <div class="text-2xl font-bold text-yellow-600">
              {{ matchStats.upcoming }}
            </div>
            <div class="text-xs text-yellow-500 font-medium">ที่จะแข่ง</div>
          </div>
          <div
            class="bg-green-50 rounded-xl px-4 py-3 text-center min-w-[80px]"
          >
            <div class="text-2xl font-bold text-green-600">
              {{ matchStats.completed }}
            </div>
            <div class="text-xs text-green-500 font-medium">จบแล้ว</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
