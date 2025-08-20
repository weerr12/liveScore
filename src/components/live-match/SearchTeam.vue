<script setup lang="ts">
import { ref, watch } from "vue";
import type { Team, Match } from "@/api/types";

const props = defineProps<{
  filteredResults?: Team[];
}>();


const emit = defineEmits<{
  (e: "click", teamId: number): void;
  (e: "search", searchTerm: string): void;
}>();

const handleTeamClick = (teamId: number) => {
  emit("click", teamId);
};

const searchs = ref<string>("");

watch(searchs, (newSearch) => {
  emit("search", newSearch);
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div class="flex items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-800">ค้นหาทีม</h2>
    </div>

    <div class="relative">
      <div
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        v-model="searchs"
        type="search"
        placeholder="ค้นหาชื่อทีม..."
        class="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>

    <div
      v-if="searchs && filteredResults && filteredResults.length > 0"
      class="mt-4"
    >
      <div class="text-sm font-medium text-gray-600 mb-3 flex items-center">
        ผลการค้นหา
      </div>
      <div class="max-h-60 overflow-y-auto space-y-2">
        <RouterLink
          v-for="team in filteredResults"
          :key="team.id"
          :to="`/team/${team.id}/overview`"
          @click="handleTeamClick(team.id!)"
          class="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-colors group border border-transparent hover:border-blue-200"
        >
          <img
            :src="team.logo"
            :alt="team.name"
            class="w-8 h-8 mr-3 rounded-full"
          />
          <span class="font-medium text-gray-700 group-hover:text-blue-600">{{
            team.name
          }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
