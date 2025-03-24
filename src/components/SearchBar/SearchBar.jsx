import { useState } from "react";
import { Button } from "../Button/Button";
import s from "./SearchBar.module.css";
import { Input } from "../Input/Input";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      query.trim().toLowerCase(); //result
    }
    setQuery("");
  };

  return (
    <div className={s.search_bar}>
      <Input
        value={query}
        placeholder={"Search..."}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
      />
      <Button title={"Search"} onClick={handleSearch} />
    </div>
  );
};
