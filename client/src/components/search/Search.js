import React, { useState } from "react";
import axios from "axios";
import "./searchBarStyles.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ setData, setCard, setLoadTime }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoadTime(false);
      const result = await axios.get(
        `http://localhost:8000/api?body=${search}`
      );
      setSearch(result.data);
      setData(result.data);
      setCard(true);
      setLoadTime(true);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="input-group">
      <input type="text" placeholder="Search" id="input" onChange={onChange} />
      <button onClick={onSubmit} id="searchbar-icon">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
