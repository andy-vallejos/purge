import style from "./RegisterPage.module.css";
import { FormField } from "../../components";
import { useState } from "react";
import { areas } from "../../data";
import { useForm } from "../../hooks";

export function RegisterPage() {
  const [area, setArea] = useState("");
  const { handleFieldChange, formData } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFieldChange("area", area);
    console.log(formData);
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit}>
        <section className={style.information__personal}>
          <FormField
            name="fullName"
            label="NOMBRE COMPLETO"
            type="text"
            placeholder="Ingresa tu nombre completo"
            onValueChange={handleFieldChange}
          />

          <FormField
            name="email"
            label="EMAIL"
            type="email"
            placeholder="user@gmail.com"
            onValueChange={handleFieldChange}
          />

          <FormField
            name="password"
            label="CONTRASEÑA"
            placeholder="********"
            type="password"
            onValueChange={handleFieldChange}
          />

          <FormField
            name="password"
            label="CONTRASEÑA"
            placeholder="********"
            type="password"
            onValueChange={handleFieldChange}
          />

          <FormField
            name="number"
            label="CELULAR"
            placeholder="00000000"
            type="number"
            onValueChange={handleFieldChange}
          />

          <section>
            <label htmlFor="">SEMESTRE</label>
            <select
              id="semester"
              name="semester"
              onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
            >
              <option value="">Selecciona un semestre</option>
              <option value="1">1 Primer semestre</option>
              <option value="2">2 Primer semestre</option>
              <option value="3">3 Primer semestre</option>
              <option value="4">4 Primer semestre</option>
              <option value="5">5 Primer semestre</option>
              <option value="6">6 Primer semestre</option>
              <option value="7">7 Primer semestre</option>
              <option value="8">8 Primer semestre</option>
              <option value="9">9 Primer semestre</option>
            </select>
          </section>
        </section>

        <p>AREA DE INTERES</p>
        <section className={style.areas}>
          {areas.map((element) => (
            <button
              key={element}
              type="button"
              className={`${style.area} ${
                area === element ? style.active : ""
              }`}
              onClick={() => setArea(element)}
            >
              <p>{element}</p>
            </button>
          ))}
        </section>

        <button type="submit">ENVIAR DATOS</button>
      </form>
    </section>
  );
}
