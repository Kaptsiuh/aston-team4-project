import s from "./Item.module.css";

export const Item = ({ img, name, id }) => {
  return (
    <div key={id} className={s.card}>
      <img className={s.img} src={img} alt={name} />
      <h2 className={s.name}>{name}</h2>
    </div>
  );
};
