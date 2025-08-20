<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getAllLeague, getTeamMatches, getTeamOverview } from "@/api/service";
import type { Match, League, Team } from "@/api/types";
import MatchHeader from "@/components/team-match/MatchHeader.vue";
import FilterMatch from "@/components/team-match/FilterMatch.vue";

const leagues = ref<League[]>([]);
const matches = ref<Match[]>([]);
const allMatches = ref<Match[]>([]);

const route = useRoute();
const currentTeam = ref<{ team: Team; league?: League } | null>(null);
const isLoading = ref(true);
const selectedFilter = ref<string>("all");

const teamId = computed(() => Number(route.params.teamId));
const teamName = computed(() => currentTeam.value?.team?.name || "ทีม");
const teamLogo = computed(() => currentTeam.value?.team?.logo || "");

const matchStats = computed(() => {
  const total = allMatches.value.length;
  const completed = allMatches.value.filter(
    (match) => match.status === "FT"
  ).length;
  const upcoming = allMatches.value.filter(
    (match) => match.status === "SCH"
  ).length;

  return {
    total,
    completed,
    upcoming,
  };
});

const filteredMatches = computed(() => {
  switch (selectedFilter.value) {
    case "upcoming":
      return allMatches.value.filter((match) => match.status === "SCH");
    case "completed":
      return allMatches.value.filter((match) => match.status === "FT");
    default:
      return allMatches.value;
  }
});

const fetchLeague = async () => {
  try {
    const res = await getAllLeague();
    if (res.data.success) {
      leagues.value = res.data.data;
    }
    console.log("Leagues: ", JSON.stringify(leagues.value, null, 2));
    return leagues.value;
  } catch (error) {
    console.log("Error fetching leagues: ", error);
    return [];
  }
};

const fetchMatches = async (teamId: number) => {
  try {
    const res = await getTeamMatches(teamId);
    if (res.data.success) {
      allMatches.value = res.data.data;
      matches.value = res.data.data;
    }
    console.log("Matches: ", JSON.stringify(matches.value, null, 2));
    return matches.value;
  } catch (error) {
    console.log("Error fetching matches: ", error);
    return [];
  }
};

const fetchTeamOverview = async (teamId: number) => {
  try {
    const res = await getTeamOverview(teamId);
    if (res.data.success) {
      const teamData = res.data.data;
      currentTeam.value = {
        team: {
          id: teamData.team.id,
          name: teamData.team.name,
          logo: teamData.team.logo,
        },
      };
    }
  } catch (error) {
    console.log("Error fetching team overview: ", error);
  }
};

const handleFilterChange = (filter: string) => {
  selectedFilter.value = filter;
};

const formatMatchDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
};

const formatMatchTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString("th-TH", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getMatchResult = (match: Match) => {
  if (match.status !== "FT" || !match.score.home || !match.score.away) {
    return null;
  }

  const isHome = match.homeTeam.id === teamId.value;
  const teamScore = isHome ? match.score.home : match.score.away;
  const opponentScore = isHome ? match.score.away : match.score.home;

  if (teamScore > opponentScore) return "W";
  if (teamScore < opponentScore) return "L";
  return "D";
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "FT":
      return "bg-green-100 text-green-700 border-green-200";
    case "LIVE":
      return "bg-red-100 text-red-700 border-red-200 animate-pulse";
    case "SCH":
      return "bg-blue-100 text-blue-700 border-blue-200";
    default:
      return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    FT: "จบแล้ว",
    LIVE: "กำลังแข่ง",
    SCH: "ยังไม่เริ่ม",
  };
  return statusMap[status] || status;
};

