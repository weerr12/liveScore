<script setup lang="ts">
import type { LineUp, PlayerLineup } from "@/types/matchH2h";

const props = defineProps<{
  matchStats: {
    lineups: LineUp;
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
</script>

<template>
  <div
    v-if="matchStats && matchStats.lineups"
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div
      class="bg-gradient-to-r from-blue-500 to-cyan-600 px-8 py-6 text-white"
    >
      <div class="flex items-center space-x-3">
        <div>
          <h3 class="text-xl font-bold">ชุดนักเตะ</h3>
          <p class="text-blue-100 opacity-90">
            {{ matchStats.lineups.team.name }}
          </p>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="grid md:grid-cols-1 grid-cols-1 gap-8">
        <!-- Team Info -->
        <div>
          <div class="flex items-center space-x-4 mb-6">
            <div
              class="w-16 h-16 bg-blue-50 rounded-xl p-3 flex items-center justify-center"
            >
              <img
                :src="matchStats.lineups.team.logo"
                :alt="matchStats.lineups.team.name"
                class="w-10 h-10"
              />
            </div>
            <div>
              <h4 class="text-xl font-bold text-gray-900">
                {{ matchStats.lineups.team.name }}
              </h4>
              <p class="text-gray-600">ข้อมูลทีม</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <p class="text-sm text-gray-600 mb-1">แผนการเล่น</p>
              <p class="text-xl font-bold text-blue-600">
                {{ matchStats.lineups.formation }}
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-sm text-gray-600 mb-1">โค้ช</p>
              <p class="text-lg font-semibold text-gray-800">
                {{ matchStats.lineups.coach }}
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

            <div v-if="matchStats.lineups.startXI" class="relative h-full">
              <div
                v-for="(lines, formation) in [
                  getFormationLines(
                    matchStats.lineups.formation,
                    matchStats.lineups.startXI
                  ),
                ]"
                :key="formation"
              >
                <!-- Goalkeeper (ผู้รักษาประตู - อยู่ด้านล่างสุด) -->
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
                      class="w-12 h-12 bg-blue-500 border-2 border-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
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
                        <div class="text-blue-200">
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
                      class="w-12 h-12 bg-green-500 border-2 border-green-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
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
                        <div class="text-green-200">
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
                        <div class="text-red-500">
                          {{ player.position }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formation indicator -->
            <div
              class="absolute top-2 right-2 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold text-gray-800"
            >
              {{ matchStats.lineups.formation }}
            </div>
          </div>

          <!-- Legend -->
          <div class="mt-4 flex justify-center space-x-4 text-xs">
            <div class="flex items-center space-x-1">
              <div
                class="w-4 h-4 bg-yellow-400 border border-yellow-600 rounded-full"
              ></div>
              <span class="text-gray-600">ผู้รักษาประตู</span>
            </div>
            <div class="flex items-center space-x-1">
              <div
                class="w-4 h-4 bg-blue-500 border border-blue-700 rounded-full"
              ></div>
              <span class="text-gray-600">กองหลัง</span>
            </div>
            <div class="flex items-center space-x-1">
              <div
                class="w-4 h-4 bg-green-500 border border-green-700 rounded-full"
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
</template>
