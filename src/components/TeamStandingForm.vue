<script setup lang="ts">
import type { TeamStanding } from "../types";

const props = defineProps<{
  teamStandings: TeamStanding[];
  teamId?: number;
  findTeamLeague?: {
    id: number;
    name: string;
    logo: string;
  };
}>();
</script>

<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-8">
      <div
        v-if="teamStandings.length"
        class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div
          class="bg-gradient-to-r from-yellow-500 to-orange-600 px-8 py-6 text-white"
        >
          <div class="flex items-center space-x-3">
            <div>
              <h2 class="text-2xl font-bold">ตารางคะแนน</h2>
              <p class="text-yellow-100 opacity-90">
                {{ findTeamLeague?.name || "ลีก" }}
              </p>
            </div>
          </div>
        </div>

        <div class="px-8 py-4 bg-gray-50 border-b border-gray-100">
          <div class="flex items-center space-x-6 text-sm">
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 bg-green-500 rounded-full"></span>
              <span class="text-gray-600">ชิงแชมป์</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 bg-blue-500 rounded-full"></span>
              <span class="text-gray-600">ยุโรป</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="w-4 h-4 bg-red-500 rounded-full"></span>
              <span class="text-gray-600">ตกชั้น</span>
            </div>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="bg-gradient-to-r from-gray-50 to-gray-100">
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  ลำดับ
                </th>
                <th
                  class="p-4 text-left font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  ทีม
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  เล่น
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  ชนะ
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  เสมอ
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  แพ้
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  +/-
                </th>
                <th
                  class="p-4 text-center font-semibold text-gray-700 text-sm border-b border-gray-200"
                >
                  คะแนน
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(team, index) in teamStandings"
                :key="team.team.id"
                class="hover:bg-gray-50 transition-all duration-200 border-b border-gray-100"
                :class="[
                  team.team.id === teamId
                    ? 'bg-blue-50 ring-2 ring-blue-500 ring-opacity-50'
                    : '',
                  index < 4
                    ? 'bg-green-50'
                    : index < 6
                    ? 'bg-blue-50'
                    : index >= teamStandings.length - 3
                    ? 'bg-red-50'
                    : '',
                ]"
              >
                <td class="p-4 text-center font-semibold text-gray-700">
                  <span
                    class="w-8 h-8 inline-flex items-center justify-center rounded-full text-sm font-bold"
                    :class="[
                      index < 4
                        ? 'bg-green-500 text-white'
                        : index < 6
                        ? 'bg-blue-500 text-white'
                        : index >= teamStandings.length - 3
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-700',
                      team.team.id === teamId ? 'ring-2 ring-blue-400' : '',
                    ]"
                  >
                    {{ team.rank }}
                  </span>
                </td>
                <td class="p-4">
                  <RouterLink
                    :to="`/team/${team.team.id}`"
                    class="flex items-center hover:text-blue-600 transition-colors"
                  >
                    <img
                      :src="team.team.logo"
                      :alt="team.team.name"
                      class="w-10 h-10 mr-4 rounded-full shadow-sm"
                    />
                    <div>
                      <span
                        class="font-medium text-sm"
                        :class="
                          team.team.id === teamId
                            ? 'text-blue-600 font-bold'
                            : ''
                        "
                      >
                        {{ team.team.name }}
                      </span>
                      <div
                        v-if="team.team.id === teamId"
                        class="text-xs text-blue-500 font-medium"
                      >
                        ทีมของคุณ
                      </div>
                    </div>
                  </RouterLink>
                </td>
                <td class="p-4 text-center text-sm text-gray-600 font-medium">
                  {{ team.played }}
                </td>
                <td class="p-4 text-center text-sm font-bold text-green-600">
                  {{ team.win }}
                </td>
                <td class="p-4 text-center text-sm font-bold text-yellow-600">
                  {{ team.draw }}
                </td>
                <td class="p-4 text-center text-sm font-bold text-red-600">
                  {{ team.lose }}
                </td>
                <td
                  class="p-4 text-center text-sm font-bold"
                  :class="
                    team.goalDiff > 0
                      ? 'text-green-600'
                      : team.goalDiff < 0
                      ? 'text-red-600'
                      : 'text-gray-600'
                  "
                >
                  {{ team.goalDiff > 0 ? "+" : "" }}{{ team.goalDiff }}
                </td>
                <td
                  class="p-4 text-center font-bold text-lg"
                  :class="
                    team.team.id === teamId ? 'text-blue-600' : 'text-gray-800'
                  "
                >
                  {{ team.points }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else-if="teamStandings.length === 0" class="text-center py-16">
        <div class="max-w-md mx-auto">
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            ไม่มีข้อมูลตารางคะแนน
          </h3>
          <p class="text-gray-500">ไม่พบข้อมูลตารางคะแนนสำหรับทีมนี้</p>
        </div>
      </div>
    </div>
  </div>
</template>
