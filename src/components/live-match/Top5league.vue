<script setup lang="ts">
import type { League } from "@/api/types";

// emit ลูก -> แม่
// ลูกจะส่ง handleLeagueClick กลับไปที่แม่

// props แม่ -> ลูก
// แม่จะส่งอะไรมาบ้างล่ะ 1. selectedLeagueId 2. filteredLeagues

const props = defineProps<{
  filteredLeagues: League[];
  selectedLeagueId?: number;
}>();

// export interface League {
//     id: number;
//     name: string;
//     logo: string;
// }

const emit = defineEmits<{
  (e: "leagueClick", leagueId: number): void;
}>();

const handleLeagueClick = (leagueId: number) => {
  // ส่ง event กลับไปที่แม่
  emit("leagueClick", leagueId);
};

// defineProps<{
//   data1: any
//   data2: any
// }>()

// const emit = defineEmits<{
//   (e: 'change'): void
//   (e: 'complete', data: any): void
// }>()
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div class="flex items-center mb-4">
      <h3 class="text-lg font-semibold text-gray-800">ลีกยอดนิยม</h3>
    </div>
    <div class="space-y-2">
      <button
        v-for="league in filteredLeagues"
        :key="league.id"
        @click="handleLeagueClick(league.id)"
        class="w-full flex items-center p-3 rounded-lg transition-all group hover:bg-blue-50 border border-transparent hover:border-blue-200"
        :class="
          selectedLeagueId === league.id ? 'bg-blue-100 border-blue-300' : ''
        "
      >
        <img
          :src="league.logo"
          :alt="league.name"
          class="w-8 h-8 mr-3 rounded-full object-contain"
        />
        <div class="text-left">
          <div
            class="font-medium text-gray-700 group-hover:text-blue-600"
            :class="selectedLeagueId === league.id ? 'text-blue-600' : ''"
          >
            {{ league.name }}
            <!-- {{ league.league.id }} -->
          </div>
        </div>
      </button>
    </div>
  </div>
</template>
