import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import { useLanguage } from "../context/LanguageContext";
import "./Lost.css";

function Lost() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("lostItems")) || [];

    setLostItems(savedItems);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  const filteredItems = lostItems.filter((item) => {
    const itemName =
      item.itemName || item.title || item.item || "";

    const category = item.category || "";
    const location = item.location || "";

    const search = searchTerm.toLowerCase();

    return (
      itemName.toLowerCase().includes(search) ||
      category.toLowerCase().includes(search) ||
      location.toLowerCase().includes(search)
    );
  });

  return (
    <div className="lost-page">
      {/* HEADER */}
      <header className="lost-header">
        <Link to="/" className="lost-brand">
          <BrandLogo small />
        </Link>

        <nav className="lost-nav-links">
          <Link to="/">{t("nav.home", "Home")}</Link>

          <Link to="/lost" className="active">
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

        <button className="lost-signout-btn" onClick={handleLogout}>
          {t("nav.signOut", "Sign Out")}
        </button>
      </header>

      {/* MAIN */}
      <main className="lost-main">
        <section className="lost-page-heading">
          <div className="lost-heading-glow"></div>

          <div className="lost-heading-content">
            <span className="lost-eyebrow">
              {t("lost.eyebrow", "CAMPUS COMMUNITY")}
            </span>

            <h2>
              {t("lost.title1", "Lost")}{" "}
              <span>{t("lost.title2", "Items")}</span>
            </h2>

            <p>
              {t(
                "lost.subtitle",
                "Browse items reported as lost by students and help reunite them with their owners."
              )}
            </p>
          </div>
        </section>

        <section className="lost-toolbar">
          <div className="lost-search-wrapper">
            <span className="lost-search-icon">🔍</span>

            <input
              type="text"
              placeholder={t("lost.searchPlaceholder", "Search lost items...")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Link to="/report-lost" className="lost-report-btn">
            <span className="lost-report-plus">+</span>
            {t("lost.reportBtn", "Report Lost")}
          </Link>
        </section>

        <section className="lost-results-section">
          <div className="lost-results-header">
            <div>
              <h3>{t("lost.recentlyLost", "Recently Lost")}</h3>
              <p>
                {filteredItems.length} {t("lost.itemsFound", "item(s) found")}
              </p>
            </div>
          </div>

          <div className="lost-items-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const itemName =
                  item.itemName ||
                  item.title ||
                  item.item ||
                  t("lost.unnamedItem", "Unnamed Item");

                const date =
                  item.dateLost ||
                  item.date ||
                  t("lost.dateNotAvailable", "Date not available");

                const image = item.image || item.photo;

                return (
                  <article
                    className="lost-item-card"
                    key={item.id || index}
                  >
                    <div className="lost-card-top">
                      <span className="lost-category">
                        {item.category || "Other"}
                      </span>

                      <span className="lost-date">{date}</span>
                    </div>

                    <div className="lost-item-image">
                      {image ? (
                        <img
                          src={image}
                          alt={itemName}
                          className="lost-uploaded-image"
                        />
                      ) : (
                        <div className="lost-no-image">
                          <div className="lost-package-icon">📦</div>
                        </div>
                      )}
                    </div>

                    <div className="lost-card-content">
                      <h3>{itemName}</h3>

                      <p className="lost-item-description">
                        {item.description ||
                          t(
                            "lost.noDescription",
                            "No description available for this item."
                          )}
                      </p>

                      <div className="lost-location">
                        <span className="lost-location-icon">📍</span>
                        <span>
                          {item.location ||
                            t(
                              "lost.locationNotAvailable",
                              "Location not available"
                            )}
                        </span>
                      </div>

                      <button
                        className="lost-view-btn"
                        onClick={() =>
                          alert(
                            `Item: ${itemName}\n\n` +
                              `Category: ${
                                item.category || "Not provided"
                              }\n\n` +
                              `Description: ${
                                item.description || "Not provided"
                              }\n\n` +
                              `Features: ${
                                item.features || "Not provided"
                              }\n\n` +
                              `Location: ${
                                item.location || "Not provided"
                              }\n\n` +
                              `Contact: ${
                                item.contact || "Not provided"
                              }`
                          )
                        }
                      >
                        {t("lost.viewBtn", "View Item →")}
                      </button>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="lost-no-items">
                <div className="lost-empty-icon">📦</div>
                <h3>{t("lost.noItemsTitle", "No Lost Items Found")}</h3>
                <p>
                  {t("lost.noItemsDesc", "No item matches your search.")}
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="lost-bottom-message">
          <div className="lost-bottom-icon">?</div>

          <div className="lost-bottom-content">
            <h3>{t("lost.cantFindTitle", "Can't find your lost item?")}</h3>
            <p>
              {t(
                "lost.cantFindDesc",
                "Report your lost item with detailed information so the campus community can help you find it."
              )}
            </p>
          </div>

          <Link to="/report-lost" className="lost-bottom-link">
            {t("lost.reportLostArrow", "Report Lost →")}
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="lost-footer">
        <div className="lost-footer-brand">
          <BrandLogo small />
        </div>
      </footer>

      <div className="lost-copyright">
        {t(
          "home.copyrightTag",
          "© Copyright 2026 FINDIT. All Rights Reserved."
        )}
      </div>
    </div>
  );
}

export default Lost;
