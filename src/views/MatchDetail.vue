<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { mockFixturesToday } from "../mock-data";
import type { Color, NavItem } from "@/types";

const route = useRoute();
const isLoading = ref(true);

const fixtureId = computed(() => Number(route.params.fixtureId));

const currentMatch = computed(() =>
  mockFixturesToday.find((fixture) => fixture.fixture.id === fixtureId.value)
);

const navItems: NavItem[] = [
  {
    label: "หน้าแรก",
    description: "กลับสู่หน้าหลัก",
    color: "indigo",
    to: () => "/",
    isActive: (name) => name === "live-score",
  },
  {
    label: "สรุป",
    description: "สรุปการแข่งขัน",
    color: "green",
    to: (id?: number) => ({ name: "match-info", params: { fixtureId: id } }),
    isActive: (name) => name === "match-info",
  },
  {
    label: "การพบกันตัวต่อตัว",
    description: "ประวัติการพบกัน",
    color: "purple",
    to: (id?: number) => ({
      name: "match-details-view",
      params: { fixtureId: id },
    }),
    isActive: (name) => name === "match-details-view",
  },
];

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
  >
    <section
      class="bg-white shadow-xl sticky top-0 z-40 border-b border-gray-100"
    >
      <div class="container mx-auto px-6">
        <nav class="flex items-center justify-center">
          <div class="flex space-x-1 py-6">
            <RouterLink
              v-for="item in navItems"
              :key="item.label"
              :to="item.to(fixtureId)"
              class="group relative flex items-center space-x-4 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg transform hover:-translate-y-0.5"
              :class="
                item.isActive(route.name)
                  ? `bg-gradient-to-r from-${item.color}-100 to-${item.color}-50 text-${item.color}-700 font-semibold shadow-lg border-2 border-${item.color}-200`
                  : 'text-gray-600 hover:text-blue-600 border-2 border-transparent'
              "
            >
              <div class="flex flex-col">
                <span
                  class="text-sm font-medium transition-colors duration-200"
                  >{{ item.label }}</span
                >
                <span
                  class="text-xs transition-all duration-200 transform"
                  :class="
                    item.isActive(route.name)
                      ? `text-${item.color}-500 font-medium`
                      : 'text-gray-400 group-hover:text-blue-400'
                  "
                >
                  {{ item.description }}
                </span>
              </div>

              <div
                v-if="item.isActive(route.name)"
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-300"
                :class="`w-12 h-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-t-full shadow-lg`"
              ></div>

              <div
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-t-full transition-all duration-300 group-hover:w-8"
                :class="{ 'opacity-0': item.isActive(route.name) }"
              ></div>
            </RouterLink>
          </div>
        </nav>
      </div>
    </section>

    <main class="container mx-auto px-6 py-10">
      <div
        class="bg-white rounded-2xl shadow-xl border border-gray-100 min-h-[700px] relative overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-50 to-transparent opacity-30 rounded-full transform translate-x-32 -translate-y-32"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-50 to-transparent opacity-30 rounded-full transform -translate-x-24 translate-y-24"
        ></div>
        <div class="relative z-10 p-8">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
