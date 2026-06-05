import style from "./PanelPage.module.css";

export function PanelPage() {
  return (
    <article className={style.container}>
      <section className={style.about}>
        <h1>ETAPAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          delectus sunt doloremque! Illum nulla quas qui enim corporis,
          blanditiis magni? Quam dicta fugiat esse iusto non hic repellat
          similique laborum.
        </p>
      </section>

      <section className={style.progress}>
        <section className={style.progress__inf}>
          <div>
            <p>PROGRESO TOTAL</p>
            <h1>1/5 MODULOS</h1>
          </div>
          <p className={style.progress__inf__next}>SIGUIENTE: GIT & GITHUB</p>
        </section>
        <section className={style.modules}>
          <div className={`${style.module} ${style.active}`}></div>
          <div className={style.module}></div>
          <div className={style.module}></div>
          <div className={style.module}></div>
          <div className={style.module}></div>
        </section>
      </section>

      <section className={style.cards}>
        <article className={`${style.card} ${style.card__active}`}>
          <h1>SERVIDORES</h1>
        </article>
        <article className={style.card}>
          <div className={style.candado}>
            <p>BLOQUEADO</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.candado}>
            <p>BLOQUEADO</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.candado}>
            <p>BLOQUEADO</p>
          </div>
        </article>
        <article className={style.card}>
          <div className={style.candado}>
            <p>BLOQUEADO</p>
          </div>
        </article>
      </section>
    </article>
  );
}
