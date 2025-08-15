import type { LineUp } from "./matchH2h";

export interface BaseTeam {
    id?: number;
    name: string;
    logo: string;
}

export interface BasicTeam {
    name: string;
    logo: string;
}

export interface BaseLeague {
    id: number;
    name: string;
    logo: string;
}

export interface LeagueTeamType {
    league: BaseLeague;
    country: { name: string };
    teams: BaseTeam[];
}

export interface TeamStanding {
    league: BaseLeague;
    stats: StandingStats[];
}

export interface TeamStats {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goalsFor: number;
    goalsAgainst: number;
}

export interface StandingStats extends TeamStats {
    rank: number;
    points: number;
    goalDiff: number;
    team: BaseTeam;
}

export interface FixtureInfo {
    id: number;
    date: string;
    status: { short: string; long: string };
}

export interface League {
    league: BaseLeague;
    country: { name: string };
}

export interface Team {
    team: BaseTeam;
}

export interface Fixture {
    fixture: FixtureInfo;
    league: BaseLeague;
    teams: {
        home: BaseTeam;
        away: BaseTeam;
    };
}

export interface TeamWithDetails extends BaseTeam {
    founded?: number;
    venue?: string;
    nextMatch: NextMatch;
    last5: Match[];
    stats?: TeamStats;
}

export interface TeamStat {
    league: BaseLeague;
    country: {
        name: string;
    };
    team: TeamWithDetails[];
}

export interface Match {
    date: string;
    opponent: string;
    score: string;
    result: "W" | "L" | "D" | "LIVE";
    venue?: string;
    competition?: string;
}

export interface TeamOverview {
    league: BaseLeague;
    country: {
        name: string;
    };
    team: TeamWithDetails;
}

export interface NextMatch {
    fixture: { id: number };
    date: string;
    opponent: string;
    opponentLogo: string;
    venue?: string;
    competition?: string;
    home?: boolean;
}

export interface NewsItem {
    id: number;
    title: string;
    summary: string;
    image: string;
    category: string;
    date: string;
    views?: number;
    readTime?: string;
    source: string;
    tags: string[];
}

export interface H2HData {
    team1: Team;
    team2: Team;
    matches: Fixture[];
    summary: {
        total: number;
        team1Wins: number;
        team2Wins: number;
        draws: number;
    };
}

export type MatchResult = "WIN" | "LOSE" | "DRAW";

export interface TeamMatchStats {
    team: BaseTeam;
    statistic: string;
    value: number | string;
}

export interface MatchStats {
    home: TeamMatchStats;
    away: TeamMatchStats;
}

export interface Player {
    name: string;
    team: BasicTeam;
    goals: number;
}

export interface Injury {
    player: string;
    team: BasicTeam;
    reason: string;
    date: string;
}

export interface Injury {
    player: string;
    team: BasicTeam;
    reason: string;
    date: string;
}

export type Color = "indigo" | "green" | "purple";

export type NavItem = {
    label: string;
    description: string;
    color: Color;
    to: (id?: number) => any;
    isActive: (name: string | symbol | null | undefined) => boolean;
};

export interface MatchEvent {
    time: string | number;
    type: string;
    player: string;
    assist?: string;
    detail?: string;
    team: BasicTeam;
}

export interface MockMatchStats {
    fixture: FixtureInfo;
    league: BaseLeague;
    teams: {
        home: BaseTeam;
        away: BaseTeam;
    };
    goals: {
        home: number | null;
        away: number | null;
    };
    score?: {
        halftime: {
            home: number | null;
            away: number | null;
        };
        fulltime: {
            home: number | null;
            away: number | null;
        };
    };
    statistics: TeamMatchStats[];
    events: MatchEvent[];
    injuries: Injury[];
    odds: {
        home: string;
        draw: string;
        away: string;
    };
    topScorers: Player[];
    lineups: LineUp;
}

