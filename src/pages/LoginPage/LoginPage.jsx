import style from "./LoginPage.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "../../components";
import { useForm, useAuth } from "../../hooks";

export function LoginPage() {
  const [role, setRole] = useState("postulante");
  const { handleFieldChange, formData } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = login(formData.email, formData.password);

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
        <button type="button" onClick={() => setRole("postulante")}>
          POSTULANTE
        </button>

        <button type="button" onClick={() => setRole("admin")}>
          ADMINISTRADOR
        </button>
      </section>

      <form className={style.form} onSubmit={handleSubmit}>
        <FormField
          name="email"
          label="EMAIL"
          placeholder="user@gmail.com"
          type="email"
          onValueChange={handleFieldChange}
        />

        <FormField
          name="password"
          label="CLAVE DE ACCESO"
          placeholder="********"
          type="password"
          onValueChange={handleFieldChange}
        />

        <button type="submit">AUTENTICAR SISTEMA</button>

        <footer style={{ display: role === "postulante" ? "block" : "none" }}>
          <Link to="/register">SOLICITAR ACCESO (POSTULANTE)</Link>
        </footer>
      </form>
    </article>
  );
}
