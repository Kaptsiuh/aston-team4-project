import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import axios from "axios";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const userFavorites = JSON.parse(
        localStorage.getItem("currentUser")
      ).favorites;
      let newFavorites = [];

      for (let index = 0; index < userFavorites.length; index++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${userFavorites[index]}`
          );
          newFavorites.push(response.data);
        } catch (err) {
          alert(err);
        }
      }
      setFavorites(newFavorites);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      {favorites ? (
        favorites.map((pokemon) => (
          <Item
            id={pokemon.id}
            img={pokemon.sprites.front_default}
            name={pokemon.name}
            key={pokemon.id}
          />
        ))
      ) : (
        <p>Favorites not found</p>
      )}
    </>
  );
};
