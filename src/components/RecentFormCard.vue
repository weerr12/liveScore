<script setup lang="ts">
import type { TeamOverview } from "@/types";

const props = defineProps<{
  teamStat: TeamOverview;
  getResultColor: (result: string) => string;
}>();
</script>

<template>
  <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <div>
          <h2 class="text-xl font-semibold text-gray-800">ฟอร์มล่าสุด</h2>
          <p class="text-sm text-gray-500">5 นัดที่ผ่านมา</p>
        </div>
      </div>

      <div class="flex space-x-1">
        <div
          v-for="(match, index) in teamStat.team.last5"
          :key="index"
          :class="getResultColor(match.result)"
          class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
          :title="`${
            match.result === 'W' ? 'ชนะ' : match.result === 'L' ? 'แพ้' : 'เสมอ'
          } vs ${match.opponent}`"
        >
          {{ match.result }}
        </div>
      </div>
    </div>

    <div class="space-y-3">
      <div
        v-for="(match, index) in teamStat.team.last5"
        :key="index"
        class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <span
              :class="getResultColor(match.result)"
              class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
            >
              {{ match.result }}
            </span>
          </div>

          <div>
            <div class="font-semibold text-gray-800">
              vs {{ match.opponent }}
            </div>
            <div class="text-sm text-gray-500">
              {{ new Date(match.date).toLocaleDateString("th-TH") }}
            </div>
          </div>
        </div>

        <div class="text-right">
          <div class="text-lg font-bold text-gray-800">
            {{ match.score }}
          </div>
          <div class="text-xs text-gray-500">
            {{
              match.result === "W"
                ? "ชนะ"
                : match.result === "L"
                ? "แพ้"
                : "เสมอ"
            }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
