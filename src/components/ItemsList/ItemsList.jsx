import { useEffect, useState } from "react";
import s from "./ItemsList.module.css";
import { Item } from "../Item/Item";
import { SearchBar } from "../SearchBar/SearchBar";

export const ItemsList = () => {
  const [collectionPokemons, setCollectionPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50"
        );
        if (!response.ok) throw new Error("Pokemons not found!");
        const data = await response.json();

        const dataPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return {
              id: data.id,
              name: data.name,
              image: data.sprites.front_default,
            };
          })
        );

        setCollectionPokemons(dataPokemons);
        setFilteredPokemons(dataPokemons);
      } catch (err) {
        console.log("err.message", err.message);
        setError(err.message);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearch = (name) => {
    if (!name.trim()) {
      setFilteredPokemons(collectionPokemons);
      return;
    }
    setFilteredPokemons(collectionPokemons.filter((e) => e.name === name));
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {filteredPokemons.length > 0 ? (
        <div className={s.items}>
          {filteredPokemons.map((e) => (
            <Item key={e.id} id={e.id} img={e.image} name={e.name} />
          ))}
        </div>
      ) : (
        <p className={s.not_found}>Pokemon not found!</p>
      )}
    </div>
  );
};
