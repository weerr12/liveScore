<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import type { StandingsResponse } from "@/api/types";

const props = defineProps<{
  selectedLeagueId?: number;
  standings: StandingsResponse | undefined;
}>();

const selectedLeagueStandings = computed(() => {
  if (!props.standings) return [];
  return props.standings.standings;
});
</script>

<template>
  <section
    v-if="selectedLeagueId && selectedLeagueStandings.length > 0"
    class="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
  >
    <div class="flex items-center mb-6">
      <img
        v-if="standings?.league.logo"
        :src="standings.league.logo"
        :alt="standings.league.name"
        class="w-8 h-8 mr-3"
      />
      <h2 class="text-xl font-semibold text-gray-800">
        ตารางคะแนน {{ standings?.league.name }}
      </h2>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-gradient-to-r from-gray-50 to-gray-100">
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              อันดับ
            </th>
            <th class="p-3 text-left font-semibold text-gray-700 text-sm">
              ทีม
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              เล่น
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              ชนะ
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              เสมอ
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              แพ้
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              +/-
            </th>
            <th class="p-3 text-center font-semibold text-gray-700 text-sm">
              คะแนน
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(team, index) in selectedLeagueStandings"
            :key="team.team.id"
            class="hover:bg-gray-50 transition-colors border-b border-gray-100"
            :class="
              index < 4
                ? 'bg-green-50'
                : index < 6
                ? 'bg-blue-50'
                : index >= selectedLeagueStandings.length - 3
                ? 'bg-red-50'
                : ''
            "
          >
            <td class="p-3 text-center font-semibold text-gray-700">
              <span
                class="w-6 h-6 inline-flex items-center justify-center rounded-full text-xs"
                :class="
                  index < 4
                    ? 'bg-green-500 text-white'
                    : index < 6
                    ? 'bg-blue-500 text-white'
                    : index >= selectedLeagueStandings.length - 3
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                "
              >
                {{ team.position }}
              </span>
            </td>
            <td class="p-3">
              <RouterLink
                :to="`/team/${team.team.id}`"
                class="flex items-center hover:text-blue-600"
              >
                <img
                  :src="team.team.logo"
                  :alt="team.team.name"
                  class="w-8 h-8 mr-3 rounded-full object-contain"
                />
                <span class="font-medium text-sm"
                  >{{ team.team.name }}
                  <!-- {{ team.team.id }} -->
                </span>
              </RouterLink>
            </td>
            <td class="p-3 text-center text-sm text-gray-600">
              {{ team.played }}
            </td>
            <td class="p-3 text-center text-sm font-medium text-green-600">
              {{ team.wins }}
            </td>
            <td class="p-3 text-center text-sm font-medium text-yellow-600">
              {{ team.draws }}
            </td>
            <td class="p-3 text-center text-sm font-medium text-red-600">
              {{ team.losses }}
            </td>
            <td
              class="p-3 text-center text-sm font-medium"
              :class="
                team.goalDifference > 0
                  ? 'text-green-600'
                  : team.goalDifference < 0
                  ? 'text-red-600'
                  : 'text-gray-600'
              "
            >
              {{ team.goalDifference > 0 ? "+" : "" }}{{ team.goalDifference }}
            </td>
            <td class="p-3 text-center font-bold text-blue-600">
              {{ team.points }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
