import React, { useState } from "react";

const SearchBar = ({ searchKeyWord }) => {
  const [search, setSearch] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    searchKeyWord(search);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmitForm}>
      <button className="search__btn">
        <i className="bi bi-search-heart"></i>
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
