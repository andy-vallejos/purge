import style from "./LayoutPrincipal.module.css";
import Router from "../../routes/Router";
import { NavPrincipal } from "../../components";

export function LayoutPrincipal() {
  return (
    <div className={style.container}>
      <div className={style.decoration}></div>
      <div className={`${style.decoration} ${style.blue}`}></div>
      <NavPrincipal />
      <main>
        <Router />
      </main>
      <footer>@2026 PURGE</footer>
    </div>
  );
}
