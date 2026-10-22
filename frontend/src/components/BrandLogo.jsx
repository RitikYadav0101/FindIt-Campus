import "./BrandLogo.css";
import { useLanguage } from "../context/LanguageContext";

function BrandLogo({ small = false }) {
  const { t } = useLanguage();

  return (
    <div className={`findit-brand ${small ? "small" : ""}`}>
      <div className="findit-logo-icon">
        <span>F.</span>
      </div>

      <div className="findit-brand-text">
        <h1>{t("brand.title", "FINDIT")}</h1>
        <p>{t("brand.subtitle", "Campus Lost & Found")}</p>
      </div>
    </div>
  );
}

export default BrandLogo;
