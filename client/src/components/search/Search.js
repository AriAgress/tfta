import React, { useState } from "react";
import axios from "axios";
import "./searchBarStyles.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ setData, setCard }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.get(
        `http://localhost:8000/api?body=${search}`
      );
      setSearch(result.data);
      setData(result.data);
      setCard(true);
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
