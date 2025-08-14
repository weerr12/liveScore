import type { BaseTeam, BaseLeague, BasicTeam } from "./index";

export interface Fixture {
    fixture_id: number;
    date: string;
    venue: string;
    home: string;
    away: string;
    score: string;
    events: Events[];
}

export interface Events {
    minute: number;
    type: string;
    team: string;
    player: string;
}

export interface H2HData {
    league: BaseLeague;
    teams: {
        home: BaseTeam;
        away: BaseTeam;
    };
    fixtures: Fixture[];
}




export interface PlayerLineup {
    name: string;
    position: string;
    number: number;
}

export interface LineUp {
    team: BasicTeam;
    formation: string;
    coach: string;
    startXI: PlayerLineup[];
}