import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./NotFound.css";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="not-found-page">
      <h1>{t("notFound.code", "404")}</h1>
      <h2>{t("notFound.title", "Page Not Found")}</h2>

      <p>
        {t(
          "notFound.desc",
          "The page you're looking for doesn't exist or may have been moved."
        )}
      </p>

      <Link to="/" className="not-found-link">
        {t("notFound.backHome", "Back to Home")}
      </Link>
    </div>
  );
}

export default NotFound;
