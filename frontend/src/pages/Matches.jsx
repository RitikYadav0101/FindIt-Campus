import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { findMatches } from "../utils/matchItems";
import BrandLogo from "../components/BrandLogo";
import { useLanguage } from "../context/LanguageContext";

import "./Matches.css";

function Matches() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [matches, setMatches] = useState([]);

  // ================= LOAD MATCHES =================

  useEffect(() => {
    const lostItems =
      JSON.parse(localStorage.getItem("lostItems")) || [];

    const foundItems =
      JSON.parse(localStorage.getItem("foundItems")) || [];

    const matchedItems = findMatches(
      lostItems,
      foundItems
    );

    setMatches(matchedItems);
  }, []);

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div className="matches-page">
      {/* ================= HEADER ================= */}

      <header className="matches-navbar">
        {/* ================= BRAND LOGO ================= */}
        <Link to="/" className="matches-brand">
          <BrandLogo small />
        </Link>

        {/* ================= NAVIGATION ================= */}
        <nav className="matches-nav-links">
          <Link to="/">{t("nav.home", "Home")}</Link>
          <Link to="/lost">{t("nav.lost", "Lost")}</Link>
          <Link to="/report-lost">{t("nav.reportLost", "Report Lost")}</Link>
          <Link to="/found">{t("nav.found", "Found")}</Link>
          <Link to="/report-found">{t("nav.reportFound", "Report Found")}</Link>
          <Link to="/matches" className="active">
            {t("nav.matches", "Matches")}
          </Link>
          <Link to="/profile">{t("nav.profile", "Profile")}</Link>
        </nav>

        {/* ================= SIGN OUT ================= */}
        <button
          className="matches-signout-btn"
          onClick={handleLogout}
        >
          {t("nav.signOut", "Sign Out")}
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="matches-main">
        {/* ================= HERO ================= */}

        <section className="matches-hero">
          <div className="matches-hero-badge">
            {t("matches.badge", "🔍 SMART MATCHING SYSTEM")}
          </div>

          <h1>
            {t("matches.title", "Possible Matches")}
          </h1>

          <p>
            {t(
              "matches.subtitle",
              "We compare lost and found reports to help reconnect people with their belongings."
            )}
          </p>

          <div className="matches-stats">
            <div className="matches-stat">
              <strong>{matches.length}</strong>
              <span>{t("matches.possibleMatches", "Possible Matches")}</span>
            </div>

            <div className="matches-stat">
              <strong>🔒</strong>
              <span>{t("matches.privacyProtected", "Privacy Protected")}</span>
            </div>

            <div className="matches-stat">
              <strong>⚡</strong>
              <span>{t("matches.smartComparison", "Smart Comparison")}</span>
            </div>
          </div>
        </section>

        {/* ================= MATCHES ================= */}

        {matches.length > 0 ? (
          <section className="matches-container">
            {matches.map((match, index) => (
              <article
                className="premium-match-card"
                key={`${match.lostItem.id}-${match.foundItem.id}`}
              >
                {/* ================= CARD HEADER ================= */}
                <div className="match-card-header">
                  <div>
                    <span className="match-number">
                      MATCH #{index + 1}
                    </span>
                    <h2>Possible Item Connection</h2>
                  </div>

                  <div className="match-confidence">
                    <span>{t("matches.matchConfidence", "Match Confidence")}</span>
                    <strong>{match.score}%</strong>
                  </div>
                </div>

                {/* ================= COMPARISON ================= */}
                <div className="match-comparison">
                  {/* ================= LOST ITEM ================= */}
                  <div className="premium-item-card lost-item-card">
                    <div className="item-status lost-status">
                      {t("matches.lostBadge", "🔴 LOST ITEM")}
                    </div>

                    <div className="premium-image-box">
                      {match.lostItem.image ? (
                        <img
                          src={match.lostItem.image}
                          alt={match.lostItem.itemName}
                        />
                      ) : (
                        <div className="no-image-placeholder">📦</div>
                      )}
                    </div>

                    <div className="premium-item-content">
                      <h3>{match.lostItem.itemName}</h3>
                      <p className="item-description">
                        {match.lostItem.description}
                      </p>

                      <div className="item-details">
                        <div className="detail-chip">
                          📍 {match.lostItem.location}
                        </div>
                        <div className="detail-chip">
                          📅 {match.lostItem.dateLost}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= MATCH CENTER ================= */}
                  <div className="match-center">
                    <div className="match-line"></div>

                    <div className="match-circle">
                      <div className="match-circle-inner">
                        <strong>{match.score}%</strong>
                        <span>MATCH</span>
                      </div>
                    </div>

                    <div className="match-label">POSSIBLE MATCH</div>

                    <div className="match-line"></div>
                  </div>

                  {/* ================= FOUND ITEM ================= */}
                  <div className="premium-item-card found-item-card">
                    <div className="item-status found-status">
                      {t("matches.foundBadge", "🟢 FOUND ITEM")}
                    </div>

                    <div className="premium-image-box">
                      {match.foundItem.image ? (
                        <img
                          src={match.foundItem.image}
                          alt={match.foundItem.itemName}
                        />
                      ) : (
                        <div className="no-image-placeholder">📦</div>
                      )}
                    </div>

                    <div className="premium-item-content">
                      <h3>{match.foundItem.itemName}</h3>
                      <p className="item-description">
                        {match.foundItem.description}
                      </p>

                      <div className="item-details">
                        <div className="detail-chip">
                          📍 {match.foundItem.location}
                        </div>
                        <div className="detail-chip">
                          📅 {match.foundItem.dateFound}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= PRIVACY ================= */}
                <div className="match-privacy">
                  {t(
                    "matches.privacyNotice",
                    "🔒 Contact information is hidden to protect user privacy. Verify the item details before confirming ownership."
                  )}
                </div>
              </article>
            ))}
          </section>
        ) : (
          /* ================= EMPTY STATE ================= */
          <section className="premium-no-matches">
            <div className="empty-icon">🔍</div>

            <h2>{t("matches.noMatchesTitle", "No Possible Matches Yet")}</h2>

            <p>
              {t(
                "matches.noMatchesDesc",
                "Don't worry! As more lost and found items are reported, our matching system will automatically compare them."
              )}
            </p>

            <div className="empty-actions">
              <Link to="/lost" className="empty-lost-btn">
                {t("home.browseLost", "View Lost Items")}
              </Link>

              <Link to="/found" className="empty-found-btn">
                {t("home.browseFound", "View Found Items")}
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default Matches;
