export interface ErrorResponse {
    error: string
}

export interface ItemResponse<T> {
    success: boolean;
    data: T;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
}

export interface League {
    id: number;
    name: string;
    logo: string;
}

export interface Score {
    home: number | null;
    away: number | null;
}

export interface Match {
    id: number;
    fixtureId: number;
    date: string;
    status: 'FT' | 'LIVE' | 'SCH';
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    league: League;
}

export interface MatchResponse {
    success: boolean;
    data: Match;
}

export interface MatchListResponse {
    success: boolean;
    data: Match[];
    total: number;
}

export interface H2HStats {
    total: number;
    homeWins: number;
    awayWins: number;
    draws: number;
}

export interface H2HResponse {
    success: boolean;
    data: {
        matches: Match[];
        stats: H2HStats;
    };
}

export interface TeamStats {
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
}

export interface TeamStatsResponse {
    success: boolean;
    data: {
        team: Team;
        league: League;
        stats: TeamStats;
    };
}

export interface TeamOverviewResponse {
    success: boolean;
    data: {
        team: Team;
        stats: TeamStats;
        recentMatches: Match[];
        // form: string;
        form: ('W' | 'L' | 'D')[];
    };
}

export interface Standings {
    position: number;
    team: Team;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
}

export interface StandingsResponse {
    success: boolean;
    league: League;
    standings: Standings[];
}

export interface News {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    publishedAt: string;
    source: string;
}

export interface NewsResponse {
    success: boolean;
    data: News;
}

export interface NewsListResponse {
    success: boolean;
    data: News[];
    total: number;
}

export interface LeagueResponse {
    success: boolean;
    data: League;
}

export interface LeagueListResponse {
    success: boolean;
    data: League[];
    total: number;
}
export type Color = "indigo" | "green" | "purple";
export type NavItem = {
    label: string;
    description: string;
    color: Color;
    to: (id?: number) => any;
    isActive: (name: string | symbol | null | undefined) => boolean;
};