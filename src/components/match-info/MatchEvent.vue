<script setup lang="ts">
import type { MatchEvent } from "@/types/index";

const props = defineProps<{
  matchStats: {
    events: MatchEvent[];
  };
  getEventColor: (type: string) => string;
}>();
</script>

<template>
  <div
    v-if="matchStats.events && matchStats.events.length > 0"
    class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
  >
    <div
      class="bg-gradient-to-r from-yellow-500 to-orange-600 px-8 py-6 text-white"
    >
      <div class="flex items-center space-x-3">
        <div>
          <h3 class="text-xl font-bold">เหตุการณ์ในเกม</h3>
          <p class="text-yellow-100 opacity-90">
            {{ matchStats.events.length }} เหตุการณ์
          </p>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="space-y-4">
        <div
          v-for="event in matchStats.events"
          :key="`${event.time}-${event.player}`"
          class="flex items-center space-x-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md"
          :class="getEventColor(event.type)"
        >
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center font-bold text-blue-600 shadow-sm"
          >
            {{ event.time }}'
          </div>
          <div class="flex-shrink-0">
            <img
              :src="event.team.logo"
              :alt="event.team.name"
              class="w-10 h-10 rounded-full shadow-sm"
            />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center space-x-3">
              <span class="font-semibold text-gray-900">{{
                event.team.name
              }}</span>
              <span
                class="px-3 py-1 text-xs font-medium rounded-full border"
                :class="getEventColor(event.type)"
              >
                {{ event.type }}
              </span>
              <span
                v-if="event.detail"
                class="text-gray-500 text-sm px-3 py-1 rounded-full border"
                :class="
                  event.detail == 'Yellow Card'
                    ? 'text-yellow-300'
                    : event.detail == 'Red Card'
                    ? 'text-red-600'
                    : ''
                "
              >
                {{ event.detail }}
              </span>
            </div>
            <div class="mt-1">
              <span class="font-medium text-gray-800">{{ event.player }}</span>
              <span v-if="event.assist" class="text-gray-600 ml-2"
                >(ผู้ช่วย: {{ event.assist }})</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
