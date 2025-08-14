<script setup lang="ts">
import { ref, watch } from "vue";
import type { Team } from "@/types";

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
      <div class="p-2 bg-blue-100 rounded-lg mr-3">
        <svg
          class="w-5 h-5 text-blue-600"
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
      <h2 class="text-lg font-semibold text-gray-800">ค้นหาทีม</h2>
    </div>

    <div class="relative">
      <input
        v-model="searchs"
        type="search"
        placeholder="ค้นหาชื่อทีม..."
        class="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <svg
        class="absolute left-4 top-4 w-4 h-4 text-gray-400"
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

    <div
      v-if="searchs && filteredResults && filteredResults.length > 0"
      class="mt-4"
    >
      <div class="text-sm font-medium text-gray-600 mb-3 flex items-center">
        <span
          class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs mr-2"
        >
          {{ filteredResults.length }}
        </span>
        ผลการค้นหา
      </div>
      <div class="max-h-60 overflow-y-auto space-y-2">
        <RouterLink
          v-for="team in filteredResults"
          :key="team.team.id"
          :to="`/team/${team.team.id}`"
          @click="handleTeamClick(team.team.id!)"
          class="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-colors group border border-transparent hover:border-blue-200"
        >
          <img
            :src="team.team.logo"
            :alt="team.team.name"
            class="w-8 h-8 mr-3 rounded-full"
          />
          <span class="font-medium text-gray-700 group-hover:text-blue-600">{{
            team.team.name
          }}</span>
        </RouterLink>
      </div>
    </div>

    <div
      v-else-if="searchs && filteredResults && filteredResults.length === 0"
      class="mt-4"
    >
      <div class="text-center py-6 text-gray-500">
        <svg
          class="w-12 h-12 mx-auto mb-3 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29.82-5.657 2.172A7.962 7.962 0 016 15a7.96 7.96 0 00-.657-3.172M19 12a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <p>
          ไม่พบทีมที่ชื่อ "<strong>{{ searchs }}</strong
          >"
        </p>
      </div>
    </div>
  </div>
</template>
