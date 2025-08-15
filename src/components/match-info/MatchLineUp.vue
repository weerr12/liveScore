<script setup lang="ts">
import { ref, computed } from "vue";
import type { PlayerLineup } from "@/types/matchH2h";

const props = defineProps<{
  matchStats: {
    home_lineups?: {
      team: { name: string; logo: string };
      formation: string;
      coach: string;
      startXI: PlayerLineup[];
    };
    away_lineups?: {
      team: { name: string; logo: string };
      formation: string;
      coach: string;
      startXI: PlayerLineup[];
    };
  };
  getFormationLines: (
    formation: string,
    players: PlayerLineup[]
  ) => {
    goalkeeper: PlayerLineup[];
    defense: PlayerLineup[];
    midfield: PlayerLineup[];
    forward: PlayerLineup[];
  };
}>();

const selectedTeam = ref<"home" | "away">("home");

const currentLineup = computed(() => {
  return selectedTeam.value === "home"
    ? props.matchStats.home_lineups
    : props.matchStats.away_lineups;
});

const isHomeTeam = computed(() => selectedTeam.value === "home");
</script>

<template>
  <div
    v-if="matchStats && (matchStats.home_lineups || matchStats.away_lineups)"
    class="space-y-6"
  >
    <div
      v-if="currentLineup"
      class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
    >
      <div
        :class="[
          'px-8 py-6 text-white',
          isHomeTeam
            ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
            : 'bg-gradient-to-r from-red-500 to-pink-600',
        ]"
      >
        <div class="flex items-center justify-end">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-1 flex">
            <button
              @click="selectedTeam = 'home'"
              :class="[
                'px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center space-x-2',
                selectedTeam === 'home'
                  ? 'bg-blue-50 text-gray-800 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10',
              ]"
              :disabled="!matchStats.home_lineups"
            >
              <img
                v-if="matchStats.home_lineups"
                :src="matchStats.home_lineups.team.logo"
                :alt="matchStats.home_lineups.team.name"
                class="w-5 h-5"
              />
              <span class="text-sm">ทีมเหย้า</span>
            </button>

            <button
              @click="selectedTeam = 'away'"
              :class="[
                'px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center space-x-2',
                selectedTeam === 'away'
                  ? 'bg-red-50 text-gray-800 shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10',
              ]"
              :disabled="!matchStats.away_lineups"
            >
              <img
                v-if="matchStats.away_lineups"
                :src="matchStats.away_lineups.team.logo"
                :alt="matchStats.away_lineups.team.name"
                class="w-5 h-5"
              />
              <span class="text-sm">ทีมเยือน</span>
            </button>
          </div>
        </div>
      </div>

      <div class="p-8">
        <div class="grid md:grid-cols-1 grid-cols-1 gap-8">
          <div>
            <div class="flex items-center space-x-4 mb-6">
              <div
                :class="[
                  'w-16 h-16 rounded-xl p-3 flex items-center justify-center',
                  isHomeTeam ? 'bg-blue-50' : 'bg-red-50',
                ]"
              >
                <img
                  :src="currentLineup.team.logo"
                  :alt="currentLineup.team.name"
                  class="w-10 h-10"
                />
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900">
                  {{ currentLineup.team.name }}
                </h4>
                <p class="text-gray-600">
                  {{ isHomeTeam ? "ทีมเหย้า" : "ทีมเยือน" }}
                </p>
              </div>
            </div>

            <div class="space-y-4">
              <div
                :class="[
                  'rounded-lg p-4',
                  isHomeTeam ? 'bg-blue-50' : 'bg-red-50',
                ]"
              >
                <p class="text-sm text-gray-600 mb-1">แผนการเล่น</p>
                <p
                  :class="[
                    'text-xl font-bold',
                    isHomeTeam ? 'text-blue-600' : 'text-red-600',
                  ]"
                >
                  {{ currentLineup.formation }}
                </p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4">
                <p class="text-sm text-gray-600 mb-1">โค้ช</p>
                <p class="text-lg font-semibold text-gray-800">
                  {{ currentLineup.coach }}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h5 class="text-lg font-bold text-gray-900 mb-4 text-center">
              ตัวจริง 11 คน
            </h5>
            <div
              class="relative bg-gradient-to-b from-green-400 to-green-500 rounded-2xl p-6 shadow-lg border-4 border-white"
              style="min-height: 500px"
            >
              <div class="absolute inset-4 border-2 border-white rounded-xl">
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white rounded-full"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full"
                ></div>

                <div
                  class="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-12 border-2 border-b-white border-l-white border-r-white border-t-0"
                ></div>
                <div
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-12 border-2 border-t-white border-l-white border-r-white border-b-0"
                ></div>

                <div
                  class="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-6 border-2 border-b-white border-l-white border-r-white border-t-0"
                ></div>
                <div
                  class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-6 border-2 border-t-white border-l-white border-r-white border-b-0"
                ></div>
              </div>

              <div v-if="currentLineup.startXI" class="relative h-full">
                <div
                  v-for="(lines, formation) in [
                    getFormationLines(
                      currentLineup.formation,
                      currentLineup.startXI
                    ),
                  ]"
                  :key="formation"
                >
                  <div
                    class="absolute mt-[380px] left-1/2 transform -translate-x-1/2 flex space-x-2"
                  >
                    <div
                      v-for="player in lines.goalkeeper"
                      :key="player.name"
                      class="group relative flex flex-col items-center"
                    >
                      <div
                        class="w-12 h-12 bg-yellow-400 border-2 border-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      >
                        <span class="text-xs font-bold text-yellow-900">{{
                          player.number
                        }}</span>
                      </div>
                      <div
                        class="text-black mt-1 text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        <div class="text-center">
                          <div class="font-bold">{{ player.name }}</div>
                          <div class="text-yellow-200">
                            {{ player.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute mt-[300px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-3"
                    :style="{ width: '85%' }"
                  >
                    <div
                      v-for="player in lines.defense"
                      :key="player.name"
                      class="group relative flex-1 flex flex-col items-center"
                    >
                      <div
                        :class="[
                          'w-12 h-12 border-2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform',
                          isHomeTeam
                            ? 'bg-blue-500 border-blue-700'
                            : 'bg-red-500 border-red-700',
                        ]"
                      >
                        <span class="text-xs font-bold text-white">{{
                          player.number
                        }}</span>
                      </div>
                      <div
                        class="text-black mt-1 text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        <div class="text-center">
                          <div class="font-bold">{{ player.name }}</div>
                          <div
                            :class="
                              isHomeTeam ? 'text-blue-200' : 'text-red-200'
                            "
                          >
                            {{ player.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="lines.midfield.length > 0"
                    class="absolute mt-[240px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center space-x-4"
                    :style="{ width: '80%' }"
                  >
                    <div
                      v-for="player in lines.midfield"
                      :key="player.name"
                      class="group relative flex-1 flex flex-col items-center"
                    >
                      <div
                        :class="[
                          'w-12 h-12 border-2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform',
                          isHomeTeam
                            ? 'bg-green-500 border-green-700'
                            : 'bg-red-500 border-red-700',
                        ]"
                      >
                        <span class="text-xs font-bold text-white">{{
                          player.number
                        }}</span>
                      </div>
                      <div
                        class="mt-1 text-black text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        <div class="text-center">
                          <div class="font-bold">{{ player.name }}</div>
                          <div
                            :class="
                              isHomeTeam ? 'text-green-200' : 'text-red-200'
                            "
                          >
                            {{ player.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute mt-[50px] left-1/2 transform -translate-x-1/2 flex justify-center space-x-4"
                    :style="{ width: '70%' }"
                  >
                    <div
                      v-for="player in lines.forward"
                      :key="player.name"
                      class="group relative flex flex-col items-center"
                    >
                      <div
                        class="w-12 h-12 bg-red-500 border-2 border-red-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      >
                        <span class="text-xs font-bold text-white">{{
                          player.number
                        }}</span>
                      </div>
                      <div
                        class="text-black mt-1 text-xs px-2 py-1 rounded whitespace-nowrap"
                      >
                        <div class="text-center">
                          <div class="font-bold">{{ player.name }}</div>
                          <div class="text-red-200">
                            {{ player.position }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="absolute top-2 right-2 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold text-gray-800"
              >
                {{ currentLineup.formation }}
              </div>
            </div>
            <div class="mt-4 flex justify-center space-x-4 text-xs">
              <div class="flex items-center space-x-1">
                <div
                  class="w-4 h-4 bg-yellow-400 border border-yellow-600 rounded-full"
                ></div>
                <span class="text-gray-600">ผู้รักษาประตู</span>
              </div>
              <div class="flex items-center space-x-1">
                <div
                  :class="[
                    'w-4 h-4 border rounded-full',
                    isHomeTeam
                      ? 'bg-blue-500 border-blue-700'
                      : 'bg-red-500 border-red-700',
                  ]"
                ></div>
                <span class="text-gray-600">กองหลัง</span>
              </div>
              <div class="flex items-center space-x-1">
                <div
                  :class="[
                    'w-4 h-4 border rounded-full',
                    isHomeTeam
                      ? 'bg-green-500 border-green-700'
                      : 'bg-red-500 border-red-700',
                  ]"
                ></div>
                <span class="text-gray-600">กองกลาง</span>
              </div>
              <div class="flex items-center space-x-1">
                <div
                  class="w-4 h-4 bg-red-500 border border-red-700 rounded-full"
                ></div>
                <span class="text-gray-600">กองหน้า</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
