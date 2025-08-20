<script setup lang="ts">
import type { News } from "@/api/types";

const props = defineProps<{
  news: News[];
  formatThaiDate: (dateString: string) => string;
  formatNumber: (num: number) => string;
}>();
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
    <article
      v-for="item in news"
      :key="item.id"
      class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div class="relative overflow-hidden">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-48 object-cover transition-transform duration-300"
        />

        <div class="absolute top-4 left-4">
          <span
            class="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold shadow-lg"
          >
            {{ item.source }}
          </span>
        </div>
      </div>

      <div class="p-6">
        <h2
          class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
        >
          {{ item.title }}
        </h2>

        <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {{ item.description }}
        </p>

        <div
          class="flex items-center justify-between text-sm text-gray-500 mb-4"
        >
          <div class="flex items-center">
            <span>{{ formatThaiDate(item.publishedAt) }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center text-sm text-gray-600">
            <span class="font-medium">{{ item.source }}</span>
          </div>
        </div>
      </div>

      <div class="px-6 pb-6">
        <RouterLink
          :to="{ name: 'news-detail', params: { id: item.id } }"
          class="w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
        >
          <span>อ่านต่อ</span>
        </RouterLink>
      </div>
    </article>
  </div>
</template>
