import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

function Home() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { t } = useLanguage();

  // ================= LOGOUT =================

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="home-page">
      {/* ================= HEADER ================= */}

      <header className="home-header">
        {/* LOGO */}
        <Link to="/" className="home-brand">
          <BrandLogo small />
        </Link>

        {/* NAVIGATION */}
        <nav className="home-nav-links">
          <Link to="/" className="active">
            {t("nav.home", "Home")}
          </Link>

          <Link to="/lost">
            {t("nav.lost", "Lost")}
          </Link>

          <Link to="/report-lost">
            {t("nav.reportLost", "Report Lost")}
          </Link>

          <Link to="/found">
            {t("nav.found", "Found")}
          </Link>

          <Link to="/report-found">
            {t("nav.reportFound", "Report Found")}
          </Link>

          <Link to="/profile">
            {t("nav.profile", "Profile")}
          </Link>
        </nav>

        {/* SIGN OUT */}
        <button className="home-signout-btn" onClick={handleLogout}>
          {t("nav.signOut", "Sign Out")}
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="home-main">
        {/* ================= LEFT HERO ================= */}

        <section className="home-hero-section">
          {/* BADGE */}
          <div className="home-badge">
            {t("home.badge", "SMART CAMPUS LOST & FOUND")}
          </div>

          {/* HEADING */}
          <div className="home-hero-content">
            <h2>
              {t("home.heroTitle1", "Smart Campus")}
              <br />
              <span>{t("home.heroTitle2", "Lost & Found")}</span>
            </h2>

            <p className="home-description">
              {t("home.heroDesc1", "Find what's lost.")}
              <br />
              {t("home.heroDesc2", "Return what's found.")}
            </p>
          </div>

          {/* ================= FEATURES ================= */}

          <div className="home-features">
            {/* FEATURE 1 */}
            <div className="home-feature">
              <div className="home-feature-icon home-secure-icon">♢</div>

              <div className="home-feature-content">
                <h3>{t("home.feature1Title", "Secure & Reliable")}</h3>
                <p>
                  {t(
                    "home.feature1Desc",
                    "Your information and reports stay safe and protected."
                  )}
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="home-feature">
              <div className="home-feature-icon home-community-icon">♧</div>

              <div className="home-feature-content">
                <h3>{t("home.feature2Title", "Community Driven")}</h3>
                <p>
                  {t(
                    "home.feature2Desc",
                    "Helping students reconnect with their belongings."
                  )}
                </p>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="home-feature">
              <div className="home-feature-icon home-quick-icon">⚡</div>

              <div className="home-feature-content">
                <h3>{t("home.feature3Title", "Quick & Easy")}</h3>
                <p>
                  {t(
                    "home.feature3Desc",
                    "Report, search and recover items in minutes."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RIGHT ACTION PANEL ================= */}

        <section className="home-action-panel">
          <h2>{t("home.actionTitle", "Find & Recover")}</h2>

          <p className="home-action-description">
            {t(
              "home.actionDesc",
              "Helping the campus community reconnect with their lost belongings."
            )}
          </p>

          <div className="home-action-buttons">
            {/* LOST */}
            <Link to="/report-lost" className="home-action-card home-lost-card">
              <div>
                <span className="home-small-text">
                  {t("home.lookingForSomething", "Looking for something?")}
                </span>

                <h3>{t("home.lostCardTitle", "Lost")}</h3>

                <p>{t("home.lostCardDesc", "Report your lost item")}</p>
              </div>

              <div className="home-action-icon">📦</div>
            </Link>

            {/* FOUND */}
            <Link
              to="/report-found"
              className="home-action-card home-found-card"
            >
              <div>
                <span className="home-small-text">
                  {t("home.foundSomething", "Found something?")}
                </span>

                <h3>{t("home.foundCardTitle", "Found")}</h3>

                <p>{t("home.foundCardDesc", "Help someone get it back")}</p>
              </div>

              <div className="home-action-icon">🔎</div>
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div className="home-quick-links">
            <Link to="/lost">
              {t("home.browseLost", "Browse Lost Items →")}
            </Link>

            <Link to="/found">
              {t("home.browseFound", "Browse Found Items →")}
            </Link>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="home-footer">
        {/* BRAND */}
        <div className="home-footer-brand">
          <div className="home-footer-logo">
            <BrandLogo small />
          </div>

          <p className="home-footer-description">
            {t(
              "home.footerDesc",
              "A smart platform helping the campus community find, report and recover lost belongings easily."
            )}
          </p>
        </div>

        {/* SITE */}
        <div className="home-footer-section">
          <h4>{t("home.exploreHeading", "Explore")}</h4>

          <Link to="/">{t("nav.home", "Home")}</Link>
          <Link to="/lost">{t("nav.lost", "Lost")}</Link>
          <Link to="/found">{t("nav.found", "Found")}</Link>
          <Link to="/profile">{t("nav.profile", "Profile")}</Link>
        </div>

        {/* REPORT */}
        <div className="home-footer-section">
          <h4>{t("home.reportHeading", "Report")}</h4>

          <Link to="/report-lost">{t("nav.reportLost", "Report Lost")}</Link>
          <Link to="/report-found">{t("nav.reportFound", "Report Found")}</Link>
          <Link to="/lost">{t("home.searchLost", "Search Lost Items")}</Link>
          <Link to="/found">{t("home.searchFound", "Search Found Items")}</Link>
        </div>

        {/* HELP */}
        <div className="home-footer-section">
          <h4>{t("home.helpHeading", "Help")}</h4>

          <a href="#">{t("home.support", "Support")}</a>
          <a href="#">{t("home.terms", "Terms & Conditions")}</a>
          <a href="#">{t("home.privacy", "Privacy Policy")}</a>
        </div>

        {/* CONTACT */}
        <div className="home-footer-section">
          <h4>{t("home.contactHeading", "Contact")}</h4>

          <p>{t("home.campusOffice", "Campus Lost & Found")}</p>
          <p>{t("home.email", "info@finditcampus.com")}</p>

          <div className="home-socials">
            <span>𝕏</span>
            <span>f</span>
            <span>in</span>
          </div>
        </div>
      </footer>

      {/* ================= COPYRIGHT ================= */}

      <div className="home-copyright">
        <span>{t("home.copyright", "© 2026 FINDIT")}</span>
        <span>
          {t("home.copyrightTag", "Built for a smarter campus community.")}
        </span>
      </div>
    </div>
  );
}

export default Home;
