import { Link } from "react-router-dom";
import s from "./Item.module.css";

export const Item = ({ img, name, id }) => {
  return (
    <div key={id} className={s.card}>
      <Link to={`/pokemon/${id}`} className={s.moreBtn}>
        More
      </Link>
      <img className={s.img} src={img} alt={name} />
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};
