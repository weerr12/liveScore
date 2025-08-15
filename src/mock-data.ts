import type { League, LeagueTeamType, MockMatchStats } from "./types";
import type { Fixture } from "./types";
import type { TeamStanding } from "./types";
import type { H2HData } from "./types/matchH2h"
import type { TeamStat } from "./types";
import type { NewsItem } from "./types";

export const mockLeagues: League[] = [
  {
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    country: {
      name: "England"
    }
  },
  {
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    country: {
      name: "Spain"
    }
  },
  {
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    country: {
      name: "Italy"
    }
  },
  {
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    country: {
      name: "Germany"
    }
  },
  {
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    country: {
      name: "France"
    }
  }
]

export const mockFixturesToday: Fixture[] = [
  {
    fixture: {
      id: 1001,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
      away: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }
    }
  },
  {
    fixture: {
      id: 1002,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      away: { id: 33, name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }
    }
  },
  {
    fixture: {
      id: 1003,
      date: new Date().toISOString(),
      status: { short: "LIVE", long: "In Play" }
    },
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      away: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }
    }
  },
  {
    fixture: {
      id: 1004,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
      away: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }
    }
  },
  {
    fixture: {
      id: 1005,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    }
  },
  {
    fixture: { id: 1006, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    }
  },
  {
    fixture: { id: 1007, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 44, name: "Burnley", logo: "https://media.api-sports.io/football/teams/44.png" }
    }
  },
  {
    fixture: { id: 1008, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
      away: { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" }
    }
  },
  {
    fixture: { id: 1009, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    }
  },
  {
    fixture: { id: 1010, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 46, name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" },
      away: { id: 63, name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" }
    }
  },
  {
    fixture: { id: 1011, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" },
      away: { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" }
    }
  },
  {
    fixture: { id: 1012, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    }
  },

  {
    fixture: {
      id: 2001,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: { id: 86, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" },
      away: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }
    }
  },
  {
    fixture: {
      id: 2002,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
      away: { id: 559, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }
    }
  },
  {
    fixture: {
      id: 2003,
      date: new Date().toISOString(),
      status: { short: "FT", long: "Match Finished" }
    },
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
      away: { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }
    }
  },
  {
    fixture: {
      id: 2004,
      date: new Date().toISOString(),
      status: { short: "LIVE", long: "In Play" }
    },
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" },
      away: { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" }
    }
  },
  {
    fixture: {
      id: 2005,
      date: new Date().toISOString(),
      status: { short: "FT", long: "Match Finished" }
    },
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      away: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }
    }
  },
  {
    fixture: { id: 2006, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 798, name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" },
      away: { id: 727, name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" }
    }
  },
  {
    fixture: { id: 2007, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    }
  },
  {
    fixture: { id: 2008, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 724, name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" },
      away: { id: 728, name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" }
    }
  },
  {
    fixture: { id: 2009, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 797, name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    }
  },
  {
    fixture: { id: 2010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 542, name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" }
    }
  },
  {
    fixture: { id: 2011, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 531, name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" }
    }
  },
  {
    fixture: { id: 2012, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" }
    }
  },

  {
    fixture: {
      id: 3001,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png",
    },
    teams: {
      home: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
      away: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }
    }
  },
  {
    fixture: {
      id: 3002,
      date: new Date().toISOString(),
      status: { short: "LIVE", long: "In Play" }
    },
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    teams: {
      home: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
      away: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }
    }
  },
  {
    fixture: {
      id: 3003,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    teams: {
      home: { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" },
      away: { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" }
    }
  },
  {
    fixture: {
      id: 3004,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    teams: {
      home: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      away: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" }
    }
  },
  {
    fixture: { id: 3005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" }
    }
  },
  {
    fixture: { id: 3006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 867, name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" }
    }
  },
  {
    fixture: { id: 3007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      away: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" }
    }
  },
  {
    fixture: { id: 3008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 499, name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" },
      away: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" }
    }
  },
  {
    fixture: { id: 3009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      away: { id: 479, name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" }
    }
  },
  {
    fixture: { id: 3010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 500, name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" }
    }
  },
  {
    fixture: { id: 3011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      away: { id: 495, name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" }
    }
  },
  {
    fixture: { id: 3012, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 517, name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" }
    }
  },
  {
    fixture: { id: 3013, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      away: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" }
    }
  },
  {
    fixture: { id: 3014, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 482, name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" },
      away: { id: 504, name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" }
    }
  },

  {
    fixture: {
      id: 4001,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    teams: {
      home: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
      away: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }
    }
  },
  {
    fixture: {
      id: 4002,
      date: new Date().toISOString(),
      status: { short: "FT", long: "Match Finished" }
    },
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    teams: {
      home: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
      away: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }
    }
  },
  {
    fixture: {
      id: 4003,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    teams: {
      home: { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" },
      away: { id: 163, name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" }
    }
  },
  {
    fixture: {
      id: 4004,
      date: new Date().toISOString(),
      status: { short: "FT", long: "Match Finished" }
    },
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    teams: {
      home: { id: 160, name: "Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      away: { id: 164, name: "Mainz", logo: "https://media.api-sports.io/football/teams/164.png" }
    }
  },
  {
    fixture: { id: 4005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 159, name: "Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" },
      away: { id: 187, name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" }
    }
  },
  {
    fixture: { id: 4006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 172, name: "Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      away: { id: 167, name: "Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" }
    }
  },
  {
    fixture: { id: 4007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      away: { id: 210, name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" }
    }
  },
  {
    fixture: { id: 4008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 170, name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" },
      away: { id: 160, name: "SC Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" }
    }
  },
  {
    fixture: { id: 4009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 167, name: "TSG Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      away: { id: 161, name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" }
    }
  },
  {
    fixture: { id: 4010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 28, name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" },
      away: { id: 172, name: "VfB Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" }
    }
  },
  {
    fixture: { id: 4011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 164, name: "Mainz 05", logo: "https://media.api-sports.io/football/teams/164.png" },
      away: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" }
    }
  },

  {
    fixture: {
      id: 5001,
      date: new Date().toISOString(),
      status: { short: "NS", long: "Not Started" }
    },
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    teams: {
      home: { id: 85, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
      away: { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png" }
    }
  },
  {
    fixture: {
      id: 5002,
      date: new Date().toISOString(),
      status: { short: "LIVE", long: "In Play" }
    },
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    teams: {
      home: { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" },
      away: { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }
    }
  },
  {
    fixture: {
      id: 5003,
      date: new Date().toISOString(),
      status: { short: "FT", long: "Match Finished" }
    },
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    teams: {
      home: { id: 79, name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" },
      away: { id: 94, name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }
    }
  },
  {
    fixture: {
      id: 5004,
      date: new Date().toISOString(),
      status: { short: "LIVE", long: "In Play" }
    },
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    teams: {
      home: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    }
  },
  {
    fixture: { id: 5005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 96, name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" },
      away: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" }
    }
  },
  {
    fixture: { id: 5006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" }
    }
  },
  {
    fixture: { id: 5007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      away: { id: 98, name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" }
    }
  },
  {
    fixture: { id: 5008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 83, name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" }
    }
  },
  {
    fixture: { id: 5009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 116, name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" },
      away: { id: 82, name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/82.png" }
    }
  },
  {
    fixture: { id: 5010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 1063, name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    }
  },
  {
    fixture: { id: 5011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      away: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" }
    }
  },
  {
    fixture: { id: 5012, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 110, name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" },
      away: { id: 111, name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" }
    }
  },
  {
    fixture: { id: 5013, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      away: { id: 92, name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" }
    }
  },
  {
    fixture: { id: 5014, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 100, name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" },
      away: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" }
    }
  }
]

// export interface LeagueTeam {
//     league: BaseLeague;
//     country: { name: string };
//     teams: BaseTeam[];
// }

export const mockTeamsByLeague: LeagueTeamType[] = [
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    country: { name: "England" },
    teams: [
      { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
      { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
      { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      { id: 33, name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" },
      { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" },
      { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
      { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
      { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" },
      { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
      { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" },
      { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" },
      { id: 46, name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" },
      { id: 63, name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" },
      { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" },
      { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" },
      { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" },
      { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" },
      { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" }
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    country: { name: "Spain" },
    teams: [
      { id: 86, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" },
      { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" },
      { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
      { id: 559, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" },
      { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
      { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" },
      { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" },
      { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" },
      { id: 531, name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" },
      { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" },
      { id: 727, name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" },
      { id: 728, name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" },
      { id: 798, name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" },
      { id: 724, name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" },
      { id: 797, name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" },
      { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" },
      { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      { id: 542, name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" }
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    country: { name: "Italy" },
    teams: [
      { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" },
      { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" },
      { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
      { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
      { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" },
      { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" },
      { id: 499, name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" },
      { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      { id: 479, name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" },
      { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      { id: 500, name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" },
      { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      { id: 495, name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" },
      { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      { id: 517, name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" },
      { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      { id: 482, name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" },
      { id: 504, name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" },
      { id: 867, name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" }

    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    country: { name: "Germany" },
    teams: [
      { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
      { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" },
      { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
      { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" },
      { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" },
      { id: 163, name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" },
      { id: 170, name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" },
      { id: 160, name: "Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      { id: 167, name: "Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      { id: 161, name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" },
      { id: 28, name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" },
      { id: 172, name: "Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      { id: 164, name: "Mainz", logo: "https://media.api-sports.io/football/teams/164.png" },
      { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      { id: 159, name: "Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" },
      { id: 171, name: "Hertha Berlin", logo: "https://media.api-sports.io/football/teams/171.png" },
      { id: 158, name: "Arminia Bielefeld", logo: "https://media.api-sports.io/football/teams/158.png" },
      { id: 187, name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" },
      { id: 210, name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" }
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    country: { name: "France" },
    teams: [
      { id: 85, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
      { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png" },
      { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" },
      { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" },
      { id: 79, name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" },
      { id: 94, name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" },
      { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      { id: 83, name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" },
      { id: 116, name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" },
      { id: 82, name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/82.png" },
      { id: 1063, name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" },
      { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" },
      { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      { id: 110, name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" },
      { id: 111, name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" },
      { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      { id: 92, name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" },
      { id: 100, name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" },
      { id: 96, name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" },
      { id: 98, name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" }
    ]
  }
]

export const mockStandingsByLeague: TeamStanding[] = [
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    stats: [
      { rank: 1, team: { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, points: 90, played: 38, win: 29, draw: 3, lose: 6, goalsFor: 95, goalsAgainst: 32, goalDiff: 63 },
      { rank: 2, team: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, points: 88, played: 38, win: 28, draw: 4, lose: 6, goalsFor: 85, goalsAgainst: 35, goalDiff: 50 },
      { rank: 3, team: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, points: 82, played: 38, win: 25, draw: 7, lose: 6, goalsFor: 78, goalsAgainst: 39, goalDiff: 39 },
      { rank: 4, team: { id: 33, name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }, points: 74, played: 38, win: 23, draw: 5, lose: 10, goalsFor: 70, goalsAgainst: 44, goalDiff: 26 },
      { rank: 5, team: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }, points: 68, played: 38, win: 20, draw: 8, lose: 10, goalsFor: 65, goalsAgainst: 50, goalDiff: 15 },
      { rank: 6, team: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }, points: 65, played: 38, win: 19, draw: 8, lose: 11, goalsFor: 58, goalsAgainst: 48, goalDiff: 10 },
      { rank: 7, team: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" }, points: 62, played: 38, win: 18, draw: 8, lose: 12, goalsFor: 62, goalsAgainst: 52, goalDiff: 10 },
      { rank: 8, team: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" }, points: 58, played: 38, win: 17, draw: 7, lose: 14, goalsFor: 55, goalsAgainst: 54, goalDiff: 1 },
      { rank: 9, team: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }, points: 54, played: 38, win: 15, draw: 9, lose: 14, goalsFor: 50, goalsAgainst: 55, goalDiff: -5 },
      { rank: 10, team: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" }, points: 52, played: 38, win: 15, draw: 7, lose: 16, goalsFor: 48, goalsAgainst: 58, goalDiff: -10 },
      { rank: 11, team: { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" }, points: 50, played: 38, win: 14, draw: 8, lose: 16, goalsFor: 45, goalsAgainst: 55, goalDiff: -10 },
      { rank: 12, team: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" }, points: 48, played: 38, win: 13, draw: 9, lose: 16, goalsFor: 42, goalsAgainst: 58, goalDiff: -16 },
      { rank: 13, team: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }, points: 46, played: 38, win: 12, draw: 10, lose: 16, goalsFor: 40, goalsAgainst: 55, goalDiff: -15 },
      { rank: 14, team: { id: 46, name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" }, points: 44, played: 38, win: 12, draw: 8, lose: 18, goalsFor: 42, goalsAgainst: 62, goalDiff: -20 },
      { rank: 15, team: { id: 63, name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" }, points: 42, played: 38, win: 11, draw: 9, lose: 18, goalsFor: 45, goalsAgainst: 65, goalDiff: -20 },
      { rank: 16, team: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" }, points: 40, played: 38, win: 10, draw: 10, lose: 18, goalsFor: 38, goalsAgainst: 58, goalDiff: -20 },
      { rank: 17, team: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }, points: 38, played: 38, win: 10, draw: 8, lose: 20, goalsFor: 35, goalsAgainst: 60, goalDiff: -25 },
      { rank: 18, team: { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" }, points: 35, played: 38, win: 9, draw: 8, lose: 21, goalsFor: 32, goalsAgainst: 65, goalDiff: -33 },
      { rank: 19, team: { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" }, points: 32, played: 38, win: 8, draw: 8, lose: 22, goalsFor: 30, goalsAgainst: 68, goalDiff: -38 },
      { rank: 20, team: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" }, points: 28, played: 38, win: 7, draw: 7, lose: 24, goalsFor: 28, goalsAgainst: 72, goalDiff: -44 }
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    stats: [
      { rank: 1, team: { id: 86, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, points: 92, played: 38, win: 30, draw: 2, lose: 6, goalsFor: 88, goalsAgainst: 28, goalDiff: 60 },
      { rank: 2, team: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, points: 87, played: 38, win: 27, draw: 6, lose: 5, goalsFor: 80, goalsAgainst: 30, goalDiff: 50 },
      { rank: 3, team: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" }, points: 80, played: 38, win: 24, draw: 8, lose: 6, goalsFor: 70, goalsAgainst: 40, goalDiff: 30 },
      { rank: 4, team: { id: 559, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }, points: 70, played: 38, win: 21, draw: 7, lose: 10, goalsFor: 65, goalsAgainst: 48, goalDiff: 17 },
      { rank: 5, team: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" }, points: 62, played: 38, win: 18, draw: 8, lose: 12, goalsFor: 58, goalsAgainst: 49, goalDiff: 9 },
      { rank: 6, team: { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }, points: 58, played: 38, win: 17, draw: 7, lose: 14, goalsFor: 52, goalsAgainst: 48, goalDiff: 4 },
      { rank: 7, team: { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" }, points: 56, played: 38, win: 16, draw: 8, lose: 14, goalsFor: 50, goalsAgainst: 52, goalDiff: -2 },
      { rank: 8, team: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }, points: 54, played: 38, win: 15, draw: 9, lose: 14, goalsFor: 48, goalsAgainst: 50, goalDiff: -2 },
      { rank: 9, team: { id: 531, name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" }, points: 52, played: 38, win: 15, draw: 7, lose: 16, goalsFor: 45, goalsAgainst: 55, goalDiff: -10 },
      { rank: 10, team: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" }, points: 48, played: 38, win: 13, draw: 9, lose: 16, goalsFor: 42, goalsAgainst: 58, goalDiff: -16 },
      { rank: 11, team: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" }, points: 46, played: 38, win: 12, draw: 10, lose: 16, goalsFor: 40, goalsAgainst: 55, goalDiff: -15 },
      { rank: 12, team: { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" }, points: 44, played: 38, win: 12, draw: 8, lose: 18, goalsFor: 38, goalsAgainst: 58, goalDiff: -20 },
      { rank: 13, team: { id: 727, name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" }, points: 42, played: 38, win: 11, draw: 9, lose: 18, goalsFor: 35, goalsAgainst: 60, goalDiff: -25 },
      { rank: 14, team: { id: 728, name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" }, points: 40, played: 38, win: 10, draw: 10, lose: 18, goalsFor: 38, goalsAgainst: 62, goalDiff: -24 },
      { rank: 15, team: { id: 798, name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" }, points: 38, played: 38, win: 10, draw: 8, lose: 20, goalsFor: 32, goalsAgainst: 58, goalDiff: -26 },
      { rank: 16, team: { id: 724, name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" }, points: 36, played: 38, win: 9, draw: 9, lose: 20, goalsFor: 30, goalsAgainst: 62, goalDiff: -32 },
      { rank: 17, team: { id: 797, name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" }, points: 34, played: 38, win: 8, draw: 10, lose: 20, goalsFor: 28, goalsAgainst: 65, goalDiff: -37 },
      { rank: 18, team: { id: 537, name: "Alaves", logo: "https://media.api-sports.io/football/teams/537.png" }, points: 32, played: 38, win: 8, draw: 8, lose: 22, goalsFor: 26, goalsAgainst: 68, goalDiff: -42 },
      { rank: 19, team: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" }, points: 30, played: 38, win: 7, draw: 9, lose: 22, goalsFor: 24, goalsAgainst: 70, goalDiff: -46 },
      { rank: 20, team: { id: 542, name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" }, points: 26, played: 38, win: 6, draw: 8, lose: 24, goalsFor: 22, goalsAgainst: 75, goalDiff: -53 }
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    stats: [
      { rank: 1, team: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, points: 89, played: 38, win: 28, draw: 5, lose: 5, goalsFor: 84, goalsAgainst: 33, goalDiff: 51 },
      { rank: 2, team: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, points: 86, played: 38, win: 26, draw: 8, lose: 4, goalsFor: 80, goalsAgainst: 35, goalDiff: 45 },
      { rank: 3, team: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" }, points: 80, played: 38, win: 24, draw: 8, lose: 6, goalsFor: 75, goalsAgainst: 38, goalDiff: 37 },
      { rank: 4, team: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }, points: 72, played: 38, win: 22, draw: 6, lose: 10, goalsFor: 70, goalsAgainst: 44, goalDiff: 26 },
      { rank: 5, team: { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" }, points: 68, played: 38, win: 20, draw: 8, lose: 10, goalsFor: 65, goalsAgainst: 50, goalDiff: 15 },
      { rank: 6, team: { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" }, points: 64, played: 38, win: 19, draw: 7, lose: 12, goalsFor: 62, goalsAgainst: 52, goalDiff: 10 },
      { rank: 7, team: { id: 499, name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" }, points: 60, played: 38, win: 17, draw: 9, lose: 12, goalsFor: 58, goalsAgainst: 55, goalDiff: 3 },
      { rank: 8, team: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" }, points: 56, played: 38, win: 16, draw: 8, lose: 14, goalsFor: 52, goalsAgainst: 58, goalDiff: -6 },
      { rank: 9, team: { id: 867, name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" }, points: 54, played: 38, win: 15, draw: 9, lose: 14, goalsFor: 50, goalsAgainst: 60, goalDiff: -10 },
      { rank: 10, team: { id: 503, name: "Torino", logo: "https://media.api-sports.io/football/teams/503.png" }, points: 52, played: 38, win: 15, draw: 7, lose: 16, goalsFor: 48, goalsAgainst: 60, goalDiff: -12 },
      { rank: 10, team: { id: 503, name: "Torino", logo: "https://media.api-sports.io/football/teams/503.png" }, points: 52, played: 38, win: 15, draw: 7, lose: 16, goalsFor: 48, goalsAgainst: 60, goalDiff: -12 },
      { rank: 11, team: { id: 479, name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" }, points: 48, played: 38, win: 13, draw: 9, lose: 16, goalsFor: 45, goalsAgainst: 62, goalDiff: -17 },
      { rank: 12, team: { id: 490, name: "Udinese", logo: "https://media.api-sports.io/football/teams/490.png" }, points: 46, played: 38, win: 12, draw: 10, lose: 16, goalsFor: 42, goalsAgainst: 58, goalDiff: -16 },
      { rank: 13, team: { id: 500, name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" }, points: 44, played: 38, win: 12, draw: 8, lose: 18, goalsFor: 40, goalsAgainst: 62, goalDiff: -22 },
      { rank: 14, team: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" }, points: 42, played: 38, win: 11, draw: 9, lose: 18, goalsFor: 38, goalsAgainst: 65, goalDiff: -27 },
      { rank: 15, team: { id: 495, name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" }, points: 40, played: 38, win: 10, draw: 10, lose: 18, goalsFor: 35, goalsAgainst: 62, goalDiff: -27 },
      { rank: 16, team: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" }, points: 38, played: 38, win: 10, draw: 8, lose: 20, goalsFor: 32, goalsAgainst: 65, goalDiff: -33 },
      { rank: 17, team: { id: 517, name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" }, points: 36, played: 38, win: 9, draw: 9, lose: 20, goalsFor: 30, goalsAgainst: 68, goalDiff: -38 },
      { rank: 18, team: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" }, points: 34, played: 38, win: 8, draw: 10, lose: 20, goalsFor: 28, goalsAgainst: 70, goalDiff: -42 },
      { rank: 19, team: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" }, points: 32, played: 38, win: 8, draw: 8, lose: 22, goalsFor: 26, goalsAgainst: 72, goalDiff: -46 },
      { rank: 20, team: { id: 482, name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" }, points: 30, played: 38, win: 7, draw: 9, lose: 22, goalsFor: 24, goalsAgainst: 75, goalDiff: -51 },
      { rank: 21, team: { id: 504, name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" }, points: 28, played: 38, win: 6, draw: 10, lose: 22, goalsFor: 22, goalsAgainst: 78, goalDiff: -56 }
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    stats: [
      { rank: 1, team: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" }, points: 88, played: 34, win: 28, draw: 4, lose: 2, goalsFor: 95, goalsAgainst: 25, goalDiff: 70 },
      { rank: 2, team: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }, points: 82, played: 34, win: 26, draw: 4, lose: 4, goalsFor: 85, goalsAgainst: 38, goalDiff: 47 },
      { rank: 3, team: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" }, points: 74, played: 34, win: 23, draw: 5, lose: 6, goalsFor: 75, goalsAgainst: 42, goalDiff: 33 },
      { rank: 4, team: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, points: 66, played: 34, win: 20, draw: 6, lose: 8, goalsFor: 70, goalsAgainst: 48, goalDiff: 22 },
      { rank: 5, team: { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" }, points: 60, played: 34, win: 17, draw: 9, lose: 8, goalsFor: 60, goalsAgainst: 52, goalDiff: 8 },
      { rank: 6, team: { id: 163, name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" }, points: 56, played: 34, win: 16, draw: 8, lose: 10, goalsFor: 55, goalsAgainst: 50, goalDiff: 5 },
      { rank: 7, team: { id: 170, name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" }, points: 52, played: 34, win: 15, draw: 7, lose: 12, goalsFor: 48, goalsAgainst: 52, goalDiff: -4 },
      { rank: 8, team: { id: 160, name: "SC Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" }, points: 50, played: 34, win: 14, draw: 8, lose: 12, goalsFor: 45, goalsAgainst: 50, goalDiff: -5 },
      { rank: 9, team: { id: 167, name: "TSG Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" }, points: 48, played: 34, win: 13, draw: 9, lose: 12, goalsFor: 42, goalsAgainst: 52, goalDiff: -10 },
      { rank: 10, team: { id: 161, name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" }, points: 44, played: 34, win: 12, draw: 8, lose: 14, goalsFor: 40, goalsAgainst: 55, goalDiff: -15 },
      { rank: 11, team: { id: 28, name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" }, points: 42, played: 34, win: 11, draw: 9, lose: 14, goalsFor: 38, goalsAgainst: 58, goalDiff: -20 },
      { rank: 12, team: { id: 172, name: "VfB Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" }, points: 40, played: 34, win: 10, draw: 10, lose: 14, goalsFor: 35, goalsAgainst: 60, goalDiff: -25 },
      { rank: 13, team: { id: 164, name: "Mainz 05", logo: "https://media.api-sports.io/football/teams/164.png" }, points: 38, played: 34, win: 10, draw: 8, lose: 16, goalsFor: 32, goalsAgainst: 58, goalDiff: -26 },
      { rank: 14, team: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" }, points: 36, played: 34, win: 9, draw: 9, lose: 16, goalsFor: 30, goalsAgainst: 62, goalDiff: -32 },
      { rank: 15, team: { id: 159, name: "FC Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" }, points: 34, played: 34, win: 8, draw: 10, lose: 16, goalsFor: 28, goalsAgainst: 65, goalDiff: -37 },
      { rank: 16, team: { id: 171, name: "Hertha Berlin", logo: "https://media.api-sports.io/football/teams/171.png" }, points: 32, played: 34, win: 8, draw: 8, lose: 18, goalsFor: 26, goalsAgainst: 68, goalDiff: -42 },
      { rank: 17, team: { id: 158, name: "Arminia Bielefeld", logo: "https://media.api-sports.io/football/teams/158.png" }, points: 30, played: 34, win: 7, draw: 9, lose: 18, goalsFor: 24, goalsAgainst: 70, goalDiff: -46 },
      { rank: 18, team: { id: 187, name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" }, points: 26, played: 34, win: 6, draw: 8, lose: 20, goalsFor: 22, goalsAgainst: 75, goalDiff: -53 },
      { rank: 19, team: { id: 210, name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" }, points: 24, played: 34, win: 5, draw: 9, lose: 20, goalsFor: 20, goalsAgainst: 78, goalDiff: -58 }
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    stats: [
      { rank: 1, team: { id: 85, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, points: 89, played: 38, win: 29, draw: 2, lose: 7, goalsFor: 94, goalsAgainst: 30, goalDiff: 64 },
      { rank: 2, team: { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png" }, points: 82, played: 38, win: 26, draw: 4, lose: 8, goalsFor: 76, goalsAgainst: 35, goalDiff: 41 },
      { rank: 3, team: { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" }, points: 74, played: 38, win: 23, draw: 5, lose: 10, goalsFor: 70, goalsAgainst: 40, goalDiff: 30 },
      { rank: 4, team: { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }, points: 68, played: 38, win: 20, draw: 8, lose: 10, goalsFor: 68, goalsAgainst: 50, goalDiff: 18 },
      { rank: 5, team: { id: 79, name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" }, points: 62, played: 38, win: 18, draw: 8, lose: 12, goalsFor: 60, goalsAgainst: 54, goalDiff: 6 },
      { rank: 6, team: { id: 94, name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }, points: 58, played: 38, win: 17, draw: 7, lose: 14, goalsFor: 55, goalsAgainst: 52, goalDiff: 3 },
      { rank: 7, team: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" }, points: 54, played: 38, win: 15, draw: 9, lose: 14, goalsFor: 50, goalsAgainst: 55, goalDiff: -5 },
      { rank: 8, team: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" }, points: 52, played: 38, win: 15, draw: 7, lose: 16, goalsFor: 48, goalsAgainst: 58, goalDiff: -10 },
      { rank: 9, team: { id: 83, name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" }, points: 48, played: 38, win: 13, draw: 9, lose: 16, goalsFor: 45, goalsAgainst: 62, goalDiff: -17 },
      { rank: 10, team: { id: 116, name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" }, points: 46, played: 38, win: 12, draw: 10, lose: 16, goalsFor: 42, goalsAgainst: 58, goalDiff: -16 },
      { rank: 11, team: { id: 95, name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/95.png" }, points: 44, played: 38, win: 12, draw: 8, lose: 18, goalsFor: 40, goalsAgainst: 62, goalDiff: -22 },
      { rank: 12, team: { id: 1063, name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" }, points: 42, played: 38, win: 11, draw: 9, lose: 18, goalsFor: 38, goalsAgainst: 65, goalDiff: -27 },
      { rank: 13, team: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }, points: 40, played: 38, win: 10, draw: 10, lose: 18, goalsFor: 35, goalsAgainst: 62, goalDiff: -27 },
      { rank: 14, team: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" }, points: 38, played: 38, win: 10, draw: 8, lose: 20, goalsFor: 32, goalsAgainst: 65, goalDiff: -33 },
      { rank: 15, team: { id: 99, name: "Clermont Foot", logo: "https://media.api-sports.io/football/teams/99.png" }, points: 36, played: 38, win: 9, draw: 9, lose: 20, goalsFor: 30, goalsAgainst: 68, goalDiff: -38 },
      { rank: 16, team: { id: 110, name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" }, points: 34, played: 38, win: 8, draw: 10, lose: 20, goalsFor: 28, goalsAgainst: 70, goalDiff: -42 },
      { rank: 17, team: { id: 111, name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" }, points: 32, played: 38, win: 8, draw: 8, lose: 22, goalsFor: 26, goalsAgainst: 72, goalDiff: -46 },
      { rank: 18, team: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" }, points: 30, played: 38, win: 7, draw: 9, lose: 22, goalsFor: 24, goalsAgainst: 75, goalDiff: -51 },
      { rank: 19, team: { id: 92, name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" }, points: 28, played: 38, win: 6, draw: 10, lose: 22, goalsFor: 22, goalsAgainst: 78, goalDiff: -56 },
      { rank: 20, team: { id: 100, name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" }, points: 26, played: 38, win: 6, draw: 8, lose: 24, goalsFor: 20, goalsAgainst: 80, goalDiff: -60 },
      { rank: 21, team: { id: 96, name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" }, points: 24, played: 38, win: 5, draw: 9, lose: 24, goalsFor: 18, goalsAgainst: 82, goalDiff: -64 },
      { rank: 22, team: { id: 98, name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" }, points: 22, played: 38, win: 4, draw: 10, lose: 24, goalsFor: 16, goalsAgainst: 84, goalDiff: -68 }
    ]
  }
]

export const mockTeamFixturesStats: TeamStat[] = [
  {
    league: {
      id: 39,
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    country: { name: "England" },
    team: [
      {
        id: 50,
        name: "Man City",
        logo: "https://media.api-sports.io/football/teams/50.png",
        nextMatch: {
          fixture: { id: 1001 },
          date: "2025-06-29T17:30:00Z",
          opponent: "Arsenal",
          opponentLogo: "https://media.api-sports.io/football/teams/42.png",
          home: true
        },
        last5: [
          { date: "2025-06-23", opponent: "Man United", result: "W", score: "3-1" },
          { date: "2025-06-17", opponent: "Chelsea", result: "W", score: "2-0" },
          { date: "2025-06-11", opponent: "Liverpool", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Newcastle", result: "W", score: "4-0" },
          { date: "2025-05-30", opponent: "Tottenham", result: "W", score: "2-1" }
        ]
      },
      {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
        nextMatch: {
          fixture: { id: 1001 },
          date: "2025-06-29T17:30:00Z",
          opponent: "Man City",
          opponentLogo: "https://media.api-sports.io/football/teams/50.png",
          home: false
        },
        last5: [
          { date: "2025-06-22", opponent: "Brighton", result: "W", score: "2-0" },
          { date: "2025-06-16", opponent: "Man United", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Chelsea", result: "L", score: "0-2" },
          { date: "2025-06-04", opponent: "Liverpool", result: "W", score: "3-2" },
          { date: "2025-05-29", opponent: "Leeds", result: "W", score: "1-0" }
        ]
      },
      {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png",
        nextMatch: {
          fixture: { id: 1002 },
          date: "2025-06-29T15:00:00Z",
          opponent: "Man United",
          opponentLogo: "https://media.api-sports.io/football/teams/33.png",
          home: true
        },
        last5: [
          { date: "2025-06-23", opponent: "Chelsea", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Tottenham", result: "D", score: "1-1" },
          { date: "2025-06-11", opponent: "Man City", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Arsenal", result: "L", score: "2-3" },
          { date: "2025-05-30", opponent: "Newcastle", result: "W", score: "3-0" }
        ]
      },
      {
        id: 33,
        name: "Man United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        nextMatch: {
          fixture: { id: 1002 },
          date: "2025-06-29T15:00:00Z",
          opponent: "Liverpool",
          opponentLogo: "https://media.api-sports.io/football/teams/40.png",
          home: false
        },
        last5: [
          { date: "2025-06-23", opponent: "Man City", result: "L", score: "1-3" },
          { date: "2025-06-16", opponent: "Arsenal", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Brighton", result: "W", score: "2-0" },
          { date: "2025-06-04", opponent: "West Ham", result: "W", score: "1-0" },
          { date: "2025-05-29", opponent: "Everton", result: "W", score: "3-1" }
        ]
      },
      {
        id: 49,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png",
        nextMatch: {
          fixture: { id: 1003 },
          date: "2025-06-29T19:30:00Z",
          opponent: "Newcastle",
          opponentLogo: "https://media.api-sports.io/football/teams/34.png",
          home: true
        },
        last5: [
          { date: "2025-06-23", opponent: "Liverpool", result: "L", score: "1-2" },
          { date: "2025-06-17", opponent: "Man City", result: "L", score: "0-2" },
          { date: "2025-06-10", opponent: "Arsenal", result: "W", score: "2-0" },
          { date: "2025-06-04", opponent: "Tottenham", result: "D", score: "1-1" },
          { date: "2025-05-29", opponent: "Brighton", result: "W", score: "2-1" }
        ]
      },
      {
        id: 34,
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png",
        nextMatch: {
          fixture: { id: 1003 },
          date: "2025-06-29T19:30:00Z",
          opponent: "Chelsea",
          opponentLogo: "https://media.api-sports.io/football/teams/49.png",
          home: false
        },
        last5: [
          { date: "2025-06-22", opponent: "Tottenham", result: "W", score: "2-0" },
          { date: "2025-06-16", opponent: "West Ham", result: "W", score: "1-0" },
          { date: "2025-06-10", opponent: "Crystal Palace", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Man City", result: "L", score: "0-4" },
          { date: "2025-05-30", opponent: "Liverpool", result: "L", score: "0-3" }
        ]
      },
      {
        id: 47,
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png",
        nextMatch: {
          fixture: { id: 1004 },
          date: "2025-06-29T14:00:00Z",
          opponent: "West Ham",
          opponentLogo: "https://media.api-sports.io/football/teams/48.png",
          home: true
        },
        last5: [
          { date: "2025-06-22", opponent: "Newcastle", result: "L", score: "0-2" },
          { date: "2025-06-17", opponent: "Liverpool", result: "D", score: "1-1" },
          { date: "2025-06-11", opponent: "Brighton", result: "W", score: "3-1" },
          { date: "2025-06-04", opponent: "Chelsea", result: "D", score: "1-1" },
          { date: "2025-05-30", opponent: "Man City", result: "L", score: "1-2" }
        ]
      },
      {
        id: 48,
        name: "West Ham",
        logo: "https://media.api-sports.io/football/teams/48.png",
        nextMatch: {
          fixture: { id: 1004 },
          date: "2025-06-29T14:00:00Z",
          opponent: "Tottenham",
          opponentLogo: "https://media.api-sports.io/football/teams/47.png",
          home: false
        },
        last5: [
          { date: "2025-06-21", opponent: "Wolves", result: "W", score: "2-0" },
          { date: "2025-06-16", opponent: "Newcastle", result: "L", score: "0-1" },
          { date: "2025-06-09", opponent: "Leicester", result: "W", score: "3-1" },
          { date: "2025-06-04", opponent: "Man United", result: "L", score: "0-1" },
          { date: "2025-05-28", opponent: "Fulham", result: "D", score: "1-1" }
        ]
      },
      {
        id: 51,
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
        nextMatch: {
          fixture: { id: 1005 },
          date: "2025-06-29T16:30:00Z",
          opponent: "Brentford",
          opponentLogo: "https://media.api-sports.io/football/teams/55.png",
          home: true
        },
        last5: [
          { date: "2025-06-22", opponent: "Arsenal", result: "L", score: "0-2" },
          { date: "2025-06-17", opponent: "Aston Villa", result: "W", score: "2-1" },
          { date: "2025-06-11", opponent: "Tottenham", result: "L", score: "1-3" },
          { date: "2025-06-10", opponent: "Man United", result: "L", score: "0-2" },
          { date: "2025-05-29", opponent: "Chelsea", result: "L", score: "1-2" }
        ]
      },
      {
        id: 55,
        name: "Brentford",
        logo: "https://media.api-sports.io/football/teams/55.png",
        nextMatch: {
          fixture: { id: 1005 },
          date: "2025-07-01T12:30:00Z",
          opponent: "Brighton",
          opponentLogo: "https://media.api-sports.io/football/teams/51.png",
          home: false
        },
        last5: [
          { date: "2025-06-27", opponent: "Southampton", result: "W", score: "3-1" },
          { date: "2025-06-20", opponent: "Bournemouth", result: "L", score: "0-1" },
          { date: "2025-06-13", opponent: "Everton", result: "D", score: "1-1" },
          { date: "2025-06-09", opponent: "Leeds United", result: "D", score: "1-1" },
          { date: "2025-05-30", opponent: "Crystal Palace", result: "W", score: "2-1" }
        ]
      },
      {
        id: 52,
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
        nextMatch: {
          fixture: { id: 1006 },
          date: "2025-06-30T15:00:00Z",
          opponent: "Everton",
          opponentLogo: "https://media.api-sports.io/football/teams/45.png",
          home: true
        },
        last5: [
          { date: "2025-06-23", opponent: "Fulham", result: "W", score: "2-1" },
          { date: "2025-06-18", opponent: "Wolves", result: "D", score: "0-0" },
          { date: "2025-06-10", opponent: "Newcastle", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Leicester", result: "W", score: "2-0" },
          { date: "2025-05-30", opponent: "Brentford", result: "L", score: "1-2" }
        ]
      },
      {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
        nextMatch: {
          fixture: { id: 1006 },
          date: "2025-06-30T19:45:00Z",
          opponent: "Crystal Palace",
          opponentLogo: "https://media.api-sports.io/football/teams/52.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Aston Villa", result: "L", score: "0-2" },
          { date: "2025-06-19", opponent: "Leeds United", result: "W", score: "2-1" },
          { date: "2025-06-13", opponent: "Brentford", result: "D", score: "1-1" },
          { date: "2025-06-08", opponent: "Fulham", result: "L", score: "0-1" },
          { date: "2025-05-29", opponent: "Man United", result: "L", score: "1-3" }
        ]
      },
      {
        id: 39,
        name: "Wolves",
        logo: "https://media.api-sports.io/football/teams/39.png",
        nextMatch: {
          fixture: { id: 1007 },
          date: "2025-06-30T19:45:00Z",
          opponent: "Burnley",
          opponentLogo: "https://media.api-sports.io/football/teams/44.png",
          home: true
        },
        last5: [
          { date: "2025-06-21", opponent: "West Ham", result: "L", score: "0-2" },
          { date: "2025-06-18", opponent: "Crystal Palace", result: "D", score: "0-0" },
          { date: "2025-06-11", opponent: "Southampton", result: "W", score: "1-0" },
          { date: "2025-06-07", opponent: "Burnley", result: "W", score: "1-0" },
          { date: "2025-05-31", opponent: "Bournemouth", result: "W", score: "2-1" }
        ]
      },
      {
        id: 44,
        name: "Burnley",
        logo: "https://media.api-sports.io/football/teams/44.png",
        nextMatch: {
          fixture: { id: 1007 },
          date: "2025-06-30T19:45:00Z",
          opponent: "Wolves",
          opponentLogo: "https://media.api-sports.io/football/teams/39.png",
          home: false
        },
        last5: [
          { date: "2025-06-25", opponent: "Fulham", result: "W", score: "2-1" },
          { date: "2025-06-20", opponent: "Leeds United", result: "L", score: "0-1" },
          { date: "2025-06-14", opponent: "Brentford", result: "D", score: "1-1" },
          { date: "2025-06-09", opponent: "Crystal Palace", result: "L", score: "0-2" },
          { date: "2025-06-01", opponent: "Nottingham Forest", result: "W", score: "2-0" }
        ]
      },
      {
        id: 66,
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
        nextMatch: {
          fixture: { id: 1008 },
          date: "2025-06-30T17:00:00Z",
          opponent: "Nottingham Forest",
          opponentLogo: "https://media.api-sports.io/football/teams/65.png",
          home: true
        },
        last5: [
          { date: "2025-06-24", opponent: "Everton", result: "W", score: "2-0" },
          { date: "2025-06-17", opponent: "Brighton", result: "L", score: "1-2" },
          { date: "2025-06-12", opponent: "Southampton", result: "W", score: "3-0" },
          { date: "2025-06-06", opponent: "Bournemouth", result: "W", score: "2-1" },
          { date: "2025-05-31", opponent: "Leeds United", result: "D", score: "1-1" }
        ]
      },
      {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media.api-sports.io/football/teams/65.png",
        nextMatch: {
          fixture: { id: 1008 },
          date: "2025-06-30T17:00:00Z",
          opponent: "Aston Villa",
          opponentLogo: "https://media.api-sports.io/football/teams/66.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Everton", result: "W", score: "2-0" },
          { date: "2025-06-17", opponent: "Brighton", result: "L", score: "1-2" },
          { date: "2025-06-12", opponent: "Southampton", result: "W", score: "3-0" },
          { date: "2025-06-06", opponent: "Bournemouth", result: "W", score: "2-1" },
          { date: "2025-05-31", opponent: "Leeds United", result: "D", score: "1-1" }
        ]
      },
      {
        id: 39,
        name: "Wolves",
        logo: "https://media.api-sports.io/football/teams/39.png",
        nextMatch: {
          fixture: { id: 1009 },
          date: "2025-06-30T19:45:00Z",
          opponent: "Everton",
          opponentLogo: "https://media.api-sports.io/football/teams/45.png",
          home: true
        },
        last5: [
          { date: "2025-06-21", opponent: "West Ham", result: "L", score: "0-2" },
          { date: "2025-06-18", opponent: "Crystal Palace", result: "D", score: "0-0" },
          { date: "2025-06-11", opponent: "Southampton", result: "W", score: "1-0" },
          { date: "2025-06-07", opponent: "Burnley", result: "W", score: "1-0" },
          { date: "2025-05-31", opponent: "Bournemouth", result: "W", score: "2-1" }
        ]
      },
      {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png",
        nextMatch: {
          fixture: { id: 1009 },
          date: "2025-06-30T19:45:00Z",
          opponent: "Wolves",
          opponentLogo: "https://media.api-sports.io/football/teams/39.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Aston Villa", result: "L", score: "0-2" },
          { date: "2025-06-19", opponent: "Leeds United", result: "W", score: "2-1" },
          { date: "2025-06-13", opponent: "Brentford", result: "D", score: "1-1" },
          { date: "2025-06-08", opponent: "Fulham", result: "L", score: "0-1" },
          { date: "2025-05-29", opponent: "Man United", result: "L", score: "1-3" }
        ]
      },
      {
        id: 46,
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/46.png",
        nextMatch: {
          fixture: { id: 1010 },
          date: "2025-07-01T15:00:00Z",
          opponent: "Leeds United",
          opponentLogo: "https://media.api-sports.io/football/teams/63.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Bournemouth", result: "W", score: "3-1" },
          { date: "2025-06-20", opponent: "Southampton", result: "D", score: "2-2" },
          { date: "2025-06-09", opponent: "West Ham", result: "L", score: "1-3" },
          { date: "2025-06-05", opponent: "Crystal Palace", result: "L", score: "0-2" },
          { date: "2025-06-01", opponent: "Nottingham Forest", result: "W", score: "2-0" }
        ]
      },
      {
        id: 63,
        name: "Leeds United",
        logo: "https://media.api-sports.io/football/teams/63.png",
        nextMatch: {
          fixture: { id: 1010 },
          date: "2025-07-01T15:00:00Z",
          opponent: "Leicester",
          opponentLogo: "https://media.api-sports.io/football/teams/46.png",
          home: false
        },
        last5: [
          { date: "2025-06-26", opponent: "Fulham", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Everton", result: "L", score: "1-2" },
          { date: "2025-06-14", opponent: "Bournemouth", result: "W", score: "2-0" },
          { date: "2025-06-09", opponent: "Brentford", result: "D", score: "1-1" },
          { date: "2025-05-31", opponent: "Aston Villa", result: "D", score: "1-1" }
        ]
      },
      {
        id: 36,
        name: "Fulham",
        logo: "https://media.api-sports.io/football/teams/36.png",
        nextMatch: {
          fixture: { id: 1011 },
          date: "2025-07-01T17:30:00Z",
          opponent: "Southampton",
          opponentLogo: "https://media.api-sports.io/football/teams/41.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Leeds United", result: "W", score: "2-1" },
          { date: "2025-06-23", opponent: "Crystal Palace", result: "L", score: "1-2" },
          { date: "2025-06-16", opponent: "Nottingham Forest", result: "W", score: "3-0" },
          { date: "2025-06-08", opponent: "Everton", result: "W", score: "1-0" },
          { date: "2025-05-28", opponent: "West Ham", result: "D", score: "1-1" }
        ]
      },
      {
        id: 41,
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png",
        nextMatch: {
          fixture: { id: 1011 },
          date: "2025-07-01T17:30:00Z",
          opponent: "Fulham",
          opponentLogo: "https://media.api-sports.io/football/teams/36.png",
          home: false
        },
        last5: [
          { date: "2025-06-27", opponent: "Brentford", result: "L", score: "1-3" },
          { date: "2025-06-20", opponent: "Leicester", result: "D", score: "2-2" },
          { date: "2025-06-12", opponent: "Aston Villa", result: "L", score: "0-3" },
          { date: "2025-06-11", opponent: "Wolves", result: "L", score: "0-1" },
          { date: "2025-06-03", opponent: "Nottingham Forest", result: "W", score: "1-0" }
        ]
      },
      {
        id: 55,
        name: "Brentford",
        logo: "https://media.api-sports.io/football/teams/55.png",
        nextMatch: {
          fixture: { id: 1012 },
          date: "2025-07-01T12:30:00Z",
          opponent: "Bournemouth",
          opponentLogo: "https://media.api-sports.io/football/teams/35.png",
          home: false
        },
        last5: [
          { date: "2025-06-27", opponent: "Southampton", result: "W", score: "3-1" },
          { date: "2025-06-20", opponent: "Bournemouth", result: "L", score: "0-1" },
          { date: "2025-06-13", opponent: "Everton", result: "D", score: "1-1" },
          { date: "2025-06-09", opponent: "Leeds United", result: "D", score: "1-1" },
          { date: "2025-05-30", opponent: "Crystal Palace", result: "W", score: "2-1" }
        ]
      },
      {
        id: 35,
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png",
        nextMatch: {
          fixture: { id: 1012 },
          date: "2025-07-01T12:30:00Z",
          opponent: "Brentford",
          opponentLogo: "https://media.api-sports.io/football/teams/55.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Leicester", result: "L", score: "1-3" },
          { date: "2025-06-20", opponent: "Brentford", result: "W", score: "1-0" },
          { date: "2025-06-14", opponent: "Leeds United", result: "L", score: "0-2" },
          { date: "2025-06-06", opponent: "Aston Villa", result: "L", score: "1-2" },
          { date: "2025-05-31", opponent: "Wolves", result: "L", score: "1-2" }
        ]
      }
    ]
  },
  {
    league: {
      id: 140,
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    country: { name: "Spain" },
    team: [
      {
        id: 86,
        name: "Real Madrid",
        logo: "https://media.api-sports.io/football/teams/86.png",
        nextMatch: {
          fixture: { id: 2001 },
          date: "2025-06-28T20:00:00Z",
          opponent: "Barcelona",
          opponentLogo: "https://media.api-sports.io/football/teams/529.png",
          home: true
        },
        last5: [
          { date: "2025-06-22", opponent: "Atletico", result: "W", score: "2-1" },
          { date: "2025-06-16", opponent: "Valencia", result: "W", score: "3-0" },
          { date: "2025-06-10", opponent: "Sevilla", result: "W", score: "2-0" },
          { date: "2025-06-04", opponent: "Betis", result: "L", score: "1-2" },
          { date: "2025-05-30", opponent: "Osasuna", result: "W", score: "2-0" }
        ]
      },
      {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png",
        nextMatch: {
          fixture: { id: 2001 },
          date: "2025-06-28T20:00:00Z",
          opponent: "Real Madrid",
          opponentLogo: "https://media.api-sports.io/football/teams/86.png",
          home: false
        },
        last5: [
          { date: "2025-06-23", opponent: "Getafe", result: "W", score: "4-1" },
          { date: "2025-06-17", opponent: "Sevilla", result: "D", score: "2-2" },
          { date: "2025-06-11", opponent: "Valencia", result: "W", score: "1-0" },
          { date: "2025-06-05", opponent: "Atletico", result: "L", score: "0-1" },
          { date: "2025-05-31", opponent: "Mallorca", result: "W", score: "3-0" }
        ]
      },
      {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media.api-sports.io/football/teams/530.png",
        nextMatch: {
          fixture: { id: 2002 },
          date: "2025-06-28T18:00:00Z",
          opponent: "Sevilla",
          opponentLogo: "https://media.api-sports.io/football/teams/559.png",
          home: true
        },
        last5: [
          { date: "2025-06-22", opponent: "Real Madrid", result: "L", score: "1-2" },
          { date: "2025-06-17", opponent: "Valencia", result: "W", score: "2-0" },
          { date: "2025-06-11", opponent: "Real Betis", result: "W", score: "3-1" },
          { date: "2025-06-05", opponent: "Barcelona", result: "W", score: "1-0" },
          { date: "2025-05-30", opponent: "Athletic Bilbao", result: "D", score: "1-1" }
        ]
      },
      {
        id: 559,
        name: "Sevilla",
        logo: "https://media.api-sports.io/football/teams/559.png",
        nextMatch: {
          fixture: { id: 2002 },
          date: "2025-06-28T18:00:00Z",
          opponent: "Atletico Madrid",
          opponentLogo: "https://media.api-sports.io/football/teams/530.png",
          home: false
        },
        last5: [
          { date: "2025-06-23", opponent: "Villarreal", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Barcelona", result: "D", score: "2-2" },
          { date: "2025-06-10", opponent: "Real Madrid", result: "L", score: "0-2" },
          { date: "2025-06-04", opponent: "Real Sociedad", result: "W", score: "1-0" },
          { date: "2025-05-29", opponent: "Getafe", result: "W", score: "3-0" }
        ]
      },
      {
        id: 532,
        name: "Valencia",
        logo: "https://media.api-sports.io/football/teams/532.png",
        nextMatch: {
          fixture: { id: 2003 },
          date: "2025-06-29T20:00:00Z",
          opponent: "Real Sociedad",
          opponentLogo: "https://media.api-sports.io/football/teams/548.png",
          home: true
        },
        last5: [
          { date: "2025-06-24", opponent: "Osasuna", result: "W", score: "2-0" },
          { date: "2025-06-17", opponent: "Atletico Madrid", result: "L", score: "0-2" },
          { date: "2025-06-16", opponent: "Real Madrid", result: "L", score: "0-3" },
          { date: "2025-06-11", opponent: "Barcelona", result: "L", score: "0-1" },
          { date: "2025-06-05", opponent: "Celta Vigo", result: "W", score: "2-1" }
        ]
      },
      {
        id: 548,
        name: "Real Sociedad",
        logo: "https://media.api-sports.io/football/teams/548.png",
        nextMatch: {
          fixture: { id: 2003 },
          date: "2025-06-29T20:00:00Z",
          opponent: "Valencia",
          opponentLogo: "https://media.api-sports.io/football/teams/532.png",
          home: false
        },
        last5: [
          { date: "2025-06-25", opponent: "Athletic Bilbao", result: "D", score: "1-1" },
          { date: "2025-06-18", opponent: "Mallorca", result: "W", score: "2-0" },
          { date: "2025-06-12", opponent: "Espanyol", result: "W", score: "3-1" },
          { date: "2025-06-04", opponent: "Sevilla", result: "L", score: "0-1" },
          { date: "2025-05-31", opponent: "Rayo Vallecano", result: "W", score: "2-1" }
        ]
      },
      {
        id: 543,
        name: "Real Betis",
        logo: "https://media.api-sports.io/football/teams/543.png",
        nextMatch: {
          fixture: { id: 2004 },
          date: "2025-06-29T21:30:00Z",
          opponent: "Getafe",
          opponentLogo: "https://media.api-sports.io/football/teams/546.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Cadiz", result: "W", score: "3-0" },
          { date: "2025-06-19", opponent: "Granada", result: "D", score: "1-1" },
          { date: "2025-06-11", opponent: "Atletico Madrid", result: "L", score: "1-3" },
          { date: "2025-06-04", opponent: "Real Madrid", result: "W", score: "2-1" },
          { date: "2025-05-30", opponent: "Alaves", result: "W", score: "2-0" }
        ]
      },
      {
        id: 546,
        name: "Getafe",
        logo: "https://media.api-sports.io/football/teams/546.png",
        nextMatch: {
          fixture: { id: 2004 },
          date: "2025-06-29T21:30:00Z",
          opponent: "Real Betis",
          opponentLogo: "https://media.api-sports.io/football/teams/543.png",
          home: false
        },
        last5: [
          { date: "2025-06-23", opponent: "Barcelona", result: "L", score: "1-4" },
          { date: "2025-06-17", opponent: "Osasuna", result: "W", score: "1-0" },
          { date: "2025-06-09", opponent: "Espanyol", result: "D", score: "1-1" },
          { date: "2025-06-06", opponent: "Alaves", result: "L", score: "0-1" },
          { date: "2025-05-29", opponent: "Sevilla", result: "L", score: "0-3" }
        ]
      },
      {
        id: 538,
        name: "Celta Vigo",
        logo: "https://media.api-sports.io/football/teams/538.png",
        nextMatch: {
          fixture: { id: 2005 },
          date: "2025-06-30T19:00:00Z",
          opponent: "Villarreal",
          opponentLogo: "https://media.api-sports.io/football/teams/533.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "Levante", result: "W", score: "2-1" },
          { date: "2025-06-22", opponent: "Alaves", result: "D", score: "0-0" },
          { date: "2025-06-15", opponent: "Granada", result: "W", score: "3-0" },
          { date: "2025-06-05", opponent: "Valencia", result: "L", score: "1-2" },
          { date: "2025-06-02", opponent: "Elche", result: "W", score: "1-0" }
        ]
      },
      {
        id: 533,
        name: "Villarreal",
        logo: "https://media.api-sports.io/football/teams/533.png",
        nextMatch: {
          fixture: { id: 2005 },
          date: "2025-06-30T19:00:00Z",
          opponent: "Celta Vigo",
          opponentLogo: "https://media.api-sports.io/football/teams/538.png",
          home: false
        },
        last5: [
          { date: "2025-06-23", opponent: "Sevilla", result: "L", score: "1-2" },
          { date: "2025-06-20", opponent: "Elche", result: "W", score: "2-0" },
          { date: "2025-06-13", opponent: "Levante", result: "W", score: "3-1" },
          { date: "2025-06-07", opponent: "Mallorca", result: "D", score: "1-1" },
          { date: "2025-06-01", opponent: "Granada", result: "W", score: "2-1" }
        ]
      },
      {
        id: 798,
        name: "Mallorca",
        logo: "https://media.api-sports.io/football/teams/798.png",
        nextMatch: {
          fixture: { id: 2006 },
          date: "2025-07-01T18:30:00Z",
          opponent: "Osasuna",
          opponentLogo: "https://media.api-sports.io/football/teams/549.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Espanyol", result: "W", score: "2-0" },
          { date: "2025-06-18", opponent: "Real Sociedad", result: "L", score: "0-2" },
          { date: "2025-06-15", opponent: "Alaves", result: "W", score: "1-0" },
          { date: "2025-06-07", opponent: "Villarreal", result: "D", score: "1-1" },
          { date: "2025-05-31", opponent: "Barcelona", result: "L", score: "0-3" }
        ]
      },
      {
        id: 727,
        name: "Osasuna",
        logo: "https://media.api-sports.io/football/teams/727.png",
        nextMatch: {
          fixture: { id: 2006 },
          date: "2025-07-01T18:30:00Z",
          opponent: "Mallorca",
          opponentLogo: "https://media.api-sports.io/football/teams/798.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Valencia", result: "L", score: "0-2" },
          { date: "2025-06-17", opponent: "Getafe", result: "L", score: "0-1" },
          { date: "2025-06-12", opponent: "Rayo Vallecano", result: "W", score: "2-1" },
          { date: "2025-06-08", opponent: "Athletic Bilbao", result: "W", score: "1-0" },
          { date: "2025-05-30", opponent: "Real Madrid", result: "L", score: "0-2" }
        ]
      },
      {
        id: 715,
        name: "Granada",
        logo: "https://media.api-sports.io/football/teams/715.png",
        nextMatch: {
          fixture: { id: 2007 },
          date: "2025-07-02T21:00:00Z",
          opponent: "Alaves",
          opponentLogo: "https://media.api-sports.io/football/teams/537.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Alaves", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Real Betis", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Celta Vigo", result: "L", score: "0-3" },
          { date: "2025-06-11", opponent: "Cadiz", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Elche", result: "D", score: "0-0" }
        ]
      },
      {
        id: 537,
        name: "Alaves",
        logo: "https://media.api-sports.io/football/teams/537.png",
        nextMatch: {
          fixture: { id: 2007 },
          date: "2025-07-02T21:00:00Z",
          opponent: "Granada",
          opponentLogo: "https://media.api-sports.io/football/teams/715.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Alaves", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Real Betis", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Celta Vigo", result: "L", score: "0-3" },
          { date: "2025-06-11", opponent: "Cadiz", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Elche", result: "D", score: "0-0" }
        ]
      },
      {
        id: 728,
        name: "Rayo Vallecano",
        logo: "https://media.api-sports.io/football/teams/728.png",
        nextMatch: {
          fixture: { id: 2008 },
          date: "2025-07-01T20:00:00Z",
          opponent: "Cadiz",
          opponentLogo: "https://media.api-sports.io/football/teams/724.png",
          home: false
        },
        last5: [
          { date: "2025-06-29", opponent: "Elche", result: "D", score: "1-1" },
          { date: "2025-06-21", opponent: "Athletic Bilbao", result: "L", score: "0-2" },
          { date: "2025-06-12", opponent: "Osasuna", result: "L", score: "1-2" },
          { date: "2025-06-03", opponent: "Espanyol", result: "L", score: "0-2" },
          { date: "2025-05-31", opponent: "Real Sociedad", result: "L", score: "1-2" }
        ]
      },
      {
        id: 724,
        name: "Cadiz",
        logo: "https://media.api-sports.io/football/teams/724.png",
        nextMatch: {
          fixture: { id: 2008 },
          date: "2025-07-01T20:00:00Z",
          opponent: "Rayo Vallecano",
          opponentLogo: "https://media.api-sports.io/football/teams/547.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Real Betis", result: "L", score: "0-3" },
          { date: "2025-06-23", opponent: "Espanyol", result: "L", score: "1-2" },
          { date: "2025-06-14", opponent: "Athletic Bilbao", result: "L", score: "0-1" },
          { date: "2025-06-11", opponent: "Granada", result: "D", score: "1-1" },
          { date: "2025-06-04", opponent: "Levante", result: "W", score: "2-0" }
        ]
      },
      {
        id: 797,
        name: "Elche",
        logo: "https://media.api-sports.io/football/teams/797.png",
        nextMatch: {
          fixture: { id: 2009 },
          date: "2025-07-02T19:00:00Z",
          opponent: "Alaves",
          opponentLogo: "https://media.api-sports.io/football/teams/537.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Rayo Vallecano", result: "D", score: "1-1" },
          { date: "2025-06-20", opponent: "Villarreal", result: "L", score: "0-2" },
          { date: "2025-06-16", opponent: "Levante", result: "W", score: "2-1" },
          { date: "2025-06-10", opponent: "Granada", result: "D", score: "0-0" },
          { date: "2025-06-02", opponent: "Celta Vigo", result: "L", score: "0-1" }
        ]
      },
      {
        id: 537,
        name: "Alaves",
        logo: "https://media.api-sports.io/football/teams/537.png",
        nextMatch: {
          fixture: { id: 2009 },
          date: "2025-07-02T19:00:00Z",
          opponent: "Elche",
          opponentLogo: "https://media.api-sports.io/football/teams/797.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Granada", result: "W", score: "2-1" },
          { date: "2025-06-22", opponent: "Celta Vigo", result: "D", score: "0-0" },
          { date: "2025-06-15", opponent: "Mallorca", result: "L", score: "0-1" },
          { date: "2025-06-06", opponent: "Getafe", result: "W", score: "1-0" },
          { date: "2025-05-30", opponent: "Real Betis", result: "L", score: "0-2" }
        ]
      },
      {
        id: 715,
        name: "Granada",
        logo: "https://media.api-sports.io/football/teams/715.png",
        nextMatch: {
          fixture: { id: 2010 },
          date: "2025-07-02T21:00:00Z",
          opponent: "Levante",
          opponentLogo: "https://media.api-sports.io/football/teams/542.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Alaves", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Real Betis", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Celta Vigo", result: "L", score: "0-3" },
          { date: "2025-06-11", opponent: "Cadiz", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Elche", result: "D", score: "0-0" }
        ]
      },
      {
        id: 542,
        name: "Levante",
        logo: "https://media.api-sports.io/football/teams/542.png",
        nextMatch: {
          fixture: { id: 2010 },
          date: "2025-07-02T21:00:00Z",
          opponent: "Granada",
          opponentLogo: "https://media.api-sports.io/football/teams/715.png",
          home: false
        },
        last5: [
          { date: "2025-06-27", opponent: "Celta Vigo", result: "L", score: "1-2" },
          { date: "2025-06-16", opponent: "Elche", result: "L", score: "1-2" },
          { date: "2025-06-13", opponent: "Villarreal", result: "L", score: "1-3" },
          { date: "2025-06-04", opponent: "Cadiz", result: "L", score: "0-2" },
          { date: "2025-06-01", opponent: "Mallorca", result: "W", score: "2-1" }
        ]
      },
      {
        id: 531,
        name: "Athletic Bilbao",
        logo: "https://media.api-sports.io/football/teams/531.png",
        nextMatch: {
          fixture: { id: 2011 },
          date: "2025-06-30T16:15:00Z",
          opponent: "Espanyol",
          opponentLogo: "https://media.api-sports.io/football/teams/540.png",
          home: false
        },
        last5: [
          { date: "2025-06-25", opponent: "Real Sociedad", result: "D", score: "1-1" },
          { date: "2025-06-21", opponent: "Rayo Vallecano", result: "W", score: "2-0" },
          { date: "2025-06-14", opponent: "Cadiz", result: "W", score: "1-0" },
          { date: "2025-06-08", opponent: "Osasuna", result: "L", score: "0-1" },
          { date: "2025-05-30", opponent: "Atletico Madrid", result: "D", score: "1-1" }
        ]
      },
      {
        id: 540,
        name: "Espanyol",
        logo: "https://media.api-sports.io/football/teams/540.png",
        nextMatch: {
          fixture: { id: 2011 },
          date: "2025-06-30T16:15:00Z",
          opponent: "Athletic Bilbao",
          opponentLogo: "https://media.api-sports.io/football/teams/531.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Mallorca", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Cadiz", result: "W", score: "2-1" },
          { date: "2025-06-12", opponent: "Real Sociedad", result: "L", score: "1-3" },
          { date: "2025-06-09", opponent: "Getafe", result: "D", score: "1-1" },
          { date: "2025-06-03", opponent: "Rayo Vallecano", result: "W", score: "2-0" }
        ]
      },
      {
        id: 540,
        name: "Espanyol",
        logo: "https://media.api-sports.io/football/teams/540.png",
        nextMatch: {
          fixture: { id: 2012 },
          date: "2025-06-30T16:15:00Z",
          opponent: "Celta Vigo",
          opponentLogo: "https://media.api-sports.io/football/teams/538.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Mallorca", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Cadiz", result: "W", score: "2-1" },
          { date: "2025-06-12", opponent: "Real Sociedad", result: "L", score: "1-3" },
          { date: "2025-06-09", opponent: "Getafe", result: "D", score: "1-1" },
          { date: "2025-06-03", opponent: "Rayo Vallecano", result: "W", score: "2-0" }
        ]
      },
      {
        id: 538,
        name: "Celta Vigo",
        logo: "https://media.api-sports.io/football/teams/538.png",
        nextMatch: {
          fixture: { id: 2012 },
          date: "2025-06-30T16:15:00Z",
          opponent: "Espanyol",
          opponentLogo: "https://media.api-sports.io/football/teams/540.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Mallorca", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Cadiz", result: "W", score: "2-1" },
          { date: "2025-06-12", opponent: "Real Sociedad", result: "L", score: "1-3" },
          { date: "2025-06-09", opponent: "Getafe", result: "D", score: "1-1" },
          { date: "2025-06-03", opponent: "Rayo Vallecano", result: "W", score: "2-0" }
        ]
      },
    ]
  },
  {
    league: {
      id: 135,
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    country: { name: "Italy" },
    team: [
      {
        id: 505,
        name: "Inter Milan",
        logo: "https://media.api-sports.io/football/teams/505.png",
        nextMatch: {
          fixture: { id: 3001 },
          date: "2025-06-27T18:00:00Z",
          opponent: "Juventus",
          opponentLogo: "https://media.api-sports.io/football/teams/496.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Roma", result: "W", score: "1-0" },
          { date: "2025-06-19", opponent: "Napoli", result: "W", score: "2-1" },
          { date: "2025-06-13", opponent: "Juventus", result: "D", score: "2-2" },
          { date: "2025-06-07", opponent: "Lazio", result: "W", score: "3-0" },
          { date: "2025-06-02", opponent: "Fiorentina", result: "W", score: "2-1" }
        ]
      },
      {
        id: 496,
        name: "Juventus",
        logo: "https://media.api-sports.io/football/teams/496.png",
        nextMatch: {
          fixture: { id: 3001 },
          date: "2025-06-27T18:00:00Z",
          opponent: "Inter Milan",
          opponentLogo: "https://media.api-sports.io/football/teams/505.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Roma", result: "W", score: "1-0" },
          { date: "2025-06-19", opponent: "Napoli", result: "W", score: "2-1" },
          { date: "2025-06-13", opponent: "Juventus", result: "D", score: "2-2" },
          { date: "2025-06-07", opponent: "Lazio", result: "W", score: "3-0" },
          { date: "2025-06-02", opponent: "Fiorentina", result: "W", score: "2-1" }
        ]
      },
      {
        id: 489,
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/489.png",
        nextMatch: {
          fixture: { id: 3002 },
          date: "2025-06-27T20:45:00Z",
          opponent: "Napoli",
          opponentLogo: "https://media.api-sports.io/football/teams/492.png",
          home: true
        },
        last5: [
          { date: "2025-06-24", opponent: "Lazio", result: "L", score: "0-1" },
          { date: "2025-06-18", opponent: "Napoli", result: "W", score: "2-1" },
          { date: "2025-06-12", opponent: "Juventus", result: "W", score: "3-1" },
          { date: "2025-06-06", opponent: "Fiorentina", result: "D", score: "0-0" },
          { date: "2025-06-01", opponent: "Roma", result: "W", score: "2-0" }
        ]
      },
      {
        id: 497,
        name: "Roma",
        logo: "https://media.api-sports.io/football/teams/497.png",
        nextMatch: {
          fixture: { id: 3003 },
          date: "2025-06-28T20:45:00Z",
          opponent: "Lazio",
          opponentLogo: "https://media.api-sports.io/football/teams/487.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Inter Milan", result: "L", score: "0-1" },
          { date: "2025-06-16", opponent: "Napoli", result: "L", score: "1-3" },
          { date: "2025-06-15", opponent: "Juventus", result: "L", score: "0-1" },
          { date: "2025-06-09", opponent: "Atalanta", result: "W", score: "2-1" },
          { date: "2025-06-01", opponent: "AC Milan", result: "L", score: "0-2" }
        ]
      },
      {
        id: 487,
        name: "Lazio",
        logo: "https://media.api-sports.io/football/teams/487.png",
        nextMatch: {
          fixture: { id: 3003 },
          date: "2025-06-28T20:45:00Z",
          opponent: "Roma",
          opponentLogo: "https://media.api-sports.io/football/teams/497.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "AC Milan", result: "W", score: "1-0" },
          { date: "2025-06-22", opponent: "Napoli", result: "L", score: "0-2" },
          { date: "2025-06-09", opponent: "Juventus", result: "W", score: "2-0" },
          { date: "2025-06-07", opponent: "Inter Milan", result: "L", score: "0-3" },
          { date: "2025-06-03", opponent: "Fiorentina", result: "D", score: "1-1" }
        ]
      },
      {
        id: 494,
        name: "Torino",
        logo: "https://media.api-sports.io/football/teams/494.png",
        nextMatch: {
          fixture: { id: 3004 },
          date: "2025-06-29T18:30:00Z",
          opponent: "Fiorentina",
          opponentLogo: "https://media.api-sports.io/football/teams/502.png",
          home: false
        },
        last5: [
          { date: "2025-06-26", opponent: "Atalanta", result: "L", score: "1-3" },
          { date: "2025-06-22", opponent: "Sampdoria", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Cagliari", result: "W", score: "1-0" },
          { date: "2025-06-11", opponent: "Venezia", result: "D", score: "2-2" },
          { date: "2025-06-05", opponent: "Spezia", result: "W", score: "3-0" }
        ]
      },
      {
        id: 488,
        name: "Udinese",
        logo: "https://media.api-sports.io/football/teams/488.png",
        nextMatch: {
          fixture: { id: 3005 },
          date: "2025-06-29T20:30:00Z",
          opponent: "Sampdoria",
          opponentLogo: "https://media.api-sports.io/football/teams/584.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "Bologna", result: "L", score: "1-2" },
          { date: "2025-06-23", opponent: "Hellas Verona", result: "D", score: "0-0" },
          { date: "2025-06-16", opponent: "Atalanta", result: "D", score: "1-1" },
          { date: "2025-06-13", opponent: "Genoa", result: "W", score: "2-1" },
          { date: "2025-06-08", opponent: "Venezia", result: "L", score: "1-2" }
        ]
      },
      {
        id: 999,
        name: "Sampdoria",
        logo: "https://media.api-sports.io/football/teams/584.png",
        nextMatch: {
          fixture: { id: 3005 },
          date: "2025-06-29T20:30:00Z",
          opponent: "Udinese",
          opponentLogo: "https://media.api-sports.io/football/teams/488.png",
          home: false
        },
        last5: [
          { date: "2025-06-28", opponent: "Venezia", result: "L", score: "0-1" },
          { date: "2025-06-22", opponent: "Torino", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Cagliari", result: "W", score: "2-0" },
          { date: "2025-06-15", opponent: "Empoli", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Hellas Verona", result: "L", score: "0-2" }
        ]
      },
      {
        id: 514,
        name: "Salernitana",
        logo: "https://media.api-sports.io/football/teams/514.png",
        nextMatch: {
          fixture: { id: 3007 },
          date: "2025-06-30T17:00:00Z",
          opponent: "Spezia",
          opponentLogo: "https://media.api-sports.io/football/teams/515.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Genoa", result: "D", score: "1-1" },
          { date: "2025-06-28", opponent: "Cagliari", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Hellas Verona", result: "W", score: "1-0" },
          { date: "2025-06-14", opponent: "Bologna", result: "L", score: "1-2" },
          { date: "2025-06-11", opponent: "Venezia", result: "W", score: "2-1" }
        ]
      },
      {
        id: 1515,
        name: "Spezia",
        logo: "https://media.api-sports.io/football/teams/515.png",
        nextMatch: {
          fixture: { id: 3007 },
          date: "2025-06-30T17:00:00Z",
          opponent: "Salernitana",
          opponentLogo: "https://media.api-sports.io/football/teams/514.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Bologna", result: "L", score: "1-3" },
          { date: "2025-06-26", opponent: "Hellas Verona", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Genoa", result: "L", score: "0-2" },
          { date: "2025-06-14", opponent: "Cagliari", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Torino", result: "L", score: "0-3" }
        ]
      },
      {
        id: 499,
        name: "Atalanta",
        logo: "https://media.api-sports.io/football/teams/499.png",
        nextMatch: {
          fixture: { id: 3008 },
          date: "2025-06-29T18:30:00Z",
          opponent: "Fiorentina",
          opponentLogo: "https://media.api-sports.io/football/teams/502.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Torino", result: "W", score: "3-1" },
          { date: "2025-06-21", opponent: "Sassuolo", result: "W", score: "2-0" },
          { date: "2025-06-16", opponent: "Udinese", result: "D", score: "1-1" },
          { date: "2025-06-09", opponent: "Roma", result: "L", score: "1-2" },
          { date: "2025-06-04", opponent: "Bologna", result: "W", score: "4-0" }
        ]
      },
      {
        id: 502,
        name: "Fiorentina",
        logo: "https://media.api-sports.io/football/teams/502.png",
        nextMatch: {
          fixture: { id: 3004 },
          date: "2025-06-29T18:30:00Z",
          opponent: "Torino",
          opponentLogo: "https://media.api-sports.io/football/teams/494.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "Empoli", result: "W", score: "2-0" },
          { date: "2025-06-20", opponent: "Genoa", result: "W", score: "3-1" },
          { date: "2025-06-06", opponent: "AC Milan", result: "D", score: "0-0" },
          { date: "2025-06-04", opponent: "Napoli", result: "L", score: "1-2" },
          { date: "2025-06-03", opponent: "Lazio", result: "D", score: "1-1" }
        ]
      },
      {
        id: 867,
        name: "Lecce",
        logo: "https://media.api-sports.io/football/teams/867.png",
        nextMatch: {
          fixture: { id: 3006 },
          date: "2025-06-30T16:00:00Z",
          opponent: "Empoli",
          opponentLogo: "https://media.api-sports.io/football/teams/511.png",
          home: false
        },
        last5: [
          { date: "2025-06-26", opponent: "Cagliari", result: "W", score: "2-1" },
          { date: "2025-06-21", opponent: "Empoli", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Venezia", result: "L", score: "0-2" },
          { date: "2025-06-09", opponent: "Salernitana", result: "W", score: "3-0" },
          { date: "2025-06-04", opponent: "Spezia", result: "D", score: "1-1" }
        ]
      },
      {
        id: 503,
        name: "Torino",
        logo: "https://media.api-sports.io/football/teams/503.png",
        nextMatch: {
          fixture: { id: 3009 },
          date: "2025-06-29T16:00:00Z",
          opponent: "Sassuolo",
          opponentLogo: "https://media.api-sports.io/football/teams/488.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Atalanta", result: "L", score: "1-3" },
          { date: "2025-06-22", opponent: "Sampdoria", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Cagliari", result: "W", score: "1-0" },
          { date: "2025-06-11", opponent: "Venezia", result: "D", score: "2-2" },
          { date: "2025-06-05", opponent: "Spezia", result: "W", score: "3-0" }
        ]
      },
      {
        id: 479,
        name: "Sassuolo",
        logo: "https://media.api-sports.io/football/teams/479.png",
        nextMatch: {
          fixture: { id: 3009 },
          date: "2025-06-29T16:00:00Z",
          opponent: "Torino",
          opponentLogo: "https://media.api-sports.io/football/teams/503.png",
          home: false
        },
        last5: [
          { date: "2025-06-28", opponent: "Hellas Verona", result: "W", score: "2-1" },
          { date: "2025-06-21", opponent: "Atalanta", result: "L", score: "0-2" },
          { date: "2025-06-18", opponent: "Bologna", result: "D", score: "1-1" },
          { date: "2025-06-12", opponent: "Empoli", result: "W", score: "2-0" },
          { date: "2025-05-30", opponent: "Napoli", result: "L", score: "0-4" }
        ]
      },
      {
        id: 490,
        name: "Udinese",
        logo: "https://media.api-sports.io/football/teams/490.png",
        nextMatch: {
          fixture: { id: 3010 },
          date: "2025-06-30T18:30:00Z",
          opponent: "Bologna",
          opponentLogo: "https://media.api-sports.io/football/teams/500.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Cagliari", result: "W", score: "1-0" },
          { date: "2025-06-23", opponent: "Hellas Verona", result: "D", score: "0-0" },
          { date: "2025-06-16", opponent: "Atalanta", result: "D", score: "1-1" },
          { date: "2025-06-13", opponent: "Genoa", result: "W", score: "2-1" },
          { date: "2025-06-08", opponent: "Venezia", result: "L", score: "1-2" }
        ]
      },
      {
        id: 500,
        name: "Bologna",
        logo: "https://media.api-sports.io/football/teams/500.png",
        nextMatch: {
          fixture: { id: 3010 },
          date: "2025-06-30T18:30:00Z",
          opponent: "Udinese",
          opponentLogo: "https://media.api-sports.io/football/teams/490.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Spezia", result: "W", score: "3-1" },
          { date: "2025-06-24", opponent: "Empoli", result: "W", score: "2-0" },
          { date: "2025-06-18", opponent: "Sassuolo", result: "D", score: "1-1" },
          { date: "2025-06-14", opponent: "Salernitana", result: "W", score: "2-1" },
          { date: "2025-06-04", opponent: "Atalanta", result: "L", score: "0-4" }
        ]
      },
      {
        id: 584,
        name: "Sampdoria",
        logo: "https://media.api-sports.io/football/teams/584.png",
        nextMatch: {
          fixture: { id: 3011 },
          date: "2025-06-30T20:45:00Z",
          opponent: "Genoa",
          opponentLogo: "https://media.api-sports.io/football/teams/495.png",
          home: true
        },
        last5: [
          { date: "2025-06-31", opponent: "Venezia", result: "L", score: "0-1" },
          { date: "2025-06-22", opponent: "Torino", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Cagliari", result: "W", score: "2-0" },
          { date: "2025-06-15", opponent: "Empoli", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Hellas Verona", result: "L", score: "0-2" }
        ]
      },
      {
        id: 495,
        name: "Genoa",
        logo: "https://media.api-sports.io/football/teams/495.png",
        nextMatch: {
          fixture: { id: 3011 },
          date: "2025-06-30T20:45:00Z",
          opponent: "Sampdoria",
          opponentLogo: "https://media.api-sports.io/football/teams/584.png",
          home: false
        },
        last5: [
          { date: "2025-06-32", opponent: "Salernitana", result: "D", score: "1-1" },
          { date: "2025-06-20", opponent: "Fiorentina", result: "L", score: "1-3" },
          { date: "2025-06-17", opponent: "Spezia", result: "W", score: "2-0" },
          { date: "2025-06-13", opponent: "Udinese", result: "L", score: "1-2" },
          { date: "2025-06-07", opponent: "Venezia", result: "W", score: "1-0" }
        ]
      },
      {
        id: 511,
        name: "Empoli",
        logo: "https://media.api-sports.io/football/teams/511.png",
        nextMatch: {
          fixture: { id: 3012 },
          date: "2025-07-01T18:30:00Z",
          opponent: "Venezia",
          opponentLogo: "https://media.api-sports.io/football/teams/517.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "Fiorentina", result: "L", score: "0-2" },
          { date: "2025-06-24", opponent: "Bologna", result: "L", score: "0-2" },
          { date: "2025-06-15", opponent: "Sampdoria", result: "D", score: "1-1" },
          { date: "2025-06-12", opponent: "Sassuolo", result: "L", score: "0-2" },
          { date: "2025-06-09", opponent: "Hellas Verona", result: "W", score: "2-1" }
        ]
      },
      {
        id: 517,
        name: "Venezia",
        logo: "https://media.api-sports.io/football/teams/517.png",
        nextMatch: {
          fixture: { id: 3012 },
          date: "2025-07-01T18:30:00Z",
          opponent: "Empoli",
          opponentLogo: "https://media.api-sports.io/football/teams/511.png",
          home: false
        },
        last5: [
          { date: "2025-06-31", opponent: "Sampdoria", result: "W", score: "1-0" },
          { date: "2025-06-25", opponent: "Cagliari", result: "L", score: "0-1" },
          { date: "2025-06-11", opponent: "Torino", result: "D", score: "2-2" },
          { date: "2025-06-08", opponent: "Udinese", result: "W", score: "2-1" },
          { date: "2025-06-07", opponent: "Genoa", result: "L", score: "0-1" }
        ]
      },
      {
        id: 515,
        name: "Spezia",
        logo: "https://media.api-sports.io/football/teams/515.png",
        nextMatch: {
          fixture: { id: 3013 },
          date: "2025-07-01T20:45:00Z",
          opponent: "Salernitana",
          opponentLogo: "https://media.api-sports.io/football/teams/514.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Bologna", result: "L", score: "1-3" },
          { date: "2025-06-26", opponent: "Hellas Verona", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Genoa", result: "L", score: "0-2" },
          { date: "2025-06-14", opponent: "Cagliari", result: "D", score: "1-1" },
          { date: "2025-06-05", opponent: "Torino", result: "L", score: "0-3" }
        ]
      },
      {
        id: 514,
        name: "Salernitana",
        logo: "https://media.api-sports.io/football/teams/514.png",
        nextMatch: {
          fixture: { id: 3013 },
          date: "2025-07-01T20:45:00Z",
          opponent: "Spezia",
          opponentLogo: "https://media.api-sports.io/football/teams/515.png",
          home: false
        },
        last5: [
          { date: "2025-06-32", opponent: "Genoa", result: "D", score: "1-1" },
          { date: "2025-06-28", opponent: "Cagliari", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Hellas Verona", result: "W", score: "1-0" },
          { date: "2025-06-14", opponent: "Bologna", result: "L", score: "1-2" },
          { date: "2025-06-11", opponent: "Venezia", result: "W", score: "2-1" }
        ]
      },
      {
        id: 482,
        name: "Cagliari",
        logo: "https://media.api-sports.io/football/teams/482.png",
        nextMatch: {
          fixture: { id: 3014 },
          date: "2025-07-02T18:30:00Z",
          opponent: "Hellas Verona",
          opponentLogo: "https://media.api-sports.io/football/teams/504.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Udinese", result: "L", score: "0-1" },
          { date: "2025-06-28", opponent: "Salernitana", result: "W", score: "2-0" },
          { date: "2025-06-25", opponent: "Venezia", result: "W", score: "1-0" },
          { date: "2025-06-19", opponent: "Sampdoria", result: "L", score: "0-2" },
          { date: "2025-06-17", opponent: "Torino", result: "L", score: "0-1" }
        ]
      },
      {
        id: 504,
        name: "Hellas Verona",
        logo: "https://media.api-sports.io/football/teams/504.png",
        nextMatch: {
          fixture: { id: 3014 },
          date: "2025-07-02T18:30:00Z",
          opponent: "Cagliari",
          opponentLogo: "https://media.api-sports.io/football/teams/482.png",
          home: false
        },
        last5: [
          { date: "2025-06-28", opponent: "Sassuolo", result: "L", score: "1-2" },
          { date: "2025-06-26", opponent: "Spezia", result: "L", score: "1-2" },
          { date: "2025-06-23", opponent: "Udinese", result: "D", score: "0-0" },
          { date: "2025-06-23", opponent: "Salernitana", result: "L", score: "0-1" },
          { date: "2025-06-10", opponent: "Sampdoria", result: "W", score: "2-0" }
        ]
      }
    ]
  },
  {
    league: {
      id: 78,
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    country: { name: "Germany" },
    team: [
      {
        id: 157,
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png",
        nextMatch: {
          fixture: { id: 4001 },
          date: "2025-07-01T19:30:00Z",
          opponent: "Borussia Dortmund",
          opponentLogo: "https://media.api-sports.io/football/teams/165.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Leipzig", result: "W", score: "4-1" },
          { date: "2025-06-19", opponent: "Frankfurt", result: "W", score: "2-0" },
          { date: "2025-06-13", opponent: "Mainz", result: "D", score: "1-1" },
          { date: "2025-06-07", opponent: "Dortmund", result: "W", score: "3-1" },
          { date: "2025-06-02", opponent: "Stuttgart", result: "W", score: "2-0" }
        ]
      },
      {
        id: 165,
        name: "Borussia Dortmund",
        logo: "https://media.api-sports.io/football/teams/165.png",
        nextMatch: {
          fixture: { id: 4001 },
          date: "2025-07-01T19:30:00Z",
          opponent: "Bayern Munich",
          opponentLogo: "https://media.api-sports.io/football/teams/157.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Leverkusen", result: "W", score: "2-0" },
          { date: "2025-06-18", opponent: "Wolfsburg", result: "L", score: "1-2" },
          { date: "2025-06-12", opponent: "Freiburg", result: "W", score: "3-0" },
          { date: "2025-06-06", opponent: "Mainz", result: "D", score: "1-1" },
          { date: "2025-06-01", opponent: "Stuttgart", result: "L", score: "0-1" }
        ]
      },
      {
        id: 173,
        name: "RB Leipzig",
        logo: "https://media.api-sports.io/football/teams/173.png",
        nextMatch: {
          fixture: { id: 4002 },
          date: "2025-07-01T17:30:00Z",
          opponent: "Bayer Leverkusen",
          opponentLogo: "https://media.api-sports.io/football/teams/168.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Bayern Munich", result: "L", score: "1-4" },
          { date: "2025-06-20", opponent: "Wolfsburg", result: "W", score: "3-1" },
          { date: "2025-06-14", opponent: "Hoffenheim", result: "W", score: "2-0" },
          { date: "2025-06-08", opponent: "Union Berlin", result: "D", score: "1-1" },
          { date: "2025-06-03", opponent: "Freiburg", result: "W", score: "2-1" }
        ]
      },
      {
        id: 168,
        name: "Bayer Leverkusen",
        logo: "https://media.api-sports.io/football/teams/168.png",
        nextMatch: {
          fixture: { id: 4002 },
          date: "2025-07-01T17:30:00Z",
          opponent: "RB Leipzig",
          opponentLogo: "https://media.api-sports.io/football/teams/173.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Dortmund", result: "L", score: "0-2" },
          { date: "2025-06-21", opponent: "Stuttgart", result: "W", score: "2-1" },
          { date: "2025-06-15", opponent: "Koln", result: "W", score: "3-0" },
          { date: "2025-06-09", opponent: "Augsburg", result: "W", score: "1-0" },
          { date: "2025-06-04", opponent: "Mainz", result: "D", score: "2-2" }
        ]
      },
      {
        id: 169,
        name: "Eintracht Frankfurt",
        logo: "https://media.api-sports.io/football/teams/169.png",
        nextMatch: {
          fixture: { id: 4003 },
          date: "2025-07-01T15:30:00Z",
          opponent: "Wolfsburg",
          opponentLogo: "https://media.api-sports.io/football/teams/170.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Hoffenheim", result: "W", score: "2-1" },
          { date: "2025-06-19", opponent: "Bayern Munich", result: "L", score: "0-2" },
          { date: "2025-06-13", opponent: "Union Berlin", result: "D", score: "1-1" },
          { date: "2025-06-07", opponent: "Freiburg", result: "W", score: "3-2" },
          { date: "2025-06-02", opponent: "Koln", result: "W", score: "2-0" }
        ]
      },
      {
        id: 163,
        name: "Borussia Monchengladbach",
        logo: "https://media.api-sports.io/football/teams/163.png",
        nextMatch: {
          fixture: { id: 4004 },
          date: "2025-07-02T17:30:00Z",
          opponent: "Mainz",
          opponentLogo: "https://media.api-sports.io/football/teams/164.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Werder Bremen", result: "W", score: "3-1" },
          { date: "2025-06-20", opponent: "Augsburg", result: "D", score: "1-1" },
          { date: "2025-06-14", opponent: "Bochum", result: "W", score: "2-0" },
          { date: "2025-06-08", opponent: "Stuttgart", result: "L", score: "0-1" },
          { date: "2025-06-03", opponent: "Hertha Berlin", result: "W", score: "4-0" }
        ]
      },
      {
        id: 170,
        name: "VfL Wolfsburg",
        logo: "https://media.api-sports.io/football/teams/170.png",
        nextMatch: {
          fixture: { id: 4003 },
          date: "2025-07-01T15:30:00Z",
          opponent: "Eintracht Frankfurt",
          opponentLogo: "https://media.api-sports.io/football/teams/169.png",
          home: false
        },
        last5: [
          { date: "2025-06-27", opponent: "Freiburg", result: "L", score: "1-2" },
          { date: "2025-06-20", opponent: "RB Leipzig", result: "L", score: "1-3" },
          { date: "2025-06-18", opponent: "Borussia Dortmund", result: "W", score: "2-1" },
          { date: "2025-06-12", opponent: "Union Berlin", result: "D", score: "0-0" },
          { date: "2025-06-06", opponent: "Hertha Berlin", result: "W", score: "3-1" }
        ]
      },
      {
        id: 160,
        name: "SC Freiburg",
        logo: "https://media.api-sports.io/football/teams/160.png",
        nextMatch: {
          fixture: { id: 4005 },
          date: "2025-07-02T15:30:00Z",
          opponent: "Hoffenheim",
          opponentLogo: "https://media.api-sports.io/football/teams/167.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "VfL Wolfsburg", result: "W", score: "2-1" },
          { date: "2025-06-21", opponent: "Koln", result: "D", score: "1-1" },
          { date: "2025-06-12", opponent: "Borussia Dortmund", result: "L", score: "0-3" },
          { date: "2025-06-07", opponent: "Eintracht Frankfurt", result: "L", score: "2-3" },
          { date: "2025-06-03", opponent: "RB Leipzig", result: "L", score: "1-2" }
        ]
      },
      {
        id: 167,
        name: "TSG Hoffenheim",
        logo: "https://media.api-sports.io/football/teams/167.png",
        nextMatch: {
          fixture: { id: 4005 },
          date: "2025-07-02T15:30:00Z",
          opponent: "SC Freiburg",
          opponentLogo: "https://media.api-sports.io/football/teams/160.png",
          home: false
        },
        last5: [
          { date: "2025-06-25", opponent: "Eintracht Frankfurt", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Mainz", result: "W", score: "2-0" },
          { date: "2025-06-14", opponent: "RB Leipzig", result: "L", score: "0-2" },
          { date: "2025-06-08", opponent: "Bochum", result: "W", score: "3-1" },
          { date: "2025-06-04", opponent: "Werder Bremen", result: "D", score: "1-1" }
        ]
      },
      {
        id: 161,
        name: "FC Koln",
        logo: "https://media.api-sports.io/football/teams/161.png",
        nextMatch: {
          fixture: { id: 4006 },
          date: "2025-07-03T17:30:00Z",
          opponent: "Union Berlin",
          opponentLogo: "https://media.api-sports.io/football/teams/28.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Stuttgart", result: "L", score: "0-2" },
          { date: "2025-06-21", opponent: "SC Freiburg", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Bayer Leverkusen", result: "L", score: "0-3" },
          { date: "2025-06-09", opponent: "Augsburg", result: "W", score: "2-1" },
          { date: "2025-06-02", opponent: "Eintracht Frankfurt", result: "L", score: "0-2" }
        ]
      },
      {
        id: 28,
        name: "Union Berlin",
        logo: "https://media.api-sports.io/football/teams/28.png",
        nextMatch: {
          fixture: { id: 4006 },
          date: "2025-07-03T17:30:00Z",
          opponent: "FC Koln",
          opponentLogo: "https://media.api-sports.io/football/teams/161.png",
          home: false
        },
        last5: [
          { date: "2025-06-29", opponent: "Augsburg", result: "D", score: "1-1" },
          { date: "2025-06-23", opponent: "Bochum", result: "W", score: "2-0" },
          { date: "2025-06-13", opponent: "Eintracht Frankfurt", result: "D", score: "1-1" },
          { date: "2025-06-12", opponent: "VfL Wolfsburg", result: "D", score: "0-0" },
          { date: "2025-06-08", opponent: "RB Leipzig", result: "D", score: "1-1" }
        ]
      },
      {
        id: 172,
        name: "VfB Stuttgart",
        logo: "https://media.api-sports.io/football/teams/172.png",
        nextMatch: {
          fixture: { id: 4007 },
          date: "2025-07-03T19:30:00Z",
          opponent: "Werder Bremen",
          opponentLogo: "https://media.api-sports.io/football/teams/162.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "FC Koln", result: "W", score: "2-0" },
          { date: "2025-06-21", opponent: "Bayer Leverkusen", result: "L", score: "1-2" },
          { date: "2025-06-08", opponent: "Borussia Monchengladbach", result: "W", score: "1-0" },
          { date: "2025-06-02", opponent: "Bayern Munich", result: "L", score: "0-2" },
          { date: "2025-06-01", opponent: "Borussia Dortmund", result: "W", score: "1-0" }
        ]
      },
      {
        id: 164,
        name: "Mainz 05",
        logo: "https://media.api-sports.io/football/teams/164.png",
        nextMatch: {
          fixture: { id: 4004 },
          date: "2025-07-02T17:30:00Z",
          opponent: "Borussia Monchengladbach",
          opponentLogo: "https://media.api-sports.io/football/teams/163.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Hertha Berlin", result: "W", score: "3-0" },
          { date: "2025-06-19", opponent: "TSG Hoffenheim", result: "L", score: "0-2" },
          { date: "2025-06-13", opponent: "Bayern Munich", result: "D", score: "1-1" },
          { date: "2025-06-06", opponent: "Borussia Dortmund", result: "D", score: "1-1" },
          { date: "2025-06-04", opponent: "Bayer Leverkusen", result: "D", score: "2-2" }
        ]
      },
      {
        id: 162,
        name: "Werder Bremen",
        logo: "https://media.api-sports.io/football/teams/162.png",
        nextMatch: {
          fixture: { id: 4007 },
          date: "2025-07-03T19:30:00Z",
          opponent: "VfB Stuttgart",
          opponentLogo: "https://media.api-sports.io/football/teams/172.png",
          home: false
        },
        last5: [
          { date: "2025-06-26", opponent: "Borussia Monchengladbach", result: "L", score: "1-3" },
          { date: "2025-06-22", opponent: "Arminia Bielefeld", result: "W", score: "2-1" },
          { date: "2025-06-16", opponent: "Hertha Berlin", result: "D", score: "0-0" },
          { date: "2025-06-10", opponent: "Augsburg", result: "L", score: "1-2" },
          { date: "2025-06-04", opponent: "TSG Hoffenheim", result: "D", score: "1-1" }
        ]
      },
      {
        id: 159,
        name: "FC Augsburg",
        logo: "https://media.api-sports.io/football/teams/159.png",
        nextMatch: {
          fixture: { id: 4008 },
          date: "2025-07-04T15:30:00Z",
          opponent: "Hertha Berlin",
          opponentLogo: "https://media.api-sports.io/football/teams/171.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Union Berlin", result: "D", score: "1-1" },
          { date: "2025-06-20", opponent: "Borussia Monchengladbach", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Werder Bremen", result: "W", score: "2-1" },
          { date: "2025-06-09", opponent: "Bayer Leverkusen", result: "L", score: "0-1" },
          { date: "2025-06-09", opponent: "FC Koln", result: "L", score: "1-2" }
        ]
      },
      {
        id: 171,
        name: "Hertha Berlin",
        logo: "https://media.api-sports.io/football/teams/171.png",
        nextMatch: {
          fixture: { id: 4008 },
          date: "2025-07-04T15:30:00Z",
          opponent: "FC Augsburg",
          opponentLogo: "https://media.api-sports.io/football/teams/159.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Mainz 05", result: "L", score: "0-3" },
          { date: "2025-06-16", opponent: "Werder Bremen", result: "D", score: "0-0" },
          { date: "2025-06-11", opponent: "Arminia Bielefeld", result: "W", score: "2-0" },
          { date: "2025-06-06", opponent: "VfL Wolfsburg", result: "L", score: "1-3" },
          { date: "2025-06-03", opponent: "Borussia Monchengladbach", result: "L", score: "0-4" }
        ]
      },
      {
        id: 158,
        name: "Arminia Bielefeld",
        logo: "https://media.api-sports.io/football/teams/158.png",
        nextMatch: {
          fixture: { id: 4009 },
          date: "2025-07-04T17:30:00Z",
          opponent: "Bochum",
          opponentLogo: "https://media.api-sports.io/football/teams/187.png",
          home: true
        },
        last5: [
          { date: "2025-06-31", opponent: "Heidenheim", result: "L", score: "0-2" },
          { date: "2025-06-22", opponent: "Werder Bremen", result: "L", score: "1-2" },
          { date: "2025-06-11", opponent: "Hertha Berlin", result: "L", score: "0-2" },
          { date: "2025-06-05", opponent: "Bochum", result: "D", score: "1-1" },
          { date: "2025-05-30", opponent: "Heidenheim", result: "W", score: "2-1" }
        ]
      },
      {
        id: 187,
        name: "VfL Bochum",
        logo: "https://media.api-sports.io/football/teams/187.png",
        nextMatch: {
          fixture: { id: 4009 },
          date: "2025-07-04T17:30:00Z",
          opponent: "Arminia Bielefeld",
          opponentLogo: "https://media.api-sports.io/football/teams/158.png",
          home: false
        },
        last5: [
          { date: "2025-06-32", opponent: "Heidenheim", result: "L", score: "1-3" },
          { date: "2025-06-23", opponent: "Union Berlin", result: "L", score: "0-2" },
          { date: "2025-06-14", opponent: "Borussia Monchengladbach", result: "L", score: "0-2" },
          { date: "2025-06-08", opponent: "TSG Hoffenheim", result: "L", score: "1-3" },
          { date: "2025-06-05", opponent: "Arminia Bielefeld", result: "D", score: "1-1" }
        ]
      },
      {
        id: 210,
        name: "Heidenheim",
        logo: "https://media.api-sports.io/football/teams/210.png",
        nextMatch: {
          fixture: { id: 4010 },
          date: "2025-07-05T15:30:00Z",
          opponent: "RB Leipzig",
          opponentLogo: "https://media.api-sports.io/football/teams/173.png",
          home: true
        },
        last5: [
          { date: "2025-06-32", opponent: "VfL Bochum", result: "W", score: "3-1" },
          { date: "2025-06-31", opponent: "Arminia Bielefeld", result: "W", score: "2-0" },
          { date: "2025-06-25", opponent: "Bayern Munich", result: "L", score: "0-4" },
          { date: "2025-06-18", opponent: "Borussia Dortmund", result: "L", score: "1-3" },
          { date: "2025-05-30", opponent: "Arminia Bielefeld", result: "L", score: "1-2" }
        ]
      },
      {
        id: 164,
        name: "Mainz 05",
        logo: "https://media.api-sports.io/football/teams/164.png",
        nextMatch: {
          fixture: { id: 4011 },
          date: "2025-07-05T15:30:00Z",
          opponent: "Werder Bremen",
          opponentLogo: "https://media.api-sports.io/football/teams/162.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "VfL Wolfsburg", result: "W", score: "2-1" },
          { date: "2025-06-24", opponent: "Eintracht Frankfurt", result: "L", score: "1-2" },
          { date: "2025-06-18", opponent: "Borussia Monchengladbach", result: "D", score: "1-1" },
          { date: "2025-06-13", opponent: "Bayern Munich", result: "D", score: "1-1" },
          { date: "2025-06-06", opponent: "Borussia Dortmund", result: "D", score: "1-1" }
        ]
      },
      {
        id: 162,
        name: "Werder Bremen",
        logo: "https://media.api-sports.io/football/teams/162.png",
        nextMatch: {
          fixture: { id: 4011 },
          date: "2025-07-05T15:30:00Z",
          opponent: "Mainz 05",
          opponentLogo: "https://media.api-sports.io/football/teams/164.png",
          home: false
        },
        last5: [
          { date: "2025-06-29", opponent: "Stuttgart", result: "W", score: "2-0" },
          { date: "2025-06-22", opponent: "Arminia Bielefeld", result: "W", score: "2-1" },
          { date: "2025-06-16", opponent: "Hertha Berlin", result: "D", score: "0-0" },
          { date: "2025-06-11", opponent: "Augsburg", result: "L", score: "0-1" },
          { date: "2025-06-04", opponent: "Freiburg", result: "W", score: "3-0" }
        ]
      }
    ]
  },
  {
    league: {
      id: 61,
      name: "Ligue 1",
      logo: "https://media.api-sports.io/football/leagues/61.png"
    },
    country: { name: "France" },
    team: [
      {
        id: 85,
        name: "PSG",
        logo: "https://media.api-sports.io/football/teams/85.png",
        nextMatch: {
          fixture: { id: 5001 },
          date: "2025-06-26T21:00:00Z",
          opponent: "Marseille",
          opponentLogo: "https://media.api-sports.io/football/teams/81.png",
          home: true
        },
        last5: [
          { date: "2025-06-20", opponent: "Lyon", result: "W", score: "3-0" },
          { date: "2025-06-14", opponent: "Lille", result: "W", score: "2-1" },
          { date: "2025-06-08", opponent: "Nice", result: "D", score: "1-1" },
          { date: "2025-06-03", opponent: "Monaco", result: "W", score: "4-2" },
          { date: "2025-05-29", opponent: "Rennes", result: "W", score: "2-0" }
        ]
      },
      {
        id: 81,
        name: "Marseille",
        logo: "https://media.api-sports.io/football/teams/81.png",
        nextMatch: {
          fixture: { id: 5001 },
          date: "2025-06-26T21:00:00Z",
          opponent: "PSG",
          opponentLogo: "https://media.api-sports.io/football/teams/85.png",
          home: false
        },
        last5: [
          { date: "2025-06-22", opponent: "Lille", result: "L", score: "0-1" },
          { date: "2025-06-16", opponent: "Nice", result: "W", score: "2-0" },
          { date: "2025-06-10", opponent: "Lyon", result: "D", score: "2-2" },
          { date: "2025-06-04", opponent: "Monaco", result: "W", score: "3-1" },
          { date: "2025-05-30", opponent: "PSG", result: "L", score: "1-3" }
        ]
      },
      {
        id: 80,
        name: "Lyon",
        logo: "https://media.api-sports.io/football/teams/80.png",
        nextMatch: {
          fixture: { id: 5002 },
          date: "2025-06-26T19:00:00Z",
          opponent: "Monaco",
          opponentLogo: "https://media.api-sports.io/football/teams/91.png",
          home: true
        },
        last5: [
          { date: "2025-06-23", opponent: "Rennes", result: "W", score: "2-1" },
          { date: "2025-06-17", opponent: "Strasbourg", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Marseille", result: "D", score: "2-2" },
          { date: "2025-06-05", opponent: "Nice", result: "W", score: "3-0" },
          { date: "2025-05-31", opponent: "Lille", result: "L", score: "1-2" }
        ]
      },
      {
        id: 91,
        name: "Monaco",
        logo: "https://media.api-sports.io/football/teams/91.png",
        nextMatch: {
          fixture: { id: 5002 },
          date: "2025-06-26T19:00:00Z",
          opponent: "Lyon",
          opponentLogo: "https://media.api-sports.io/football/teams/80.png",
          home: false
        },
        last5: [
          { date: "2025-06-24", opponent: "Montpellier", result: "W", score: "2-0" },
          { date: "2025-06-18", opponent: "Lens", result: "W", score: "1-0" },
          { date: "2025-06-12", opponent: "Brest", result: "D", score: "1-1" },
          { date: "2025-06-04", opponent: "Marseille", result: "L", score: "1-3" },
          { date: "2025-06-01", opponent: "Angers", result: "W", score: "2-1" }
        ]
      },
      {
        id: 79,
        name: "Lille",
        logo: "https://media.api-sports.io/football/teams/79.png",
        nextMatch: {
          fixture: { id: 5003 },
          date: "2025-06-27T20:00:00Z",
          opponent: "Rennes",
          opponentLogo: "https://media.api-sports.io/football/teams/94.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Clermont Foot", result: "W", score: "3-1" },
          { date: "2025-06-22", opponent: "Marseille", result: "W", score: "1-0" },
          { date: "2025-06-15", opponent: "Reims", result: "D", score: "0-0" },
          { date: "2025-06-09", opponent: "Troyes", result: "W", score: "2-0" },
          { date: "2025-05-31", opponent: "Lyon", result: "W", score: "2-1" }
        ]
      },
      {
        id: 94,
        name: "Rennes",
        logo: "https://media.api-sports.io/football/teams/94.png",
        nextMatch: {
          fixture: { id: 5003 },
          date: "2025-06-27T20:00:00Z",
          opponent: "Lille",
          opponentLogo: "https://media.api-sports.io/football/teams/79.png",
          home: false
        },
        last5: [
          { date: "2025-06-26", opponent: "Lorient", result: "W", score: "2-0" },
          { date: "2025-06-23", opponent: "Lyon", result: "L", score: "1-2" },
          { date: "2025-06-19", opponent: "Metz", result: "W", score: "3-0" },
          { date: "2025-06-13", opponent: "Saint-Etienne", result: "D", score: "1-1" },
          { date: "2025-05-29", opponent: "PSG", result: "L", score: "0-2" }
        ]
      },
      {
        id: 84,
        name: "Nice",
        logo: "https://media.api-sports.io/football/teams/84.png",
        nextMatch: {
          fixture: { id: 5004 },
          date: "2025-06-28T17:00:00Z",
          opponent: "Nantes",
          opponentLogo: "https://media.api-sports.io/football/teams/75.png",
          home: true
        },
        last5: [
          { date: "2025-06-27", opponent: "Bordeaux", result: "W", score: "1-0" },
          { date: "2025-06-21", opponent: "Brest", result: "D", score: "2-2" },
          { date: "2025-06-16", opponent: "Marseille", result: "L", score: "0-2" },
          { date: "2025-06-05", opponent: "Lyon", result: "L", score: "0-3" },
          { date: "2025-06-02", opponent: "Montpellier", result: "W", score: "2-1" }
        ]
      },
      {
        id: 576,
        name: "Strasbourg",
        logo: "https://media.api-sports.io/football/teams/576.png",
        nextMatch: {
          fixture: { id: 5008 },
          date: "2025-06-29T18:00:00Z",
          opponent: "Montpellier",
          opponentLogo: "https://media.api-sports.io/football/teams/83.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Troyes", result: "W", score: "2-1" },
          { date: "2025-06-24", opponent: "Clermont Foot", result: "D", score: "1-1" },
          { date: "2025-06-17", opponent: "Lyon", result: "D", score: "1-1" },
          { date: "2025-06-11", opponent: "Angers", result: "W", score: "1-0" },
          { date: "2025-06-06", opponent: "Bordeaux", result: "L", score: "0-2" }
        ]
      },
      {
        id: 83,
        name: "Montpellier",
        logo: "https://media.api-sports.io/football/teams/83.png",
        nextMatch: {
          fixture: { id: 5008 },
          date: "2025-06-29T18:00:00Z",
          opponent: "Strasbourg",
          opponentLogo: "https://media.api-sports.io/football/teams/576.png",
          home: false
        },
        last5: [
          { date: "2025-06-29", opponent: "Reims", result: "L", score: "1-2" },
          { date: "2025-06-24", opponent: "Monaco", result: "L", score: "0-2" },
          { date: "2025-06-20", opponent: "Metz", result: "W", score: "2-0" },
          { date: "2025-06-14", opponent: "Lorient", result: "D", score: "1-1" },
          { date: "2025-06-02", opponent: "Nice", result: "L", score: "1-2" }
        ]
      },
      {
        id: 116,
        name: "Lens",
        logo: "https://media.api-sports.io/football/teams/116.png",
        nextMatch: {
          fixture: { id: 5009 },
          date: "2025-06-30T19:00:00Z",
          opponent: "Bordeaux",
          opponentLogo: "https://media.api-sports.io/football/teams/95.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Saint-Etienne", result: "W", score: "2-1" },
          { date: "2025-06-25", opponent: "Nantes", result: "D", score: "0-0" },
          { date: "2025-06-18", opponent: "Monaco", result: "L", score: "0-1" },
          { date: "2025-06-15", opponent: "Brest", result: "W", score: "3-0" },
          { date: "2025-06-08", opponent: "Clermont Foot", result: "W", score: "1-0" }
        ]
      },
      {
        id: 95,
        name: "Bordeaux",
        logo: "https://media.api-sports.io/football/teams/95.png",
        nextMatch: {
          fixture: { id: 5009 },
          date: "2025-06-30T19:00:00Z",
          opponent: "Lens",
          opponentLogo: "https://media.api-sports.io/football/teams/116.png",
          home: false
        },
        last5: [
          { date: "2025-06-31", opponent: "Ajaccio", result: "W", score: "2-0" },
          { date: "2025-06-27", opponent: "Nice", result: "L", score: "0-1" },
          { date: "2025-06-22", opponent: "Troyes", result: "D", score: "1-1" },
          { date: "2025-06-16", opponent: "Angers", result: "W", score: "2-1" },
          { date: "2025-06-06", opponent: "Strasbourg", result: "W", score: "2-0" }
        ]
      },
      {
        id: 1063,
        name: "Saint-Etienne",
        logo: "https://media.api-sports.io/football/teams/1063.png",
        nextMatch: {
          fixture: { id: 5010 },
          date: "2025-07-01T17:00:00Z",
          opponent: "Nantes",
          opponentLogo: "https://media.api-sports.io/football/teams/75.png",
          home: true
        },
        last5: [
          { date: "2025-06-30", opponent: "Lens", result: "L", score: "1-2" },
          { date: "2025-06-26", opponent: "Metz", result: "W", score: "1-0" },
          { date: "2025-06-21", opponent: "Clermont Foot", result: "D", score: "0-0" },
          { date: "2025-06-13", opponent: "Rennes", result: "D", score: "1-1" },
          { date: "2025-06-07", opponent: "Reims", result: "L", score: "0-1" }
        ]
      },
      {
        id: 93,
        name: "Nantes",
        logo: "https://media.api-sports.io/football/teams/93.png",
        nextMatch: {
          fixture: { id: 5010 },
          date: "2025-07-01T17:00:00Z",
          opponent: "Saint-Etienne",
          opponentLogo: "https://media.api-sports.io/football/teams/84.png",
          home: false
        },
        last5: [
          { date: "2025-06-32", opponent: "Lorient", result: "W", score: "2-1" },
          { date: "2025-06-25", opponent: "Lens", result: "D", score: "0-0" },
          { date: "2025-06-20", opponent: "Brest", result: "L", score: "1-2" },
          { date: "2025-06-12", opponent: "Reims", result: "W", score: "3-0" },
          { date: "2025-06-09", opponent: "Metz", result: "D", score: "1-1" }
        ]
      },
      {
        id: 77,
        name: "Angers",
        logo: "https://media.api-sports.io/football/teams/77.png",
        nextMatch: {
          fixture: { id: 5005 },
          date: "2025-07-01T19:00:00Z",
          opponent: "Toulouse",
          opponentLogo: "https://media.api-sports.io/football/teams/96.png",
          home: false
        },
        last5: [
          { date: "2025-06-33", opponent: "Brest", result: "L", score: "0-1" },
          { date: "2025-06-28", opponent: "Reims", result: "D", score: "1-1" },
          { date: "2025-06-16", opponent: "Bordeaux", result: "L", score: "1-2" },
          { date: "2025-06-11", opponent: "Strasbourg", result: "L", score: "0-1" },
          { date: "2025-06-01", opponent: "Monaco", result: "L", score: "1-2" }
        ]
      },
      {
        id: 99,
        name: "Clermont Foot",
        logo: "https://media.api-sports.io/football/teams/99.png",
        nextMatch: {
          fixture: { id: 5007 },
          date: "2025-07-01T19:00:00Z",
          opponent: "Ajaccio",
          opponentLogo: "https://media.api-sports.io/football/teams/98.png",
          home: true
        },
        last5: [
          { date: "2025-06-25", opponent: "Lille", result: "L", score: "1-3" },
          { date: "2025-06-24", opponent: "Strasbourg", result: "D", score: "1-1" },
          { date: "2025-06-21", opponent: "Saint-Etienne", result: "D", score: "0-0" },
          { date: "2025-06-18", opponent: "Troyes", result: "W", score: "2-1" },
          { date: "2025-06-08", opponent: "Lens", result: "L", score: "0-1" }
        ]
      },
      {
        id: 110,
        name: "Troyes",
        logo: "https://media.api-sports.io/football/teams/110.png",
        nextMatch: {
          fixture: { id: 5012 },
          date: "2025-07-02T18:00:00Z",
          opponent: "Lorient",
          opponentLogo: "https://media.api-sports.io/football/teams/93.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Strasbourg", result: "L", score: "1-2" },
          { date: "2025-06-22", opponent: "Bordeaux", result: "D", score: "1-1" },
          { date: "2025-06-18", opponent: "Clermont Foot", result: "L", score: "1-2" },
          { date: "2025-06-14", opponent: "Metz", result: "W", score: "2-0" },
          { date: "2025-06-09", opponent: "Lille", result: "L", score: "0-2" }
        ]
      },
      {
        id: 111,
        name: "Lorient",
        logo: "https://media.api-sports.io/football/teams/111.png",
        nextMatch: {
          fixture: { id: 5012 },
          date: "2025-07-02T18:00:00Z",
          opponent: "Troyes",
          opponentLogo: "https://media.api-sports.io/football/teams/110.png",
          home: false
        },
        last5: [
          { date: "2025-06-32", opponent: "Nantes", result: "L", score: "1-2" },
          { date: "2025-06-26", opponent: "Rennes", result: "L", score: "0-2" },
          { date: "2025-06-23", opponent: "Ajaccio", result: "W", score: "2-1" },
          { date: "2025-06-14", opponent: "Montpellier", result: "D", score: "1-1" },
          { date: "2025-06-10", opponent: "Brest", result: "L", score: "0-3" }
        ]
      },
      {
        id: 78,
        name: "Brest",
        logo: "https://media.api-sports.io/football/teams/78.png",
        nextMatch: {
          fixture: { id: 5006 },
          date: "2025-07-01T15:00:00Z",
          opponent: "Strasbourg",
          opponentLogo: "https://media.api-sports.io/football/teams/576.png",
          home: false
        },
        last5: [
          { date: "2025-06-30", opponent: "Nice", result: "W", score: "2-1" },
          { date: "2025-06-25", opponent: "Toulouse", result: "D", score: "1-1" },
          { date: "2025-06-19", opponent: "Montpellier", result: "W", score: "3-0" },
          { date: "2025-06-14", opponent: "Lens", result: "L", score: "0-2" },
          { date: "2025-06-10", opponent: "Lorient", result: "W", score: "3-0" }
        ]
      },
      {
        id: 1078,
        name: "Brest (2nd)",
        logo: "https://media.api-sports.io/football/teams/78.png",
        nextMatch: {
          fixture: { id: 5013 },
          date: "2025-07-02T20:00:00Z",
          opponent: "Reims",
          opponentLogo: "https://media.api-sports.io/football/teams/92.png",
          home: true
        },
        last5: [
          { date: "2025-06-33", opponent: "Angers", result: "W", score: "1-0" },
          { date: "2025-06-21", opponent: "Nice", result: "D", score: "2-2" },
          { date: "2025-06-20", opponent: "Nantes", result: "W", score: "2-1" },
          { date: "2025-06-15", opponent: "Lens", result: "L", score: "0-3" },
          { date: "2025-06-12", opponent: "Monaco", result: "D", score: "1-1" }
        ]
      },
      {
        id: 576,
        name: "Strasbourg",
        logo: "https://media.api-sports.io/football/teams/576.png",
        nextMatch: {
          fixture: { id: 5006 },
          date: "2025-07-01T15:00:00Z",
          opponent: "Brest",
          opponentLogo: "https://media.api-sports.io/football/teams/78.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Troyes", result: "W", score: "2-1" },
          { date: "2025-06-24", opponent: "Clermont Foot", result: "D", score: "1-1" },
          { date: "2025-06-17", opponent: "Lyon", result: "D", score: "1-1" },
          { date: "2025-06-11", opponent: "Angers", result: "W", score: "1-0" },
          { date: "2025-06-06", opponent: "Bordeaux", result: "L", score: "0-2" }
        ]
      },
      {
        id: 92,
        name: "Reims",
        logo: "https://media.api-sports.io/football/teams/92.png",
        nextMatch: {
          fixture: { id: 5013 },
          date: "2025-07-02T20:00:00Z",
          opponent: "Brest",
          opponentLogo: "https://media.api-sports.io/football/teams/78.png",
          home: false
        },
        last5: [
          { date: "2025-06-29", opponent: "Montpellier", result: "W", score: "2-1" },
          { date: "2025-06-28", opponent: "Angers", result: "D", score: "1-1" },
          { date: "2025-06-15", opponent: "Lille", result: "D", score: "0-0" },
          { date: "2025-06-12", opponent: "Nantes", result: "L", score: "0-3" },
          { date: "2025-06-07", opponent: "Saint-Etienne", result: "W", score: "1-0" }
        ]
      },
      {
        id: 100,
        name: "Metz",
        logo: "https://media.api-sports.io/football/teams/100.png",
        nextMatch: {
          fixture: { id: 5014 },
          date: "2025-07-03T17:00:00Z",
          opponent: "Nice",
          opponentLogo: "https://media.api-sports.io/football/teams/82.png",
          home: true
        },
        last5: [
          { date: "2025-06-26", opponent: "Saint-Etienne", result: "L", score: "0-1" },
          { date: "2025-06-20", opponent: "Montpellier", result: "L", score: "0-2" },
          { date: "2025-06-19", opponent: "Rennes", result: "L", score: "0-3" },
          { date: "2025-06-14", opponent: "Troyes", result: "L", score: "0-2" },
          { date: "2025-06-09", opponent: "Nantes", result: "D", score: "1-1" }
        ]
      },
      {
        id: 96,
        name: "Toulouse",
        logo: "https://media.api-sports.io/football/teams/96.png",
        nextMatch: {
          fixture: { id: 5005 },
          date: "2025-07-03T19:00:00Z",
          opponent: "Angers",
          opponentLogo: "https://media.api-sports.io/football/teams/77.png",
          home: true
        },
        last5: [
          { date: "2025-06-28", opponent: "Lyon", result: "L", score: "0-3" },
          { date: "2025-06-24", opponent: "Paris Saint Germain", result: "L", score: "0-4" },
          { date: "2025-06-20", opponent: "Marseille", result: "L", score: "1-2" },
          { date: "2025-06-16", opponent: "Monaco", result: "D", score: "1-1" },
          { date: "2025-06-12", opponent: "Lille", result: "L", score: "0-2" }
        ]
      },
      {
        id: 98,
        name: "Ajaccio",
        logo: "https://media.api-sports.io/football/teams/98.png",
        nextMatch: {
          fixture: { id: 5007 },
          date: "2025-07-04T17:00:00Z",
          opponent: "Clermont Foot",
          opponentLogo: "https://media.api-sports.io/football/teams/99.png",
          home: true
        },
        last5: [
          { date: "2025-06-29", opponent: "Nantes", result: "L", score: "0-2" },
          { date: "2025-06-25", opponent: "Rennes", result: "L", score: "1-3" },
          { date: "2025-06-21", opponent: "Nice", result: "D", score: "0-0" },
          { date: "2025-06-17", opponent: "Lens", result: "L", score: "0-1" },
          { date: "2025-06-13", opponent: "Bordeaux", result: "L", score: "1-2" }
        ]
      }
    ]
  }
];

export const mockStats: MockMatchStats[] = [
  {
    fixture: { id: 1001, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
      away: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [
      { team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, statistic: "Shots on Goal", value: 8 },
      { team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, statistic: "Shots on Goal", value: 5 },
      { team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, statistic: "Ball Possession", value: "65%" },
      { team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, statistic: "Ball Possession", value: "35%" }
    ],
    events: [
      { time: 23, team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, type: "Goal", player: "Haaland", assist: "De Bruyne" },
      { time: 58, team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, type: "Card", detail: "Yellow Card", player: "Saka" },
      { time: 67, team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, type: "Goal", player: "Jesus", assist: "Odegaard" },
      { time: 89, team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, type: "Goal", player: "De Bruyne", assist: "Foden" }
    ],
    injuries: [
      { team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, player: "Partey", reason: "Ankle", date: "2025-03-15" }
    ],
    odds: { home: "2.05", draw: "3.30", away: "3.75" },
    topScorers: [
      { name: "Erling Haaland", team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" }, goals: 27 },
      { name: "Gabriel Jesus", team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }, goals: 15 }
    ],
    home_lineups: {
      team: { name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
      formation: "4-3-3",
      coach: "Pep Guardiola",
      startXI: [
        { name: "Ederson", position: "GK", number: 31 },
        { name: "Josko Gvardiol", position: "LB", number: 24 },
        { name: "Ruben Dias", position: "CB", number: 3 },
        { name: "John Stones", position: "CB", number: 5 },
        { name: "Kyle Walker", position: "RB", number: 2 },
        { name: "Kevin De Bruyne", position: "CM", number: 17 },
        { name: "Rodri", position: "CDM", number: 16 },
        { name: "Bernardo Silva", position: "CM", number: 20 },
        { name: "Phil Foden", position: "LW", number: 47 },
        { name: "Erling Haaland", position: "ST", number: 9 },
        { name: "Riyad Mahrez", position: "RW", number: 26 },
      ]
    },
    away_lineups: {
      team: { name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" },
      formation: "4-2-3-1",
      coach: "Mikel Arteta",
      startXI: [
        { name: "Aaron Ramsdale", position: "GK", number: 1 },
        { name: "Kieran Tierney", position: "LB", number: 3 },
        { name: "Gabriel", position: "CB", number: 6 },
        { name: "William Saliba", position: "CB", number: 12 },
        { name: "Ben White", position: "RB", number: 4 },
        { name: "Thomas Partey", position: "CDM", number: 5 },
        { name: "Martin Odegaard", position: "CAM", number: 8 },
        { name: "Granit Xhaka", position: "CDM", number: 34 },
        { name: "Gabriel Martinelli", position: "LW", number: 11 },
        { name: "Gabriel Jesus", position: "ST", number: 9 },
        { name: "Bukayo Saka", position: "RW", number: 7 },
      ]
    }
  },
  {
    fixture: { id: 1002, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      away: { id: 33, name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }
    },
    goals: { home: 1, away: 0 },
    statistics: [
      { team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, statistic: "Shots on Goal", value: 6 },
      { team: { name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }, statistic: "Shots on Goal", value: 3 },
      { team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, statistic: "Ball Possession", value: "58%" },
      { team: { name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }, statistic: "Ball Possession", value: "42%" }
    ],
    events: [
      { time: 45, team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, type: "Goal", player: "Salah", assist: "Alexander-Arnold" },
      { time: 72, team: { name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }, type: "Card", detail: "Red Card", player: "Casemiro" }
    ],
    injuries: [
      { team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, player: "Thiago", reason: "Hip injury", date: "2025-02-28" }
    ],
    odds: { home: "1.85", draw: "3.50", away: "4.20" },
    topScorers: [
      { name: "Mohamed Salah", team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" }, goals: 21 },
      { name: "Marcus Rashford", team: { name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }, goals: 12 }
    ],
    home_lineups: {
      team: { name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      formation: "4-3-3",
      coach: "Jürgen Klopp",
      startXI: [
        { name: "Alisson", position: "GK", number: 1 },
        { name: "Andy Robertson", position: "LB", number: 26 },
        { name: "Virgil van Dijk", position: "CB", number: 4 },
        { name: "Ibrahima Konaté", position: "CB", number: 5 },
        { name: "Trent Alexander-Arnold", position: "RB", number: 66 },
        { name: "Jordan Henderson", position: "CM", number: 14 },
        { name: "Fabinho", position: "CDM", number: 3 },
        { name: "Curtis Jones", position: "CM", number: 17 },
        { name: "Luis Díaz", position: "LW", number: 23 },
        { name: "Darwin Núñez", position: "ST", number: 27 },
        { name: "Mohamed Salah", position: "RW", number: 11 },
      ]
    },
    away_lineups: {
      team: { name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" },
      formation: "4-2-3-1",
      coach: "Erik ten Hag",
      startXI: [
        { name: "André Onana", position: "GK", number: 24 },
        { name: "Luke Shaw", position: "LB", number: 23 },
        { name: "Lisandro Martínez", position: "CB", number: 6 },
        { name: "Raphaël Varane", position: "CB", number: 19 },
        { name: "Diogo Dalot", position: "RB", number: 20 },
        { name: "Casemiro", position: "CDM", number: 18 },
        { name: "Bruno Fernandes", position: "CAM", number: 8 },
        { name: "Christian Eriksen", position: "CDM", number: 14 },
        { name: "Marcus Rashford", position: "LW", number: 10 },
        { name: "Rasmus Højlund", position: "ST", number: 11 },
        { name: "Antony", position: "RW", number: 21 },
      ]
    }
  },
  {
    fixture: { id: 1003, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      away: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }
    },
    goals: { home: null, away: null },
    statistics: [
      { team: { name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }, statistic: "Shots on Goal", value: 0 },
      { team: { name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }, statistic: "Shots on Goal", value: 0 }
    ],
    events: [],
    injuries: [
      { team: { name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }, player: "Reece James", reason: "Hamstring", date: "2025-03-12" },
      { team: { name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }, player: "Wilson", reason: "Knee", date: "2025-03-08" }
    ],
    odds: { home: "2.20", draw: "3.10", away: "3.50" },
    topScorers: [
      { name: "Nicolas Jackson", team: { name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" }, goals: 14 },
      { name: "Alexander Isak", team: { name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }, goals: 16 }
    ],
    home_lineups: {
      team: { name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      formation: "4-2-3-1",
      coach: "Mauricio Pochettino",
      startXI: [
        { name: "Robert Sánchez", position: "GK", number: 1 },
        { name: "Ben Chilwell", position: "LB", number: 21 },
        { name: "Thiago Silva", position: "CB", number: 6 },
        { name: "Levi Colwill", position: "CB", number: 26 },
        { name: "Reece James", position: "RB", number: 24 },
        { name: "Enzo Fernández", position: "CDM", number: 5 },
        { name: "Cole Palmer", position: "CAM", number: 20 },
        { name: "Moisés Caicedo", position: "CDM", number: 25 },
        { name: "Mykhaylo Mudryk", position: "LW", number: 10 },
        { name: "Nicolas Jackson", position: "ST", number: 15 },
        { name: "Raheem Sterling", position: "RW", number: 7 },
      ]
    },
    away_lineups: {
      team: { name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" },
      formation: "4-3-3",
      coach: "Eddie Howe",
      startXI: [
        { name: "Nick Pope", position: "GK", number: 22 },
        { name: "Dan Burn", position: "LB", number: 33 },
        { name: "Sven Botman", position: "CB", number: 4 },
        { name: "Jamaal Lascelles", position: "CB", number: 6 },
        { name: "Kieran Trippier", position: "RB", number: 2 },
        { name: "Bruno Guimarães", position: "CM", number: 39 },
        { name: "Sean Longstaff", position: "CDM", number: 36 },
        { name: "Elliot Anderson", position: "CM", number: 32 },
        { name: "Anthony Gordon", position: "LW", number: 10 },
        { name: "Alexander Isak", position: "ST", number: 14 },
        { name: "Miguel Almirón", position: "RW", number: 24 },
      ]
    }
  },
  {
    fixture: { id: 1004, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
      away: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }
    },
    goals: { home: null, away: null },
    statistics: [
      { team: { name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" }, statistic: "Shots on Goal", value: 0 },
      { team: { name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }, statistic: "Shots on Goal", value: 0 }
    ],
    events: [],
    injuries: [],
    odds: { home: "2.10", draw: "3.40", away: "3.20" },
    topScorers: [
      { name: "Harry Kane", team: { name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" }, goals: 18 },
      { name: "Jarrod Bowen", team: { name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }, goals: 12 }
    ],
    home_lineups: {
      team: { name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
      formation: "4-2-3-1",
      coach: "Ange Postecoglou",
      startXI: [
        { name: "Guglielmo Vicario", position: "GK", number: 13 },
        { name: "Destiny Udogie", position: "LB", number: 13 },
        { name: "Cristian Romero", position: "CB", number: 17 },
        { name: "Micky van de Ven", position: "CB", number: 37 },
        { name: "Pedro Porro", position: "RB", number: 23 },
        { name: "Dejan Kulusevski", position: "CAM", number: 21 },
        { name: "Pape Matar Sarr", position: "CDM", number: 29 },
        { name: "Yves Bissouma", position: "CDM", number: 8 },
        { name: "James Maddison", position: "CAM", number: 10 },
        { name: "Son Heung-min", position: "CAM", number: 7 },
        { name: "Richarlison", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" },
      formation: "4-2-3-1",
      coach: "David Moyes",
      startXI: [
        { name: "Łukasz Fabiański", position: "GK", number: 1 },
        { name: "Emerson", position: "LB", number: 33 },
        { name: "Kurt Zouma", position: "CB", number: 4 },
        { name: "Nayef Aguerd", position: "CB", number: 27 },
        { name: "Vladimir Coufal", position: "RB", number: 5 },
        { name: "Tomáš Souček", position: "CDM", number: 28 },
        { name: "Lucas Paquetá", position: "CAM", number: 11 },
        { name: "Declan Rice", position: "CDM", number: 41 },
        { name: "Saïd Benrahma", position: "LW", number: 22 },
        { name: "Michail Antonio", position: "ST", number: 9 },
        { name: "Jarrod Bowen", position: "RW", number: 20 },
      ]
    }
  },

  {
    fixture: { id: 1005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    },
    goals: { home: null, away: null },
    statistics: [
      { team: { name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" }, statistic: "Shots on Goal", value: 0 },
      { team: { name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }, statistic: "Shots on Goal", value: 0 }
    ],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.20", away: "3.00" },
    topScorers: [
      { name: "Evan Ferguson", team: { name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" }, goals: 10 },
      { name: "Ivan Toney", team: { name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }, goals: 14 }
    ],
    home_lineups: {
      team: { name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
      formation: "4-2-3-1",
      coach: "Roberto De Zerbi",
      startXI: [
        { name: "Jason Steele", position: "GK", number: 23 },
        { name: "Pervis Estupiñán", position: "LB", number: 30 },
        { name: "Lewis Dunk", position: "CB", number: 5 },
        { name: "Jan Paul van Hecke", position: "CB", number: 29 },
        { name: "Tariq Lamptey", position: "RB", number: 2 },
        { name: "Kaoru Mitoma", position: "CAM", number: 22 },
        { name: "Pascal Groß", position: "CDM", number: 13 },
        { name: "Billy Gilmour", position: "CDM", number: 11 },
        { name: "Facundo Buonanotte", position: "CAM", number: 40 },
        { name: "Simon Adingra", position: "CAM", number: 24 },
        { name: "Evan Ferguson", position: "ST", number: 28 }
      ]
    },
    away_lineups: {
      team: { name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" },
      formation: "3-5-2",
      coach: "Thomas Frank",
      startXI: [
        { name: "Mark Flekken", position: "GK", number: 1 },
        { name: "Rico Henry", position: "LWB", number: 3 },
        { name: "Ethan Pinnock", position: "CB", number: 5 },
        { name: "Nathan Collins", position: "CB", number: 22 },
        { name: "Kristoffer Ajer", position: "CB", number: 20 },
        { name: "Aaron Hickey", position: "RWB", number: 2 },
        { name: "Vitaly Janelt", position: "CM", number: 27 },
        { name: "Christian Nørgaard", position: "CDM", number: 6 },
        { name: "Mathias Jensen", position: "CM", number: 8 },
        { name: "Ivan Toney", position: "ST", number: 17 },
        { name: "Bryan Mbeumo", position: "ST", number: 19 }
      ]
    }
  },

  {
    fixture: { id: 1006, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.10", away: "2.90" },
    topScorers: [
      { name: "Jean-Philippe Mateta", team: { name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" }, goals: 8 },
      { name: "Dominic Calvert-Lewin", team: { name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }, goals: 9 }
    ],
    home_lineups: {
      team: { name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" },
      formation: "4-3-3",
      coach: "Oliver Glasner",
      startXI: [
        { name: "Dean Henderson", position: "GK", number: 1 },
        { name: "Tyrick Mitchell", position: "LB", number: 3 },
        { name: "Marc Guéhi", position: "CB", number: 6 },
        { name: "Joachim Andersen", position: "CB", number: 16 },
        { name: "Joel Ward", position: "RB", number: 2 },
        { name: "Will Hughes", position: "CM", number: 19 },
        { name: "Cheick Doucouré", position: "CDM", number: 28 },
        { name: "Jeffrey Schlupp", position: "CM", number: 15 },
        { name: "Eberechi Eze", position: "LW", number: 10 },
        { name: "Jean-Philippe Mateta", position: "ST", number: 14 },
        { name: "Michael Olise", position: "RW", number: 7 },
      ]
    },
    away_lineups: {
      team: { name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" },
      formation: "4-5-1",
      coach: "Sean Dyche",
      startXI: [
        { name: "Jordan Pickford", position: "GK", number: 1 },
        { name: "Vitalii Mykolenko", position: "LB", number: 19 },
        { name: "Jarrad Branthwaite", position: "CB", number: 32 },
        { name: "James Tarkowski", position: "CB", number: 6 },
        { name: "Ashley Young", position: "RB", number: 18 },
        { name: "Idrissa Gueye", position: "CDM", number: 27 },
        { name: "Abdoulaye Doucouré", position: "CAM", number: 16 },
        { name: "Amadou Onana", position: "CDM", number: 8 },
        { name: "Dwight McNeil", position: "LM", number: 7 },
        { name: "Dominic Calvert-Lewin", position: "ST", number: 9 },
        { name: "Jack Harrison", position: "RM", number: 11 },
      ]
    }
  },
  {
    fixture: { id: 1007, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams:
    {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 44, name: "Burnley", logo: "https://media.api-sports.io/football/teams/44.png" }
    },
    goals: { home: 1, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.10", away: "2.90" },
    topScorers: [
      { name: "Hwang Hee-chan", team: { name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" }, goals: 11 },
      { name: "Josh Brownhill", team: { name: "Burnley", logo: "https://media.api-sports.io/football/teams/44.png" }, goals: 6 }
    ],
    home_lineups: {
      team: { name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      formation: "3-4-3",
      coach: "Gary O'Neil",
      startXI: [
        { name: "José Sá", position: "GK", number: 1 },
        { name: "Rayan Aït-Nouri", position: "LWB", number: 3 },
        { name: "Max Kilman", position: "CB", number: 23 },
        { name: "Craig Dawson", position: "CB", number: 15 },
        { name: "Toti Gomes", position: "CB", number: 24 },
        { name: "Nélson Semedo", position: "RWB", number: 22 },
        { name: "João Gomes", position: "CDM", number: 8 },
        { name: "Mario Lemina", position: "CDM", number: 5 },
        { name: "Matheus Cunha", position: "LW", number: 12 },
        { name: "Hwang Hee-chan", position: "ST", number: 11 },
        { name: "Pedro Neto", position: "RW", number: 7 },
      ]
    },
    away_lineups: {
      team: { name: "Burnley", logo: "https://media.api-sports.io/football/teams/44.png" },
      formation: "4-4-2",
      coach: "Vincent Kompany",
      startXI: [
        { name: "James Trafford", position: "GK", number: 1 },
        { name: "Charlie Taylor", position: "LB", number: 3 },
        { name: "Dara O'Shea", position: "CB", number: 2 },
        { name: "Ameen Al-Dakhil", position: "CB", number: 28 },
        { name: "Vitinho", position: "RB", number: 22 },
        { name: "Josh Cullen", position: "CM", number: 24 },
        { name: "Sander Berge", position: "CM", number: 16 },
        { name: "Jacob Bruun Larsen", position: "LM", number: 34 },
        { name: "Jay Rodriguez", position: "ST", number: 19 },
        { name: "Zeki Amdouni", position: "ST", number: 25 },
        { name: "Josh Brownhill", position: "RM", number: 8 }
      ]
    }
  },
  {
    fixture: { id: 1008, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
      away: { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" }
    },
    goals: { home: 3, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.20", draw: "3.30", away: "3.20" },
    topScorers: [
      { name: "Ollie Watkins", team: { name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" }, goals: 19 },
      { name: "Chris Wood", team: { name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" }, goals: 13 }
    ],
    home_lineups: {
      team: { name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
      formation: "4-2-3-1",
      coach: "Unai Emery",
      startXI: [
        { name: "Emiliano Martínez", position: "GK", number: 1 },
        { name: "Lucas Digne", position: "LB", number: 27 },
        { name: "Pau Torres", position: "CB", number: 14 },
        { name: "Ezri Konsa", position: "CB", number: 4 },
        { name: "Matty Cash", position: "RB", number: 2 },
        { name: "Douglas Luiz", position: "CDM", number: 6 },
        { name: "Morgan Rogers", position: "CAM", number: 27 },
        { name: "Boubacar Kamara", position: "CDM", number: 44 },
        { name: "John McGinn", position: "LW", number: 7 },
        { name: "Ollie Watkins", position: "ST", number: 11 },
        { name: "Leon Bailey", position: "RW", number: 31 },
      ]
    },
    away_lineups: {
      team: { name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" },
      formation: "4-2-3-1",
      coach: "Nuno Espírito Santo",
      startXI: [
        { name: "Matz Sels", position: "GK", number: 26 },
        { name: "Ola Aina", position: "LB", number: 34 },
        { name: "Murillo", position: "CB", number: 40 },
        { name: "Willy Boly", position: "CB", number: 30 },
        { name: "Neco Williams", position: "RB", number: 7 },
        { name: "Ibrahim Sangaré", position: "CDM", number: 6 },
        { name: "Morgan Gibbs-White", position: "CAM", number: 10 },
        { name: "Danilo", position: "CDM", number: 28 },
        { name: "Callum Hudson-Odoi", position: "LW", number: 14 },
        { name: "Chris Wood", position: "ST", number: 11 },
        { name: "Anthony Elanga", position: "RW", number: 21 },
      ]
    }
  },
  {
    fixture: { id: 1009, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.20", away: "2.90" },
    topScorers: [
      { name: "Hwang Hee-chan", team: { name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" }, goals: 11 },
      { name: "Dominic Calvert-Lewin", team: { name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }, goals: 9 }
    ],
    home_lineups: {
      team: { name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      formation: "3-4-3",
      coach: "Gary O'Neil",
      startXI: [
        { name: "José Sá", position: "GK", number: 1 },
        { name: "Rayan Aït-Nouri", position: "LWB", number: 3 },
        { name: "Max Kilman", position: "CB", number: 23 },
        { name: "Craig Dawson", position: "CB", number: 15 },
        { name: "Toti Gomes", position: "CB", number: 24 },
        { name: "Nélson Semedo", position: "RWB", number: 22 },
        { name: "João Gomes", position: "CDM", number: 8 },
        { name: "Mario Lemina", position: "CDM", number: 5 },
        { name: "Matheus Cunha", position: "LW", number: 12 },
        { name: "Hwang Hee-chan", position: "ST", number: 11 },
        { name: "Pedro Neto", position: "RW", number: 7 },
      ]
    },
    away_lineups: {
      team: { name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" },
      formation: "4-5-1",
      coach: "Sean Dyche",
      startXI: [
        { name: "Jordan Pickford", position: "GK", number: 1 },
        { name: "Vitalii Mykolenko", position: "LB", number: 19 },
        { name: "Jarrad Branthwaite", position: "CB", number: 32 },
        { name: "James Tarkowski", position: "CB", number: 6 },
        { name: "Ashley Young", position: "RB", number: 18 },
        { name: "Idrissa Gueye", position: "CDM", number: 27 },
        { name: "Abdoulaye Doucouré", position: "CAM", number: 16 },
        { name: "Amadou Onana", position: "CDM", number: 8 },
        { name: "Dwight McNeil", position: "LM", number: 7 },
        { name: "Dominic Calvert-Lewin", position: "ST", number: 9 },
        { name: "Jack Harrison", position: "RM", number: 11 },
      ]
    }
  },
  {
    fixture: { id: 1010, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 46, name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" },
      away: { id: 63, name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.10", away: "2.70" },
    topScorers: [
      { name: "Jamie Vardy", team: { name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" }, goals: 15 },
      { name: "Crysencio Summerville", team: { name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" }, goals: 13 }
    ],
    home_lineups: {
      team: { name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" },
      formation: "4-3-3",
      coach: "Enzo Maresca",
      startXI: [
        { name: "Mads Hermansen", position: "GK", number: 30 },
        { name: "James Justin", position: "LB", number: 2 },
        { name: "Jannik Vestergaard", position: "CB", number: 23 },
        { name: "Wout Faes", position: "CB", number: 3 },
        { name: "Ricardo Pereira", position: "RB", number: 21 },
        { name: "Harry Winks", position: "CDM", number: 8 },
        { name: "Kiernan Dewsbury-Hall", position: "CAM", number: 22 },
        { name: "Wilfred Ndidi", position: "CDM", number: 25 },
        { name: "Stephy Mavididi", position: "LW", number: 10 },
        { name: "Jamie Vardy", position: "ST", number: 9 },
        { name: "Abdul Fatawu", position: "RW", number: 7 },
      ]
    },
    away_lineups: {
      team: { name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" },
      formation: "4-2-3-1",
      coach: "Daniel Farke",
      startXI: [
        { name: "Illan Meslier", position: "GK", number: 1 },
        { name: "Junior Firpo", position: "LB", number: 3 },
        { name: "Ethan Ampadu", position: "CB", number: 4 },
        { name: "Joe Rodon", position: "CB", number: 6 },
        { name: "Luke Ayling", position: "RB", number: 2 },
        { name: "Glen Kamara", position: "CDM", number: 44 },
        { name: "Georginio Rutter", position: "CAM", number: 29 },
        { name: "Ilia Gruev", position: "CDM", number: 8 },
        { name: "Crysencio Summerville", position: "LW", number: 7 },
        { name: "Patrick Bamford", position: "ST", number: 9 },
        { name: "Wilfried Gnonto", position: "RW", number: 26 },
      ]
    }
  },
  {
    fixture: { id: 1011, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" },
      away: { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" }
    },
    goals: { home: 2, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.20", away: "3.10" },
    topScorers: [
      { name: "Rodrigo Muniz", team: { name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" }, goals: 11 },
      { name: "Che Adams", team: { name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" }, goals: 7 }
    ],
    home_lineups: {
      team: { name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" },
      formation: "4-2-3-1",
      coach: "Marco Silva",
      startXI: [
        { name: "Bernd Leno", position: "GK", number: 17 },
        { name: "Antonee Robinson", position: "LB", number: 33 },
        { name: "Calvin Bassey", position: "CB", number: 3 },
        { name: "Tosin Adarabioyo", position: "CB", number: 4 },
        { name: "Kenny Tete", position: "RB", number: 2 },
        { name: "João Palhinha", position: "CDM", number: 26 },
        { name: "Andreas Pereira", position: "CAM", number: 18 },
        { name: "Harrison Reed", position: "CDM", number: 6 },
        { name: "Alex Iwobi", position: "LW", number: 17 },
        { name: "Rodrigo Muniz", position: "ST", number: 9 },
        { name: "Willian", position: "RW", number: 20 },
      ]
    },
    away_lineups: {
      team: { name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" },
      formation: "4-2-3-1",
      coach: "Russell Martin",
      startXI: [
        { name: "Gavin Bazunu", position: "GK", number: 31 },
        { name: "Ryan Manning", position: "LB", number: 3 },
        { name: "Jan Bednarek", position: "CB", number: 35 },
        { name: "Taylor Harwood-Bellis", position: "CB", number: 6 },
        { name: "Kyle Walker-Peters", position: "RB", number: 2 },
        { name: "Flynn Downes", position: "CDM", number: 4 },
        { name: "James Ward-Prowse", position: "CAM", number: 8 },
        { name: "Adam Lallana", position: "CDM", number: 10 },
        { name: "Samuel Edozie", position: "LW", number: 19 },
        { name: "Che Adams", position: "ST", number: 10 },
        { name: "Ryan Fraser", position: "RW", number: 24 },
      ]
    }
  },
  {
    fixture: { id: 1012, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.30", away: "2.80" },
    topScorers: [
      { name: "Dominic Solanke", team: { name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" }, goals: 17 },
      { name: "Ivan Toney", team: { name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }, goals: 14 }
    ],
    home_lineups: {
      team: { name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" },
      formation: "4-2-3-1",
      coach: "Andoni Iraola",
      startXI: [
        { name: "Neto", position: "GK", number: 1 },
        { name: "Milos Kerkez", position: "LB", number: 15 },
        { name: "Marcos Senesi", position: "CB", number: 5 },
        { name: "Illia Zabarnyi", position: "CB", number: 27 },
        { name: "Max Aarons", position: "RB", number: 37 },
        { name: "Lewis Cook", position: "CDM", number: 4 },
        { name: "Philip Billing", position: "CAM", number: 29 },
        { name: "Ryan Christie", position: "CDM", number: 10 },
        { name: "Marcus Tavernier", position: "LW", number: 16 },
        { name: "Dominic Solanke", position: "ST", number: 9 },
        { name: "Antoine Semenyo", position: "RW", number: 24 },
      ]
    },
    away_lineups: {
      team: { name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" },
      formation: "3-5-2",
      coach: "Thomas Frank",
      startXI: [
        { name: "Mark Flekken", position: "GK", number: 1 },
        { name: "Rico Henry", position: "LWB", number: 3 },
        { name: "Ethan Pinnock", position: "CB", number: 5 },
        { name: "Nathan Collins", position: "CB", number: 22 },
        { name: "Kristoffer Ajer", position: "CB", number: 20 },
        { name: "Aaron Hickey", position: "RWB", number: 2 },
        { name: "Vitaly Janelt", position: "CM", number: 27 },
        { name: "Christian Nørgaard", position: "CDM", number: 6 },
        { name: "Mathias Jensen", position: "CM", number: 8 },
        { name: "Ivan Toney", position: "ST", number: 17 },
        { name: "Bryan Mbeumo", position: "ST", number: 19 }
      ]
    }
  },

  {
    fixture: { id: 2001, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 86, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" },
      away: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [
      { team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, statistic: "Shots on Goal", value: 7 },
      { team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, statistic: "Shots on Goal", value: 6 },
      { team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, statistic: "Ball Possession", value: "52%" },
      { team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, statistic: "Ball Possession", value: "48%" }
    ],
    events: [
      { time: 15, team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, type: "Goal", player: "Vinicius Jr", assist: "Bellingham" },
      { time: 70, team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, type: "Card", detail: "Red Card", player: "Gavi" },
      { time: 78, team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, type: "Goal", player: "Lewandowski", assist: "Pedri" },
      { time: 89, team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, type: "Goal", player: "Bellingham", assist: "Modric" }
    ],
    injuries: [
      { team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, player: "Pedri", reason: "Muscle injury", date: "2025-04-05" }
    ],
    odds: { home: "1.80", draw: "3.60", away: "4.00" },
    topScorers: [
      { name: "Robert Lewandowski", team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }, goals: 19 },
      { name: "Jude Bellingham", team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" }, goals: 16 }
    ],
    home_lineups: {
      team: { name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" },
      formation: "4-3-3",
      coach: "Carlo Ancelotti",
      startXI: [
        { name: "Thibaut Courtois", position: "GK", number: 1 },
        { name: "Ferland Mendy", position: "LB", number: 23 },
        { name: "Éder Militão", position: "CB", number: 3 },
        { name: "David Alaba", position: "CB", number: 4 },
        { name: "Dani Carvajal", position: "RB", number: 2 },
        { name: "Toni Kroos", position: "CM", number: 8 },
        { name: "Jude Bellingham", position: "CM", number: 5 },
        { name: "Luka Modrić", position: "CM", number: 10 },
        { name: "Vinícius Jr.", position: "LW", number: 7 },
        { name: "Karim Benzema", position: "ST", number: 9 },
        { name: "Rodrygo", position: "RW", number: 11 },
      ]
    },
    away_lineups: {
      team: { name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" },
      formation: "4-3-3",
      coach: "Xavi Hernández",
      startXI: [
        { name: "Marc-André ter Stegen", position: "GK", number: 1 },
        { name: "Alejandro Balde", position: "LB", number: 3 },
        { name: "Ronald Araújo", position: "CB", number: 4 },
        { name: "Andreas Christensen", position: "CB", number: 15 },
        { name: "Jules Koundé", position: "RB", number: 23 },
        { name: "Sergio Busquets", position: "CDM", number: 5 },
        { name: "Pedri", position: "CM", number: 8 },
        { name: "Gavi", position: "CM", number: 6 },
        { name: "Ousmane Dembélé", position: "RW", number: 7 },
        { name: "Robert Lewandowski", position: "ST", number: 9 },
        { name: "Ansu Fati", position: "LW", number: 10 },
      ]
    }
  },
  {
    fixture: { id: 2002, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
      away: { id: 559, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }
    },
    goals: { home: null, away: null },
    statistics: [
      { team: { name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" }, statistic: "Shots on Goal", value: 0 },
      { team: { name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }, statistic: "Shots on Goal", value: 0 }
    ],
    events: [],
    injuries: [],
    odds: { home: "2.20", draw: "3.30", away: "3.20" },
    topScorers: [
      { name: "Antoine Griezmann", team: { name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" }, goals: 16 },
      { name: "Youssef En-Nesyri", team: { name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }, goals: 12 }
    ],
    home_lineups: {
      team: { name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
      formation: "3-5-2",
      coach: "Diego Simeone",
      startXI: [
        { name: "Jan Oblak", position: "GK", number: 13 },
        { name: "Mario Hermoso", position: "CB", number: 22 },
        { name: "Stefan Savić", position: "CB", number: 15 },
        { name: "José María Giménez", position: "CB", number: 2 },
        { name: "Yannick Carrasco", position: "LWB", number: 21 },
        { name: "Nahuel Molina", position: "RWB", number: 16 },
        { name: "Koke", position: "CM", number: 6 },
        { name: "Saúl Ñíguez", position: "CM", number: 8 },
        { name: "Rodrigo de Paul", position: "CM", number: 5 },
        { name: "Antoine Griezmann", position: "ST", number: 7 },
        { name: "Álvaro Morata", position: "ST", number: 19 }
      ]
    },
    away_lineups: {
      team: { name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" },
      formation: "4-3-3",
      coach: "José Luis Mendilibar",
      startXI: [
        { name: "Yassin Bounou", position: "GK", number: 1 },
        { name: "Marcos Acuña", position: "LB", number: 19 },
        { name: "Loïc Badé", position: "CB", number: 22 },
        { name: "Nemanja Gudelj", position: "CB", number: 6 },
        { name: "Jesús Navas", position: "RB", number: 16 },
        { name: "Fernando", position: "CDM", number: 25 },
        { name: "Ivan Rakitić", position: "CM", number: 10 },
        { name: "Óliver Torres", position: "CM", number: 21 },
        { name: "Suso", position: "RW", number: 7 },
        { name: "Youssef En-Nesyri", position: "ST", number: 15 },
        { name: "Papu Gómez", position: "LW", number: 24 }
      ]
    }
  },

  {
    fixture: { id: 2003, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
      away: { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }
    },
    goals: { home: 1, away: 2 },
    statistics: [
      { team: { name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" }, statistic: "Shots on Goal", value: 4 },
      { team: { name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }, statistic: "Shots on Goal", value: 6 }
    ],
    events: [
      { time: 25, team: { name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }, type: "Goal", player: "Mikel Oyarzabal", assist: "David Silva" },
      { time: 62, team: { name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" }, type: "Goal", player: "Hugo Duro", assist: "Jose Gaya" },
      { time: 78, team: { name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }, type: "Goal", player: "Alexander Sørloth", assist: "Takefusa Kubo" }
    ],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.70" },
    topScorers: [
      { name: "Hugo Duro", team: { name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" }, goals: 11 },
      { name: "Mikel Oyarzabal", team: { name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }, goals: 15 }
    ],
    home_lineups: {
      team: { name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
      formation: "4-4-2",
      coach: "Rubén Baraja",
      startXI: [
        { name: "Giorgi Mamardashvili", position: "GK", number: 25 },
        { name: "José Gayà", position: "LB", number: 14 },
        { name: "Gabriel Paulista", position: "CB", number: 5 },
        { name: "Mouctar Diakhaby", position: "CB", number: 4 },
        { name: "Thierry Correia", position: "RB", number: 20 },
        { name: "Nico González", position: "CM", number: 11 },
        { name: "Javi Guerra", position: "CM", number: 8 },
        { name: "Diego López", position: "LM", number: 16 },
        { name: "Sergi Canós", position: "RM", number: 7 },
        { name: "Hugo Duro", position: "ST", number: 9 },
        { name: "Samuel Lino", position: "ST", number: 22 }
      ]
    },
    away_lineups: {
      team: { name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" },
      formation: "4-3-3",
      coach: "Imanol Alguacil",
      startXI: [
        { name: "Álex Remiro", position: "GK", number: 1 },
        { name: "Aihen Muñoz", position: "LB", number: 3 },
        { name: "Robin Le Normand", position: "CB", number: 24 },
        { name: "Igor Zubeldia", position: "CB", number: 5 },
        { name: "Andoni Gorosabel", position: "RB", number: 18 },
        { name: "Martín Zubimendi", position: "CDM", number: 4 },
        { name: "Mikel Merino", position: "CM", number: 8 },
        { name: "Brais Méndez", position: "CM", number: 23 },
        { name: "Takefusa Kubo", position: "RW", number: 14 },
        { name: "Mikel Oyarzabal", position: "ST", number: 10 },
        { name: "Alexander Sørloth", position: "LW", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 2004, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" },
      away: { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" }
    },
    goals: { home: 1, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.20", away: "3.00" },
    topScorers: [
      { name: "Borja Iglesias", team: { name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" }, goals: 13 },
      { name: "Enes Ünal", team: { name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" }, goals: 8 }
    ],
    home_lineups: {
      team: { name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" },
      formation: "4-2-3-1",
      coach: "Manuel Pellegrini",
      startXI: [
        { name: "Claudio Bravo", position: "GK", number: 1 },
        { name: "Juan Miranda", position: "LB", number: 3 },
        { name: "Germán Pezzella", position: "CB", number: 6 },
        { name: "Chadi Riad", position: "CB", number: 21 },
        { name: "Youssouf Sabaly", position: "RB", number: 23 },
        { name: "William Carvalho", position: "CDM", number: 14 },
        { name: "Guido Rodríguez", position: "CDM", number: 5 },
        { name: "Nabil Fekir", position: "CAM", number: 8 },
        { name: "Ayoze Pérez", position: "LW", number: 10 },
        { name: "Assane Diao", position: "RW", number: 38 },
        { name: "Borja Iglesias", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" },
      formation: "5-4-1",
      coach: "José Bordalás",
      startXI: [
        { name: "David Soria", position: "GK", number: 13 },
        { name: "Diego Rico", position: "LWB", number: 16 },
        { name: "Gastón Álvarez", position: "CB", number: 4 },
        { name: "Djené Dakonam", position: "CB", number: 2 },
        { name: "Omar Alderete", position: "CB", number: 15 },
        { name: "Damián Suárez", position: "RWB", number: 22 },
        { name: "Luis Milla", position: "CM", number: 5 },
        { name: "Nemanja Maksimović", position: "CM", number: 20 },
        { name: "Mason Greenwood", position: "LM", number: 12 },
        { name: "Jaime Mata", position: "RM", number: 7 },
        { name: "Enes Ünal", position: "ST", number: 10 }
      ]
    }
  },
  {
    fixture: { id: 2005, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      away: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }
    },
    goals: { home: 1, away: 3 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.80", draw: "3.30", away: "2.50" },
    topScorers: [
      { name: "Iago Aspas", team: { name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" }, goals: 14 },
      { name: "Gerard Moreno", team: { name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }, goals: 18 }
    ],
    home_lineups: {
      team: { name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      formation: "3-4-3",
      coach: "Rafael Benítez",
      startXI: [
        { name: "Iván Villar", position: "GK", number: 1 },
        { name: "Jailson", position: "CB", number: 2 },
        { name: "Carl Starfelt", position: "CB", number: 20 },
        { name: "Unai Núñez", position: "CB", number: 4 },
        { name: "Hugo Mallo", position: "RWB", number: 33 },
        { name: "Mihailo Ristić", position: "LWB", number: 21 },
        { name: "Fran Beltrán", position: "CM", number: 8 },
        { name: "Luca de la Torre", position: "CM", number: 14 },
        { name: "Óscar Mingueza", position: "RW", number: 3 },
        { name: "Iago Aspas", position: "ST", number: 10 },
        { name: "Jørgen Strand Larsen", position: "LW", number: 18 }
      ]
    },
    away_lineups: {
      team: { name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" },
      formation: "4-4-2",
      coach: "Quique Setién",
      startXI: [
        { name: "Filip Jörgensen", position: "GK", number: 13 },
        { name: "Alberto Moreno", position: "LB", number: 18 },
        { name: "Raúl Albiol", position: "CB", number: 3 },
        { name: "Aïssa Mandi", position: "CB", number: 23 },
        { name: "Juan Foyth", position: "RB", number: 8 },
        { name: "Dani Parejo", position: "CM", number: 10 },
        { name: "Santi Comesaña", position: "CM", number: 14 },
        { name: "Yéremy Pino", position: "LM", number: 21 },
        { name: "Álex Baena", position: "RM", number: 16 },
        { name: "Gerard Moreno", position: "ST", number: 7 },
        { name: "José Luis Morales", position: "ST", number: 11 }
      ]
    }
  },
  {
    fixture: { id: 2006, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 798, name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" },
      away: { id: 727, name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.20", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" },
      formation: "4-4-2",
      coach: "Javier Aguirre",
      startXI: [
        { name: "Predrag Rajković", position: "GK", number: 1 },
        { name: "Pablo Maffeo", position: "RB", number: 15 },
        { name: "Martin Valjent", position: "CB", number: 24 },
        { name: "Antonio Raíllo", position: "CB", number: 21 },
        { name: "Jaume Costa", position: "LB", number: 11 },
        { name: "Iñigo Ruíz de Galarreta", position: "CM", number: 8 },
        { name: "Iddrisu Baba", position: "CM", number: 12 },
        { name: "Takefusa Kubo", position: "RM", number: 14 },
        { name: "Dani Rodríguez", position: "LM", number: 16 },
        { name: "Vedat Muriqi", position: "ST", number: 7 },
        { name: "Amath Ndiaye", position: "ST", number: 17 }
      ]
    },
    away_lineups: {
      team: { name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" },
      formation: "4-3-3",
      coach: "Jagoba Arrasate",
      startXI: [
        { name: "Sergio Herrera", position: "GK", number: 1 },
        { name: "Nacho Vidal", position: "RB", number: 2 },
        { name: "David García", position: "CB", number: 5 },
        { name: "Unai García", position: "CB", number: 23 },
        { name: "Juan Cruz", position: "LB", number: 3 },
        { name: "Jon Moncayola", position: "CM", number: 7 },
        { name: "Lucas Torró", position: "CM", number: 6 },
        { name: "Darko Brašanac", position: "CM", number: 14 },
        { name: "Rubén García", position: "RW", number: 19 },
        { name: "Ante Budimir", position: "ST", number: 17 },
        { name: "Kike García", position: "LW", number: 18 }
      ]
    }
  },
  {
    fixture: { id: 2007, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    },
    goals: { home: 0, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.10", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      formation: "4-2-3-1",
      coach: "Paco López",
      startXI: [
        { name: "Luís Maximiano", position: "GK", number: 1 },
        { name: "Ricard Sánchez", position: "RB", number: 2 },
        { name: "Domingos Duarte", position: "CB", number: 4 },
        { name: "Germán Sánchez", position: "CB", number: 6 },
        { name: "Carlos Neva", position: "LB", number: 15 },
        { name: "Maxime Gonalons", position: "CM", number: 18 },
        { name: "Ángel Montoro", position: "CM", number: 10 },
        { name: "Antonio Puertas", position: "RW", number: 16 },
        { name: "Álex Collado", position: "AM", number: 11 },
        { name: "Myrto Uzuni", position: "LW", number: 21 },
        { name: "Jorge Molina", position: "ST", number: 23 }
      ]
    },
    away_lineups: {
      team: { name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" },
      formation: "4-4-2",
      coach: "Javi Calleja",
      startXI: [
        { name: "Fernando Pacheco", position: "GK", number: 1 },
        { name: "Ximo Navarro", position: "RB", number: 7 },
        { name: "Florian Lejeune", position: "CB", number: 22 },
        { name: "Víctor Laguardia", position: "CB", number: 5 },
        { name: "Rubén Duarte", position: "LB", number: 15 },
        { name: "Tomás Pina", position: "CM", number: 8 },
        { name: "Manu García", position: "CM", number: 16 },
        { name: "Luis Rioja", position: "RM", number: 11 },
        { name: "Jason", position: "LM", number: 19 },
        { name: "Joselu", position: "ST", number: 9 },
        { name: "Mamadou Loum", position: "ST", number: 6 }
      ]
    }
  },
  {
    fixture: { id: 2008, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 724, name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" },
      away: { id: 728, name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" }
    },
    goals: { home: 1, away: 2 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.80" },
    topScorers: [],
    home_lineups: {
      team: { name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" },
      formation: "4-4-2",
      coach: "Mauricio Pellegrino",
      startXI: [
        { name: "Jeremías Ledesma", position: "GK", number: 1 },
        { name: "Iza Carcelén", position: "RB", number: 20 },
        { name: "Luis Hernández", position: "CB", number: 3 },
        { name: "Víctor Chust", position: "CB", number: 5 },
        { name: "Pacha Espino", position: "LB", number: 22 },
        { name: "Rubén Alcaraz", position: "CM", number: 14 },
        { name: "José Mari", position: "CM", number: 6 },
        { name: "Iván Alejo", position: "RM", number: 11 },
        { name: "Salvi Sánchez", position: "LM", number: 7 },
        { name: "Anthony Lozano", position: "ST", number: 9 },
        { name: "Álvaro Negredo", position: "ST", number: 18 }
      ]
    },
    away_lineups: {
      team: { name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" },
      formation: "4-2-3-1",
      coach: "Andoni Iraola",
      startXI: [
        { name: "Stole Dimitrievski", position: "GK", number: 1 },
        { name: "Iván Balliu", position: "RB", number: 20 },
        { name: "Alejandro Catena", position: "CB", number: 16 },
        { name: "Esteban Saveljich", position: "CB", number: 5 },
        { name: "Fran García", position: "LB", number: 3 },
        { name: "Óscar Valentín", position: "CM", number: 23 },
        { name: "Santiago Comesaña", position: "CM", number: 6 },
        { name: "Álvaro García", position: "RW", number: 18 },
        { name: "Isi Palazón", position: "AM", number: 7 },
        { name: "Bebé", position: "LW", number: 19 },
        { name: "Radamel Falcao", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 2009, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 797, name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.90", draw: "3.10", away: "2.60" },
    topScorers: [],
    home_lineups: {
      team: { name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" },
      formation: "4-2-3-1",
      coach: "Pablo Machín",
      startXI: [
        { name: "Edgar Badía", position: "GK", number: 13 },
        { name: "Helibelton Palacios", position: "RB", number: 14 },
        { name: "Diego González", position: "CB", number: 6 },
        { name: "Gonzalo Verdú", position: "CB", number: 5 },
        { name: "Johan Mojica", position: "LB", number: 15 },
        { name: "Gerard Gumbau", position: "CM", number: 21 },
        { name: "Omar Mascarell", position: "CM", number: 8 },
        { name: "Josan", position: "RW", number: 16 },
        { name: "Enzo Roco", position: "AM", number: 20 },
        { name: "Tete Morente", position: "LW", number: 11 },
        { name: "Pere Milla", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" },
      formation: "4-4-2",
      coach: "Javi Calleja",
      startXI: [
        { name: "Fernando Pacheco", position: "GK", number: 1 },
        { name: "Ximo Navarro", position: "RB", number: 7 },
        { name: "Florian Lejeune", position: "CB", number: 22 },
        { name: "Víctor Laguardia", position: "CB", number: 5 },
        { name: "Rubén Duarte", position: "LB", number: 15 },
        { name: "Tomás Pina", position: "CM", number: 8 },
        { name: "Manu García", position: "CM", number: 16 },
        { name: "Luis Rioja", position: "RM", number: 11 },
        { name: "Jason", position: "LM", number: 19 },
        { name: "Joselu", position: "ST", number: 9 },
        { name: "Mamadou Loum", position: "ST", number: 6 }
      ]
    }
  },
  {
    fixture: { id: 2010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 542, name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.20", away: "3.00" },
    topScorers: [],
    home_lineups: {
      team: { name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      formation: "4-2-3-1",
      coach: "Paco López",
      startXI: [
        { name: "Luís Maximiano", position: "GK", number: 1 },
        { name: "Ricard Sánchez", position: "RB", number: 2 },
        { name: "Domingos Duarte", position: "CB", number: 4 },
        { name: "Germán Sánchez", position: "CB", number: 6 },
        { name: "Carlos Neva", position: "LB", number: 15 },
        { name: "Maxime Gonalons", position: "CM", number: 18 },
        { name: "Ángel Montoro", position: "CM", number: 10 },
        { name: "Antonio Puertas", position: "RW", number: 16 },
        { name: "Álex Collado", position: "AM", number: 11 },
        { name: "Myrto Uzuni", position: "LW", number: 21 },
        { name: "Jorge Molina", position: "ST", number: 23 }
      ]
    },
    away_lineups: {
      team: { name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" },
      formation: "4-3-3",
      coach: "Paco López",
      startXI: [
        { name: "Dani Cárdenas", position: "GK", number: 13 },
        { name: "Son", position: "RB", number: 2 },
        { name: "Óscar Duarte", position: "CB", number: 14 },
        { name: "Rober Pier", position: "CB", number: 15 },
        { name: "Clerc", position: "LB", number: 16 },
        { name: "Pepelu", position: "CM", number: 18 },
        { name: "Nikola Vukcevic", position: "CM", number: 5 },
        { name: "Gonzalo Melero", position: "CM", number: 7 },
        { name: "Jorge de Frutos", position: "RW", number: 22 },
        { name: "Roger Martí", position: "ST", number: 9 },
        { name: "José Luis Morales", position: "LW", number: 11 }
      ]
    }
  },
  {
    fixture: { id: 2011, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 531, name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" }
    },
    goals: { home: 0, away: 2 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "3.20", draw: "3.30", away: "2.30" },
    topScorers: [],
    home_lineups: {
      team: { name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      formation: "4-4-2",
      coach: "Luis García",
      startXI: [
        { name: "Diego López", position: "GK", number: 13 },
        { name: "Óscar Gil", position: "RB", number: 2 },
        { name: "Leandro Cabrera", position: "CB", number: 5 },
        { name: "Sergi Gómez", position: "CB", number: 3 },
        { name: "Adrià Pedrosa", position: "LB", number: 14 },
        { name: "Sergi Darder", position: "CM", number: 10 },
        { name: "Fran Mérida", position: "CM", number: 21 },
        { name: "Javi Puado", position: "RM", number: 7 },
        { name: "Nico Melamed", position: "LM", number: 19 },
        { name: "Raúl de Tomás", position: "ST", number: 9 },
        { name: "Joselu", position: "ST", number: 12 }
      ]
    },
    away_lineups: {
      team: { name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" },
      formation: "4-2-3-1",
      coach: "Marcelino García",
      startXI: [
        { name: "Unai Simón", position: "GK", number: 1 },
        { name: "Óscar de Marcos", position: "RB", number: 18 },
        { name: "Yeray Álvarez", position: "CB", number: 5 },
        { name: "Íñigo Martínez", position: "CB", number: 4 },
        { name: "Yuri Berchiche", position: "LB", number: 17 },
        { name: "Dani García", position: "CM", number: 14 },
        { name: "Mikel Vesga", position: "CM", number: 6 },
        { name: "Nico Williams", position: "RW", number: 10 },
        { name: "Oihan Sancet", position: "AM", number: 8 },
        { name: "Iñaki Williams", position: "LW", number: 9 },
        { name: "Asier Villalibre", position: "ST", number: 12 }
      ]
    }
  },
  {
    fixture: { id: 2012, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.80", draw: "3.20", away: "2.60" },
    topScorers: [],
    home_lineups: {
      team: { name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      formation: "4-4-2",
      coach: "Luis García",
      startXI: [
        { name: "Diego López", position: "GK", number: 13 },
        { name: "Óscar Gil", position: "RB", number: 2 },
        { name: "Leandro Cabrera", position: "CB", number: 5 },
        { name: "Sergi Gómez", position: "CB", number: 3 },
        { name: "Adrià Pedrosa", position: "LB", number: 14 },
        { name: "Sergi Darder", position: "CM", number: 10 },
        { name: "Fran Mérida", position: "CM", number: 21 },
        { name: "Javi Puado", position: "RM", number: 7 },
        { name: "Nico Melamed", position: "LM", number: 19 },
        { name: "Raúl de Tomás", position: "ST", number: 9 },
        { name: "Joselu", position: "ST", number: 12 }
      ]
    },
    away_lineups: {
      team: { name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      formation: "4-1-4-1",
      coach: "Eduardo Coudet",
      startXI: [
        { name: "Matías Dituro", position: "GK", number: 1 },
        { name: "Hugo Mallo", position: "RB", number: 2 },
        { name: "Néstor Araújo", position: "CB", number: 4 },
        { name: "Joseph Aidoo", position: "CB", number: 15 },
        { name: "Javi Galán", position: "LB", number: 17 },
        { name: "Fran Beltrán", position: "CM", number: 8 },
        { name: "Denis Suárez", position: "RM", number: 6 },
        { name: "Renato Tapia", position: "CM", number: 14 },
        { name: "Brais Méndez", position: "AM", number: 23 },
        { name: "Franco Cervi", position: "LM", number: 11 },
        { name: "Iago Aspas", position: "ST", number: 10 }
      ]
    }
  },

  {
    fixture: { id: 3001, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
      away: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }
    },
    goals: { home: 1, away: 1 },
    statistics: [
      { team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, statistic: "Shots on Goal", value: 5 },
      { team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, statistic: "Shots on Goal", value: 4 },
      { team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, statistic: "Ball Possession", value: "55%" },
      { team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, statistic: "Ball Possession", value: "45%" }
    ],
    events: [
      { time: 33, team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, type: "Goal", player: "Lautaro Martinez", assist: "Barella" },
      { time: 41, team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, type: "Card", detail: "Yellow Card", player: "Locatelli" },
      { time: 67, team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, type: "Goal", player: "Vlahovic", assist: "Chiesa" }
    ],
    injuries: [
      { team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, player: "Bastoni", reason: "Muscle strain", date: "2025-03-01" }
    ],
    odds: { home: "2.50", draw: "3.10", away: "2.90" },
    topScorers: [
      { name: "Lautaro Martínez", team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" }, goals: 22 },
      { name: "Dusan Vlahovic", team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }, goals: 18 }
    ],
    home_lineups: {
      team: { name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
      formation: "3-5-2",
      coach: "Simone Inzaghi",
      startXI: [
        { name: "Andre Onana", position: "GK", number: 1 },
        { name: "Milan Skriniar", position: "CB", number: 37 },
        { name: "Francesco Acerbi", position: "CB", number: 15 },
        { name: "Alessandro Bastoni", position: "CB", number: 95 },
        { name: "Denzel Dumfries", position: "RM", number: 2 },
        { name: "Nicolo Barella", position: "CM", number: 23 },
        { name: "Hakan Calhanoglu", position: "CM", number: 20 },
        { name: "Henrikh Mkhitaryan", position: "CM", number: 22 },
        { name: "Federico Dimarco", position: "LM", number: 32 },
        { name: "Lautaro Martinez", position: "ST", number: 10 },
        { name: "Edin Dzeko", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" },
      formation: "4-3-3",
      coach: "Massimiliano Allegri",
      startXI: [
        { name: "Wojciech Szczęsny", position: "GK", number: 1 },
        { name: "Danilo", position: "RB", number: 13 },
        { name: "Giorgio Chiellini", position: "CB", number: 3 },
        { name: "Matthijs de Ligt", position: "CB", number: 4 },
        { name: "Alex Sandro", position: "LB", number: 12 },
        { name: "Adrien Rabiot", position: "CM", number: 25 },
        { name: "Manuel Locatelli", position: "CM", number: 27 },
        { name: "Weston McKennie", position: "CM", number: 14 },
        { name: "Federico Chiesa", position: "RW", number: 22 },
        { name: "Dusan Vlahovic", position: "ST", number: 9 },
        { name: "Alvaro Morata", position: "LW", number: 21 }
      ]
    }
  },

  {
    fixture: { id: 3002, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
      away: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }
    },
    goals: { home: 1, away: 1 },
    statistics: [
      { team: { name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" }, statistic: "Shots on Goal", value: 7 },
      { team: { name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }, statistic: "Shots on Goal", value: 5 }
    ],
    events: [
      { time: 34, team: { name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" }, type: "Goal", player: "Rafael Leão", assist: "Theo Hernández" },
      { time: 67, team: { name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }, type: "Goal", player: "Victor Osimhen", assist: "Khvicha Kvaratskhelia" }
    ],
    injuries: [],
    odds: { home: "2.40", draw: "3.30", away: "2.90" },
    topScorers: [
      { name: "Rafael Leão", team: { name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" }, goals: 14 },
      { name: "Victor Osimhen", team: { name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }, goals: 19 }
    ],
    home_lineups: {
      team: { name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
      formation: "4-2-3-1",
      coach: "Stefano Pioli",
      startXI: [
        { name: "Mike Maignan", position: "GK", number: 16 },
        { name: "Davide Calabria", position: "RB", number: 2 },
        { name: "Fikayo Tomori", position: "CB", number: 23 },
        { name: "Pierre Kalulu", position: "CB", number: 20 },
        { name: "Theo Hernández", position: "LB", number: 19 },
        { name: "Sandro Tonali", position: "CM", number: 8 },
        { name: "Ismael Bennacer", position: "CM", number: 4 },
        { name: "Rafael Leão", position: "LW", number: 17 },
        { name: "Brahim Díaz", position: "AM", number: 10 },
        { name: "Alexis Saelemaekers", position: "RW", number: 56 },
        { name: "Olivier Giroud", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" },
      formation: "4-3-3",
      coach: "Luciano Spalletti",
      startXI: [
        { name: "Alex Meret", position: "GK", number: 1 },
        { name: "Giovanni Di Lorenzo", position: "RB", number: 22 },
        { name: "Amir Rrahmani", position: "CB", number: 13 },
        { name: "Kim Min-jae", position: "CB", number: 3 },
        { name: "Mário Rui", position: "LB", number: 6 },
        { name: "André-Frank Zambo Anguissa", position: "CM", number: 99 },
        { name: "Stanislav Lobotka", position: "CM", number: 68 },
        { name: "Piotr Zieliński", position: "CM", number: 20 },
        { name: "Khvicha Kvaratskhelia", position: "LW", number: 77 },
        { name: "Victor Osimhen", position: "ST", number: 9 },
        { name: "Matteo Politano", position: "RW", number: 21 }
      ]
    }
  },

  {
    fixture: { id: 3003, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" },
      away: { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.20", away: "2.80" },
    topScorers: [
      { name: "Paulo Dybala", team: { name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" }, goals: 13 },
      { name: "Ciro Immobile", team: { name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" }, goals: 17 }
    ],
    home_lineups: {
      team: { name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" },
      formation: "3-4-2-1",
      coach: "José Mourinho",
      startXI: [
        { name: "Rui Patrício", position: "GK", number: 1 },
        { name: "Gianluca Mancini", position: "CB", number: 23 },
        { name: "Chris Smalling", position: "CB", number: 6 },
        { name: "Roger Ibañez", position: "CB", number: 3 },
        { name: "Rick Karsdorp", position: "RM", number: 2 },
        { name: "Bryan Cristante", position: "CM", number: 4 },
        { name: "Nemanja Matić", position: "CM", number: 8 },
        { name: "Leonardo Spinazzola", position: "LM", number: 37 },
        { name: "Paulo Dybala", position: "AM", number: 21 },
        { name: "Lorenzo Pellegrini", position: "AM", number: 7 },
        { name: "Tammy Abraham", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" },
      formation: "4-3-3",
      coach: "Maurizio Sarri",
      startXI: [
        { name: "Ivan Provedel", position: "GK", number: 94 },
        { name: "Luca Pellegrini", position: "RB", number: 3 },
        { name: "Alessio Romagnoli", position: "CB", number: 13 },
        { name: "Patric", position: "CB", number: 4 },
        { name: "Adam Marušić", position: "LB", number: 77 },
        { name: "Sergej Milinković-Savić", position: "CM", number: 21 },
        { name: "Danilo Cataldi", position: "CM", number: 32 },
        { name: "Luis Alberto", position: "CM", number: 10 },
        { name: "Felipe Anderson", position: "RW", number: 7 },
        { name: "Ciro Immobile", position: "ST", number: 17 },
        { name: "Mattia Zaccagni", position: "LW", number: 20 }
      ]
    }
  },
  {
    fixture: { id: 3004, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      away: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.20", away: "3.10" },
    topScorers: [],
    home_lineups: {
      team: { name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      formation: "4-3-3",
      coach: "Vincenzo Italiano",
      startXI: [
        { name: "Pietro Terracciano", position: "GK", number: 1 },
        { name: "Dodô", position: "RB", number: 2 },
        { name: "Nikola Milenković", position: "CB", number: 4 },
        { name: "Igor Julio", position: "CB", number: 98 },
        { name: "Cristiano Biraghi", position: "LB", number: 3 },
        { name: "Sofyan Amrabat", position: "CM", number: 34 },
        { name: "Rolando Mandragora", position: "CM", number: 38 },
        { name: "Giacomo Bonaventura", position: "CM", number: 5 },
        { name: "Nicolás González", position: "RW", number: 22 },
        { name: "Luka Jović", position: "ST", number: 7 },
        { name: "Riccardo Sottil", position: "LW", number: 70 }
      ]
    },
    away_lineups: {
      team: { name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      formation: "3-4-2-1",
      coach: "Ivan Jurić",
      startXI: [
        { name: "Vanja Milinković-Savić", position: "GK", number: 32 },
        { name: "Perr Schuurs", position: "CB", number: 3 },
        { name: "Alessandro Buongiorno", position: "CB", number: 4 },
        { name: "David Zima", position: "CB", number: 61 },
        { name: "Valentino Lazaro", position: "RM", number: 20 },
        { name: "Samuele Ricci", position: "CM", number: 28 },
        { name: "Ivan Ilić", position: "CM", number: 8 },
        { name: "Mërgim Vojvoda", position: "LM", number: 27 },
        { name: "Nikola Vlašić", position: "AM", number: 10 },
        { name: "Aleksey Miranchuk", position: "AM", number: 59 },
        { name: "Antonio Sanabria", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 3005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.30", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      formation: "3-5-2",
      coach: "Andrea Sottil",
      startXI: [
        { name: "Marco Silvestri", position: "GK", number: 1 },
        { name: "Jaka Bijol", position: "CB", number: 29 },
        { name: "Nehuen Perez", position: "CB", number: 18 },
        { name: "Rodrigo Becão", position: "CB", number: 50 },
        { name: "Roberto Pereyra", position: "RM", number: 37 },
        { name: "Walace", position: "CM", number: 11 },
        { name: "Jean-Victor Makengo", position: "CM", number: 6 },
        { name: "Destiny Udogie", position: "LM", number: 13 },
        { name: "Gerard Deulofeu", position: "AM", number: 10 },
        { name: "Beto", position: "ST", number: 9 },
        { name: "Isaac Success", position: "ST", number: 7 }
      ]
    },
    away_lineups: {
      team: { name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      formation: "4-1-4-1",
      coach: "Dejan Stanković",
      startXI: [
        { name: "Emil Audero", position: "GK", number: 1 },
        { name: "Bartosz Bereszyński", position: "RB", number: 24 },
        { name: "Omar Colley", position: "CB", number: 15 },
        { name: "Bruno Amione", position: "CB", number: 44 },
        { name: "Tommaso Augello", position: "LB", number: 3 },
        { name: "Ronaldo Vieira", position: "CDM", number: 6 },
        { name: "Abdelhamid Sabiri", position: "RM", number: 10 },
        { name: "Tomás Rincón", position: "CM", number: 8 },
        { name: "Harry Winks", position: "CM", number: 38 },
        { name: "Filip Đuričić", position: "LM", number: 7 },
        { name: "Francesco Caputo", position: "ST", number: 23 }
      ]
    }
  },
  {
    fixture: { id: 3006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 867, name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" }
    },
    goals: { home: 1, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.10", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      formation: "4-3-1-2",
      coach: "Paolo Zanetti",
      startXI: [
        { name: "Guglielmo Vicario", position: "GK", number: 13 },
        { name: "Tyronne Ebuehi", position: "RB", number: 30 },
        { name: "Koni De Winter", position: "CB", number: 4 },
        { name: "Sebastiano Luperto", position: "CB", number: 33 },
        { name: "Fabiano Parisi", position: "LB", number: 65 },
        { name: "Răzvan Marin", position: "CM", number: 18 },
        { name: "Alberto Grassi", position: "CM", number: 5 },
        { name: "Filippo Bandinelli", position: "CM", number: 35 },
        { name: "Nedim Bajrami", position: "AM", number: 10 },
        { name: "Francesco Caputo", position: "ST", number: 9 },
        { name: "Martin Satriano", position: "ST", number: 19 }
      ]
    },
    away_lineups: {
      team: { name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" },
      formation: "4-3-3",
      coach: "Marco Baroni",
      startXI: [
        { name: "Wladimiro Falcone", position: "GK", number: 30 },
        { name: "Valentin Gendrey", position: "RB", number: 17 },
        { name: "Marin Pongračić", position: "CB", number: 5 },
        { name: "Federico Baschirotto", position: "CB", number: 6 },
        { name: "Giuseppe Pezzella", position: "LB", number: 97 },
        { name: "Morten Hjulmand", position: "CM", number: 42 },
        { name: "Joan González", position: "CM", number: 16 },
        { name: "Alexis Blin", position: "CM", number: 29 },
        { name: "Gabriel Strefezza", position: "RW", number: 27 },
        { name: "Assan Ceesay", position: "ST", number: 77 },
        { name: "Lameck Banda", position: "LW", number: 22 }
      ]
    }
  },
  {
    fixture: { id: 3007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      away: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      formation: "3-5-2",
      coach: "Paulo Sousa",
      startXI: [
        { name: "Luigi Sepe", position: "GK", number: 1 },
        { name: "Dylan Bronn", position: "CB", number: 23 },
        { name: "Flavius Daniliuc", position: "CB", number: 4 },
        { name: "Lorenzo Pirola", position: "CB", number: 98 },
        { name: "Junior Sambia", position: "RWB", number: 17 },
        { name: "Lassana Coulibaly", position: "CM", number: 18 },
        { name: "Tonny Vilhena", position: "CM", number: 21 },
        { name: "Domagoj Bradarić", position: "LWB", number: 3 },
        { name: "Pasquale Mazzocchi", position: "RM", number: 30 },
        { name: "Antonio Candreva", position: "ST", number: 87 },
        { name: "Krzysztof Piątek", position: "ST", number: 99 }
      ]
    },
    away_lineups: {
      team: { name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      formation: "4-3-3",
      coach: "Luca Gotti",
      startXI: [
        { name: "Bartłomiej Drągowski", position: "GK", number: 69 },
        { name: "Kelvin Amian", position: "RB", number: 20 },
        { name: "Mattia Caldara", position: "CB", number: 15 },
        { name: "Ethan Ampadu", position: "CB", number: 4 },
        { name: "Arkadiusz Reca", position: "LB", number: 13 },
        { name: "Mehdi Bourabia", position: "CDM", number: 6 },
        { name: "Viktor Kovalenko", position: "CDM", number: 10 },
        { name: "Emmanuel Gyasi", position: "RW", number: 11 },
        { name: "Kevin Agudelo", position: "AM", number: 44 },
        { name: "Daniele Verde", position: "LW", number: 16 },
        { name: "M'Bala Nzola", position: "ST", number: 18 }
      ]
    }
  },
  {
    fixture: { id: 3008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 499, name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" },
      away: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.20", draw: "3.30", away: "3.20" },
    topScorers: [],
    home_lineups: {
      team: { name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" },
      formation: "3-4-2-1",
      coach: "Gian Piero Gasperini",
      startXI: [
        { name: "Juan Musso", position: "GK", number: 1 },
        { name: "Rafael Tolói", position: "CB", number: 2 },
        { name: "Merih Demiral", position: "CB", number: 28 },
        { name: "Giorgio Scalvini", position: "CB", number: 42 },
        { name: "Davide Zappacosta", position: "RWB", number: 77 },
        { name: "Marten de Roon", position: "CM", number: 15 },
        { name: "Teun Koopmeiners", position: "CM", number: 7 },
        { name: "Matteo Ruggeri", position: "LWB", number: 22 },
        { name: "Mario Pašalić", position: "CAM", number: 8 },
        { name: "Ademola Lookman", position: "CAM", number: 11 },
        { name: "Gianluca Scamacca", position: "ST", number: 90 }
      ]
    },
    away_lineups: {
      team: { name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      formation: "4-3-3",
      coach: "Italiano Vincenzo",
      startXI: [
        { name: "Pietro Terracciano", position: "GK", number: 1 },
        { name: "Dodô", position: "RB", number: 2 },
        { name: "Nikola Milenković", position: "CB", number: 4 },
        { name: "Lucas Martínez Quarta", position: "CB", number: 28 },
        { name: "Cristiano Biraghi", position: "LB", number: 3 },
        { name: "Sofyan Amrabat", position: "CDM", number: 34 },
        { name: "Arthur", position: "CM", number: 6 },
        { name: "Giacomo Bonaventura", position: "CM", number: 5 },
        { name: "Nicolás González", position: "RW", number: 10 },
        { name: "Luka Jović", position: "ST", number: 7 },
        { name: "Jonathan Ikoné", position: "LW", number: 11 }
      ]
    }
  },
  {
    fixture: { id: 3009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      away: { id: 479, name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" }
    },
    goals: { home: 0, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.10", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      formation: "3-4-2-1",
      coach: "Ivan Jurić",
      startXI: [
        { name: "Vanja Milinković-Savić", position: "GK", number: 32 },
        { name: "Perr Schuurs", position: "CB", number: 3 },
        { name: "Alessandro Buongiorno", position: "CB", number: 4 },
        { name: "Ricardo Rodríguez", position: "CB", number: 13 },
        { name: "Wilfried Singo", position: "RWB", number: 17 },
        { name: "Samuele Ricci", position: "CM", number: 28 },
        { name: "Ivan Ilić", position: "CM", number: 8 },
        { name: "Valentino Lazaro", position: "LWB", number: 19 },
        { name: "Aleksey Miranchuk", position: "CAM", number: 59 },
        { name: "Nemanja Radonjić", position: "CAM", number: 49 },
        { name: "Antonio Sanabria", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" },
      formation: "4-3-3",
      coach: "Alessio Dionisi",
      startXI: [
        { name: "Andrea Consigli", position: "GK", number: 47 },
        { name: "Jeremy Toljan", position: "RB", number: 2 },
        { name: "Gian Marco Ferrari", position: "CB", number: 13 },
        { name: "Martin Erlić", position: "CB", number: 5 },
        { name: "Rogerio", position: "LB", number: 6 },
        { name: "Davide Frattesi", position: "CM", number: 16 },
        { name: "Maxime Lopez", position: "CM", number: 7 },
        { name: "Kristian Thorstvedt", position: "CM", number: 42 },
        { name: "Domenico Berardi", position: "RW", number: 10 },
        { name: "Andrea Pinamonti", position: "ST", number: 9 },
        { name: "Armand Laurienté", position: "LW", number: 45 }
      ]
    }
  },
  {
    fixture: { id: 3010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 500, name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" }
    },
    goals: { home: 1, away: 3 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.80", draw: "3.20", away: "2.60" },
    topScorers: [],
    home_lineups: {
      team: { name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      formation: "3-5-2",
      coach: "Andrea Sottil",
      startXI: [
        { name: "Marco Silvestri", position: "GK", number: 1 },
        { name: "Jaka Bijol", position: "CB", number: 29 },
        { name: "Rodrigo Becão", position: "CB", number: 50 },
        { name: "Nehuen Pérez", position: "CB", number: 18 },
        { name: "Roberto Pereyra", position: "RWB", number: 37 },
        { name: "Walace", position: "CM", number: 11 },
        { name: "Jean-Victor Makengo", position: "CM", number: 56 },
        { name: "Sandi Lovrić", position: "CM", number: 8 },
        { name: "Destiny Udogie", position: "LWB", number: 13 },
        { name: "Florian Thauvin", position: "ST", number: 26 },
        { name: "Beto", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" },
      formation: "4-2-3-1",
      coach: "Thiago Motta",
      startXI: [
        { name: "Łukasz Skorupski", position: "GK", number: 28 },
        { name: "Stefan Posch", position: "RB", number: 3 },
        { name: "Jhon Lucumí", position: "CB", number: 26 },
        { name: "Adama Soumaoro", position: "CB", number: 23 },
        { name: "Andrea Cambiaso", position: "LB", number: 33 },
        { name: "Jerdy Schouten", position: "CDM", number: 30 },
        { name: "Nicolás Domínguez", position: "CDM", number: 32 },
        { name: "Riccardo Orsolini", position: "RW", number: 7 },
        { name: "Lewis Ferguson", position: "AM", number: 19 },
        { name: "Musa Barrow", position: "LW", number: 99 },
        { name: "Marko Arnautović", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 3011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      away: { id: 495, name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.20", away: "2.80" },
    topScorers: [],
    home_lineups: {
      team: { name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      formation: "4-1-4-1",
      coach: "Dejan Stanković",
      startXI: [
        { name: "Emil Audero", position: "GK", number: 1 },
        { name: "Bartosz Bereszyński", position: "RB", number: 24 },
        { name: "Omar Colley", position: "CB", number: 15 },
        { name: "Bruno Amione", position: "CB", number: 37 },
        { name: "Tommaso Augello", position: "LB", number: 3 },
        { name: "Ronaldo Vieira", position: "CDM", number: 6 },
        { name: "Tomás Rincón", position: "CM", number: 5 },
        { name: "Abdelhamid Sabiri", position: "CAM", number: 10 },
        { name: "Filip Đuričić", position: "RM", number: 7 },
        { name: "Mehdi Léris", position: "LM", number: 8 },
        { name: "Francesco Caputo", position: "ST", number: 23 }
      ]
    },
    away_lineups: {
      team: { name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" },
      formation: "3-5-2",
      coach: "Alexander Blessin",
      startXI: [
        { name: "Josep Martínez", position: "GK", number: 1 },
        { name: "Mattia Bani", position: "CB", number: 13 },
        { name: "Radu Drăgușin", position: "CB", number: 4 },
        { name: "Johan Vásquez", position: "CB", number: 22 },
        { name: "Stefano Sabelli", position: "RWB", number: 20 },
        { name: "Milan Badelj", position: "CM", number: 47 },
        { name: "Morten Frendrup", position: "CM", number: 32 },
        { name: "Aaron Cissoko", position: "LWB", number: 25 },
        { name: "Ruslan Malinovskyi", position: "AM", number: 17 },
        { name: "Mateo Retegui", position: "ST", number: 19 },
        { name: "Caleb Ekuban", position: "ST", number: 18 }
      ]
    }
  },
  {
    fixture: { id: 3012, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 517, name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" }
    },
    goals: { home: 2, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.20", away: "3.00" },
    topScorers: [],
    home_lineups: {
      team: { name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      formation: "4-3-1-2",
      coach: "Paolo Zanetti",
      startXI: [
        { name: "Guglielmo Vicario", position: "GK", number: 13 },
        { name: "Tyronne Ebuehi", position: "RB", number: 30 },
        { name: "Koni De Winter", position: "CB", number: 4 },
        { name: "Sebastiano Luperto", position: "CB", number: 33 },
        { name: "Fabiano Parisi", position: "LB", number: 65 },
        { name: "Răzvan Marin", position: "CM", number: 18 },
        { name: "Alberto Grassi", position: "CM", number: 5 },
        { name: "Filippo Bandinelli", position: "CM", number: 35 },
        { name: "Nedim Bajrami", position: "AM", number: 10 },
        { name: "Francesco Caputo", position: "ST", number: 9 },
        { name: "Martin Satriano", position: "ST", number: 19 }
      ]
    },
    away_lineups: {
      team: { name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" },
      formation: "3-5-2",
      coach: "Paolo Vanoli",
      startXI: [
        { name: "Sergio Romero", position: "GK", number: 1 },
        { name: "Pietro Ceccaroni", position: "CB", number: 32 },
        { name: "Mattia Caldara", position: "CB", number: 31 },
        { name: "Ethan Ampadu", position: "CB", number: 4 },
        { name: "Pasquale Mazzocchi", position: "RWB", number: 7 },
        { name: "Gianluca Busio", position: "CM", number: 6 },
        { name: "Tanner Tessmann", position: "CM", number: 11 },
        { name: "Magnus Kofod Andersen", position: "CM", number: 8 },
        { name: "Ridgeciano Haps", position: "LWB", number: 5 },
        { name: "Thomas Henry", position: "ST", number: 14 },
        { name: "Joel Pohjanpalo", position: "ST", number: 20 }
      ]
    }
  },
  {
    fixture: { id: 3013, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      away: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" }
    },
    goals: { home: 0, away: 2 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.10", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      formation: "4-3-3",
      coach: "Luca Gotti",
      startXI: [
        { name: "Bartłomiej Drągowski", position: "GK", number: 69 },
        { name: "Kelvin Amian", position: "RB", number: 20 },
        { name: "Mattia Caldara", position: "CB", number: 15 },
        { name: "Ethan Ampadu", position: "CB", number: 4 },
        { name: "Arkadiusz Reca", position: "LB", number: 13 },
        { name: "Mehdi Bourabia", position: "CDM", number: 6 },
        { name: "Viktor Kovalenko", position: "CDM", number: 10 },
        { name: "Jakub Kiwior", position: "CM", number: 25 },
        { name: "Emmanuel Gyasi", position: "RW", number: 11 },
        { name: "M'Bala Nzola", position: "ST", number: 18 },
        { name: "Daniele Verde", position: "LW", number: 16 }
      ]
    },
    away_lineups: {
      team: { name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      formation: "3-5-2",
      coach: "Paulo Sousa",
      startXI: [
        { name: "Luigi Sepe", position: "GK", number: 1 },
        { name: "Dylan Bronn", position: "CB", number: 23 },
        { name: "Flavius Daniliuc", position: "CB", number: 4 },
        { name: "Lorenzo Pirola", position: "CB", number: 98 },
        { name: "Junior Sambia", position: "RWB", number: 17 },
        { name: "Lassana Coulibaly", position: "CM", number: 18 },
        { name: "Tonny Vilhena", position: "CM", number: 21 },
        { name: "Domagoj Bradarić", position: "LWB", number: 3 },
        { name: "Pasquale Mazzocchi", position: "RM", number: 30 },
        { name: "Antonio Candreva", position: "ST", number: 87 },
        { name: "Krzysztof Piątek", position: "ST", number: 99 }
      ]
    }
  },
  {
    fixture: { id: 3014, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 482, name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" },
      away: { id: 504, name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.30", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" },
      formation: "4-3-1-2",
      coach: "Claudio Ranieri",
      startXI: [
        { name: "Simone Scuffet", position: "GK", number: 22 },
        { name: "Nahitan Nández", position: "RB", number: 8 },
        { name: "Alberto Dossena", position: "CB", number: 4 },
        { name: "Yerry Mina", position: "CB", number: 26 },
        { name: "Tommaso Augello", position: "LB", number: 3 },
        { name: "Antoine Makoumbou", position: "CM", number: 29 },
        { name: "Ibrahim Sulemana", position: "CM", number: 6 },
        { name: "Alessandro Deiola", position: "CM", number: 14 },
        { name: "Zito Luvumbo", position: "AM", number: 77 },
        { name: "Leonardo Pavoletti", position: "ST", number: 30 },
        { name: "Eldor Shomurodov", position: "ST", number: 61 }
      ]
    },
    away_lineups: {
      team: { name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" },
      formation: "3-4-2-1",
      coach: "Marco Baroni",
      startXI: [
        { name: "Lorenzo Montipò", position: "GK", number: 1 },
        { name: "Isak Hien", position: "CB", number: 27 },
        { name: "Koray Günter", position: "CB", number: 21 },
        { name: "Diego Coppola", position: "CB", number: 42 },
        { name: "Jackson Tchatchoua", position: "RWB", number: 38 },
        { name: "Michael Folorunsho", position: "CM", number: 90 },
        { name: "Ondřej Duda", position: "CM", number: 33 },
        { name: "Darko Lazović", position: "LWB", number: 8 },
        { name: "Tomáš Suslov", position: "CAM", number: 31 },
        { name: "Cyril Ngonge", position: "CAM", number: 26 },
        { name: "Tijjani Noslin", position: "ST", number: 17 }
      ]
    }
  },

  {
    fixture: { id: 4001, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
      away: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }
    },
    goals: { home: null, away: null },
    statistics: [
      { team: { name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" }, statistic: "Shots on Goal", value: 0 },
      { team: { name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }, statistic: "Shots on Goal", value: 0 }
    ],
    events: [],
    injuries: [
      { team: { name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" }, player: "Alphonso Davies", reason: "Ankle injury", date: "2025-01-15" }
    ],
    odds: { home: "1.65", draw: "4.20", away: "5.50" },
    topScorers: [
      { name: "Harry Kane", team: { name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" }, goals: 24 },
      { name: "Niclas Füllkrug", team: { name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }, goals: 16 }
    ],
    home_lineups: {
      team: { name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
      formation: "4-2-3-1",
      coach: "Thomas Tuchel",
      startXI: [
        { name: "Manuel Neuer", position: "GK", number: 1 },
        { name: "Joshua Kimmich", position: "RB", number: 6 },
        { name: "Dayot Upamecano", position: "CB", number: 2 },
        { name: "Kim Min-jae", position: "CB", number: 3 },
        { name: "Alphonso Davies", position: "LB", number: 19 },
        { name: "Leon Goretzka", position: "CDM", number: 8 },
        { name: "Aleksandar Pavlovic", position: "CDM", number: 45 },
        { name: "Leroy Sané", position: "CAM", number: 10 },
        { name: "Jamal Musiala", position: "CAM", number: 42 },
        { name: "Kingsley Coman", position: "CAM", number: 11 },
        { name: "Harry Kane", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" },
      formation: "4-3-3",
      coach: "Edin Terzić",
      startXI: [
        { name: "Gregor Kobel", position: "GK", number: 1 },
        { name: "Marius Wolf", position: "RB", number: 17 },
        { name: "Mats Hummels", position: "CB", number: 15 },
        { name: "Nico Schlotterbeck", position: "CB", number: 4 },
        { name: "Ian Maatsen", position: "LB", number: 22 },
        { name: "Emre Can", position: "CDM", number: 23 },
        { name: "Marcel Sabitzer", position: "CM", number: 20 },
        { name: "Julian Brandt", position: "CM", number: 19 },
        { name: "Jadon Sancho", position: "RW", number: 25 },
        { name: "Niclas Füllkrug", position: "ST", number: 14 },
        { name: "Karim Adeyemi", position: "LW", number: 27 }
      ]
    }
  },

  {
    fixture: { id: 4002, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
      away: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }
    },
    goals: { home: 2, away: 3 },
    statistics: [
      { team: { name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" }, statistic: "Shots on Goal", value: 8 },
      { team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, statistic: "Shots on Goal", value: 9 }
    ],
    events: [
      { time: 18, team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, type: "Goal", player: "Florian Wirtz", assist: "Granit Xhaka" },
      { time: 35, team: { name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" }, type: "Goal", player: "Dani Olmo", assist: "Timo Werner" },
      { time: 56, team: { name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" }, type: "Goal", player: "Lois Openda", assist: "Xavi Simons" },
      { time: 73, team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, type: "Goal", player: "Victor Boniface", assist: "Jeremie Frimpong" },
      { time: 89, team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, type: "Goal", player: "Patrik Schick", assist: "Florian Wirtz" }
    ],
    injuries: [],
    odds: { home: "2.70", draw: "3.40", away: "2.50" },
    topScorers: [
      { name: "Lois Openda", team: { name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" }, goals: 20 },
      { name: "Victor Boniface", team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }, goals: 18 }
    ],
    home_lineups: {
      team: { name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
      formation: "4-2-2-2",
      coach: "Marco Rose",
      startXI: [
        { name: "Péter Gulácsi", position: "GK", number: 1 },
        { name: "Benjamin Henrichs", position: "RB", number: 39 },
        { name: "Lukas Klostermann", position: "CB", number: 16 },
        { name: "Willi Orbán", position: "CB", number: 4 },
        { name: "David Raum", position: "LB", number: 22 },
        { name: "Amadou Haidara", position: "CDM", number: 8 },
        { name: "Xaver Schlager", position: "CDM", number: 24 },
        { name: "Dani Olmo", position: "CAM", number: 25 },
        { name: "Xavi Simons", position: "CAM", number: 10 },
        { name: "Loïs Openda", position: "ST", number: 17 },
        { name: "Timo Werner", position: "ST", number: 11 }
      ]
    },
    away_lineups: {
      team: { name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" },
      formation: "3-4-2-1",
      coach: "Xabi Alonso",
      startXI: [
        { name: "Lukáš Hrádecký", position: "GK", number: 1 },
        { name: "Odilon Kossounou", position: "CB", number: 6 },
        { name: "Jonathan Tah", position: "CB", number: 4 },
        { name: "Piero Hincapié", position: "CB", number: 3 },
        { name: "Jeremie Frimpong", position: "RWB", number: 30 },
        { name: "Granit Xhaka", position: "CM", number: 34 },
        { name: "Robert Andrich", position: "CM", number: 8 },
        { name: "Álex Grimaldo", position: "LWB", number: 20 },
        { name: "Florian Wirtz", position: "CAM", number: 10 },
        { name: "Jonas Hofmann", position: "CAM", number: 7 },
        { name: "Victor Boniface", position: "ST", number: 22 }
      ]
    }
  },
  {
    fixture: { id: 4003, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" },
      away: { id: 163, name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.30", away: "3.10" },
    topScorers: [],
    home_lineups: {
      team: { name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" },
      formation: "3-4-2-1",
      coach: "Dino Toppmöller",
      startXI: [
        { name: "Kevin Trapp", position: "GK", number: 1 },
        { name: "Willian Pacho", position: "CB", number: 3 },
        { name: "Robin Koch", position: "CB", number: 4 },
        { name: "Tuta", position: "CB", number: 35 },
        { name: "Buta", position: "RWB", number: 24 },
        { name: "Ellyes Skhiri", position: "CM", number: 15 },
        { name: "Hugo Larsson", position: "CM", number: 16 },
        { name: "Philipp Max", position: "LWB", number: 31 },
        { name: "Mario Götze", position: "CAM", number: 27 },
        { name: "Omar Marmoush", position: "CAM", number: 7 },
        { name: "Hugo Ekitiké", position: "ST", number: 11 }
      ]
    },
    away_lineups: {
      team: { name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" },
      formation: "4-2-3-1",
      coach: "Gerardo Seoane",
      startXI: [
        { name: "Moritz Nicolas", position: "GK", number: 33 },
        { name: "Joe Scally", position: "RB", number: 29 },
        { name: "Nico Elvedi", position: "CB", number: 30 },
        { name: "Marvin Friedrich", position: "CB", number: 5 },
        { name: "Luca Netz", position: "LB", number: 20 },
        { name: "Manu Koné", position: "CDM", number: 17 },
        { name: "Julian Weigl", position: "CDM", number: 8 },
        { name: "Franck Honorat", position: "RW", number: 9 },
        { name: "Florian Neuhaus", position: "AM", number: 32 },
        { name: "Nathan Ngoumou", position: "LW", number: 19 },
        { name: "Tim Kleindienst", position: "ST", number: 11 }
      ]
    }
  },
  {
    fixture: { id: 4004, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 160, name: "Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      away: { id: 164, name: "Mainz", logo: "https://media.api-sports.io/football/teams/164.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.20", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      formation: "3-4-3",
      coach: "Christian Streich",
      startXI: [
        { name: "Noah Atubolu", position: "GK", number: 1 },
        { name: "Matthias Ginter", position: "CB", number: 28 },
        { name: "Manuel Gulde", position: "CB", number: 5 },
        { name: "Philipp Lienhart", position: "CB", number: 3 },
        { name: "Lukas Kübler", position: "RWB", number: 17 },
        { name: "Maximilian Eggestein", position: "CM", number: 8 },
        { name: "Nicolas Höfler", position: "CM", number: 27 },
        { name: "Christian Günter", position: "LWB", number: 30 },
        { name: "Ritsu Doan", position: "RW", number: 42 },
        { name: "Lucas Höler", position: "ST", number: 9 },
        { name: "Vincenzo Grifo", position: "LW", number: 32 }
      ]
    },
    away_lineups: {
      team: { name: "Mainz", logo: "https://media.api-sports.io/football/teams/164.png" },
      formation: "3-4-2-1",
      coach: "Bo Svensson",
      startXI: [
        { name: "Robin Zentner", position: "GK", number: 27 },
        { name: "Stefan Bell", position: "CB", number: 16 },
        { name: "Andreas Hanche-Olsen", position: "CB", number: 31 },
        { name: "Sepp van den Berg", position: "CB", number: 3 },
        { name: "Danny da Costa", position: "RWB", number: 14 },
        { name: "Dominik Kohr", position: "CM", number: 6 },
        { name: "Lee Jae-sung", position: "CM", number: 7 },
        { name: "Philipp Mwene", position: "LWB", number: 2 },
        { name: "Brajan Gruda", position: "CAM", number: 43 },
        { name: "Jonathan Burkardt", position: "CAM", number: 29 },
        { name: "Ludovic Ajorque", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 4005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 159, name: "Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" },
      away: { id: 187, name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" },
      formation: "4-2-3-1",
      coach: "Enrico Maaßen",
      startXI: [
        { name: "Finn Dahmen", position: "GK", number: 1 },
        { name: "Robert Gumny", position: "RB", number: 2 },
        { name: "Jeffrey Gouweleeuw", position: "CB", number: 6 },
        { name: "Maximilian Bauer", position: "CB", number: 23 },
        { name: "Iago", position: "LB", number: 22 },
        { name: "Elvis Rexhbecaj", position: "CDM", number: 8 },
        { name: "Kristijan Jakić", position: "CDM", number: 17 },
        { name: "Arne Maier", position: "RW", number: 10 },
        { name: "Rubén Vargas", position: "AM", number: 16 },
        { name: "Dimitrios Giannoulis", position: "LW", number: 13 },
        { name: "Ermedin Demirović", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" },
      formation: "4-3-3",
      coach: "Thomas Letsch",
      startXI: [
        { name: "Manuel Riemann", position: "GK", number: 1 },
        { name: "Cristian Gamboa", position: "RB", number: 2 },
        { name: "Ivan Ordets", position: "CB", number: 20 },
        { name: "Keven Schlotterbeck", position: "CB", number: 31 },
        { name: "Bernardo", position: "LB", number: 3 },
        { name: "Anthony Losilla", position: "CDM", number: 8 },
        { name: "Kevin Stöger", position: "CM", number: 7 },
        { name: "Maximilian Wittek", position: "CM", number: 32 },
        { name: "Takuma Asano", position: "RW", number: 11 },
        { name: "Philipp Hofmann", position: "ST", number: 33 },
        { name: "Christopher Antwi-Adjei", position: "LW", number: 22 }
      ]
    }
  },
  {
    fixture: { id: 4006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 172, name: "Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      away: { id: 167, name: "Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" }
    },
    goals: { home: 1, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.30", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      formation: "3-4-3",
      coach: "Sebastian Hoeneß",
      startXI: [
        { name: "Alexander Nübel", position: "GK", number: 33 },
        { name: "Waldemar Anton", position: "CB", number: 2 },
        { name: "Hiroki Ito", position: "CB", number: 21 },
        { name: "Dan-Axel Zagadou", position: "CB", number: 23 },
        { name: "Josha Vagnoman", position: "RWB", number: 4 },
        { name: "Angelo Stiller", position: "CM", number: 6 },
        { name: "Atakan Karazor", position: "CM", number: 16 },
        { name: "Maximilian Mittelstädt", position: "LWB", number: 7 },
        { name: "Chris Führich", position: "RW", number: 27 },
        { name: "Serhou Guirassy", position: "ST", number: 9 },
        { name: "Silas Katompa Mvumpa", position: "LW", number: 14 }
      ]
    },
    away_lineups: {
      team: { name: "Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      formation: "3-4-1-2",
      coach: "Pellegrino Matarazzo",
      startXI: [
        { name: "Oliver Baumann", position: "GK", number: 1 },
        { name: "Ozan Kabak", position: "CB", number: 5 },
        { name: "Anton Stach", position: "CB", number: 16 },
        { name: "Kevin Akpoguma", position: "CB", number: 25 },
        { name: "Pavel Kadeřábek", position: "RWB", number: 3 },
        { name: "Grischa Prömel", position: "CM", number: 6 },
        { name: "Florian Grillitsch", position: "CM", number: 11 },
        { name: "David Jurásek", position: "LWB", number: 19 },
        { name: "Umut Tohumcu", position: "AM", number: 27 },
        { name: "Maximilian Beier", position: "ST", number: 14 },
        { name: "Andrej Kramarić", position: "ST", number: 27 }
      ]
    }
  },
  {
    fixture: { id: 4007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      away: { id: 210, name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" }
    },
    goals: { home: 3, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.20", draw: "3.40", away: "3.20" },
    topScorers: [],
    home_lineups: {
      team: { name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      formation: "3-5-2",
      coach: "Ole Werner",
      startXI: [
        { name: "Michael Zetterer", position: "GK", number: 30 },
        { name: "Miloš Veljković", position: "CB", number: 13 },
        { name: "Marco Friedl", position: "CB", number: 32 },
        { name: "Anthony Jung", position: "CB", number: 3 },
        { name: "Mitchell Weiser", position: "RWB", number: 8 },
        { name: "Leonardo Bittencourt", position: "CM", number: 10 },
        { name: "Jens Stage", position: "CM", number: 6 },
        { name: "Romano Schmid", position: "CM", number: 20 },
        { name: "Felix Agu", position: "LWB", number: 27 },
        { name: "Justin Njinmah", position: "ST", number: 17 },
        { name: "Marvin Ducksch", position: "ST", number: 7 }
      ]
    },
    away_lineups: {
      team: { name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" },
      formation: "4-2-3-1",
      coach: "Frank Schmidt",
      startXI: [
        { name: "Kevin Müller", position: "GK", number: 1 },
        { name: "Marnon Busch", position: "RB", number: 2 },
        { name: "Benedikt Gimber", position: "CB", number: 4 },
        { name: "Patrick Mainka", position: "CB", number: 6 },
        { name: "Jonas Föhrenbach", position: "LB", number: 19 },
        { name: "Lennard Maloney", position: "CDM", number: 33 },
        { name: "Jan Schöppner", position: "CDM", number: 3 },
        { name: "Jan-Niklas Beste", position: "RW", number: 37 },
        { name: "Adrian Beck", position: "AM", number: 21 },
        { name: "Eren Dinkçi", position: "LW", number: 8 },
        { name: "Tim Kleindienst", position: "ST", number: 10 }
      ]
    }
  },
  {
    fixture: { id: 4008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 170, name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" },
      away: { id: 160, name: "SC Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.20", away: "2.60" },
    topScorers: [],
    home_lineups: {
      team: { name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" },
      formation: "4-2-3-1",
      coach: "Niko Kovač",
      startXI: [
        { name: "Koen Casteels", position: "GK", number: 1 },
        { name: "Ridle Baku", position: "RB", number: 20 },
        { name: "Maxence Lacroix", position: "CB", number: 4 },
        { name: "Moritz Jenz", position: "CB", number: 39 },
        { name: "Jakub Kaminski", position: "LB", number: 16 },
        { name: "Aster Vranckx", position: "CDM", number: 23 },
        { name: "Maximilian Arnold", position: "CDM", number: 27 },
        { name: "Patrick Wimmer", position: "RW", number: 39 },
        { name: "Yannick Gerhardt", position: "AM", number: 31 },
        { name: "Mattias Svanberg", position: "LW", number: 32 },
        { name: "Jonas Wind", position: "ST", number: 7 }
      ]
    },
    away_lineups: {
      team: { name: "SC Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      formation: "3-4-3",
      coach: "Christian Streich",
      startXI: [
        { name: "Noah Atubolu", position: "GK", number: 1 },
        { name: "Matthias Ginter", position: "CB", number: 28 },
        { name: "Manuel Gulde", position: "CB", number: 5 },
        { name: "Philipp Lienhart", position: "CB", number: 3 },
        { name: "Lukas Kübler", position: "RWB", number: 17 },
        { name: "Maximilian Eggestein", position: "CM", number: 8 },
        { name: "Nicolas Höfler", position: "CM", number: 27 },
        { name: "Christian Günter", position: "LWB", number: 30 },
        { name: "Ritsu Doan", position: "RW", number: 42 },
        { name: "Lucas Höler", position: "ST", number: 9 },
        { name: "Vincenzo Grifo", position: "LW", number: 32 }
      ]
    }
  },
  {
    fixture: { id: 4009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 167, name: "TSG Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      away: { id: 161, name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" }
    },
    goals: { home: 2, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.30", away: "3.00" },
    topScorers: [],
    home_lineups: {
      team: { name: "TSG Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      formation: "3-4-1-2",
      coach: "Pellegrino Matarazzo",
      startXI: [
        { name: "Oliver Baumann", position: "GK", number: 1 },
        { name: "Ozan Kabak", position: "CB", number: 5 },
        { name: "Anton Stach", position: "CB", number: 16 },
        { name: "Kevin Akpoguma", position: "CB", number: 25 },
        { name: "Pavel Kadeřábek", position: "RWB", number: 3 },
        { name: "Grischa Prömel", position: "CM", number: 6 },
        { name: "Florian Grillitsch", position: "CM", number: 11 },
        { name: "David Jurásek", position: "LWB", number: 19 },
        { name: "Umut Tohumcu", position: "AM", number: 27 },
        { name: "Maximilian Beier", position: "ST", number: 14 },
        { name: "Andrej Kramarić", position: "ST", number: 27 }
      ]
    },
    away_lineups: {
      team: { name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" },
      formation: "4-2-3-1",
      coach: "Steffen Baumgart",
      startXI: [
        { name: "Marvin Schwäbe", position: "GK", number: 1 },
        { name: "Benno Schmitz", position: "RB", number: 2 },
        { name: "Jeff Chabot", position: "CB", number: 24 },
        { name: "Timo Hübers", position: "CB", number: 4 },
        { name: "Leart Paqarada", position: "LB", number: 17 },
        { name: "Eric Martel", position: "CDM", number: 6 },
        { name: "Ellyes Skhiri", position: "CDM", number: 28 },
        { name: "Dejan Ljubičić", position: "RW", number: 7 },
        { name: "Florian Kainz", position: "AM", number: 30 },
        { name: "Linton Maina", position: "LW", number: 37 },
        { name: "Davie Selke", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 4010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 28, name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" },
      away: { id: 172, name: "VfB Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" }
    },
    goals: { home: 1, away: 2 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.80", draw: "3.20", away: "2.50" },
    topScorers: [],
    home_lineups: {
      team: { name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" },
      formation: "3-5-2",
      coach: "Urs Fischer",
      startXI: [
        { name: "Frederik Rønnow", position: "GK", number: 1 },
        { name: "Danilho Doekhi", position: "CB", number: 31 },
        { name: "Robin Knoche", position: "CB", number: 31 },
        { name: "Diogo Leite", position: "CB", number: 4 },
        { name: "Christopher Trimmel", position: "RWB", number: 28 },
        { name: "Rani Khedira", position: "CM", number: 8 },
        { name: "Lucas Tousart", position: "CM", number: 29 },
        { name: "András Schäfer", position: "CM", number: 13 },
        { name: "Jerome Roussillon", position: "LWB", number: 15 },
        { name: "Kevin Behrens", position: "ST", number: 27 },
        { name: "Sheraldo Becker", position: "ST", number: 7 }
      ]
    },
    away_lineups: {
      team: { name: "VfB Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      formation: "4-2-3-1",
      coach: "Sebastian Hoeneß",
      startXI: [
        { name: "Alexander Nübel", position: "GK", number: 33 },
        { name: "Josha Vagnoman", position: "RB", number: 4 },
        { name: "Waldemar Anton", position: "CB", number: 2 },
        { name: "Hiroki Ito", position: "CB", number: 21 },
        { name: "Maximilian Mittelstädt", position: "LB", number: 7 },
        { name: "Angelo Stiller", position: "CDM", number: 6 },
        { name: "Atakan Karazor", position: "CDM", number: 16 },
        { name: "Chris Führich", position: "RW", number: 27 },
        { name: "Enzo Millot", position: "AM", number: 8 },
        { name: "Jamie Leweling", position: "LW", number: 18 },
        { name: "Serhou Guirassy", position: "ST", number: 9 }
      ]
    }
  },
  {
    fixture: { id: 4011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 164, name: "Mainz 05", logo: "https://media.api-sports.io/football/teams/164.png" },
      away: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Mainz 05", logo: "https://media.api-sports.io/football/teams/164.png" },
      formation: "3-4-2-1",
      coach: "Bo Svensson",
      startXI: [
        { name: "Robin Zentner", position: "GK", number: 27 },
        { name: "Stefan Bell", position: "CB", number: 16 },
        { name: "Sepp van den Berg", position: "CB", number: 3 },
        { name: "Anthony Caci", position: "CB", number: 19 },
        { name: "Danny da Costa", position: "RM", number: 8 },
        { name: "Dominik Kohr", position: "CM", number: 31 },
        { name: "Leandro Barreiro", position: "CM", number: 6 },
        { name: "Philipp Mwene", position: "LM", number: 2 },
        { name: "Lee Jae-sung", position: "AM", number: 7 },
        { name: "Brajan Gruda", position: "AM", number: 43 },
        { name: "Ludovic Ajorque", position: "ST", number: 29 }
      ]
    },
    away_lineups: {
      team: { name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      formation: "3-5-2",
      coach: "Ole Werner",
      startXI: [
        { name: "Jiri Pavlenka", position: "GK", number: 1 },
        { name: "Miloš Veljković", position: "CB", number: 13 },
        { name: "Marco Friedl", position: "CB", number: 32 },
        { name: "Anthony Jung", position: "CB", number: 3 },
        { name: "Mitchell Weiser", position: "RWB", number: 8 },
        { name: "Leonardo Bittencourt", position: "CM", number: 10 },
        { name: "Jens Stage", position: "CM", number: 6 },
        { name: "Romano Schmid", position: "CM", number: 20 },
        { name: "Felix Agu", position: "LWB", number: 27 },
        { name: "Marvin Ducksch", position: "ST", number: 7 },
        { name: "Rafael Borré", position: "ST", number: 9 }
      ]
    }
  },

  {
    fixture: { id: 5001, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 85, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
      away: { id: 79, name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }
    },
    goals: { home: 3, away: 1 },
    statistics: [
      { team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, statistic: "Shots on Goal", value: 9 },
      { team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }, statistic: "Shots on Goal", value: 4 },
      { team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, statistic: "Ball Possession", value: "68%" },
      { team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }, statistic: "Ball Possession", value: "32%" }
    ],
    events: [
      { time: 18, team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, type: "Goal", player: "Mbappe", assist: "Neymar" },
      { time: 45, team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, type: "Goal", player: "Neymar", assist: "Messi" },
      { time: 67, team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }, type: "Card", detail: "Yellow Card", player: "Payet" },
      { time: 78, team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }, type: "Goal", player: "Payet", assist: "Gerson" },
      { time: 89, team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, type: "Goal", player: "Messi", assist: "Mbappe" }
    ],
    injuries: [
      { team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, player: "Neymar Jr", reason: "Ankle sprain", date: "2025-03-01" }
    ],
    odds: { home: "1.45", draw: "4.50", away: "6.80" },
    topScorers: [
      { name: "Kylian Mbappé", team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" }, goals: 26 },
      { name: "Dimitri Payet", team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" }, goals: 8 }
    ],
    home_lineups: {
      team: { name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
      formation: "4-3-3",
      coach: "Luis Enrique",
      startXI: [
        { name: "Gianluigi Donnarumma", position: "GK", number: 99 },
        { name: "Achraf Hakimi", position: "RB", number: 2 },
        { name: "Marquinhos", position: "CB", number: 5 },
        { name: "Milan Skriniar", position: "CB", number: 37 },
        { name: "Lucas Hernandez", position: "LB", number: 21 },
        { name: "Warren Zaïre-Emery", position: "CM", number: 33 },
        { name: "Vitinha", position: "CM", number: 17 },
        { name: "Fabián Ruiz", position: "CM", number: 8 },
        { name: "Ousmane Dembélé", position: "RW", number: 10 },
        { name: "Kylian Mbappé", position: "ST", number: 7 },
        { name: "Bradley Barcola", position: "LW", number: 29 }
      ]
    },
    away_lineups: {
      team: { name: "Marseille", logo: "https://media.api-sports.io/football/teams/79.png" },
      formation: "4-2-3-1",
      coach: "Igor Tudor",
      startXI: [
        { name: "Pau López", position: "GK", number: 16 },
        { name: "Jonathan Clauss", position: "RB", number: 21 },
        { name: "Samuel Gigot", position: "CB", number: 5 },
        { name: "Leonardo Balerdi", position: "CB", number: 2 },
        { name: "Nuno Tavares", position: "LB", number: 27 },
        { name: "Boubacar Kamara", position: "CDM", number: 4 },
        { name: "Valentin Rongier", position: "CDM", number: 18 },
        { name: "Dimitri Payet", position: "RW", number: 10 },
        { name: "Gerson", position: "AM", number: 8 },
        { name: "Cengiz Ünder", position: "LW", number: 17 },
        { name: "Alexis Sánchez", position: "ST", number: 70 }
      ]
    }
  },

  {
    fixture: { id: 5002, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" },
      away: { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }
    },
    goals: { home: 0, away: 1 },
    statistics: [
      { team: { name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" }, statistic: "Shots on Goal", value: 3 },
      { team: { name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }, statistic: "Shots on Goal", value: 5 }
    ],
    events: [
      { time: 42, team: { name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }, type: "Goal", player: "Wissam Ben Yedder", assist: "Aleksandr Golovin" }
    ],
    injuries: [],
    odds: { home: "2.80", draw: "3.20", away: "2.60" },
    topScorers: [
      { name: "Alexandre Lacazette", team: { name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" }, goals: 15 },
      { name: "Wissam Ben Yedder", team: { name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }, goals: 17 }
    ],
    home_lineups: {
      team: { name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" },
      formation: "4-3-3",
      coach: "Pierre Sage",
      startXI: [
        { name: "Anthony Lopes", position: "GK", number: 1 },
        { name: "Sael Kumbedi", position: "RB", number: 20 },
        { name: "Jake O'Brien", position: "CB", number: 12 },
        { name: "Duje Ćaleta-Car", position: "CB", number: 55 },
        { name: "Nicolás Tagliafico", position: "LB", number: 3 },
        { name: "Nemanja Matić", position: "CDM", number: 31 },
        { name: "Maxence Caqueret", position: "CM", number: 6 },
        { name: "Corentin Tolisso", position: "CM", number: 8 },
        { name: "Rayan Cherki", position: "RW", number: 18 },
        { name: "Alexandre Lacazette", position: "ST", number: 10 },
        { name: "Malick Fofana", position: "LW", number: 11 }
      ]
    },
    away_lineups: {
      team: { name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" },
      formation: "4-2-3-1",
      coach: "Adi Hütter",
      startXI: [
        { name: "Alexander Nübel", position: "GK", number: 16 },
        { name: "Vanderson", position: "RB", number: 2 },
        { name: "Wilfried Singo", position: "CB", number: 17 },
        { name: "Thilo Kehrer", position: "CB", number: 5 },
        { name: "Caio Henrique", position: "LB", number: 12 },
        { name: "Aurélien Tchouaméni", position: "CDM", number: 8 },
        { name: "Youssouf Fofana", position: "CDM", number: 19 },
        { name: "Aleksandr Golovin", position: "RW", number: 10 },
        { name: "Takumi Minamino", position: "AM", number: 18 },
        { name: "Eliesse Ben Seghir", position: "LW", number: 7 },
        { name: "Wissam Ben Yedder", position: "ST", number: 9 }
      ]
    }
  },

  {
    fixture: { id: 5003, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 79, name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" },
      away: { id: 94, name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }
    },
    goals: { home: 2, away: 0 },
    statistics: [
      { team: { name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" }, statistic: "Shots on Goal", value: 6 },
      { team: { name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }, statistic: "Shots on Goal", value: 2 }
    ],
    events: [
      { time: 28, team: { name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" }, type: "Goal", player: "Jonathan David", assist: "Rémy Cabella" },
      { time: 67, team: { name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" }, type: "Goal", player: "Edon Zhegrova", assist: "Tiago Santos" }
    ],
    injuries: [],
    odds: { home: "2.30", draw: "3.30", away: "3.00" },
    topScorers: [
      { name: "Jonathan David", team: { name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" }, goals: 19 },
      { name: "Arnaud Kalimuendo", team: { name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }, goals: 11 }
    ],
    home_lineups: {
      team: { name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" },
      formation: "4-2-3-1",
      coach: "Paulo Fonseca",
      startXI: [
        { name: "Lucas Chevalier", position: "GK", number: 30 },
        { name: "Tiago Santos", position: "RB", number: 22 },
        { name: "Bafodé Diakité", position: "CB", number: 18 },
        { name: "Leny Yoro", position: "CB", number: 15 },
        { name: "Ismaily", position: "LB", number: 31 },
        { name: "Angel Gomes", position: "CDM", number: 8 },
        { name: "Benjamin André", position: "CDM", number: 21 },
        { name: "Edon Zhegrova", position: "RW", number: 23 },
        { name: "Rémy Cabella", position: "AM", number: 10 },
        { name: "Hákon Haraldsson", position: "LW", number: 7 },
        { name: "Jonathan David", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" },
      formation: "4-3-3",
      coach: "Julien Stéphan",
      startXI: [
        { name: "Steve Mandanda", position: "GK", number: 30 },
        { name: "Lorenz Assignon", position: "RB", number: 22 },
        { name: "Arthur Theate", position: "CB", number: 5 },
        { name: "Warmed Omari", position: "CB", number: 23 },
        { name: "Adrien Truffert", position: "LB", number: 3 },
        { name: "Fabian Rieder", position: "CM", number: 34 },
        { name: "Azor Matusiwa", position: "CM", number: 6 },
        { name: "Ludovic Blas", position: "CM", number: 11 },
        { name: "Amine Gouiri", position: "RW", number: 10 },
        { name: "Arnaud Kalimuendo", position: "ST", number: 9 },
        { name: "Martin Terrier", position: "LW", number: 7 }
      ]
    }
  },
  {
    fixture: { id: 5004, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    },
    goals: { home: 1, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.20", away: "3.00" },
    topScorers: [],
    home_lineups: {
      team: { name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      formation: "4-3-3",
      coach: "Francesco Farioli",
      startXI: [
        { name: "Marcin Bułka", position: "GK", number: 1 },
        { name: "Jordan Lotomba", position: "RB", number: 23 },
        { name: "Dante", position: "CB", number: 4 },
        { name: "Jean-Clair Todibo", position: "CB", number: 25 },
        { name: "Melvin Bard", position: "LB", number: 26 },
        { name: "Hicham Boudaoui", position: "CM", number: 28 },
        { name: "Pablo Rosario", position: "CM", number: 8 },
        { name: "Khéphren Thuram", position: "CM", number: 19 },
        { name: "Gaëtan Laborde", position: "RW", number: 24 },
        { name: "Terem Moffi", position: "ST", number: 9 },
        { name: "Sofiane Diop", position: "LW", number: 10 }
      ]
    },
    away_lineups: {
      team: { name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" },
      formation: "4-2-3-1",
      coach: "Jocelyn Gourvennec",
      startXI: [
        { name: "Alban Lafont", position: "GK", number: 1 },
        { name: "Fabien Centonze", position: "RB", number: 24 },
        { name: "Nicolas Pallois", position: "CB", number: 4 },
        { name: "Jean-Charles Castelletto", position: "CB", number: 21 },
        { name: "Quentin Merlin", position: "LB", number: 3 },
        { name: "Pedro Chirivella", position: "CDM", number: 5 },
        { name: "Douglas Augusto", position: "CDM", number: 17 },
        { name: "Florent Mollet", position: "RW", number: 25 },
        { name: "Moses Simon", position: "AM", number: 27 },
        { name: "Abdoul Kader Bamba", position: "LW", number: 14 },
        { name: "Mostafa Mohamed", position: "ST", number: 31 }
      ]
    }
  },
  {
    fixture: { id: 5005, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 96, name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" },
      away: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.10", away: "2.90" },
    topScorers: [],
    home_lineups: {
      team: { name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" },
      formation: "3-4-2-1",
      coach: "Carles Martínez Novell",
      startXI: [
        { name: "Guillaume Restes", position: "GK", number: 50 },
        { name: "Rasmus Nicolaisen", position: "CB", number: 2 },
        { name: "Logan Costa", position: "CB", number: 6 },
        { name: "Mark McKenzie", position: "CB", number: 3 },
        { name: "Warren Kamanzi", position: "RM", number: 12 },
        { name: "Vincent Sierro", position: "CM", number: 8 },
        { name: "Stijn Spierings", position: "CM", number: 17 },
        { name: "Gabriel Suazo", position: "LM", number: 17 },
        { name: "Yann Gboho", position: "AM", number: 10 },
        { name: "Thijs Dallinga", position: "AM", number: 9 },
        { name: "Frank Magri", position: "ST", number: 19 }
      ]
    },
    away_lineups: {
      team: { name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      formation: "4-3-3",
      coach: "Alexandre Dujeux",
      startXI: [
        { name: "Paul Bernardoni", position: "GK", number: 1 },
        { name: "Carlens Arcus", position: "RB", number: 2 },
        { name: "Cédric Hountondji", position: "CB", number: 22 },
        { name: "Miha Blažič", position: "CB", number: 24 },
        { name: "Souleyman Doumbia", position: "LB", number: 3 },
        { name: "Yassin Belkhdim", position: "CM", number: 6 },
        { name: "Himad Abdelli", position: "CM", number: 10 },
        { name: "Jean-Eudes Aholou", position: "CM", number: 8 },
        { name: "Farid El Melali", position: "RW", number: 28 },
        { name: "Ibrahima Niane", position: "ST", number: 7 },
        { name: "Pierrick Capelle", position: "LW", number: 23 }
      ]
    }
  },
  {
    fixture: { id: 5006, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" }
    },
    goals: { home: 0, away: 2 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.20", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      formation: "4-2-3-1",
      coach: "Patrick Vieira",
      startXI: [
        { name: "Matz Sels", position: "GK", number: 1 },
        { name: "Frédéric Guilbert", position: "RB", number: 2 },
        { name: "Gerzino Nyamsi", position: "CB", number: 24 },
        { name: "Lucas Perrin", position: "CB", number: 5 },
        { name: "Eduard Sobol", position: "LB", number: 3 },
        { name: "Jean-Ricner Bellegarde", position: "CDM", number: 27 },
        { name: "Sanjin Prcić", position: "CDM", number: 6 },
        { name: "Morgan Sanson", position: "RW", number: 11 },
        { name: "Habib Diarra", position: "AM", number: 19 },
        { name: "Dimitri Liénard", position: "LW", number: 7 },
        { name: "Kévin Gameiro", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      formation: "4-3-3",
      coach: "Éric Roy",
      startXI: [
        { name: "Marco Bizot", position: "GK", number: 40 },
        { name: "Kenny Lala", position: "RB", number: 27 },
        { name: "Brendan Chardonnet", position: "CB", number: 5 },
        { name: "Lilian Brassier", position: "CB", number: 3 },
        { name: "Bradley Locko", position: "LB", number: 2 },
        { name: "Pierre Lees-Melou", position: "CM", number: 20 },
        { name: "Hugo Magnetti", position: "CM", number: 8 },
        { name: "Mahdi Camara", position: "CM", number: 45 },
        { name: "Romain Del Castillo", position: "RW", number: 10 },
        { name: "Steve Mounié", position: "ST", number: 9 },
        { name: "Jérémy Le Douaron", position: "LW", number: 22 }
      ]
    }
  },
  {
    fixture: { id: 5007, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      away: { id: 98, name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" }
    },
    goals: { home: 2, away: 0 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.30", draw: "3.20", away: "3.10" },
    topScorers: [],
    home_lineups: {
      team: { name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      formation: "4-2-3-1",
      coach: "Pascal Gastien",
      startXI: [
        { name: "Mory Diaw", position: "GK", number: 99 },
        { name: "Jim Allevinah", position: "RB", number: 7 },
        { name: "Florent Ogier", position: "CB", number: 4 },
        { name: "Mateusz Wieteska", position: "CB", number: 21 },
        { name: "Neto Borges", position: "LB", number: 3 },
        { name: "Johan Gastien", position: "CDM", number: 25 },
        { name: "Yohann Magnin", position: "CDM", number: 17 },
        { name: "Muhammed Cham", position: "RW", number: 10 },
        { name: "Elbasan Rashani", position: "AM", number: 18 },
        { name: "Jérémie Bela", position: "LW", number: 14 },
        { name: "Grejohn Kyei", position: "ST", number: 95 }
      ]
    },
    away_lineups: {
      team: { name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" },
      formation: "4-4-2",
      coach: "Olivier Pantaloni",
      startXI: [
        { name: "Benjamin Lecomte", position: "GK", number: 1 },
        { name: "Oumar Gonzalez", position: "RB", number: 20 },
        { name: "Cédric Avinel", position: "CB", number: 5 },
        { name: "Clément Vidal", position: "CB", number: 6 },
        { name: "Ismaël Diallo", position: "LB", number: 3 },
        { name: "Vincent Marchetti", position: "RM", number: 8 },
        { name: "Mathieu Coutadeur", position: "CM", number: 18 },
        { name: "Thomas Mangani", position: "CM", number: 7 },
        { name: "Riad Nouri", position: "LM", number: 23 },
        { name: "Mounaim El Idrissy", position: "ST", number: 9 },
        { name: "Bevic Moussiti-Oko", position: "ST", number: 19 }
      ]
    }
  },
  {
    fixture: { id: 5008, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 83, name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.10", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      formation: "4-2-3-1",
      coach: "Patrick Vieira",
      startXI: [
        { name: "Matz Sels", position: "GK", number: 1 },
        { name: "Frédéric Guilbert", position: "RB", number: 2 },
        { name: "Gerzino Nyamsi", position: "CB", number: 24 },
        { name: "Lucas Perrin", position: "CB", number: 5 },
        { name: "Eduard Sobol", position: "LB", number: 3 },
        { name: "Jean-Ricner Bellegarde", position: "CDM", number: 27 },
        { name: "Sanjin Prcić", position: "CDM", number: 6 },
        { name: "Morgan Sanson", position: "RW", number: 11 },
        { name: "Habib Diarra", position: "AM", number: 19 },
        { name: "Dimitri Liénard", position: "LW", number: 7 },
        { name: "Kévin Gameiro", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" },
      formation: "3-4-2-1",
      coach: "Michel Der Zakarian",
      startXI: [
        { name: "Jonas Omlin", position: "GK", number: 40 },
        { name: "Christopher Jullien", position: "CB", number: 6 },
        { name: "Maxime Estève", position: "CB", number: 27 },
        { name: "Kiki Kouyaté", position: "CB", number: 12 },
        { name: "Falaye Sacko", position: "RM", number: 77 },
        { name: "Jordan Ferri", position: "CM", number: 11 },
        { name: "Joris Chotard", position: "CM", number: 13 },
        { name: "Issiaga Sylla", position: "LM", number: 3 },
        { name: "Téji Savanier", position: "AM", number: 22 },
        { name: "Arnaud Nordin", position: "AM", number: 7 },
        { name: "Akor Adams", position: "ST", number: 8 }
      ]
    }
  },
  {
    fixture: { id: 5009, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 116, name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" },
      away: { id: 82, name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/82.png" }
    },
    goals: { home: 3, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.20", draw: "3.30", away: "3.20" },
    topScorers: [],
    home_lineups: {
      team: { name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" },
      formation: "3-4-1-2",
      coach: "Franck Haise",
      startXI: [
        { name: "Brice Samba", position: "GK", number: 30 },
        { name: "Kevin Danso", position: "CB", number: 4 },
        { name: "Facundo Medina", position: "CB", number: 14 },
        { name: "Jonathan Gradit", position: "CB", number: 24 },
        { name: "Przemysław Frankowski", position: "RM", number: 29 },
        { name: "Salis Abdul Samed", position: "CM", number: 26 },
        { name: "Nampalys Mendy", position: "CM", number: 18 },
        { name: "Massadio Haïdara", position: "LM", number: 3 },
        { name: "Adrien Thomasson", position: "AM", number: 28 },
        { name: "Florian Sotoca", position: "ST", number: 7 },
        { name: "Elye Wahi", position: "ST", number: 9 }
      ]
    },
    away_lineups: {
      team: { name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/82.png" },
      formation: "4-2-3-1",
      coach: "David Guion",
      startXI: [
        { name: "Benoît Costil", position: "GK", number: 1 },
        { name: "Enock Kwateng", position: "RB", number: 2 },
        { name: "Stian Gregersen", position: "CB", number: 4 },
        { name: "Mexer", position: "CB", number: 25 },
        { name: "Ricardo Mangas", position: "LB", number: 3 },
        { name: "Otávio", position: "CDM", number: 8 },
        { name: "Jean Onana", position: "CDM", number: 5 },
        { name: "Javairo Dilrosun", position: "RW", number: 10 },
        { name: "Anel Ahmedhodzic", position: "AM", number: 15 },
        { name: "Fransergio", position: "LW", number: 26 },
        { name: "M'Baye Niang", position: "ST", number: 19 }
      ]
    }
  },
  {
    fixture: { id: 5010, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 1063, name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    },
    goals: { home: 1, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.50", draw: "3.20", away: "2.80" },
    topScorers: [],
    home_lineups: {
      team: { name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" },
      formation: "4-4-2",
      coach: "Laurent Batlles",
      startXI: [
        { name: "Gautier Larsonneur", position: "GK", number: 50 },
        { name: "Dennis Appiah", position: "RB", number: 24 },
        { name: "Dylan Chambost", position: "CB", number: 5 },
        { name: "Mickael Nade", position: "CB", number: 2 },
        { name: "Yvann Maçon", position: "LB", number: 27 },
        { name: "Mathieu Cafaro", position: "RM", number: 18 },
        { name: "Mahdi Camara", position: "CM", number: 6 },
        { name: "Benjamin Bouchouari", position: "CM", number: 19 },
        { name: "Thomas Monconduit", position: "LM", number: 8 },
        { name: "Ibrahima Wadji", position: "ST", number: 9 },
        { name: "Irvin Cardona", position: "ST", number: 22 }
      ]
    },
    away_lineups: {
      team: { name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" },
      formation: "4-2-3-1",
      coach: "Jocelyn Gourvennec",
      startXI: [
        { name: "Alban Lafont", position: "GK", number: 1 },
        { name: "Fabien Centonze", position: "RB", number: 24 },
        { name: "Nicolas Pallois", position: "CB", number: 4 },
        { name: "Jean-Charles Castelletto", position: "CB", number: 21 },
        { name: "Quentin Merlin", position: "LB", number: 3 },
        { name: "Pedro Chirivella", position: "CDM", number: 5 },
        { name: "Douglas Augusto", position: "CDM", number: 17 },
        { name: "Florent Mollet", position: "RW", number: 25 },
        { name: "Moses Simon", position: "AM", number: 27 },
        { name: "Abdoul Kader Bamba", position: "LW", number: 14 },
        { name: "Mostafa Mohamed", position: "ST", number: 31 }
      ]
    }
  },
  {
    fixture: { id: 5011, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      away: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.60", draw: "3.10", away: "2.80" },
    topScorers: [],
    home_lineups: {
      team: { name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      formation: "4-3-3",
      coach: "Alexandre Dujeux",
      startXI: [
        { name: "Paul Bernardoni", position: "GK", number: 1 },
        { name: "Carlens Arcus", position: "RB", number: 2 },
        { name: "Cédric Hountondji", position: "CB", number: 22 },
        { name: "Miha Blažič", position: "CB", number: 24 },
        { name: "Souleyman Doumbia", position: "LB", number: 3 },
        { name: "Yassin Belkhdim", position: "CM", number: 6 },
        { name: "Himad Abdelli", position: "CM", number: 10 },
        { name: "Jean-Eudes Aholou", position: "CM", number: 8 },
        { name: "Farid El Melali", position: "RW", number: 28 },
        { name: "Ibrahima Niane", position: "ST", number: 7 },
        { name: "Pierrick Capelle", position: "LW", number: 23 }
      ]
    },
    away_lineups: {
      team: { name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      formation: "4-2-3-1",
      coach: "Pascal Gastien",
      startXI: [
        { name: "Mory Diaw", position: "GK", number: 99 },
        { name: "Jim Allevinah", position: "RB", number: 7 },
        { name: "Florent Ogier", position: "CB", number: 4 },
        { name: "Mateusz Wieteska", position: "CB", number: 21 },
        { name: "Neto Borges", position: "LB", number: 3 },
        { name: "Johan Gastien", position: "CDM", number: 25 },
        { name: "Yohann Magnin", position: "CDM", number: 17 },
        { name: "Muhammed Cham", position: "RW", number: 10 },
        { name: "Elbasan Rashani", position: "AM", number: 18 },
        { name: "Jérémie Bela", position: "LW", number: 14 },
        { name: "Grejohn Kyei", position: "ST", number: 95 }
      ]
    }
  },
  {
    fixture: { id: 5012, date: new Date().toISOString(), status: { short: "LIVE", long: "In Play" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 110, name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" },
      away: { id: 111, name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" }
    },
    goals: { home: 1, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.70", draw: "3.10", away: "2.70" },
    topScorers: [],
    home_lineups: {
      team: { name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" },
      formation: "3-4-3",
      coach: "Bruno Irles",
      startXI: [
        { name: "Gauthier Gallon", position: "GK", number: 1 },
        { name: "Erik Palmer-Brown", position: "CB", number: 14 },
        { name: "Jackson Porozo", position: "CB", number: 4 },
        { name: "Adil Rami", position: "CB", number: 23 },
        { name: "Thierno Baldé", position: "RM", number: 2 },
        { name: "Rony Lopes", position: "CM", number: 10 },
        { name: "Florian Tardieu", position: "CM", number: 6 },
        { name: "Yoann Salmier", position: "LM", number: 25 },
        { name: "Wilson Odobert", position: "RW", number: 7 },
        { name: "Mama Baldé", position: "ST", number: 9 },
        { name: "Renaud Ripart", position: "LW", number: 11 }
      ]
    },
    away_lineups: {
      team: { name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" },
      formation: "4-3-3",
      coach: "Régis Le Bris",
      startXI: [
        { name: "Yvon Mvogo", position: "GK", number: 1 },
        { name: "Gedeon Kalulu", position: "RB", number: 7 },
        { name: "Montassar Talbi", position: "CB", number: 3 },
        { name: "Bamo Meïté", position: "CB", number: 5 },
        { name: "Théo Le Bris", position: "LB", number: 23 },
        { name: "Laurent Abergel", position: "CM", number: 19 },
        { name: "Julien Ponceau", position: "CM", number: 21 },
        { name: "Enzo Le Fée", position: "CM", number: 8 },
        { name: "Romain Faivre", position: "RW", number: 22 },
        { name: "Terem Moffi", position: "ST", number: 9 },
        { name: "Darline Yongwa", position: "LW", number: 12 }
      ]
    }
  },
  {
    fixture: { id: 5013, date: new Date().toISOString(), status: { short: "FT", long: "Match Finished" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      away: { id: 92, name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" }
    },
    goals: { home: 2, away: 1 },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "2.40", draw: "3.20", away: "3.00" },
    topScorers: [],
    home_lineups: {
      team: { name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      formation: "4-3-3",
      coach: "Éric Roy",
      startXI: [
        { name: "Marco Bizot", position: "GK", number: 40 },
        { name: "Kenny Lala", position: "RB", number: 27 },
        { name: "Brendan Chardonnet", position: "CB", number: 5 },
        { name: "Lilian Brassier", position: "CB", number: 3 },
        { name: "Bradley Locko", position: "LB", number: 2 },
        { name: "Pierre Lees-Melou", position: "CM", number: 20 },
        { name: "Hugo Magnetti", position: "CM", number: 8 },
        { name: "Mahdi Camara", position: "CM", number: 45 },
        { name: "Romain Del Castillo", position: "RW", number: 10 },
        { name: "Steve Mounié", position: "ST", number: 9 },
        { name: "Jérémy Le Douaron", position: "LW", number: 22 }
      ]
    },
    away_lineups: {
      team: { name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" },
      formation: "4-2-3-1",
      coach: "Will Still",
      startXI: [
        { name: "Yehvann Diouf", position: "GK", number: 94 },
        { name: "Thomas Foket", position: "RB", number: 32 },
        { name: "Emmanuel Agbadou", position: "CB", number: 24 },
        { name: "Yunis Abdelhamid", position: "CB", number: 5 },
        { name: "Thibault De Smet", position: "LB", number: 3 },
        { name: "Azor Matusiwa", position: "CDM", number: 6 },
        { name: "Marshall Munetsi", position: "CDM", number: 15 },
        { name: "Junya Ito", position: "RW", number: 7 },
        { name: "Reda Khadra", position: "AM", number: 14 },
        { name: "Morgan Gibbs-White", position: "LW", number: 25 },
        { name: "Folarin Balogun", position: "ST", number: 29 }
      ]
    }
  },
  {
    fixture: { id: 5014, date: new Date().toISOString(), status: { short: "NS", long: "Not Started" } },
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 100, name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" },
      away: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" }
    },
    goals: { home: null, away: null },
    statistics: [],
    events: [],
    injuries: [],
    odds: { home: "3.20", draw: "3.30", away: "2.30" },
    topScorers: [],
    home_lineups: {
      team: { name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" },
      formation: "4-2-3-1",
      coach: "Laszlo Bölöni",
      startXI: [
        { name: "Alexandre Oukidja", position: "GK", number: 16 },
        { name: "Matthieu Udol", position: "RB", number: 3 },
        { name: "Kiki Kouyaté", position: "CB", number: 17 },
        { name: "Maxime Colin", position: "CB", number: 2 },
        { name: "Fali Candé", position: "LB", number: 5 },
        { name: "Danley Jean-Jacques", position: "CDM", number: 27 },
        { name: "Lamine Camara", position: "CDM", number: 18 },
        { name: "Pape Diallo", position: "RW", number: 34 },
        { name: "Cheikh Sabaly", position: "AM", number: 25 },
        { name: "Arthur Atta", position: "LW", number: 26 },
        { name: "Georges Mikautadze", position: "ST", number: 10 }
      ]
    },
    away_lineups: {
      team: { name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      formation: "4-3-3",
      coach: "Francesco Farioli",
      startXI: [
        { name: "Marcin Bułka", position: "GK", number: 1 },
        { name: "Jordan Lotomba", position: "RB", number: 23 },
        { name: "Dante", position: "CB", number: 4 },
        { name: "Jean-Clair Todibo", position: "CB", number: 25 },
        { name: "Melvin Bard", position: "LB", number: 26 },
        { name: "Hicham Boudaoui", position: "CM", number: 28 },
        { name: "Pablo Rosario", position: "CM", number: 8 },
        { name: "Khéphren Thuram", position: "CM", number: 19 },
        { name: "Gaëtan Laborde", position: "RW", number: 24 },
        { name: "Terem Moffi", position: "ST", number: 9 },
        { name: "Sofiane Diop", position: "LW", number: 10 }
      ]
    }
  }
]

export const mockH2HWithFixtures: H2HData[] = [
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 50, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
      away: { id: 42, name: "Arsenal", logo: "https://media.api-sports.io/football/teams/42.png" }
    },
    fixtures: [
      {
        fixture_id: 1001,
        date: "2025-03-15T15:00:00+00:00",
        venue: "Etihad Stadium",
        home: "Man City",
        away: "Arsenal",
        score: "2-1",
        events: [
          { minute: 23, type: "Goal", team: "Man City", player: "Erling Haaland" },
          { minute: 45, type: "Yellow Card", team: "Arsenal", player: "Bukayo Saka" },
          { minute: 78, type: "Goal", team: "Arsenal", player: "Gabriel Jesus" },
          { minute: 88, type: "Goal", team: "Man City", player: "Kevin De Bruyne" }
        ]
      },
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 40, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
      away: { id: 33, name: "Man United", logo: "https://media.api-sports.io/football/teams/33.png" }
    },
    fixtures: [
      {
        fixture_id: 1002,
        date: "2025-03-15T15:00:00+00:00",
        venue: "Anfield",
        home: "Liverpool",
        away: "Man United",
        score: "2-1",
        events: [
          { minute: 23, type: "Goal", team: "Liverpool", player: "Mohamed Salah" },
          { minute: 45, type: "Yellow Card", team: "Man United", player: "Marcus Rashford" },
          { minute: 78, type: "Goal", team: "Man United", player: "Bruno Fernandes" },
          { minute: 88, type: "Goal", team: "Liverpool", player: "Darwin Núñez" }
        ]
      },
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 49, name: "Chelsea", logo: "https://media.api-sports.io/football/teams/49.png" },
      away: { id: 34, name: "Newcastle", logo: "https://media.api-sports.io/football/teams/34.png" }
    },
    fixtures: [
      {
        fixture_id: 1003,
        date: "2024-09-12T19:30:00+00:00",
        venue: "Stamford Bridge",
        home: "Chelsea",
        away: "Newcastle",
        score: "2-1",
        events: [
          { minute: 33, type: "Goal", team: "Chelsea", player: "Raheem Sterling" },
          { minute: 70, type: "Goal", team: "Newcastle", player: "Alexander Isak" },
          { minute: 85, type: "Goal", team: "Chelsea", player: "Kai Havertz" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 47, name: "Tottenham", logo: "https://media.api-sports.io/football/teams/47.png" },
      away: { id: 48, name: "West Ham", logo: "https://media.api-sports.io/football/teams/48.png" }
    },
    fixtures: [
      {
        fixture_id: 1004,
        date: "2024-06-15T16:00:00+00:00",
        venue: "Tottenham Hotspur Stadium",
        home: "Tottenham",
        away: "West Ham",
        score: "1-1",
        events: [
          { minute: 25, type: "Goal", team: "Tottenham", player: "Harry Kane" },
          { minute: 85, type: "Goal", team: "West Ham", player: "Jarrod Bowen" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 51, name: "Brighton", logo: "https://media.api-sports.io/football/teams/51.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    },
    fixtures: [
      {
        fixture_id: 1005,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Amex Stadium",
        home: "Brighton",
        away: "Brentford",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Brighton", player: "Alexis Mac Allister" },
          { minute: 55, type: "Goal", team: "Brentford", player: "Ivan Toney" },
          { minute: 78, type: "Goal", team: "Brighton", player: "Kaoru Mitoma" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 52, name: "Crystal Palace", logo: "https://media.api-sports.io/football/teams/52.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    },
    fixtures: [
      {
        fixture_id: 1006,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Selhurst Park",
        home: "Crystal Palace",
        away: "Everton",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Crystal Palace", player: "Wilfried Zaha" },
          { minute: 55, type: "Goal", team: "Everton", player: "Dominic Calvert-Lewin" },
          { minute: 78, type: "Goal", team: "Crystal Palace", player: "Eberechi Eze" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 44, name: "Burnley", logo: "https://media.api-sports.io/football/teams/44.png" }
    },
    fixtures: [
      {
        fixture_id: 1007,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Molineux Stadium",
        home: "Wolves",
        away: "Burnley",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Wolves", player: "Raúl Jiménez" },
          { minute: 55, type: "Goal", team: "Burnley", player: "Chris Wood" },
          { minute: 78, type: "Goal", team: "Wolves", player: "Pedro Neto" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 66, name: "Aston Villa", logo: "https://media.api-sports.io/football/teams/66.png" },
      away: { id: 65, name: "Nottingham Forest", logo: "https://media.api-sports.io/football/teams/65.png" }
    },
    fixtures: [
      {
        fixture_id: 1008,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Villa Park",
        home: "Aston Villa",
        away: "Nottingham Forest",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Aston Villa", player: "Ollie Watkins" },
          { minute: 55, type: "Goal", team: "Nottingham Forest", player: "Brennan Johnson" },
          { minute: 78, type: "Goal", team: "Aston Villa", player: "John McGinn" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 39, name: "Wolves", logo: "https://media.api-sports.io/football/teams/39.png" },
      away: { id: 45, name: "Everton", logo: "https://media.api-sports.io/football/teams/45.png" }
    },
    fixtures: [
      {
        fixture_id: 1009,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Molineux Stadium",
        home: "Wolves",
        away: "Everton",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Wolves", player: "Matheus Cunha" },
          { minute: 55, type: "Goal", team: "Everton", player: "Dominic Calvert-Lewin" },
          { minute: 78, type: "Goal", team: "Wolves", player: "Hwang Hee-chan" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 46, name: "Leicester", logo: "https://media.api-sports.io/football/teams/46.png" },
      away: { id: 63, name: "Leeds United", logo: "https://media.api-sports.io/football/teams/63.png" }
    },
    fixtures: [
      {
        fixture_id: 1010,
        date: "2023-02-01T18:30:00+00:00",
        venue: "King Power Stadium",
        home: "Leicester",
        away: "Leeds United",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Leicester", player: "Jamie Vardy" },
          { minute: 55, type: "Goal", team: "Leeds United", player: "Patrick Bamford" },
          { minute: 78, type: "Goal", team: "Leicester", player: "James Maddison" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 36, name: "Fulham", logo: "https://media.api-sports.io/football/teams/36.png" },
      away: { id: 41, name: "Southampton", logo: "https://media.api-sports.io/football/teams/41.png" }
    },
    fixtures: [
      {
        fixture_id: 1011,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Craven Cottage",
        home: "Fulham",
        away: "Southampton",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Fulham", player: "Aleksandar Mitrović" },
          { minute: 55, type: "Goal", team: "Southampton", player: "Che Adams" },
          { minute: 78, type: "Goal", team: "Fulham", player: "Andreas Pereira" }
        ]
      }
    ]
  },
  {
    league: { id: 39, name: "Premier League", logo: "https://media.api-sports.io/football/leagues/39.png" },
    teams: {
      home: { id: 35, name: "Bournemouth", logo: "https://media.api-sports.io/football/teams/35.png" },
      away: { id: 55, name: "Brentford", logo: "https://media.api-sports.io/football/teams/55.png" }
    },
    fixtures: [
      {
        fixture_id: 1012,
        date: "2023-02-01T18:30:00+00:00",
        venue: "Vitality Stadium",
        home: "Bournemouth",
        away: "Brentford",
        score: "2-1",
        events: [
          { minute: 20, type: "Goal", team: "Bournemouth", player: "Dominic Solanke" },
          { minute: 55, type: "Goal", team: "Brentford", player: "Ivan Toney" },
          { minute: 78, type: "Goal", team: "Bournemouth", player: "Philip Billing" }
        ]
      }
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 86, name: "Real Madrid", logo: "https://media.api-sports.io/football/teams/86.png" },
      away: { id: 529, name: "Barcelona", logo: "https://media.api-sports.io/football/teams/529.png" }
    },
    fixtures: [
      {
        fixture_id: 2001,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Santiago Bernabéu",
        home: "Real Madrid",
        away: "Barcelona",
        score: "1-3",
        events: [
          { minute: 30, type: "Goal", team: "Barcelona", player: "Robert Lewandowski" },
          { minute: 65, type: "Goal", team: "Barcelona", player: "Pedri" },
          { minute: 80, type: "Goal", team: "Real Madrid", player: "Karim Benzema" },
          { minute: 90, type: "Goal", team: "Barcelona", player: "Ansu Fati" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 530, name: "Atletico Madrid", logo: "https://media.api-sports.io/football/teams/530.png" },
      away: { id: 559, name: "Sevilla", logo: "https://media.api-sports.io/football/teams/559.png" }
    },
    fixtures: [
      {
        fixture_id: 2002,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Metropolitano Stadium",
        home: "Atletico Madrid",
        away: "Sevilla",
        score: "2-1",
        events: [
          { minute: 25, type: "Goal", team: "Atletico Madrid", player: "Antoine Griezmann" },
          { minute: 58, type: "Goal", team: "Sevilla", player: "Youssef En-Nesyri" },
          { minute: 85, type: "Goal", team: "Atletico Madrid", player: "Álvaro Morata" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 532, name: "Valencia", logo: "https://media.api-sports.io/football/teams/532.png" },
      away: { id: 548, name: "Real Sociedad", logo: "https://media.api-sports.io/football/teams/548.png" }
    },
    fixtures: [
      {
        fixture_id: 2003,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Mestalla",
        home: "Valencia",
        away: "Real Sociedad",
        score: "1-2",
        events: [
          { minute: 35, type: "Goal", team: "Valencia", player: "Carlos Soler" },
          { minute: 62, type: "Goal", team: "Real Sociedad", player: "Mikel Oyarzabal" },
          { minute: 88, type: "Goal", team: "Real Sociedad", player: "Alexander Isak" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 543, name: "Real Betis", logo: "https://media.api-sports.io/football/teams/543.png" },
      away: { id: 546, name: "Getafe", logo: "https://media.api-sports.io/football/teams/546.png" }
    },
    fixtures: [
      {
        fixture_id: 2004,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Benito Villamarín",
        home: "Real Betis",
        away: "Getafe",
        score: "2-0",
        events: [
          { minute: 22, type: "Goal", team: "Real Betis", player: "Borja Iglesias" },
          { minute: 67, type: "Goal", team: "Real Betis", player: "Nabil Fekir" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" },
      away: { id: 533, name: "Villarreal", logo: "https://media.api-sports.io/football/teams/533.png" }
    },
    fixtures: [
      {
        fixture_id: 2005,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Balaídos",
        home: "Celta Vigo",
        away: "Villarreal",
        score: "1-1",
        events: [
          { minute: 28, type: "Goal", team: "Celta Vigo", player: "Iago Aspas" },
          { minute: 74, type: "Goal", team: "Villarreal", player: "Gerard Moreno" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 798, name: "Mallorca", logo: "https://media.api-sports.io/football/teams/798.png" },
      away: { id: 727, name: "Osasuna", logo: "https://media.api-sports.io/football/teams/727.png" }
    },
    fixtures: [
      {
        fixture_id: 2006,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Visit Mallorca Estadi",
        home: "Mallorca",
        away: "Osasuna",
        score: "2-1",
        events: [
          { minute: 18, type: "Goal", team: "Mallorca", player: "Takefusa Kubo" },
          { minute: 55, type: "Goal", team: "Osasuna", player: "Ante Budimir" },
          { minute: 82, type: "Goal", team: "Mallorca", player: "Vedat Muriqi" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    },
    fixtures: [
      {
        fixture_id: 2007,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Nuevo Los Cármenes",
        home: "Granada",
        away: "Alaves",
        score: "0-2",
        events: [
          { minute: 33, type: "Goal", team: "Alaves", player: "Joselu" },
          { minute: 71, type: "Goal", team: "Alaves", player: "Luis Rioja" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 724, name: "Cadiz", logo: "https://media.api-sports.io/football/teams/724.png" },
      away: { id: 728, name: "Rayo Vallecano", logo: "https://media.api-sports.io/football/teams/728.png" }
    },
    fixtures: [
      {
        fixture_id: 2008,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Nuevo Mirandilla",
        home: "Cadiz",
        away: "Rayo Vallecano",
        score: "1-1",
        events: [
          { minute: 42, type: "Goal", team: "Cadiz", player: "Anthony Lozano" },
          { minute: 68, type: "Goal", team: "Rayo Vallecano", player: "Álvaro García" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 797, name: "Elche", logo: "https://media.api-sports.io/football/teams/797.png" },
      away: { id: 723, name: "Alaves", logo: "https://media.api-sports.io/football/teams/723.png" }
    },
    fixtures: [
      {
        fixture_id: 2009,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Estadio Martínez Valero",
        home: "Elche",
        away: "Alaves",
        score: "0-1",
        events: [
          { minute: 76, type: "Goal", team: "Alaves", player: "Miguel De la Fuente" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 715, name: "Granada", logo: "https://media.api-sports.io/football/teams/715.png" },
      away: { id: 542, name: "Levante", logo: "https://media.api-sports.io/football/teams/542.png" }
    },
    fixtures: [
      {
        fixture_id: 2010,
        date: "2025-05-10T20:00:00+00:00",
        venue: "Nuevo Los Cármenes",
        home: "Granada",
        away: "Levante",
        score: "3-1",
        events: [
          { minute: 22, type: "Goal", team: "Granada", player: "Jorge Molina" },
          { minute: 45, type: "Goal", team: "Levante", player: "Roger Martí" },
          { minute: 67, type: "Goal", team: "Granada", player: "Luis Suárez" },
          { minute: 84, type: "Goal", team: "Granada", player: "Darwin Machís" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 531, name: "Athletic Bilbao", logo: "https://media.api-sports.io/football/teams/531.png" }
    },
    fixtures: [
      {
        fixture_id: 2011,
        date: "2025-05-10T20:00:00+00:00",
        venue: "RCDE Stadium",
        home: "Espanyol",
        away: "Athletic Bilbao",
        score: "1-2",
        events: [
          { minute: 28, type: "Goal", team: "Espanyol", player: "Raúl de Tomás" },
          { minute: 52, type: "Goal", team: "Athletic Bilbao", player: "Iñaki Williams" },
          { minute: 79, type: "Goal", team: "Athletic Bilbao", player: "Nico Williams" }
        ]
      },
    ]
  },
  {
    league: { id: 140, name: "La Liga", logo: "https://media.api-sports.io/football/leagues/140.png" },
    teams: {
      home: { id: 540, name: "Espanyol", logo: "https://media.api-sports.io/football/teams/540.png" },
      away: { id: 538, name: "Celta Vigo", logo: "https://media.api-sports.io/football/teams/538.png" }
    },
    fixtures: [
      {
        fixture_id: 2012,
        date: "2025-05-10T20:00:00+00:00",
        venue: "RCDE Stadium",
        home: "Espanyol",
        away: "Celta Vigo",
        score: "2-2",
        events: [
          { minute: 15, type: "Goal", team: "Espanyol", player: "Joselu" },
          { minute: 38, type: "Goal", team: "Celta Vigo", player: "Iago Aspas" },
          { minute: 65, type: "Goal", team: "Celta Vigo", player: "Santi Mina" },
          { minute: 89, type: "Goal", team: "Espanyol", player: "Sergi Darder" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 505, name: "Inter Milan", logo: "https://media.api-sports.io/football/teams/505.png" },
      away: { id: 496, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" }
    },
    fixtures: [
      {
        fixture_id: 3001,
        date: "2025-03-02T18:45:00+00:00",
        venue: "San Siro",
        home: "Inter Milan",
        away: "Juventus",
        score: "2-1",
        events: [
          { minute: 28, type: "Goal", team: "Inter Milan", player: "Lautaro Martínez" },
          { minute: 55, type: "Goal", team: "Juventus", player: "Federico Chiesa" },
          { minute: 82, type: "Goal", team: "Inter Milan", player: "Romelu Lukaku" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 489, name: "AC Milan", logo: "https://media.api-sports.io/football/teams/489.png" },
      away: { id: 492, name: "Napoli", logo: "https://media.api-sports.io/football/teams/492.png" }
    },
    fixtures: [
      {
        fixture_id: 3002,
        date: "2025-03-02T18:45:00+00:00",
        venue: "San Siro",
        home: "AC Milan",
        away: "Napoli",
        score: "1-1",
        events: [
          { minute: 33, type: "Goal", team: "AC Milan", player: "Rafael Leão" },
          { minute: 71, type: "Goal", team: "Napoli", player: "Victor Osimhen" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 497, name: "Roma", logo: "https://media.api-sports.io/football/teams/497.png" },
      away: { id: 487, name: "Lazio", logo: "https://media.api-sports.io/football/teams/487.png" }
    },
    fixtures: [
      {
        fixture_id: 3003,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Olimpico",
        home: "Roma",
        away: "Lazio",
        score: "2-0",
        events: [
          { minute: 25, type: "Goal", team: "Roma", player: "Paulo Dybala" },
          { minute: 68, type: "Goal", team: "Roma", player: "Tammy Abraham" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" },
      away: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" }
    },
    fixtures: [
      {
        fixture_id: 3004,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Artemio Franchi",
        home: "Fiorentina",
        away: "Torino",
        score: "3-1",
        events: [
          { minute: 22, type: "Goal", team: "Fiorentina", player: "Dušan Vlahović" },
          { minute: 45, type: "Goal", team: "Torino", player: "Andrea Belotti" },
          { minute: 67, type: "Goal", team: "Fiorentina", player: "Giacomo Bonaventura" },
          { minute: 84, type: "Goal", team: "Fiorentina", player: "Nico González" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" }
    },
    fixtures: [
      {
        fixture_id: 3005,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Dacia Arena",
        home: "Udinese",
        away: "Sampdoria",
        score: "2-1",
        events: [
          { minute: 35, type: "Goal", team: "Udinese", player: "Beto" },
          { minute: 62, type: "Goal", team: "Sampdoria", player: "Francesco Caputo" },
          { minute: 78, type: "Goal", team: "Udinese", player: "Gerard Deulofeu" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 867, name: "Lecce", logo: "https://media.api-sports.io/football/teams/867.png" }
    },
    fixtures: [
      {
        fixture_id: 3006,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Carlo Castellani",
        home: "Empoli",
        away: "Lecce",
        score: "1-0",
        events: [
          { minute: 67, type: "Goal", team: "Empoli", player: "Mattia Destro" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" },
      away: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" }
    },
    fixtures: [
      {
        fixture_id: 3007,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Arechi",
        home: "Salernitana",
        away: "Spezia",
        score: "1-2",
        events: [
          { minute: 25, type: "Goal", team: "Salernitana", player: "Federico Bonazzoli" },
          { minute: 58, type: "Goal", team: "Spezia", player: "M'Bala Nzola" },
          { minute: 83, type: "Goal", team: "Spezia", player: "Daniele Verde" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 499, name: "Atalanta", logo: "https://media.api-sports.io/football/teams/499.png" },
      away: { id: 502, name: "Fiorentina", logo: "https://media.api-sports.io/football/teams/502.png" }
    },
    fixtures: [
      {
        fixture_id: 3008,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Gewiss Stadium",
        home: "Atalanta",
        away: "Fiorentina",
        score: "3-2",
        events: [
          { minute: 18, type: "Goal", team: "Atalanta", player: "Duván Zapata" },
          { minute: 34, type: "Goal", team: "Fiorentina", player: "Luka Jović" },
          { minute: 55, type: "Goal", team: "Atalanta", player: "Ruslan Malinovskyi" },
          { minute: 72, type: "Goal", team: "Fiorentina", player: "Cristiano Biraghi" },
          { minute: 88, type: "Goal", team: "Atalanta", player: "Luis Muriel" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 494, name: "Torino", logo: "https://media.api-sports.io/football/teams/494.png" },
      away: { id: 479, name: "Sassuolo", logo: "https://media.api-sports.io/football/teams/479.png" }
    },
    fixtures: [
      {
        fixture_id: 3009,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Olimpico Grande Torino",
        home: "Torino",
        away: "Sassuolo",
        score: "0-1",
        events: [
          { minute: 76, type: "Goal", team: "Sassuolo", player: "Domenico Berardi" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 488, name: "Udinese", logo: "https://media.api-sports.io/football/teams/488.png" },
      away: { id: 500, name: "Bologna", logo: "https://media.api-sports.io/football/teams/500.png" }
    },
    fixtures: [
      {
        fixture_id: 3010,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Dacia Arena",
        home: "Udinese",
        away: "Bologna",
        score: "2-0",
        events: [
          { minute: 42, type: "Goal", team: "Udinese", player: "Isaac Success" },
          { minute: 71, type: "Goal", team: "Udinese", player: "Roberto Pereyra" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 584, name: "Sampdoria", logo: "https://media.api-sports.io/football/teams/584.png" },
      away: { id: 495, name: "Genoa", logo: "https://media.api-sports.io/football/teams/495.png" }
    },
    fixtures: [
      {
        fixture_id: 3011,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Luigi Ferraris",
        home: "Sampdoria",
        away: "Genoa",
        score: "1-1",
        events: [
          { minute: 38, type: "Goal", team: "Sampdoria", player: "Manolo Gabbiadini" },
          { minute: 85, type: "Goal", team: "Genoa", player: "Mattia Destro" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 511, name: "Empoli", logo: "https://media.api-sports.io/football/teams/511.png" },
      away: { id: 517, name: "Venezia", logo: "https://media.api-sports.io/football/teams/517.png" }
    },
    fixtures: [
      {
        fixture_id: 3012,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Carlo Castellani",
        home: "Empoli",
        away: "Venezia",
        score: "2-1",
        events: [
          { minute: 28, type: "Goal", team: "Empoli", player: "Sam Lammers" },
          { minute: 61, type: "Goal", team: "Venezia", player: "Thomas Henry" },
          { minute: 79, type: "Goal", team: "Empoli", player: "Nedim Bajrami" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 515, name: "Spezia", logo: "https://media.api-sports.io/football/teams/515.png" },
      away: { id: 514, name: "Salernitana", logo: "https://media.api-sports.io/football/teams/514.png" }
    },
    fixtures: [
      {
        fixture_id: 3013,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Stadio Alberto Picco",
        home: "Spezia",
        away: "Salernitana",
        score: "1-1",
        events: [
          { minute: 43, type: "Goal", team: "Spezia", player: "Rey Manaj" },
          { minute: 88, type: "Goal", team: "Salernitana", player: "Grigoris Kastanos" }
        ]
      },
    ]
  },
  {
    league: { id: 135, name: "Serie A", logo: "https://media.api-sports.io/football/leagues/135.png" },
    teams: {
      home: { id: 482, name: "Cagliari", logo: "https://media.api-sports.io/football/teams/482.png" },
      away: { id: 504, name: "Hellas Verona", logo: "https://media.api-sports.io/football/teams/504.png" }
    },
    fixtures: [
      {
        fixture_id: 3014,
        date: "2025-03-02T18:45:00+00:00",
        venue: "Unipol Domus",
        home: "Cagliari",
        away: "Hellas Verona",
        score: "0-2",
        events: [
          { minute: 35, type: "Goal", team: "Hellas Verona", player: "Giovanni Simeone" },
          { minute: 72, type: "Goal", team: "Hellas Verona", player: "Antonín Barák" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 157, name: "Bayern Munich", logo: "https://media.api-sports.io/football/teams/157.png" },
      away: { id: 165, name: "Borussia Dortmund", logo: "https://media.api-sports.io/football/teams/165.png" }
    },
    fixtures: [
      {
        fixture_id: 4001,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Allianz Arena",
        home: "Bayern Munich",
        away: "Borussia Dortmund",
        score: "4-2",
        events: [
          { minute: 5, type: "Goal", team: "Bayern Munich", player: "Player AN" },
          { minute: 33, type: "Goal", team: "Borussia Dortmund", player: "Player AO" },
          { minute: 50, type: "Goal", team: "Bayern Munich", player: "Player AP" },
          { minute: 70, type: "Goal", team: "Bayern Munich", player: "Player AQ" },
          { minute: 75, type: "Goal", team: "Borussia Dortmund", player: "Player AR" },
          { minute: 85, type: "Goal", team: "Bayern Munich", player: "Player AS" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 173, name: "RB Leipzig", logo: "https://media.api-sports.io/football/teams/173.png" },
      away: { id: 168, name: "Bayer Leverkusen", logo: "https://media.api-sports.io/football/teams/168.png" }
    },
    fixtures: [
      {
        fixture_id: 4002,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Red Bull Arena",
        home: "RB Leipzig",
        away: "Bayer Leverkusen",
        score: "1-3",
        events: [
          { minute: 22, type: "Goal", team: "RB Leipzig", player: "Christopher Nkunku" },
          { minute: 45, type: "Goal", team: "Bayer Leverkusen", player: "Patrik Schick" },
          { minute: 67, type: "Goal", team: "Bayer Leverkusen", player: "Florian Wirtz" },
          { minute: 85, type: "Goal", team: "Bayer Leverkusen", player: "Moussa Diaby" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 169, name: "Eintracht Frankfurt", logo: "https://media.api-sports.io/football/teams/169.png" },
      away: { id: 163, name: "Borussia Monchengladbach", logo: "https://media.api-sports.io/football/teams/163.png" }
    },
    fixtures: [
      {
        fixture_id: 4003,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Deutsche Bank Park",
        home: "Eintracht Frankfurt",
        away: "Borussia Monchengladbach",
        score: "2-1",
        events: [
          { minute: 35, type: "Goal", team: "Eintracht Frankfurt", player: "Randal Kolo Muani" },
          { minute: 58, type: "Goal", team: "Borussia Monchengladbach", player: "Marcus Thuram" },
          { minute: 82, type: "Goal", team: "Eintracht Frankfurt", player: "Daichi Kamada" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 160, name: "Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" },
      away: { id: 164, name: "Mainz", logo: "https://media.api-sports.io/football/teams/164.png" }
    },
    fixtures: [
      {
        fixture_id: 4004,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Europa-Park Stadion",
        home: "Freiburg",
        away: "Mainz",
        score: "3-0",
        events: [
          { minute: 18, type: "Goal", team: "Freiburg", player: "Vincenzo Grifo" },
          { minute: 56, type: "Goal", team: "Freiburg", player: "Michael Gregoritsch" },
          { minute: 73, type: "Goal", team: "Freiburg", player: "Lucas Höler" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 159, name: "Augsburg", logo: "https://media.api-sports.io/football/teams/159.png" },
      away: { id: 187, name: "Bochum", logo: "https://media.api-sports.io/football/teams/187.png" }
    },
    fixtures: [
      {
        fixture_id: 4005,
        date: "2025-04-18T18:30:00+00:00",
        venue: "WWK Arena",
        home: "Augsburg",
        away: "Bochum",
        score: "1-1",
        events: [
          { minute: 33, type: "Goal", team: "Augsburg", player: "Florian Niederlechner" },
          { minute: 78, type: "Goal", team: "Bochum", player: "Sebastian Polter" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 172, name: "Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" },
      away: { id: 167, name: "Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" }
    },
    fixtures: [
      {
        fixture_id: 4006,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Mercedes-Benz Arena",
        home: "Stuttgart",
        away: "Hoffenheim",
        score: "2-0",
        events: [
          { minute: 28, type: "Goal", team: "Stuttgart", player: "Serhou Guirassy" },
          { minute: 65, type: "Goal", team: "Stuttgart", player: "Silas Katompa Mvumpa" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" },
      away: { id: 210, name: "Heidenheim", logo: "https://media.api-sports.io/football/teams/210.png" }
    },
    fixtures: [
      {
        fixture_id: 4007,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Weserstadion",
        home: "Werder Bremen",
        away: "Heidenheim",
        score: "3-1",
        events: [
          { minute: 15, type: "Goal", team: "Werder Bremen", player: "Marvin Ducksch" },
          { minute: 42, type: "Goal", team: "Heidenheim", player: "Tim Kleindienst" },
          { minute: 67, type: "Goal", team: "Werder Bremen", player: "Rafael Santos Borré" },
          { minute: 85, type: "Goal", team: "Werder Bremen", player: "Romano Schmid" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 170, name: "VfL Wolfsburg", logo: "https://media.api-sports.io/football/teams/170.png" },
      away: { id: 160, name: "SC Freiburg", logo: "https://media.api-sports.io/football/teams/160.png" }
    },
    fixtures: [
      {
        fixture_id: 4008,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Volkswagen Arena",
        home: "VfL Wolfsburg",
        away: "SC Freiburg",
        score: "1-2",
        events: [
          { minute: 25, type: "Goal", team: "VfL Wolfsburg", player: "Lukas Nmecha" },
          { minute: 58, type: "Goal", team: "SC Freiburg", player: "Vincenzo Grifo" },
          { minute: 82, type: "Goal", team: "SC Freiburg", player: "Michael Gregoritsch" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 167, name: "TSG Hoffenheim", logo: "https://media.api-sports.io/football/teams/167.png" },
      away: { id: 161, name: "FC Koln", logo: "https://media.api-sports.io/football/teams/161.png" }
    },
    fixtures: [
      {
        fixture_id: 4009,
        date: "2025-04-18T18:30:00+00:00",
        venue: "PreZero Arena",
        home: "TSG Hoffenheim",
        away: "FC Koln",
        score: "3-0",
        events: [
          { minute: 22, type: "Goal", team: "TSG Hoffenheim", player: "Andrej Kramarić" },
          { minute: 56, type: "Goal", team: "TSG Hoffenheim", player: "Christoph Baumgartner" },
          { minute: 78, type: "Goal", team: "TSG Hoffenheim", player: "Georginio Rutter" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 28, name: "Union Berlin", logo: "https://media.api-sports.io/football/teams/28.png" },
      away: { id: 172, name: "VfB Stuttgart", logo: "https://media.api-sports.io/football/teams/172.png" }
    },
    fixtures: [
      {
        fixture_id: 4010,
        date: "2025-04-18T18:30:00+00:00",
        venue: "Stadion An der Alten Försterei",
        home: "Union Berlin",
        away: "VfB Stuttgart",
        score: "1-1",
        events: [
          { minute: 34, type: "Goal", team: "Union Berlin", player: "Sheraldo Becker" },
          { minute: 71, type: "Goal", team: "VfB Stuttgart", player: "Serhou Guirassy" }
        ]
      },
    ]
  },
  {
    league: { id: 78, name: "Bundesliga", logo: "https://media.api-sports.io/football/leagues/78.png" },
    teams: {
      home: { id: 164, name: "Mainz 05", logo: "https://media.api-sports.io/football/teams/164.png" },
      away: { id: 162, name: "Werder Bremen", logo: "https://media.api-sports.io/football/teams/162.png" }
    },
    fixtures: [
      {
        fixture_id: 4011,
        date: "2025-04-18T18:30:00+00:00",
        venue: "MEWA ARENA",
        home: "Mainz 05",
        away: "Werder Bremen",
        score: "2-1",
        events: [
          { minute: 18, type: "Goal", team: "Mainz 05", player: "Karim Onisiwo" },
          { minute: 52, type: "Goal", team: "Werder Bremen", player: "Marvin Ducksch" },
          { minute: 85, type: "Goal", team: "Mainz 05", player: "Jonathan Burkardt" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 85, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
      away: { id: 81, name: "Marseille", logo: "https://media.api-sports.io/football/teams/81.png" }
    },
    fixtures: [
      {
        fixture_id: 5001,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Parc des Princes",
        home: "PSG",
        away: "Marseille",
        score: "2-0",
        events: [
          { minute: 40, type: "Goal", team: "PSG", player: "Kylian Mbappé" },
          { minute: 72, type: "Goal", team: "PSG", player: "Neymar Jr" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 80, name: "Lyon", logo: "https://media.api-sports.io/football/teams/80.png" },
      away: { id: 91, name: "Monaco", logo: "https://media.api-sports.io/football/teams/91.png" }
    },
    fixtures: [
      {
        fixture_id: 5002,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Groupama Stadium",
        home: "Lyon",
        away: "Monaco",
        score: "1-2",
        events: [
          { minute: 28, type: "Goal", team: "Lyon", player: "Alexandre Lacazette" },
          { minute: 55, type: "Goal", team: "Monaco", player: "Wissam Ben Yedder" },
          { minute: 78, type: "Goal", team: "Monaco", player: "Kevin Volland" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 79, name: "Lille", logo: "https://media.api-sports.io/football/teams/79.png" },
      away: { id: 94, name: "Rennes", logo: "https://media.api-sports.io/football/teams/94.png" }
    },
    fixtures: [
      {
        fixture_id: 5003,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Pierre-Mauroy",
        home: "Lille",
        away: "Rennes",
        score: "2-1",
        events: [
          { minute: 22, type: "Goal", team: "Lille", player: "Jonathan David" },
          { minute: 51, type: "Goal", team: "Rennes", player: "Martin Terrier" },
          { minute: 79, type: "Goal", team: "Lille", player: "Timothy Weah" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    },
    fixtures: [
      {
        fixture_id: 5004,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Allianz Riviera",
        home: "Nice",
        away: "Nantes",
        score: "3-0",
        events: [
          { minute: 15, type: "Goal", team: "Nice", player: "Amine Gouiri" },
          { minute: 42, type: "Goal", team: "Nice", player: "Andy Delort" },
          { minute: 68, type: "Goal", team: "Nice", player: "Kasper Dolberg" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 96, name: "Toulouse", logo: "https://media.api-sports.io/football/teams/96.png" },
      away: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" }
    },
    fixtures: [
      {
        fixture_id: 5005,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stadium de Toulouse",
        home: "Toulouse",
        away: "Angers",
        score: "1-0",
        events: [
          { minute: 67, type: "Goal", team: "Toulouse", player: "Branco van den Boomen" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" }
    },
    fixtures: [
      {
        fixture_id: 5006,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade de la Meinau",
        home: "Strasbourg",
        away: "Brest",
        score: "2-2",
        events: [
          { minute: 25, type: "Goal", team: "Strasbourg", player: "Ludovic Ajorque" },
          { minute: 43, type: "Goal", team: "Brest", player: "Steve Mounié" },
          { minute: 67, type: "Goal", team: "Brest", player: "Franck Honorat" },
          { minute: 85, type: "Goal", team: "Strasbourg", player: "Habib Diallo" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" },
      away: { id: 98, name: "Ajaccio", logo: "https://media.api-sports.io/football/teams/98.png" }
    },
    fixtures: [
      {
        fixture_id: 5007,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Gabriel Montpied",
        home: "Clermont",
        away: "Ajaccio",
        score: "1-1",
        events: [
          { minute: 38, type: "Goal", team: "Clermont", player: "Mohamed Bayo" },
          { minute: 72, type: "Goal", team: "Ajaccio", player: "Mounaim El Idrissy" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 576, name: "Strasbourg", logo: "https://media.api-sports.io/football/teams/576.png" },
      away: { id: 83, name: "Montpellier", logo: "https://media.api-sports.io/football/teams/83.png" }
    },
    fixtures: [
      {
        fixture_id: 5008,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade de la Meinau",
        home: "Strasbourg",
        away: "Montpellier",
        score: "0-2",
        events: [
          { minute: 52, type: "Goal", team: "Montpellier", player: "Téji Savanier" },
          { minute: 78, type: "Goal", team: "Montpellier", player: "Valère Germain" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 116, name: "Lens", logo: "https://media.api-sports.io/football/teams/116.png" },
      away: { id: 82, name: "Bordeaux", logo: "https://media.api-sports.io/football/teams/82.png" }
    },
    fixtures: [
      {
        fixture_id: 5009,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Bollaert-Delelis",
        home: "Lens",
        away: "Bordeaux",
        score: "3-1",
        events: [
          { minute: 15, type: "Goal", team: "Lens", player: "Florian Sotoca" },
          { minute: 33, type: "Goal", team: "Bordeaux", player: "Hwang Ui-jo" },
          { minute: 67, type: "Goal", team: "Lens", player: "Seko Fofana" },
          { minute: 84, type: "Goal", team: "Lens", player: "Loïs Openda" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 1063, name: "Saint-Etienne", logo: "https://media.api-sports.io/football/teams/1063.png" },
      away: { id: 93, name: "Nantes", logo: "https://media.api-sports.io/football/teams/93.png" }
    },
    fixtures: [
      {
        fixture_id: 5010,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Geoffroy-Guichard",
        home: "Saint-Etienne",
        away: "Nantes",
        score: "1-2",
        events: [
          { minute: 28, type: "Goal", team: "Saint-Etienne", player: "Denis Bouanga" },
          { minute: 55, type: "Goal", team: "Nantes", player: "Ludovic Blas" },
          { minute: 82, type: "Goal", team: "Nantes", player: "Moses Simon" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 77, name: "Angers", logo: "https://media.api-sports.io/football/teams/77.png" },
      away: { id: 99, name: "Clermont", logo: "https://media.api-sports.io/football/teams/99.png" }
    },
    fixtures: [
      {
        fixture_id: 5011,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Raymond Kopa",
        home: "Angers",
        away: "Clermont",
        score: "2-0",
        events: [
          { minute: 42, type: "Goal", team: "Angers", player: "Sofiane Boufal" },
          { minute: 78, type: "Goal", team: "Angers", player: "Abdallah Sima" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 110, name: "Troyes", logo: "https://media.api-sports.io/football/teams/110.png" },
      away: { id: 111, name: "Lorient", logo: "https://media.api-sports.io/football/teams/111.png" }
    },
    fixtures: [
      {
        fixture_id: 5012,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade de l'Aube",
        home: "Troyes",
        away: "Lorient",
        score: "1-3",
        events: [
          { minute: 22, type: "Goal", team: "Troyes", player: "Renaud Ripart" },
          { minute: 45, type: "Goal", team: "Lorient", player: "Terem Moffi" },
          { minute: 67, type: "Goal", team: "Lorient", player: "Armand Laurienté" },
          { minute: 85, type: "Goal", team: "Lorient", player: "Enzo Le Fée" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 78, name: "Brest", logo: "https://media.api-sports.io/football/teams/78.png" },
      away: { id: 92, name: "Reims", logo: "https://media.api-sports.io/football/teams/92.png" }
    },
    fixtures: [
      {
        fixture_id: 5013,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Francis-Le Blé",
        home: "Brest",
        away: "Reims",
        score: "0-1",
        events: [
          { minute: 73, type: "Goal", team: "Reims", player: "Folarin Balogun" }
        ]
      },
    ]
  },
  {
    league: { id: 61, name: "Ligue 1", logo: "https://media.api-sports.io/football/leagues/61.png" },
    teams: {
      home: { id: 100, name: "Metz", logo: "https://media.api-sports.io/football/teams/100.png" },
      away: { id: 84, name: "Nice", logo: "https://media.api-sports.io/football/teams/84.png" }
    },
    fixtures: [
      {
        fixture_id: 5014,
        date: "2025-04-12T18:00:00+00:00",
        venue: "Stade Saint-Symphorien",
        home: "Metz",
        away: "Nice",
        score: "1-2",
        events: [
          { minute: 35, type: "Goal", team: "Metz", player: "Georges Mikautadze" },
          { minute: 62, type: "Goal", team: "Nice", player: "Gaëtan Laborde" },
          { minute: 88, type: "Goal", team: "Nice", player: "Nicolas Pépé" }
        ]
      },
    ]
  },

];

export const mockNews: NewsItem[] = [
  {
    id: 1,
    title: "🔥 เฮอร์แลนด์ทำสถิติใหม่! ซัดไฮแทรกรอบ 15 นาทีพาแมนซิตี้ถล่มเชลซี 5-0",
    summary: "เออร์ลิง เฮอร์แลนด์ เขียนประวัติศาสตร์ใหม่ด้วยการทำแฮตทริกภายใน 15 นาทีแรก นำแมนเชสเตอร์ ซิตี้ถล่มเชลซี 5-0 ที่เอติฮัด สเตเดียม คืนที่ผ่านมา สร้างสถิติการทำประตูเร็วที่สุดในประวัติศาสตร์พรีเมียร์ลีก",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-30T22:30:00Z",
    category: "Match Highlight",
    source: "ESPN Thailand",
    tags: ["Haaland", "Man City", "Premier League", "Hat-trick", "Record"],
    views: 45720,
    readTime: "3 นาที"
  },
  {
    id: 2,
    title: "💰 เอ็มบัปเป้ยืนยันแล้ว! ย้ายเรอัล มาดริดฟรีทรานสเฟอร์ พร้อมเงินเซ็นสัญญา 150 ล้านยูโร",
    summary: "ผู้เล่นดาวฝรั่งเศสวัย 25 ปี ยืนยันการย้ายไปเรอัล มาดริดอย่างเป็นทางการ หลังสิ้นสุดสัญญากับปีเอสเช ด้วยข้อตกลงฟรีทรานสเฟอร์ พร้อมรับเงินค่าเซ็นสัญญาถึง 150 ล้านยูโร และค่าเหนื่อย 25 ล้านยูโรต่อปี เป็นระยะเวลา 5 ปี",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-30T16:45:00Z",
    category: "Transfer News",
    source: "Marca España",
    tags: ["Mbappe", "Real Madrid", "PSG", "Free Transfer", "La Liga"],
    views: 78340,
    readTime: "4 นาที"
  },
  {
    id: 3,
    title: "⚡ ลิเวอร์พูลสยบอาร์เซนอล 3-2 ในเกมมหากาพย์! คล็อปป์ชื่นชม 'ซาลาห์' ฟอร์มเทพ",
    summary: "ศึกระดับโลกที่แอนฟิลด์! ลิเวอร์พูลพลิกแซงอาร์เซนอล 3-2 ในเกมที่ตื่นเต้นจนวินาทีสุดท้าย โมฮาเหม็ด ซาลาห์ เป็นฮีโร่ยิงได้สองประตู รวมถึงประตูชัยในนาที 89 ทำให้ทีมเก็บ 3 แต้มสำคัญ",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-30T14:20:00Z",
    category: "Match Report",
    source: "Liverpool FC Official",
    tags: ["Liverpool", "Arsenal", "Salah", "Klopp", "Premier League"],
    views: 62180,
    readTime: "5 นาที"
  },
  {
    id: 4,
    title: "🏆 นาโปลีประกาศแชมป์เซเรียอาเร็ว! เลขาดำคือพวกเขา 11 นัดก่อนจบลีก",
    summary: "ความสำเร็จอันยิ่งใหญ่! นาโปลี ซิวแชมป์เซเรียอา 2024-25 อย่างเป็นทางการ หลังมีแต้มนำจุดที่สองถึง 18 แต้ม ขณะเหลือเพียง 11 นัดสุดท้าย วิคเตอร์ โอซิมเฮน ยิงไป 28 ประตู เป็นตัวหลักพาทีมคว้าแชมป์สมัยที่ 4 ในประวัติศาสตร์",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-30T12:00:00Z",
    category: "League Champion",
    source: "Gazzetta dello Sport",
    tags: ["Napoli", "Serie A", "Champion", "Osimhen", "Title"],
    views: 91250,
    readTime: "6 นาที"
  },
  {
    id: 5,
    title: "🇹🇭 ช้างศึกเฮแพ้ซิงคโปร์ 2-1 ศึกคัดบอลโลก! ซุปไตซิน เบิ้ลพาชัย",
    summary: "ทีมชาติไทย เฮแพ้ซิงคโปร์ 2-1 ในเกมคัดเลือกฟุตบอลโลก 2026 รอบแรก ที่สนามราชมังคลา ด้วยประตูของ ซุปไตซิน ชาติใต้ (2 ประตู) พาช้างศึกขึ้นจ่าฝูงกลุ่มด้วย 12 แต้มจาก 5 เกม ใกล้เข้ารอบต่อไปแล้ว",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-30T09:30:00Z",
    category: "National Team",
    source: "Thai Football Association",
    tags: ["Thailand", "Singapore", "World Cup Qualifier", "Suphanat", "Victory"],
    views: 156780,
    readTime: "4 นาที"
  },
  {
    id: 6,
    title: "🎯 ผู้จัดการทีมใหม่! ยูเวนตุสแต่งตั้ง 'อันเชล็อตติ' คุมทีมแทน 'อัลเลกรี'",
    summary: "การเปลี่ยนแปลงครั้งใหม่ที่ตูริน! ยูเวนตุส ประกาศแต่งตั้ง คาร์โล อันเชล็อตติ เป็นผู้จัดการทีมคนใหม่ ด้วยสัญญา 3 ปี หลังเจรจาตัวสำเร็จจากเรอัล มาดริด อัลเลกรี จะยุติบทบาทหลังนำทีมได้แชมป์คอปปา อิตาเลียเมื่อเดือนที่แล้ว",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-29T18:15:00Z",
    category: "Manager News",
    source: "Sky Sports Italia",
    tags: ["Juventus", "Ancelotti", "Allegri", "Manager", "Serie A"],
    views: 43920,
    readTime: "3 นาที"
  },
  {
    id: 7,
    title: "⚽ บาเยิร์นเจ๋ง! คว้าตัว 'เบลลิงแฮม' จากดอร์ทมุนด์ด้วยค่าตัวสถิติโลก 180 ล้านยูโร",
    summary: "ดีลระเบิดโลก! บาเยิร์น มิวนิค ประกาศคว้าตัว จูด เบลลิงแฮม กองกลางดาวรุ่งอังกฤษจากดอร์ทมุนด์ สำเร็จ ด้วยค่าตัว 180 ล้านยูโร ทำลายสถิติการซื้อนักเตะที่แพงที่สุดในประวัติศาสตร์บุนเดสลีกา สัญญา 6 ปี เริ่มฤดูกาลหน้า",
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-29T15:45:00Z",
    category: "Transfer Bomb",
    source: "Bild Deutschland",
    tags: ["Bayern Munich", "Bellingham", "Dortmund", "Transfer Record", "Bundesliga"],
    views: 127650,
    readTime: "5 นาที"
  },
  {
    id: 8,
    title: "🌟 'เมสซี่' ทำได้อีกแล้ว! คว้าลูกทองคำครั้งที่ 8 ในวัย 37 ปี เขียนประวัติศาสตร์ใหม่",
    summary: "ประวัติศาสตร์เขียนใหม่! ลิโอเนล เมสซี่ คว้ารางวัลบัลลงดอร์ครั้งที่ 8 ในอาชีพ ทำลายสถิติตัวเองหลังนำอาร์เจนตินาซิวแชมป์โลก และมีฟอร์มเจิดจรัสกับอินเตอร์ ไมอามี่ ในวัย 37 ปี ยืนยันตำแหน่งนักเตะที่ยิ่งใหญ่ที่สุดแห่งยุค",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-29T13:20:00Z",
    category: "Awards",
    source: "France Football",
    tags: ["Messi", "Ballon d'Or", "Argentina", "Inter Miami", "GOAT"],
    views: 234580,
    readTime: "4 นาที"
  },
  {
    id: 9,
    title: "🚨 ข่าวลือร้อน! 'เนย์มาร์' เตรียมกลับยุโรป พีเอสเชเล็งคว้าตัวจากซาอุดิฯ",
    summary: "ความเป็นไปได้ที่น่าตื่นเต้น! เนย์มาร์ ดาวเก๋าบราซิล อาจกลับสู่ยุโรปอีกครั้ง หลังปีเอสเช เริ่มเจรจาอย่างจริงจังกับอัล ฮิลาล เพื่อคว้าตัวกลับมาปารีส ด้วยข้อเสนอค่าตัว 60 ล้านยูโร พร้อมค่าเหนื่อย 15 ล้านยูโรต่อปี เป็นสัญญา 2 ปี",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-29T11:30:00Z",
    category: "Transfer Rumor",
    source: "L'Équipe",
    tags: ["Neymar", "PSG", "Al Hilal", "Return", "Brazil"],
    views: 89340,
    readTime: "3 นาที"
  },
  {
    id: 10,
    title: "🏟️ ยูฟ่าเผยโฉม! สเตเดียมใหม่สำหรับยูโร 2028 ที่อังกฤษ งบ 2.5 พันล้านปอนด์",
    summary: "แผนการยิ่งใหญ่เผยโฉม! ยูฟ่า ร่วมกับสมาคมฟุตบอลอังกฤษเปิดตัวแผนสร้างสนามกีฬาแห่งใหม่ 5 แห่ง สำหรับการแข่งขันยูโร 2028 ด้วยงบประมาณรวม 2.5 พันล้านปอนด์ รองรับผู้ชมได้มากถึง 90,000 คน พร้อมเทคโนโลยีล้ำสมัย",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=400&fit=crop&crop=center",
    date: "2025-06-29T08:45:00Z",
    category: "Infrastructure",
    source: "UEFA Official",
    tags: ["UEFA", "Euro 2028", "England", "Stadium", "Infrastructure"],
    views: 34750,
    readTime: "6 นาท"
  }
];

