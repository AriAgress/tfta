// import { app } from "express";
import React, { useState } from "react";
import axios from "axios";
import "./searchBarStyles.css";

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
    <div className="input-group">
      <input
        type="text"
        placeholder="Search"
        className="input"
        onChange={onChange}
      />
      <button onClick={onSubmit} />
    </div>
  );
};

export default SearchBar;
