import { users } from "../data/users";

export function useAuth() {
  const login = (mail, password) => {
    const user = users.find((u) => u.mail === mail && u.password === password);

    if (!user) return null;

    localStorage.setItem("user", JSON.stringify(user));

    return user;
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("user");
  };

  return {
    login,
    logout,
    getUser,
    isAuthenticated,
  };
}
