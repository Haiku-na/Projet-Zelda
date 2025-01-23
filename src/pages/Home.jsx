import { Link } from "react-router";
import "./Home.scss"
import { useAuth } from "../auth/AuthProvider";
import { Login, Logout } from "../auth/LoginOut";

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="home">
      {user ? (
        <>
          <p>Bienvenue {user.username}</p>
          <Logout />
        </>
      ) : (
        <Link to="/connect">
      <button>Se connecter</button>
      </Link>
      )}
      <Link to="/contact">
        <button>Nous contacter</button>
      </Link>
      <h1 className="animation">Bienvenue dans l'univers de Zelda</h1>
      <Link to="/games">
        <button>Voir les jeux</button>
      </Link>
      <Link to="/characters">
        <button>Voir les personnages</button>
      </Link>
      <Link to="/monsters">
        <button>Voir les monstres</button>
      </Link>
      <Link to="/bosses">
        <button>Voir les Boss</button>
      </Link>
    </div>
  );
}
