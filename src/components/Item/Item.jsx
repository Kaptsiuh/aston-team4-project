import { Link } from "react-router-dom";
import s from "./Item.module.css";

export const Item = ({ img, name, id }) => {
  const addToFavorites = () => {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user.favorites.includes(`${id}`)) {
      user.favorites = user.favorites.filter((pokemon) => pokemon !== `${id}`);
    } else {
      user.favorites.push(`${id}`);
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  return (
    <div key={id} className={s.card}>
      <div className={s.buttons}>
        <button className={s.moreBtn} onClick={addToFavorites}>
          *
        </button>
        <Link to={`/pokemon/${id}`} className={s.moreBtn}>
          More
        </Link>
      </div>
      <img className={s.img} src={img} alt={name} />
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};
