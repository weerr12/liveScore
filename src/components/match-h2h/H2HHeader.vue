<script setup lang="ts">
defineProps<{
  leagueName: string;
}>();
</script>
<template>
  <div
    class="bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-6 text-white"
  >
    <div class="flex items-center space-x-4">
      <div>
        <h1 class="text-2xl font-bold">Head to Head</h1>
        <p class="text-purple-100 font-medium">{{ leagueName }}</p>
      </div>
    </div>
  </div>
</template>
