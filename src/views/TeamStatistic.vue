<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { mockTeamsByLeague } from "../mock-data";

const route = useRoute();
const teamId = ref<number>();
const currentTeam = ref<any>(null);
const isLoading = ref(true);

const findTeamData = () => {
  if (!teamId.value) return null;

  for (const leagueData of Object.values(mockTeamsByLeague)) {
    const team = leagueData.find((t) => t.team.id === teamId.value);
    console.log("Team", team);
    if (team) {
      return team;
    }
  }

  return null;
};

const teamName = computed(() => currentTeam.value?.team?.name || "ทีมไม่ทราบ");
const teamLogo = computed(() => currentTeam.value?.team?.logo || "");
const hasTeamData = computed(() => !!currentTeam.value);

const navItems = [
  {
    path: "/",
    label: "หน้าแรก",
    description: "กลับสู่หน้าหลัก",
    color: "indigo",
  },
  {
    path: "",
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
  teamId.value = parseInt(String(route.params.teamId));
  currentTeam.value = findTeamData();

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
      class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-12 relative overflow-hidden"
    >
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style="
            background-image: radial-gradient(
              circle at 2px 2px,
              white 1px,
              transparent 0
            );
            background-size: 40px 40px;
          "
        ></div>
      </div>

      <div class="container mx-auto px-6 relative">
        <div
          class="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
        >
          <div class="relative group">
            <div
              class="w-24 h-24 rounded-full shadow-2xl bg-white p-3 flex items-center justify-center transform transition-transform group-hover:scale-105"
            >
              <img
                v-if="hasTeamData && teamLogo"
                :src="teamLogo"
                :alt="teamName"
                class="w-16 h-16 object-contain"
              />
            </div>
          </div>

          <div class="text-center md:text-left">
            <div
              class="flex items-center justify-center md:justify-start space-x-3 mb-2"
            >
              <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
                {{ teamName }}
              </h1>
            </div>
            <p class="text-xl opacity-90 mb-4">ข้อมูลและสถิติทีม</p>

            <div
              class="flex items-center justify-center md:justify-start space-x-6"
            >
              <div class="text-center">
                <div class="text-2xl font-bold">
                  {{ hasTeamData ? "✓" : "?" }}
                </div>
                <div class="text-sm opacity-75">สถานะ</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">2024</div>
                <div class="text-sm opacity-75">ฤดูกาล</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold">⚽</div>
                <div class="text-sm opacity-75">กีฬา</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent opacity-30 rounded-full transform translate-x-32 -translate-y-32"
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

<style scoped>
.text-blue-600,
.text-blue-700,
.text-blue-500,
.text-blue-400 {
  transition: color 0.3s ease;
}

.text-green-600,
.text-green-700,
.text-green-500,
.text-green-400 {
  transition: color 0.3s ease;
}

.text-purple-600,
.text-purple-700,
.text-purple-500,
.text-purple-400 {
  transition: color 0.3s ease;
}

.text-indigo-600,
.text-indigo-700,
.text-indigo-500,
.text-indigo-400 {
  transition: color 0.3s ease;
}

.bg-blue-100,
.bg-blue-50,
.bg-green-100,
.bg-green-50,
.bg-purple-100,
.bg-purple-50,
.bg-indigo-100,
.bg-indigo-50 {
  transition: background-color 0.3s ease;
}

.border-blue-200,
.border-green-200,
.border-purple-200,
.border-indigo-200 {
  transition: border-color 0.3s ease;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

.pulse-ring {
  animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
