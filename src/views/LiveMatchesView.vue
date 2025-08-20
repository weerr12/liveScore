<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import {
  getAllMatches,
  getAllLeague,
  getLeagueStandings,
} from "../api/service";
import type { Match, League, StandingsResponse } from "@/api/types";

import HeaderLive from "../components/live-match/HeaderLive.vue";
import SearchTeam from "../components/live-match/SearchTeam.vue";
import Top5league from "../components/live-match/Top5league.vue";
import MatchCard from "../components/live-match/MatchCard.vue";
import Standing from "../components/live-match/Standing.vue";
import LeagueTeam from "../components/live-match/LeagueTeam.vue";

const leagues = ref<League[]>([]);
const matches = ref<Match[]>([]);
const standings = ref<StandingsResponse>();
const selectedLeagueId = ref<number>();
const selectedTeamId = ref<number>();
const isLoading = ref(false);
const searchTerm = ref("");

const topFiveLeague = [39, 140, 135, 78, 61];
const defaultLeagueId = 39; // Premier League

const fetchLeagues = async () => {
  try {
    const res = await getAllLeague();
    if (res.data.success) {
      leagues.value = res.data.data;
    }
  } catch (error) {
    console.error("Error fetching leagues:", error);
  }
};

const fetchMatches = async () => {
  try {
    const res = await getAllMatches();
    if (res.data.success) {
      matches.value = res.data.data;
    }
  } catch (error) {
    console.error("Error fetching matches:", error);
  }
};

const fetchStandings = async () => {
  try {
    const res = await getLeagueStandings(
      selectedLeagueId.value || defaultLeagueId
    );
    if (res.data.success) {
      standings.value = res.data.data;
    }
  } catch (error) {
    console.error("Error fetching standings:", error);
  }
};

const filteredLeagues = computed(() =>
  leagues.value.filter((league) => topFiveLeague.includes(league.id))
);

const selectedLeagueTeams = computed(() => {
  if (!standings.value?.standings) return [];
  return standings.value.standings.map((standing) => ({
    id: standing.team.id,
    name: standing.team.name,
    logo: standing.team.logo,
  }));
});

const selectedLeagueFixtures = computed(() => {
  if (!selectedLeagueId.value) return [];
  return matches.value.filter(
    (match) => match.league.id === selectedLeagueId.value
  );
});

const selectedTeamFixtures = computed(() => {
  if (!selectedTeamId.value) return [];
  return matches.value.filter(
    (match) =>
      match.homeTeam.id === selectedTeamId.value ||
      match.awayTeam.id === selectedTeamId.value
  );
});

const displayFixtures = computed(() => {
  if (selectedTeamFixtures.value.length > 0) return selectedTeamFixtures.value;
  if (selectedLeagueFixtures.value.length > 0)
    return selectedLeagueFixtures.value;
  return matches.value;
});

const filteredResults = computed(() => {
  if (!standings.value?.standings) return [];
  let teams = selectedLeagueTeams.value;

  if (searchTerm.value.trim()) {
    const search = searchTerm.value.toLowerCase().trim();
    teams = teams.filter((team) => team.name.toLowerCase().includes(search));
  }
  return teams;
});

const handleLeagueClick = (leagueId: number) => {
  if (selectedLeagueId.value !== leagueId) {
    selectedLeagueId.value = leagueId;
    selectedTeamId.value = undefined;
    searchTerm.value = "";
  }
};

const handleTeamClick = (teamId: number) => {
  selectedTeamId.value = teamId;
  // console.log("Selected team ID:", selectedTeamId.value);
};

const handleSearch = (search: string) => {
  searchTerm.value = search;
  // console.log("Search term:", searchTerm.value);
};

watch(selectedLeagueId, (newLeagueId) => {
  if (newLeagueId) {
    fetchStandings();
  }
});

onMounted(async () => {
  fetchLeagues();
  fetchMatches();
  fetchStandings();
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <HeaderLive />

    <div class="container mx-auto px-6">
      <div v-if="isLoading" class="flex justify-center items-center py-20">
        <div
          class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
        ></div>
        <span class="ml-3 text-lg text-gray-600">กำลังโหลดข้อมูล...</span>
      </div>

      <div v-else class="grid lg:grid-cols-3 gap-8 mt-4">
        <div class="lg:col-span-1 space-y-6">
          <SearchTeam
            :filtered-results="filteredResults"
            @click="handleTeamClick"
            @search="handleSearch"
          />
          <Top5league
            :filtered-leagues="filteredLeagues"
            :selected-league-id="selectedLeagueId"
            @league-click="handleLeagueClick"
          />
          <LeagueTeam
            :selected-league-teams="selectedLeagueTeams"
            @team-click="handleTeamClick"
          />
        </div>

        <div class="lg:col-span-2 space-y-6">
          <MatchCard :display-fixtures="displayFixtures" />
          <Standing
            :standings="standings"
            :selected-league-id="selectedLeagueId"
          />
        </div>
      </div>
    </div>
  </div>
</template>
