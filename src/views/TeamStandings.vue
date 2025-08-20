<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import type { League, StandingsResponse, Team } from "@/api/types";
import {
  getAllLeague,
  getLeagueStandings,
  getTeamOverview,
} from "@/api/service";
import TeamStandingForm from "../components/TeamStandingForm.vue";

const teamId = computed(() => Number(route.params.teamId));
const currentTeam = ref<{ team: Team; league: League } | null>(null);
const teamOverviewData = ref<any>(null);
const isLoading = ref(true);

const route = useRoute();

// api จริงๆ
const leagues = ref<League[]>([]);
const teamStandingsData = ref<StandingsResponse>();

const fetchLeague = async () => {
  try {
    const res = await getAllLeague();
    if (res.data.success) {
      leagues.value = res.data.data;
    }
    return leagues.value;
  } catch (error) {
    console.error("Error fetching leagues:", error);
  }
};

const fetchStandings = async (leagueId: number) => {
  try {
    const res = await getLeagueStandings(leagueId);
    if (res.data.success) {
      teamStandingsData.value = res.data.data;
    }
    return teamStandingsData.value;
  } catch (error) {
    console.error("Error fetching standings:", error);
  }
};

const fetchTeamOverview = async (teamId: number) => {
  try {
    const res = await getTeamOverview(teamId);
    if (res.data.success) {
      teamOverviewData.value = res.data.data;
    }
  } catch (error) {
    console.error("Error fetching team overview: ", error);
  }
};

const findTeamData = async () => {
  if (!teamId.value) return null;
  if (teamStandingsData.value && teamStandingsData.value.standings) {
    for (const standing of teamStandingsData.value.standings) {
      const team = standing.team;
      if (team.id === teamId.value) {
        return {
          team,
          league: teamStandingsData.value.league,
        };
      }
    }
  }
  return null;
};

const teamName = computed(() => {
  // ใช้ข้อมูลจาก overview ก่อน ถ้าไม่มีค่อยใช้จาก standings
  return (
    teamOverviewData.value?.team?.name || currentTeam.value?.team?.name || "ทีม"
  );
});

const teamLogo = computed(() => {
  // ใช้ข้อมูลจาก overview ก่อน ถ้าไม่มีค่อยใช้จาก standings
  return (
    teamOverviewData.value?.team?.logo || currentTeam.value?.team?.logo || ""
  );
});

const teamStandings = computed(() => {
  if (!teamStandingsData.value?.standings) return [];
  return teamStandingsData.value.standings.map((standing) => ({
    team: standing.team,
    rank: standing.position,
    points: standing.points,
    played: standing.played,
    win: standing.wins,
    draw: standing.draws,
    lose: standing.losses,
    goalsFor: standing.goalsFor,
    goalsAgainst: standing.goalsAgainst,
    goalDiff: standing.goalDifference,
  }));
});

const findTeamLeague = computed(() => {
  if (!teamId.value || !currentTeam.value) return undefined;
  return currentTeam.value.league;
});

onMounted(async () => {
  isLoading.value = true;
  try {
    // เรียกข้อมูลทีมจาก overview ก่อนเสมอ
    await fetchTeamOverview(teamId.value);

    await fetchLeague();

    // ใช้ Premier League เป็นค่า default
    const defaultLeagueId = 39; // Premier League

    await fetchStandings(defaultLeagueId);
    currentTeam.value = await findTeamData();
  } catch (error) {
    console.error("Error in onMounted:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 300);
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
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

    <!-- Header -->
    <div v-if="!isLoading" class="bg-white shadow-lg border-b border-gray-100">
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
                <div
                  v-else
                  class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <span class="text-gray-500 text-xs">⚽</span>
                </div>
              </div>
            </div>
            <div>
              <h1
                class="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent"
              >
                {{ teamName }}
              </h1>
              <p class="text-gray-600 mt-1">ตารางคะแนนลีก</p>
            </div>
          </div>

          <div
            v-if="findTeamLeague"
            class="hidden md:flex items-center space-x-3 bg-gradient-to-r from-yellow-50 to-orange-50 px-6 py-3 rounded-xl border border-yellow-200 shadow-sm"
          >
            <img
              :src="findTeamLeague.logo"
              :alt="findTeamLeague.name"
              class="w-8 h-8 object-contain"
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

    <div v-if="!isLoading">
      <TeamStandingForm
        :team-standings="teamStandings"
        :team-id="teamId"
        :find-team-league="findTeamLeague"
      />
    </div>
  </div>
</template>
