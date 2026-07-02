import style from "./LayoutPrincipal.module.css";
import { NavPrincipal } from "../../components";
import { Outlet, useLocation } from "react-router-dom";

export function LayoutPrincipal() {
  const location = useLocation().pathname;
  console.log;
  return (
    <div className={style.container}>
      {location === "/login" || location === "/register" ? (
        <>
          <div className={style.decoration}></div>
          <div className={`${style.decoration} ${style.blue}`}></div>
        </>
      ) : (
        <></>
      )}

      <NavPrincipal />
      <main className={style.main}>
        <Outlet />
      </main>
      <footer>@2026 PURGE</footer>
    </div>
  );
}
