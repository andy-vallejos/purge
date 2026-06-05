import style from "./LayoutSecundary.module.css";
import { NavPrincipal } from "../../components";
import { Outlet } from "react-router-dom";

export function LayoutSecundary() {
  return (
    <div className={style.container}>
      <NavPrincipal />
      <main className={style.main}>
        <aside></aside>
        <Outlet />
      </main>
      <div className={style.advertencia}>
        <p>Esta pagina sigue en desarrollo para pantallas pequeñas</p>
      </div>
    </div>
  );
}
