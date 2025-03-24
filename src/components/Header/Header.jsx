import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { Button } from "../Button/Button";
import s from "./Header.module.css";

export const Header = () => {
  const user = true;

  return (
    <header className={s.header}>
      <h1>
        <Link to={ROUTES.HOME} className={s.logo}>
          PokeDex
        </Link>
      </h1>
      <nav className={s.nav}>
        {user ? (
          <>
            <Link to={ROUTES.FAVORITES}>
              <Button title="Favorites" />
            </Link>
            <Link to={ROUTES.HISTORY}>
              <Button title="History" />
            </Link>
            <Link to={ROUTES.HOME}>
              <Button title="Log out" />
            </Link>
          </>
        ) : (
          <>
            <Link to={ROUTES.SIGNIN}>
              <Button title="Login" />
            </Link>
            <Link to={ROUTES.SIGNUP}>
              <Button title="Sign-up" />
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
