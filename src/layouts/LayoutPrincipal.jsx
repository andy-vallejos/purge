import style from "./LayoutPrincipal.module.css";
import Router from "../routes/Router";

export function LayoutPrincipal() {
  return (
    <div className={style.container}>
      <div className={style.decoration}></div>
      <div className={`${style.decoration} ${style.blue}`}></div>
      <nav className={style.nav__container}>
        <h1>PURGE</h1>
      </nav>
      <main>
        <Router />
      </main>
      <footer>@2026 PURGE</footer>
    </div>
  );
}
