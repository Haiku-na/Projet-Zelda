import { useLocation, useNavigate } from "react-router";
import "./Header.scss";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="header">
      {displayName !== "Accueil" && (
        <a onClick={handleGoBack}>
          <img
            className="header__arrowToLeft"
            src="/fleche.png"
            alt="Retour"
          />
        </a>
      )}
      <h1 className="header__title">{displayName}</h1>
    </div>
  );
}