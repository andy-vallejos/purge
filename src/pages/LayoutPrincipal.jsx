import style from "./LayoutPrincipal.module.css";

export function LayoutPrincipal() {
  return (
    <div className={style.login__container}>
      <div className={style.decoration}></div>
      <div className={`${style.decoration} ${style.blue}`}></div>
      <nav className={style.nav__container}>
        <h1>PURGE</h1>
      </nav>
      <main>
        <article className={style.section}>
          <header>
            <h1>ACCESO</h1>
          </header>
          <section className={style.options}>
            <button className={style.pointer}>
              <p>POSTULANTE</p>
            </button>
            <button>
              <p>ADMINISTRADOR</p>
            </button>
          </section>

          <form action="" className={style.form}>
            <label htmlFor="">EMAIL</label>
            <input type="email" placeholder="usuario@gmail.com" />

            <label htmlFor="">CLAVE DE ACCESO</label>
            <input type="password" placeholder="*********" />

            <button>AUTENTICAR SISTEMA</button>
            <footer>
              <p>SOLICITAR ACCESO (POSTULANTE)</p>
            </footer>
          </form>
        </article>
      </main>
      <footer>@ 2026 PURGE</footer>
    </div>
  );
}
