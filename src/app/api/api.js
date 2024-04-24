import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://fortnite-api.com/v2/stats/br/v2',
  headers: {
    Authorization: 'e6b231e7-6981-4ea5-bf2d-6804d164fb3d'
  }
});

export default {
  getPublicLeaderboard: () => apiClient.get('public/leaderboards/pve'),
  getPlayerData: (epicId) => apiClient.get(`player/stats?epicId=${epicId}`)
};