import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function Home() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    logout();

    navigate("/login");
  };

  return (
    <>
      <h1>Hola a la home</h1>
      <button onClick={handleSubmit}>Desloguear</button>
    </>
  );
}
