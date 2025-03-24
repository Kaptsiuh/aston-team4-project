import s from "./Button.module.css";

export const Button = ({ title }) => {
  return <button className={s.button}>{title}</button>;
};
