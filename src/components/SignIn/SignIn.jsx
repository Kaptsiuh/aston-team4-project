import React, { useContext, useEffect } from "react";
import { Button } from "../Button/Button";
import AuthContext from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { login } from "../../utils/login";
import s from "./SignIn.module.css";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const { isAuth, setAuth, setUserInfo } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();

  const onSubmit = (data) => {
    login(data, () => {
      setAuth(true);
      setUserInfo({
        name: data.name,
        email: data.email,
      });
      navigation("/");
    });
  };

  useEffect(() => {
    isAuth && navigation("/");
  }, []);

  return (
    <form id={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formField}>
        <label htmlFor="email">Email</label>
        <input
          className={s.formInput}
          type="text"
          {...register("email", { required: true })}
        />
      </div>

      <div className={s.formField}>
        <label htmlFor="password">Password</label>
        <input
          className={s.formInput}
          type="text"
          {...register("password", { required: true })}
        />
      </div>

      <Button type="submit" title={"Login"} />
    </form>
  );
};
