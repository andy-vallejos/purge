import { Link } from "react-router-dom";
import style from "./NavPrincipal.module.css";

export function NavPrincipal() {
  return (
    <nav className={style.nav__container}>
      <Link to="/">
        <h1>PURGE</h1>
      </Link>
    </nav>
  );
}
