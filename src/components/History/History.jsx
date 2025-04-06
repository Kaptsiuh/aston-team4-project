import axios from "axios";
import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";

export const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const userHistory = JSON.parse(
        localStorage.getItem("currentUser")
      ).history;
      let newHistory = [];

      if (userHistory) {
        for (let index = 0; index < userHistory.length; index++) {
          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${userHistory[index]}`
            );
            newHistory.push(response.data);
          } catch (err) {
            alert(err);
          }
        }
        setHistory(newHistory);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      {history ? (
        history.map((pokemon) => (
          <Item
            id={pokemon.id}
            img={pokemon.sprites.front_default}
            name={pokemon.name}
            key={pokemon.id}
          />
        ))
      ) : (
        <p>History is empty</p>
      )}
    </>
  );
};
