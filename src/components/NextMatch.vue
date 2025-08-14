<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { TeamOverview } from "@/types";

const props = defineProps<{
  teamStat: TeamOverview;
}>();

const formatThaiDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>

<template>
  <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div class="flex items-center mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">นัดถัดไป</h2>
        <p class="text-sm text-gray-500">แมตช์ที่กำลังจะมาถึง</p>
      </div>
    </div>
    <RouterLink
      :to="`/match/${teamStat.team.nextMatch.fixture.id}`"
      class="block text-blue-600 mb-4"
    >
      <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <div class="text-center mb-4">
          <div class="text-lg font-semibold text-gray-800">
            {{ formatThaiDate(teamStat.team.nextMatch.date) }}
          </div>
          <div class="text-sm text-gray-600">
            เวลา {{ formatTime(teamStat.team.nextMatch.date) }} น.
          </div>
        </div>

        <!-- {{ teamStat.team.nextMatch.date }} -->

        <div class="flex items-center justify-between">
          <div class="text-center flex-1">
            <img
              :src="teamStat.team.logo"
              :alt="teamStat.team.name"
              class="w-16 h-16 mx-auto mb-3 rounded-full shadow-md"
            />
            <div class="font-semibold text-gray-800">
              {{ teamStat.team.name }}
            </div>
            <div class="text-xs text-gray-500 mt-1">เจ้าบ้าน</div>
          </div>

          <div class="mx-6 text-center">
            <div class="text-2xl font-bold text-gray-400 mb-2">VS</div>
            <div class="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
              แมตช์กำลังมา
            </div>
          </div>

          <div class="text-center flex-1">
            <img
              :src="teamStat.team.nextMatch.opponentLogo"
              :alt="teamStat.team.nextMatch.opponent"
              class="w-16 h-16 mx-auto mb-3 rounded-full shadow-md"
            />
            <div class="font-semibold text-gray-800">
              {{ teamStat.team.nextMatch.opponent }}
            </div>
            <div class="text-xs text-gray-500 mt-1">ทีมเยือน</div>
          </div>
        </div>
      </div>
    </RouterLink>
  </section>
</template>
