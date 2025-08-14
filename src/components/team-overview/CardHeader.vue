<script setup lang="ts">
import { computed } from "vue";
import type { TeamOverview } from "@/types";

const props = defineProps<{
  teamStat: TeamOverview;
}>();
</script>

<template>
  <section
    class="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-100"
  >
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-6">
        <img
          :src="teamStat.team.logo"
          :alt="teamStat.team.name"
          class="w-20 h-20 rounded-full shadow-lg"
        />
        <div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">
            {{ teamStat.team.name }}
          </h1>
          <div class="flex items-center space-x-4 text-gray-600">
            <div class="flex items-center">
              <img
                :src="teamStat.league?.logo"
                :alt="teamStat.league?.name"
                class="w-5 h-5 mr-2"
              />
              <span class="font-medium">{{ teamStat.league?.name }}</span>
            </div>
            <span class="text-gray-400">•</span>
            <span>{{ teamStat.country?.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
