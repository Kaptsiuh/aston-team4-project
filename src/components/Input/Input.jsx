import s from "./Input.module.css";

export const Input = ({ value, onChange, onKeyPress, placeholder }) => {
  return (
    <input className={s.input} placeholder={placeholder} value={value} onChange={onChange} onKeyPress={onKeyPress} />
  );
};
