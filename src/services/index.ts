import axios from 'axios';
const { VITE_API_FOOTBALL_KEY, VITE_BASE_URL } = import.meta.env;
const API = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-apisports-key': '7317a0994eb1bda2ba0f841e48f4d708',
  },
});

export const getFixturesToday = async () => {
    try {
        const today = new Date().toISOString().split('T')[0];
        const response = await API.get('/fixtures', {
            params: {
                date: today,
            }
        });
        return response.data.response;
    } catch (error) {
        console.error('Error fetching all fixtures:', error);
    }
}

export const getLeagues = async () => {
    try{
        const response = await API.get('/leagues');
        console.log(response)
        return response.data.response;
    } catch (error) {
        console.error('Error fetching leagues:', error);
    }
}

export const getTeams = async (leagueId: number, season: number) => {
    try {
        const response = await API.get(`/teams?league=${leagueId}&season=${season}`);
        return response.data.response;
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

export const getFixtures = async (teamId: number, season: number) => {
    try {
        const response = await API.get(`/fixtures?team=${teamId}&season=${season}`);
        return response.data.response;
    } catch (error) {
        console.error('Error fetching fixtures:', error);
    }
}

export default API;
