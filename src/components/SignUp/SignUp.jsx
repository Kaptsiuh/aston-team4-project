import React, { useContext, useEffect } from "react";
import { Button } from "../Button/Button";
import s from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import AuthContext from "../../utils/context";
import { useNavigate } from "react-router-dom";
import { saveUser, setUser } from "../../utils/mockUsers";

export const SignUp = () => {
  const { setAuth, setUserInfo } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();

  const onSubmit = (data) => {
    setAuth(true);
    setUserInfo({
      name: data.name,
      email: data.email,
    });
    saveUser(data);
    setUser(data);
    navigation("/");
  };

  useEffect(() => {
    localStorage.getItem("currentUser") &&
      onSubmit(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  return (
    <form id={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formField}>
        <label htmlFor="name">Name</label>
        <input
          className={s.formInput}
          type="text"
          {...register("name", { required: true })}
        />
      </div>

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

      <Button type="submit" title={"Submit"} />
    </form>
  );
};
