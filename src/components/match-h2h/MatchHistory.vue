<script setup lang="ts">
import { formatThaiDate } from "../../utils/index";
import type { H2HData, Fixture } from "@/types/matchH2h";
import type { MatchResult } from "@/types/index";

const RESULT_TEXT: Record<MatchResult, string> = {
  WIN: "ชนะ",
  LOSE: "แพ้",
  DRAW: "เสมอ",
};

const props = defineProps<{
  matchH2h: H2HData;
  sortedFixtures: Fixture[];
  getTeamLogo: (teamName: string) => string;
  getResultTextClass: (result: MatchResult) => string;
  getMatchResult: (fixture: Fixture, referenceTeam: string) => MatchResult;
  getMatchResultColor: (fixture: Fixture, homeTeamName: string) => string;
}>();
</script>

<template>
  <div
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div
      class="bg-gradient-to-r from-orange-500 to-red-600 px-8 py-6 text-white"
    >
      <div class="flex items-center space-x-3">
        <div>
          <h3 class="text-xl font-bold">ประวัติการแข่งขัน</h3>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="space-y-4">
        <div
          v-for="fixture in sortedFixtures"
          :key="fixture.fixture_id"
          class="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md hover:bg-white transition-all duration-200"
        >
          <div class="flex justify-between items-center mb-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm font-medium text-gray-700">{{
                formatThaiDate(fixture.date)
              }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg
                class="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span class="text-sm text-gray-600">{{ fixture.venue }}</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3 flex-1">
              <div class="w-10 h-10 rounded-full overflow-hidden shadow-sm">
                <img
                  :src="getTeamLogo(fixture.home)"
                  :alt="fixture.home"
                  class="w-full h-full object-cover"
                />
              </div>
              <div>
                <span class="font-semibold text-gray-800">{{
                  fixture.home
                }}</span>
                <p class="text-xs text-gray-500">เจ้าบ้าน</p>
              </div>
            </div>

            <div class="px-6">
              <div
                class="bg-white border-2 border-gray-200 rounded-lg px-4 py-2 shadow-sm"
              >
                <span class="font-bold text-xl text-gray-800">{{
                  fixture.score
                }}</span>
              </div>
            </div>

            <div class="flex items-center space-x-3 flex-1 justify-end">
              <div>
                <span class="font-semibold text-gray-800">{{
                  fixture.away
                }}</span>
                <p class="text-xs text-gray-500">ทีมเยือน</p>
              </div>
              <div class="w-10 h-10 rounded-full overflow-hidden shadow-sm">
                <img
                  :src="getTeamLogo(fixture.away)"
                  :alt="fixture.away"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div class="mt-4 flex justify-center">
            <div class="flex items-center space-x-2">
              <span class="text-xs text-gray-600"
                >ผล {{ matchH2h.teams.home.name }}</span
              >
              <div
                class="w-4 h-4 rounded-full"
                :class="getMatchResultColor(fixture, matchH2h.teams.home.name)"
              ></div>
              <span
                class="text-xs font-medium"
                :class="
                  getResultTextClass(
                    getMatchResult(fixture, matchH2h.teams.home.name)
                  )
                "
              >
                {{
                  RESULT_TEXT[getMatchResult(fixture, matchH2h.teams.home.name)]
                }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
