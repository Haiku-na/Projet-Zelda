import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

// Créer le contexte d'authentification
export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // État pour gérer le chargement

  useEffect(() => {
    // Vérifie si un utilisateur est stocké dans les cookies
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Le chargement est terminé une fois les données vérifiées
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      const newUser = { username };
      setUser(newUser);
      Cookies.set("user", JSON.stringify(newUser), { expires: 1 });
    } else {
      alert("Identifiants incorrects");
    }
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
  };

  // Si les données sont en train de se charger, retournez un indicateur de chargement
  if (loading) {
    return <div>Chargement...</div>; // Vous pouvez remplacer cela par un composant de chargement personnalisé
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personnalisé pour accéder au contexte
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
