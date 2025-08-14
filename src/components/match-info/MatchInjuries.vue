<script setup lang="ts">
import type { Injury } from "@/types/index";

const props = defineProps<{
  matchStats: {
    injuries: Injury[];
  };
  formatDate: (dateString: string) => string;
}>();
</script>

<template>
  <div
    v-if="matchStats && matchStats.injuries && matchStats.injuries.length > 0"
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div class="bg-gradient-to-r from-red-500 to-pink-600 px-8 py-6 text-white">
      <div class="flex items-center space-x-3">
        <div>
          <h3 class="text-xl font-bold">การบาดเจ็บ</h3>
          <p class="text-red-100 opacity-90">
            {{ matchStats.injuries.length }} รายการ
          </p>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="space-y-4">
        <div
          v-for="injury in matchStats.injuries"
          :key="`${injury.team}-${injury.player}`"
          class="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-xl hover:shadow-md transition-all duration-200"
        >
          <div class="flex items-center space-x-4">
            <div
              class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
            >
              <span class="text-red-600 text-xl">🏥</span>
            </div>
            <div>
              <p class="font-bold text-gray-900">{{ injury.player }}</p>
              <p class="text-gray-600 text-sm">{{ injury.team.name }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-red-600 font-semibold">{{ injury.reason }}</p>
            <p class="text-gray-500 text-sm">
              {{ formatDate(injury.date) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
