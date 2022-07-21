import React, { useState } from "react";
import SearchBar from "../components/Search";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      <SearchBar setData={setData} />
      {data.user.name}
    </div>
  );
};

export default Home;
