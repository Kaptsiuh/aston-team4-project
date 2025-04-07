import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./ItemDetails.module.css";

function ItemDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        user.history = user.history ? [...user.history, `${id}`] : [`${id}`];
        localStorage.setItem("currentUser", JSON.stringify(user));
        setPokemon(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPokemon();
  }, [id]);

  if (error) {
    return <p className={s.error}>{error}</p>;
  }

  if (!pokemon) {
    return <p className={s.loading}>Loading...</p>;
  }

  return (
    <div className={s.details}>
      <h2 className={s.name}>{pokemon.name}</h2>
      <img
        className={s.img}
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>ID: {id}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Type: {pokemon.types.map((elem) => elem.type.name).join(", ")}</p>
    </div>
  );
}

export default ItemDetails;
