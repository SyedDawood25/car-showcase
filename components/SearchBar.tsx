"use client";

import { useState } from "react";
import { SearchManufacturer } from ".";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searhbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};
