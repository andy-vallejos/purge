import style from "./FormField.module.css";

export function FormField({ name, label, type, placeholder, onValueChange }) {
  return (
    <section className={style.container}>
      <label className={style.customLabel} htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onValueChange(e.target.name, e.target.value)}
        className={style.customInput}
      />
    </section>
  );
}
