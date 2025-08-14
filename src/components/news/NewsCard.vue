<script setup lang="ts">
import type { NewsItem } from "@/types";

const props = defineProps<{
  news: NewsItem[];
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
            class="px-3 py-1 text-white rounded-full text-xs font-semibold shadow-lg"
          >
            {{ item.category }}
          </span>
        </div>

        <div v-if="item.views" class="absolute top-4 right-4">
          <div
            class="bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center"
          >
            <svg
              class="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            {{ formatNumber(item.views) }}
          </div>
        </div>
      </div>

      <div class="p-6">
        <h2
          class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
        >
          {{ item.title }}
        </h2>

        <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {{ item.summary }}
        </p>

        <div
          class="flex items-center justify-between text-sm text-gray-500 mb-4"
        >
          <div class="flex items-center">
            <span>{{ formatThaiDate(item.date) }}</span>
          </div>

          <div v-if="item.readTime" class="flex items-center">
            <span>{{ item.readTime }}</span>
          </div>
        </div>

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center text-sm text-gray-600">
            <span class="font-medium">{{ item.source }}</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in item.tags.slice(0, 3)"
            :key="tag"
            class="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="px-6 pb-6">
        <!-- to="/news/:id" -->
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
