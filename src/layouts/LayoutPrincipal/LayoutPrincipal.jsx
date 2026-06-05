import style from "./LayoutPrincipal.module.css";
import { NavPrincipal } from "../../components";
import { Outlet } from "react-router-dom";

export function LayoutPrincipal() {
  return (
    <div className={style.container}>
      <div className={style.decoration}></div>
      <div className={`${style.decoration} ${style.blue}`}></div>

      <NavPrincipal />
      <main className={style.main}>
        <Outlet />
      </main>
      <footer>@2026 PURGE</footer>
    </div>
  );
}
