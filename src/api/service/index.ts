import type { Match, MatchResponse, MatchListResponse, LeagueListResponse, StandingsResponse, ItemResponse, TeamStatsResponse, TeamOverviewResponse, NewsListResponse, NewsResponse } from '../types';
import axios from 'axios';
const Base_URL = 'https://live-score-backend.vercel.app/api'

// TopFiveLeague
export function getAllLeague() {
    return axios.get<LeagueListResponse>(`${Base_URL}/league`)
}

// MatchCard
export function getAllMatches(matchStatus?: Match['status']) {
    return axios.get<MatchListResponse>(`${Base_URL}/match`, { params: { status: matchStatus } })
}

// 
export function getMatchById(matchId: number) {
    return axios.get<MatchResponse>(`${Base_URL}/match/${matchId}`)
}

// 
export function getMatchDataByFixtureId(fixture_id: number) {
    return axios.get<MatchResponse>(`${Base_URL}/h2h/fixture/${fixture_id}`)
}

// ต่างจาก Standings แค่ไม่มี position มั้ย
export function getTeamStatistics(teamId: number) {
    return axios.get<TeamStatsResponse>(`${Base_URL}/team/${teamId}/stats`)
}

export function getTeamOverview(teamId: number) {
    return axios.get<TeamOverviewResponse>(`${Base_URL}/team/${teamId}/overview`)
}

export function getTeamMatches(teamId: number, matchStatus?: Match['status'], limit?: number) {
    return axios.get<MatchListResponse>(`${Base_URL}/team/${teamId}/matches`, { params: { status: matchStatus, limit } })
}

// Standings
export function getLeagueStandings(leagueId: number) {
    return axios.get<ItemResponse<StandingsResponse>>(`${Base_URL}/team/${leagueId}/standings`)
}

export function getNewsList(limit?: number, source?: string) {
    return axios.get<NewsListResponse>(`${Base_URL}/news`, { params: { limit, source } })
}

export function getNewsArticleById(newsId: number) {
    return axios.get<NewsResponse>(`${Base_URL}/news/${newsId}`)
}

export function getLatestNews(limit?: number) {
    return axios.get<NewsListResponse>(`${Base_URL}/news/latest`, { params: { limit } })
}