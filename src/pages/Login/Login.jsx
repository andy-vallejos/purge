import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const [role, setRole] = useState("postulante");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const changeRole = () => {
    setRole(role === "postulante" ? "admin" : "postulante");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = login(mail, password);

    if (user) {
      navigate("/");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <article className={style.login}>
      <header>
        <h1>ACCESO</h1>
      </header>

      <section
        className={`${style.options} ${
          role === "admin" ? style.admin : style.postulante
        }`}
      >
        <button
          type="button"
          onClick={role === "admin" ? changeRole : () => {}}
        >
          <p>POSTULANTE</p>
        </button>

        <button
          type="button"
          onClick={role === "postulante" ? changeRole : () => {}}
        >
          <p>ADMINISTRADOR</p>
        </button>
      </section>

      <form className={style.form} onSubmit={handleSubmit}>
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="usuario@gmail.com"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label>CLAVE DE ACCESO</label>
        <input
          type="password"
          placeholder="*********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">AUTENTICAR SISTEMA</button>

        <footer style={{ display: role === "postulante" ? "block" : "none" }}>
          <p>SOLICITAR ACCESO (POSTULANTE)</p>
        </footer>
      </form>
    </article>
  );
}
