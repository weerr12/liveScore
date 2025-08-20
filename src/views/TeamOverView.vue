<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { getTeamOverview } from "@/api/service";
import type { TeamOverviewResponse } from "@/api/types";

const route = useRoute();
const teamId = computed(() => Number(route.params.teamId));
const teamOverview = ref<TeamOverviewResponse | null>(null);
const isLoading = ref(true);

const fetchTeamOverview = async () => {
  try {
    const response = await getTeamOverview(teamId.value);
    if (response.data.success) {
      teamOverview.value = response.data;
    }
    // console.log(
    //   "Team overview fetched:",
    //   JSON.stringify(teamOverview.value, null, 2)
    // );
  } catch (err) {
    console.error("Error fetching team overview:", err);
  }
};

const teamData = computed(() => {
  if (!teamOverview.value?.data) return null;
  return teamOverview.value.data;
});

onMounted(() => {
  fetchTeamOverview();
  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <span class="text-lg text-gray-600">กำลังโหลดข้อมูลทีม...</span>
      </div>
    </div>

    <div v-else-if="teamData" class="max-w-7xl mx-auto px-6 py-8">
      <section
        class="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100"
      >
        <div class="flex items-center space-x-6">
          <div
            class="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-0.5"
          >
            <div
              class="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <img
                :src="teamData.team.logo"
                :alt="teamData.team.name"
                class="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <div class="flex-1">
            <h1
              class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {{ teamData.team.name }}
            </h1>
            <p class="text-gray-600 mt-2 text-lg">ข้อมูลภาพรวมทีม</p>
          </div>
        </div>
      </section>

      <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div class="flex items-center mb-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-800">แมตช์ล่าสุด</h2>
            <p class="text-sm text-gray-500">ผลการแข่งขันที่ผ่านมา</p>
          </div>
        </div>

        <div
          v-if="teamData.recentMatches && teamData.recentMatches.length > 0"
          class="space-y-4"
        >
          <RouterLink
            v-for="match in teamData.recentMatches"
            :key="match.id"
            :to="`/match/${match.id}`"
            class="block border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-6 flex-1">
                <div class="flex items-center space-x-3 text-center">
                  <div class="text-right">
                    <div
                      class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                    >
                      {{ match.homeTeam.name }}
                    </div>
                    <div class="text-xs text-gray-500">เจ้าบ้าน</div>
                  </div>
                  <img
                    :src="match.homeTeam.logo"
                    :alt="match.homeTeam.name"
                    class="w-12 h-12 object-contain rounded-full shadow-sm"
                  />
                </div>

                <div class="text-center mx-4">
                  <div class="text-2xl font-bold text-gray-800 mb-1">
                    {{ match.score.home }} - {{ match.score.away }}
                  </div>
                  <span
                    :class="[
                      'px-3 py-1 rounded-full text-xs font-medium',
                      match.status === 'FT'
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : match.status === 'LIVE'
                        ? 'bg-red-100 text-red-700 border border-red-200'
                        : 'bg-blue-100 text-blue-700 border border-blue-200',
                    ]"
                  >
                    {{
                      match.status === "FT"
                        ? "จบแล้ว"
                        : match.status === "LIVE"
                        ? "กำลังแข่ง"
                        : "กำลังมา"
                    }}
                  </span>
                </div>

                <div class="flex items-center space-x-3 text-center">
                  <img
                    :src="match.awayTeam.logo"
                    :alt="match.awayTeam.name"
                    class="w-12 h-12 object-contain rounded-full shadow-sm"
                  />
                  <div class="text-left">
                    <div
                      class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors"
                    >
                      {{ match.awayTeam.name }}
                    </div>
                    <div class="text-xs text-gray-500">ทีมเยือน</div>
                  </div>
                </div>
              </div>

              <div class="text-right ml-6">
                <div class="flex items-center space-x-2 mb-1">
                  <img
                    :src="match.league.logo"
                    :alt="match.league.name"
                    class="w-4 h-4 object-contain"
                  />
                  <span class="text-sm font-medium text-gray-700">{{
                    match.league.name
                  }}</span>
                </div>
                <div class="text-sm text-gray-500">
                  {{
                    new Date(match.date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  }}
                </div>
              </div>
            </div>
          </RouterLink>
        </div>

        <div v-else class="text-center py-12">
          <div class="text-6xl mb-4">⚽</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            ไม่มีข้อมูลแมตช์
          </h3>
          <p class="text-gray-500">ยังไม่มีข้อมูลการแข่งขันล่าสุด</p>
        </div>
      </section>
      <div class="mb-8 mt-6">
        <section
          class="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
        >
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-xl font-semibold text-gray-800">ฟอร์มล่าสุด</h2>
              <p class="text-sm text-gray-500">5 นัดที่ผ่านมา</p>
            </div>
          </div>

          <div class="flex justify-center space-x-2 mb-6">
            <div
              v-for="(result, index) in teamData.form"
              :key="index"
              :class="[
                'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md transition-transform hover:scale-110',
                result === 'W'
                  ? 'bg-gradient-to-r from-green-400 to-green-600'
                  : result === 'L'
                  ? 'bg-gradient-to-r from-red-400 to-red-600'
                  : 'bg-gradient-to-r from-yellow-400 to-yellow-600',
              ]"
              :title="result === 'W' ? 'ชนะ' : result === 'L' ? 'แพ้' : 'เสมอ'"
            >
              {{ result }}
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else class="flex justify-center items-center py-20">
      <div class="text-center">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">ไม่พบข้อมูลทีม</h3>
        <p class="text-gray-500">ไม่สามารถโหลดข้อมูลทีมได้</p>
      </div>
    </div>
  </div>
</template>
