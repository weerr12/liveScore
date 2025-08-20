<script setup lang="ts">
import type { Team, Score, League } from "@/api/types";

defineProps<{
  id: number;
  fixtureId: number;
  date: string;
  status: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  league: League;
  formatDate: (dateString: string) => string;
}>();

const getStatusTextClass = (status: string) => {
  switch (status) {
    case "LIVE":
      return "text-red-600";
    case "FT":
      return "text-green-600";
    default:
      return "text-blue-600";
  }
};
</script>
<template>
  <div class="grid grid-rows-1 md:grid-rows-2 gap-6">
    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
        ผลการแข่งขัน
      </h3>
      <div class="space-y-3">
        <div
          class="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
        >
          <span class="font-medium text-gray-700">Full Time</span>
          <span class="font-bold text-lg">
            {{ score.home }} - {{ score.away }}
          </span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
        ข้อมูลการแข่งขัน
      </h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">สถานะ</span>
          <span class="font-medium" :class="getStatusTextClass(status)">
            {{ status }}
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">วันที่แข่งขัน</span>
          <span class="font-medium">{{ formatDate(date) }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">ลีก</span>
          <span class="font-medium">{{ league.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
