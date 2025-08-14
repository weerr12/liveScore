<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { mockNews } from "../../mock-data";
import type { NewsItem } from "@/types";

const route = useRoute();
const router = useRouter();
const newsId = ref<number>();
const newsItem = ref<NewsItem | null>(null);

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

onMounted(() => {
  newsId.value = Number(route.params.id);

  const foundNews = mockNews.find((news) => news.id === newsId.value);

  if (foundNews) {
    newsItem.value = foundNews;
  } else {
    router.push("/news");
  }
});
</script>

<template>
  <div v-if="newsItem" class="min-h-screen bg-gray-50">
    <div class="mx-auto px-6 py-4">
      <button
        @click="$router.push('/news')"
        class="flex items-center justify-center px-3 py-1 text-black font-semibold bg-gray-300 rounded-full shadow-md hover:bg-blue-50 transition-colors mt-4"
      >
        กลับไปหน้าข่าว
      </button>
    </div>

    <article class="container mx-auto px-6 py-8">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
        >
          {{ newsItem.title }}
        </h1>

        <div class="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img
            :src="newsItem.image"
            :alt="newsItem.title"
            class="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div
          class="flex items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm"
        >
          <div class="flex items-center">
            <span class="text-gray-600 font-medium">{{ newsItem.source }}</span>
          </div>

          <div v-if="newsItem.views" class="flex items-center text-gray-500">
            <svg
              class="w-4 h-4 mr-1"
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
            {{ formatNumber(newsItem.views) }} views
          </div>
        </div>

        <div
          class="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm"
        >
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            {{ newsItem.summary }}
          </p>
        </div>

        <div class="mt-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">แท็ก</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in newsItem.tags"
              :key="tag"
              class="bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
