import "./Footer.scss";
import { useLocation, useNavigate } from "react-router";

export default function Footer() {
    return (
      <div className="footer">
        <img src="triforce.png" alt="Un footer tout ce qu'il y a de plus normal" />
        <p>&copy; Footer... pied... ok je suis pas drôle. &copy;</p>
      </div>
    );
  }
  