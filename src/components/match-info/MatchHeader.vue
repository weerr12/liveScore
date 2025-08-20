<script setup lang="ts">
import type { League } from "@/api/types";

defineProps<{
  league: League;
}>();
</script>
<template>
  <div class="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-6 text-white">
    <div class="flex items-center space-x-4">
      <div
        class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center"
      >
        <img
          :src="league.logo"
          :alt="league.name"
          class="w-8 h-8 rounded-full object-contain"
        />
      </div>
      <div>
        <h1 class="text-2xl font-bold">{{ league.name }}</h1>
      </div>
    </div>
  </div>
</template>
