import s from "./Button.module.css";

export const Button = ({ title, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {title}
    </button>
  );
};
