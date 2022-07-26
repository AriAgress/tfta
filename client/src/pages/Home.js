import React, { useState, useEffect } from "react";
import "./home.css";
import SearchBar from "../components/search/Search";
import ProfileCard from "../components/profile/ProfileCard";
import MatchHistory from "../components/match/MatchHistory";

const Home = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState(false);
  const [matchData, setMatchData] = useState([]);
  const [placements, setPlacements] = useState([]);
  const [gameLength, setGameLength] = useState([]);
  const [averagePlace, setAveragePlace] = useState(0);
  const [averageEliminated, setAverageEliminated] = useState(0);

  const init = (data) => {
    let matchDataArr = [];
    let placementsArr = [];
    let gameLengthArr = [];
    data.matchHistory?.forEach((element) => {
      const participants = element.info.participants;
      participants.forEach((element2) => {
        const participants2 = element2.puuid;
        if (participants2 === data.puuid) {
          matchDataArr.push(element2);
          placementsArr.push(element2.placement);
          gameLengthArr.push(element2.time_eliminated);
        } else {
          return;
        }
      });
    });
    setMatchData(matchDataArr);
    setPlacements(placementsArr);
    setGameLength(gameLengthArr);
    if (placementsArr.length > 1) {
      averagePlacement(placementsArr);
      averageTime(gameLengthArr);
    }
  };

  const averagePlacement = (placements) => {
    const totalAverage =
      placements?.reduce((a, b) => a + b) / placements?.length;
    setAveragePlace(totalAverage);
  };

  const averageTime = (gameLength) => {
    const totalAverage =
      gameLength?.reduce((a, b) => a + b) / gameLength?.length;
    setAverageEliminated(totalAverage);
  };

  useEffect(() => {
    init(data);
  }, [data]);

  return (
    <div className="body-wrapper">
      <SearchBar setData={setData} setCard={setCard} />
      {card === true ? (
        <ProfileCard
          data={data}
          averagePlace={averagePlace}
          averageEliminated={averageEliminated}
        />
      ) : null}
      {card === true ? (
        <MatchHistory data={data} matchData={matchData} />
      ) : null}
    </div>
  );
};

export default Home;
