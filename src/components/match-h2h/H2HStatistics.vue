<script setup lang="ts">
import type { Team, League } from "@/api/types";

defineProps<{
  teams: {
    home: Team;
    away: Team;
  };
  score: {
    fulltime: {
      home: number | null;
      away: number | null;
    };
  };
  status: {
    short: string;
    long: string;
  };
  date: string;
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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
        ข้อมูลการแข่งขัน
      </h3>
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-gray-600">วันที่</span>
          <span class="font-medium">{{ formatDate(date) }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">สถานะ</span>
          <span class="font-medium" :class="getStatusTextClass(status.short)">
            {{ status.long }}
          </span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600">ลีก</span>
          <span class="font-medium">{{ league.name }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        ผลการแข่งขัน
      </h3>
      <div class="space-y-4">
        <div
          class="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
        >
          <span class="font-medium text-gray-700">Full Time</span>
          <span class="font-bold text-xl text-green-600">
            {{ score.fulltime.home }} - {{ score.fulltime.away }}
          </span>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
        ทีมที่เจอกัน
      </h3>
      <div class="space-y-4">
        <div class="flex items-center space-x-3">
          <img
            :src="teams.home.logo"
            :alt="teams.home.name"
            class="w-8 h-8 rounded-full object-contain"
          />
          <span class="font-medium">{{ teams.home.name }}</span>
        </div>
        <div class="flex items-center space-x-3">
          <img
            :src="teams.away.logo"
            :alt="teams.away.name"
            class="w-8 h-8 rounded-full object-contain"
          />
          <span class="font-medium">{{ teams.away.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
