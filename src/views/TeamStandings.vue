<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import {
  mockTeamsByLeague,
  mockLeagues,
  mockFixturesToday,
  mockStandingsByLeague,
} from "../mock-data";
import TeamStandingForm from "../components/TeamStandingForm.vue";

const teamId = ref<number>();
const leagues = ref<any[]>([]);
const leagueTeams = ref<Record<number, any[]>>({});
const currentTeam = ref<any>(null);
const isLoading = ref(true);

const route = useRoute();

const findTeamData = () => {
  if (!teamId.value) return null;

  for (const leagueData of Object.values(mockTeamsByLeague)) {
    const team = leagueData.find((t) => t.team.id === teamId.value);
    if (team) {
      return team;
    }
  }
  return null;
};

const teamName = computed(() => currentTeam.value?.team?.name);
const teamLogo = computed(() => currentTeam.value?.team?.logo);

const findTeamLeague = computed(() => {
  if (!teamId.value) return null;

  for (const leagueId in leagueTeams.value) {
    const teams = leagueTeams.value[leagueId];
    const foundTeam = teams.find((t) => t.team.id === teamId.value);
    if (foundTeam) {
      const leagueInfo = leagues.value.find(
        (l) => l.league.id === parseInt(leagueId)
      );
      return leagueInfo?.league;
    }
  }
  return null;
});

const teamStandings = computed(() => {
  const league = findTeamLeague.value;
  if (league?.id) {
    return mockStandingsByLeague[league.id];
  }
  return [];
});

onMounted(() => {
  teamId.value = parseInt(route.params.teamId as string);
  leagues.value = mockLeagues;
  leagueTeams.value = mockTeamsByLeague;
  currentTeam.value = findTeamData();

  setTimeout(() => {
    isLoading.value = false;
  }, 300);
});
</script>

<template>
  <div class="min-h-screen">
    <div
      v-if="isLoading"
      class="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดตารางคะแนน...</p>
      </div>
    </div>

    <div class="bg-white shadow-lg border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 p-0.5"
            >
              <div
                class="w-full h-full rounded-full bg-white flex items-center justify-center"
              >
                <img
                  v-if="teamLogo"
                  :src="teamLogo"
                  :alt="teamName"
                  class="w-12 h-12 object-contain"
                />
              </div>
            </div>
            <div>
              <h1 class="text-3xl font-bold text-gray-900">{{ teamName }}</h1>
              <p class="text-gray-600 mt-1">ตารางคะแนนลีก</p>
            </div>
          </div>

          <div
            v-if="findTeamLeague"
            class="hidden md:flex items-center space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-3 rounded-xl border border-yellow-200"
          >
            <img
              :src="findTeamLeague.logo"
              :alt="findTeamLeague.name"
              class="w-8 h-8"
            />
            <div>
              <div class="font-semibold text-gray-800">
                {{ findTeamLeague.name }}
              </div>
              <div class="text-sm text-gray-500">
                {{ teamStandings.length }} ทีม
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TeamStandingForm
      v-if="teamStandings.length > 0"
      :teamStandings="teamStandings"
      :teamId="teamId"
      :findTeamLeague="findTeamLeague"
    />
  </div>
</template>
