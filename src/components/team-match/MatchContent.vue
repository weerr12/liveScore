<script setup lang="ts">
import type { Fixture } from "@/types";

const props = defineProps<{
  fixture: Fixture;
  isTeamHome: (fixture: Fixture) => boolean;
}>();

const getMatchStatusColor = (status: string) => {
  switch (status) {
    case "NS":
    case "TBD":
      return "bg-blue-100 text-blue-700 border-blue-200";
    case "FT":
    case "AET":
      return "bg-green-100 text-green-700 border-green-200";
    case "LIVE":
    case "1H":
    case "2H":
      return "bg-red-100 text-red-700 border-red-200 animate-pulse";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getMatchStatusText = (status: any) => {
  const statusMap: Record<string, string> = {
    NS: "ยังไม่เริ่ม",
    TBD: "รอกำหนด",
    FT: "จบแล้ว",
    AET: "จบ (เวลาพิเศษ)",
    LIVE: "กำลังแข่ง",
    "1H": "ครึ่งแรก",
    "2H": "ครึ่งหลัง",
  };

  return statusMap[status.short] || status.long || status.short;
};
</script>

<template>
  <div class="p-6">
    <div class="flex items-center justify-between">
      <RouterLink
        :to="`/match/${fixture.fixture.id}`"
        class="flex-1 flex items-center space-x-4 text-gray-800 hover:text-blue-600 transition-colors duration-200"
      >
        <!-- Teams -->
        <div class="flex items-center justify-center space-x-8 flex-1">
          <!-- Home Team -->
          <div
            class="flex items-center space-x-3 transition-all duration-200 team-highlight"
            :class="isTeamHome(fixture) ? 'scale-105' : ''"
          >
            <div class="text-right">
              <div
                class="font-bold text-lg"
                :class="isTeamHome(fixture) ? 'text-blue-600' : 'text-gray-800'"
              >
                {{ fixture.teams.home.name }}
              </div>
              <div class="text-sm text-gray-500">เจ้าบ้าน</div>
            </div>
            <div class="relative">
              <img
                :src="fixture.teams.home.logo"
                :alt="fixture.teams.home.name"
                class="w-16 h-16 object-contain"
              />
              <div
                v-if="isTeamHome(fixture)"
                class="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center space-y-2">
            <div class="text-gray-400 font-bold text-xl">VS</div>
            <div
              class="w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            ></div>
          </div>

          <div
            class="flex items-center space-x-3 transition-all duration-200 team-highlight"
            :class="!isTeamHome(fixture) ? 'scale-105' : ''"
          >
            <div class="relative">
              <img
                :src="fixture.teams.away.logo"
                :alt="fixture.teams.away.name"
                class="w-16 h-16 object-contain"
              />
              <div
                v-if="!isTeamHome(fixture)"
                class="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="text-left">
              <div
                class="font-bold text-lg"
                :class="
                  !isTeamHome(fixture) ? 'text-blue-600' : 'text-gray-800'
                "
              >
                {{ fixture.teams.away.name }}
              </div>
              <div class="text-sm text-gray-500">ทีมเยือน</div>
            </div>
          </div>
        </div>

        <div class="ml-8">
          <div
            class="px-4 py-2 rounded-full text-sm font-medium border status-badge"
            :class="getMatchStatusColor(fixture.fixture.status.short)"
          >
            {{ getMatchStatusText(fixture.fixture.status) }}
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
