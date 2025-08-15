<script setup lang="ts">
import type { Fixture } from "@/types";
const props = defineProps<{
  displayFixtures: Fixture[];
}>();
</script>

<template>
  <section class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <h2 class="text-xl font-semibold text-gray-800">แมตช์วันนี้</h2>
      </div>
      <span
        class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
      >
        {{ displayFixtures.length }} แมตช์
      </span>
    </div>
    <div class="grid gap-4">
      <RouterLink
        v-for="match in displayFixtures"
        :key="match.fixture.id"
        :to="`/match/${match.fixture.id}`"
        class="block p-6 border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-300 transition-all group"
      >
        <!-- {{ match.fixture.id }} -->
        <div class="flex items-center mb-4">
          <img
            :src="match.league.logo"
            :alt="match.league.name"
            class="w-5 h-5 mr-2"
          />
          <span class="text-sm font-medium text-gray-600">{{
            match.league.name
          }}</span>
          <span
            class="ml-auto px-2 py-1 rounded-full text-xs font-medium"
            :class="
              match.fixture.status.short === 'LIVE' ||
              match.fixture.status.short === '1H' ||
              match.fixture.status.short === '2H'
                ? 'bg-red-100 text-red-700 animate-pulse'
                : match.fixture.status.short === 'FT'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-600'
            "
          >
            {{ match.fixture.status.short }}
          </span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center flex-1">
            <img
              :src="match.teams.home.logo"
              :alt="match.teams.home.name"
              class="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <div
                class="font-semibold text-gray-800 group-hover:text-blue-600"
              >
                {{ match.teams.home.name }}
                <!-- {{ match.teams.home.id }} -->
              </div>
              <div class="text-sm text-gray-500">เจ้าบ้าน</div>
            </div>
          </div>

          <div class="mx-6 text-center">
            <div class="text-2xl font-bold text-gray-400 mb-1">VS</div>
            <div class="text-xs text-gray-500">
              {{
                new Date(match.fixture.date).toLocaleTimeString("th-TH", {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </div>
          </div>

          <div class="flex items-center flex-1 justify-end">
            <div class="text-right mr-4">
              <div
                class="font-semibold text-gray-800 group-hover:text-blue-600"
              >
                {{ match.teams.away.name }}
                <!-- {{ match.teams.away.id }} -->
              </div>
              <div class="text-sm text-gray-500">ทีมเยือน</div>
            </div>
            <img
              :src="match.teams.away.logo"
              :alt="match.teams.away.name"
              class="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
