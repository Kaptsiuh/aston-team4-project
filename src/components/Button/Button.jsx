import s from "./Button.module.css";

export const Button = ({ title, onClick, type }) => {
  return (
    <button type={type} className={s.button} onClick={onClick}>
      {title}
    </button>
  );
};
