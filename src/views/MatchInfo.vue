<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import MatchHeader from "../components/match-info/MatchHeader.vue";
import MatchTeamsScore from "../components/match-info/MatchTeamsScore.vue";
import MatchDetails from "../components/match-info/MatchDetails.vue";

// api จริง
import { getMatchById } from "@/api/service";
import type { Match } from "@/api/types";

const route = useRoute();
const isLoading = ref(true);
const matchData = ref<Match>();

const matchId = computed(() => Number(route.params.matchId));

const fetchMatchById = async () => {
  try {
    const response = await getMatchById(matchId.value);
    if (response.data.success) {
      matchData.value = response.data.data;
    }
  } catch (error) {
    console.error("Error fetching match data:", error);
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

onMounted(() => {
  fetchMatchById();

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
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"
        ></div>
        <p class="text-gray-600 font-medium">กำลังโหลดข้อมูลการแข่งขัน...</p>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-6 py-8">
      <div v-if="!isLoading && matchData" class="space-y-8">
        <div
          class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <MatchHeader :league="matchData.league" :matchId="matchData.id" />

          <MatchTeamsScore
            :homeTeam="matchData.homeTeam"
            :awayTeam="matchData.awayTeam"
            :score="matchData.score"
            :status="matchData.status"
            :date="matchData.date"
            :formatDate="formatDate"
          />
        </div>

        <MatchDetails
          :id="matchData.id"
          :fixtureId="matchData.fixtureId"
          :date="matchData.date"
          :status="matchData.status"
          :homeTeam="matchData.homeTeam"
          :awayTeam="matchData.awayTeam"
          :score="matchData.score"
          :league="matchData.league"
          :formatDate="formatDate"
        />
      </div>
    </div>
  </div>
</template>
