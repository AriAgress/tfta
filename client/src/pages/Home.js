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
  const [averagePlace, setAveragePlace] = useState(0);

  const init = (data) => {
    let matchDataArr = [];
    let placementsArr = [];
    data.matchHistory?.forEach((element) => {
      const participants = element.info.participants;
      participants.forEach((element2) => {
        const participants2 = element2.puuid;
        if (participants2 === data.puuid) {
          matchDataArr.push(element2);
          placementsArr.push(element2.placement);
        } else {
          return;
        }
      });
    });
    setMatchData(matchDataArr);
    setPlacements(placementsArr);
    if (placementsArr.length > 1) {
      average(placementsArr);
    }
  };

  const average = (placements) => {
    const totalAverage =
      placements?.reduce((a, b) => a + b) / placements?.length;
    setAveragePlace(totalAverage);
  };

  useEffect(() => {
    init(data);
  }, [data]);

  return (
    <div className="body-wrapper">
      <SearchBar setData={setData} setCard={setCard} />
      {card === true ? (
        <ProfileCard data={data} averagePlace={averagePlace} />
      ) : null}
      {card === true ? (
        <MatchHistory data={data} matchData={matchData} />
      ) : null}
    </div>
  );
};

export default Home;
