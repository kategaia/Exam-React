import { useLocation, useNavigate } from "react-router";
import "./header.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  const handleGoBack = () => {
    navigate(-1);
  };
return (
    <div>
        <div className="header">
            {displayName !== "Accueil" && (
                <a onClick={handleGoBack} style={{ cursor: "pointer", display: "flex", alignItems: "left" }}>
                    <img src="./super-hero-patriot-man-opening-his-shirt.webp" alt="Lyre Skyward Sword" style={{ width: "50px", height: "50px" }} />
                </a>
            )} <h2>La Galerie des Héros</h2>
        </div>
        <h1 className="header__title">{displayName}</h1>
        <h3>Bienvenue sur la page {displayName}</h3>
    </div>
);
}