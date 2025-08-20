<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";

const route = useRoute();
const isLoading = ref(true);

const teamId = computed(() => Number(route.params.teamId));

const navItems = [
  {
    path: "/",
    label: "หน้าแรก",
    description: "กลับสู่หน้าหลัก",
    color: "indigo",
  },
  {
    path: "/overview",
    label: "ภาพรวม",
    description: "ข้อมูลทั่วไปของทีม",
    color: "blue",
  },
  {
    path: "/matches",
    label: "ตารางแข่ง",
    description: "กำหนดการแข่งขัน",
    color: "green",
  },
  {
    path: "/standings",
    label: "ตารางอันดับ",
    description: "อันดับและสถิติลีก",
    color: "purple",
  },
];

const isActiveRoute = (path = "") => {
  const currentPath = route.path;
  const teamPath = `/team/${teamId.value}`;

  if (path === "/") {
    return currentPath === "/";
  }

  if (path === "") {
    return currentPath === teamPath;
  }
  return currentPath === teamPath + path;
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
  >
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดข้อมูลทีม...</p>
      </div>
    </div>
    <section
      class="bg-white shadow-xl sticky top-0 z-40 border-b border-gray-100"
    >
      <div class="container mx-auto px-6">
        <nav class="flex items-center justify-center">
          <div class="flex space-x-1 py-6">
            <RouterLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path === '/' ? '/' : `/team/${teamId}${item.path}`"
              class="group relative flex items-center space-x-4 px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-lg transform hover:-translate-y-0.5"
              :class="
                isActiveRoute(item.path)
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
                    isActiveRoute(item.path)
                      ? `text-${item.color}-500 font-medium`
                      : 'text-gray-400 group-hover:text-blue-400'
                  "
                >
                  {{ item.description }}
                </span>
              </div>

              <div
                v-if="isActiveRoute(item.path)"
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 transition-all duration-300"
                :class="`w-12 h-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-t-full shadow-lg`"
              ></div>

              <div
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-t-full transition-all duration-300 group-hover:w-8"
                :class="{ 'opacity-0': isActiveRoute(item.path) }"
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
