import React, { useEffect, useState } from 'react';
import api from '../api';

const PlayerData = ({ epicId }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getPlayerData(epicId);
        setPlayerData(response.data.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, [epicId]);

  if (!playerData) {
    return <div>Loading...</div>;
  }


};

export default PlayerData;