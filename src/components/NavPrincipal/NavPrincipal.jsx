import { Link } from "react-router-dom";
import style from "./NavPrincipal.module.css";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../hooks";

export function NavPrincipal() {
  const { logout } = useAuth();
  const location = useLocation();

  const handleSubmit = () => {
    logout();
  };

  return (
    <nav className={style.nav__container}>
      <Link to="/">
        <h1>PURGE</h1>
      </Link>

      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <>
          <ul>
            <li>
              <Link to="/">Panel</Link>
            </li>
            <li>
              <Link to="/survivors">Sobrevivientes</Link>
            </li>
            <li>
              <Link to="/admin">Administradores</Link>
            </li>
          </ul>
          <Link to={"/login"} onClick={handleSubmit}>
            Logout
          </Link>
        </>
      )}
    </nav>
  );
}
