import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthHook = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return {
    user: context.user,
    loading: context.loading,
    login: context.login,
    register: context.register,
    logout: context.logout,
    isAuthenticated: context.isAuthenticated,
    isAdmin: context.isAdmin,
  };
};

export default useAuthHook;
