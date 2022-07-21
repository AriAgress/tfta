import React, { useState } from "react";
import SearchBar from "../components/search/Search";
import ProfileCard from "../components/profile/ProfileCard";
import MatchHistory from "../components/match/MatchHistory";

const Home = () => {
  const [data, setData] = useState([]);
  const [card, setCard] = useState(false);

  return (
    <div>
      <SearchBar setData={setData} setCard={setCard} />
      {card === true ? <ProfileCard data={data} /> : null}
      {card === true ? <MatchHistory data={data} /> : null}
    </div>
  );
};

export default Home;