onMounted(async () => {
  isLoading.value = true;

  try {
    await Promise.all([
      fetchLeague(),
      fetchMatches(teamId.value),
      fetchTeamOverview(teamId.value),
    ]);
  } catch (error) {
    console.error("Error loading team matches data:", error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
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
        <p class="text-gray-600 font-medium">กำลังโหลดตารางแข่งขัน...</p>
      </div>
    </div>

    <MatchHeader
      v-if="!isLoading && currentTeam"
      :team-name="teamName"
      :team-logo="teamLogo"
      :match-stats="matchStats"
    />

    <FilterMatch
      v-if="!isLoading && allMatches.length > 0"
      :match-stats="matchStats"
      :selected-filter="selectedFilter"
      @filter-change="handleFilterChange"
    />

    <div class="max-w-7xl mx-auto px-6 py-8">
      <div
        v-if="!isLoading && filteredMatches.length === 0"
        class="text-center py-12"
      >
        <h3 class="text-xl font-semibold text-gray-800 mb-2">
          ไม่พบข้อมูลการแข่งขัน
        </h3>
        <p class="text-gray-600">
          {{
            selectedFilter === "all"
              ? "ยังไม่มีข้อมูลการแข่งขันของทีมนี้"
              : selectedFilter === "upcoming"
              ? "ไม่มีการแข่งขันที่กำลังจะมีถึง"
              : "ไม่มีการแข่งขันที่จบแล้ว"
          }}
        </p>
      </div>

      <div
        v-else-if="!isLoading && filteredMatches.length > 0"
        class="space-y-4"
      >
        <div
          v-for="(match, index) in filteredMatches"
          :key="match.id"
          class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
        >
          <div
            v-if="
              index === 0 ||
              formatMatchDate(match.date) !==
                formatMatchDate(filteredMatches[index - 1].date)
            "
            class="bg-gray-50 px-6 py-3 border-b border-gray-100"
          >
            <h3 class="text-sm font-medium text-gray-700">
              {{ formatMatchDate(match.date) }}
            </h3>
          </div>

          <div class="p-6">
            <RouterLink
              :to="`/match/${match.id}`"
              class="block hover:bg-gray-50 rounded-lg p-4 -m-4 transition-colors duration-200"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-center space-x-8 flex-1">
                  <div
                    class="flex items-center space-x-3"
                    :class="
                      match.homeTeam.id === teamId
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-800'
                    "
                  >
                    <div class="text-right">
                      <div class="font-bold text-lg">
                        {{ match.homeTeam.name }}
                      </div>
                      <div class="text-sm text-gray-500">เจ้าบ้าน</div>
                    </div>
                    <div class="relative">
                      <img
                        :src="match.homeTeam.logo"
                        :alt="match.homeTeam.name"
                        class="w-12 h-12 object-contain"
                      />
                      <div
                        v-if="match.homeTeam.id === teamId"
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
                    <div
                      v-if="
                        match.status === 'FT' &&
                        match.score.home !== null &&
                        match.score.away !== null
                      "
                      class="text-2xl font-bold text-gray-900"
                    >
                      {{ match.score.home }} - {{ match.score.away }}
                    </div>
                    <div v-else class="text-gray-400 font-bold text-xl">
                      {{ formatMatchTime(match.date) }}
                    </div>

                    <div
                      v-if="match.status === 'FT' && getMatchResult(match)"
                      class="px-2 py-1 rounded-full text-xs font-medium"
                      :class="{
                        'bg-green-100 text-green-700':
                          getMatchResult(match) === 'W',
                        'bg-red-100 text-red-700':
                          getMatchResult(match) === 'L',
                        'bg-yellow-100 text-yellow-700':
                          getMatchResult(match) === 'D',
                      }"
                    >
                      {{
                        getMatchResult(match) === "W"
                          ? "ชนะ"
                          : getMatchResult(match) === "L"
                          ? "แพ้"
                          : "เสมอ"
                      }}
                    </div>
                  </div>

                  <div
                    class="flex items-center space-x-3"
                    :class="
                      match.awayTeam.id === teamId
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-800'
                    "
                  >
                    <div class="relative">
                      <img
                        :src="match.awayTeam.logo"
                        :alt="match.awayTeam.name"
                        class="w-12 h-12 object-contain"
                      />
                      <div
                        v-if="match.awayTeam.id === teamId"
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
                      <div class="font-bold text-lg">
                        {{ match.awayTeam.name }}
                      </div>
                      <div class="text-sm text-gray-500">ทีมเยือน</div>
                    </div>
                  </div>
                </div>

                <div class="ml-8 text-right">
                  <div
                    class="px-3 py-2 rounded-full text-sm font-medium border mb-2"
                    :class="getStatusColor(match.status)"
                  >
                    {{ getStatusText(match.status) }}
                  </div>
                  <div class="flex items-center space-x-2 justify-end">
                    <img
                      :src="match.league.logo"
                      :alt="match.league.name"
                      class="w-4 h-4 object-contain"
                    />
                    <span class="text-xs text-gray-500">{{
                      match.league.name
                    }}</span>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
