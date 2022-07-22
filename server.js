const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 8000;
require("dotenv").config();
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
  try {
    const summonerName = req.query.body;
    const result = await axios.get(
      `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${API_KEY}`
    );

    const summonerStats = result.data.id;
    const stats = await axios.get(
      `https://na1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerStats}?api_key=${API_KEY}`
    );
    // console.log("Chicken Satay", stats.data);

    const puuid = result.data.puuid;
    const matchData = await axios.get(
      `https://americas.api.riotgames.com/tft/match/v1/matches/by-puuid/${puuid}/ids?start=0&count=10&api_key=${API_KEY}`
    );

    let matchHistory = [];
    for (let index = 0; index < matchData.data.length; index++) {
      const matchId = matchData.data[index];
      const matchLogs = await axios.get(
        `https://americas.api.riotgames.com/tft/match/v1/matches/${matchId}?api_key=${API_KEY}`
      );
      matchHistory.push(matchLogs.data);
      // const userHistory = `(matchHistory.info.participants.${puuid}.placement)`;
      // console.log("Chicken Satay", matchHistory);
    }
    const data = {
      user: result.data,
      userStats: stats.data,
      matchHistory: matchHistory,
    };
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listen at http://localhost:${PORT}`);
});
