<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getNewsArticleById } from "@/api/service";
import type { News } from "@/api/types";

const route = useRoute();
const newsId = computed(() => Number(route.params.id));
const newsItem = ref<News | null>(null);
const loading = ref(true);

const fetchNewsDetail = async (id: number) => {
  try {
    const response = await getNewsArticleById(id);
    if (response.data.success) {
      newsItem.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching news detail:", error);
  }
};

onMounted(() => {
  fetchNewsDetail(newsId.value);
  setTimeout(() => {
    loading.value = false;
  }, 300);
});
</script>

<template>
  <div
    v-if="loading"
    class="min-h-screen bg-gray-50 flex items-center justify-center"
  >
    <div class="text-center">
      <div
        class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"
      ></div>
      <p class="text-gray-600">กำลังโหลดข่าว...</p>
    </div>
  </div>

  <div v-else-if="newsItem" class="min-h-screen bg-gray-50">
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

        <div class="mb-8 rounded-2xl overflow-hidden shadow-lg">
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

          <div class="flex items-center text-gray-500">
            <span class="text-sm">{{
              new Date(newsItem.publishedAt).toLocaleDateString("th-TH")
            }}</span>
          </div>
        </div>

        <div
          class="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-sm"
        >
          <p class="text-lg text-gray-700 leading-relaxed mb-6">
            {{ newsItem.description }}
          </p>

          <div
            class="text-gray-800 leading-relaxed"
            v-html="newsItem.content"
          ></div>
        </div>
      </div>
    </article>
  </div>
</template>
