<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import NewsCard from "../components/news/NewsCard.vue";

import { getNewsList } from "@/api/service";
import type { News } from "@/api/types";

const news = ref<News[]>([]);

const fetchNews = async () => {
  try {
    const response = await getNewsList();
    if (response.data.success) {
      news.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

const formatThaiDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
};

onMounted(() => {
  fetchNews();
});
</script>

<template>
  <div class="min-h-screen">
    <RouterLink
      to="/"
      class="absolute top-4 left-4 text-blue-600 hover:text-blue-800 transition-colors"
    >
      <div
        class="flex items-center justify-center px-3 py-1 text-black font-semibold bg-gray-300 rounded-full shadow-md hover:bg-blue-50 transition-colors mt-4"
      >
        กลับสู่หน้าหลัก
      </div>
    </RouterLink>

    <div class="container mx-auto px-6 py-12 mt-8">
      <div v-if="news.length > 0">
        <NewsCard
          :news="news"
          :formatThaiDate="formatThaiDate"
          :formatNumber="formatNumber"
        />
      </div>
    </div>
  </div>
</template>
