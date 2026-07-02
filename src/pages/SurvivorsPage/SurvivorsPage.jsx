import style from "./SurvivorsPage.module.css";
import { users } from "../../data";

export function SurvivorsPage() {
  return (
    <section className={style.container}>
      <section className={style.information__survivors}>
        <h1>POSTULANTES</h1>
        <h2>GESTION 2026</h2>
        <section className={style.stats}>
          <div className={style.stat_element}>
            <h3>ACTIVOS</h3>
            <p>24/48</p>
          </div>
          <div className={`${style.delete} ${style.stat_element}`}>
            <h3>ELIMINADOS</h3>
            <p>24</p>
          </div>
          <div className={style.stat_element}>
            <h3>DIAS</h3>
            <p>12</p>
          </div>
          <div className={style.stat_element}>
            <h3>SIGUIENTE FASE</h3>
            <p>08:22:41</p>
          </div>
        </section>
      </section>
      <h1>POSTULANTES REGISTRADOS</h1>
      <ul className={style.container__cards}>
        {users.map((elemento) => {
          return (
            <li>
              <article className={style.card}>
                <section className={style.information}>
                  <img
                    src="https://imgs.search.brave.com/xHVGxkvqe0TWW6sc3FZFV7TgmaRtSavsPMee7glDEws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA5/Mzg0NTAyMC9lcy92/ZWN0b3IvZ3JpdG9z/LWdyaXRvLWNhcmEt/ZW4tZ3IlQzMlQTFm/aWNvcy1kZWwtdmVj/dG9yLWJsYW5jby15/LW5lZ3JvLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1vWTRH/b1ZqZkhnd0t6aFA4/bnlXUUhrWFk5dWVh/elZOaXcyTmVNYXJz/b1RRPQ"
                    alt=""
                  />
                  <section>
                    <h2>
                      {elemento.nombres} {elemento.apellidos}
                    </h2>
                    <h3>{elemento.universidad}</h3>
                  </section>
                </section>
                <footer
                  className={`${style.card__footer} ${
                    !elemento.state ? style.eliminado : ""
                  }`}
                >
                  <p>{elemento.state ? "SOBREVIVIENTE" : "ELIMINADO"}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
