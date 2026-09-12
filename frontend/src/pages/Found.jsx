import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "./components/BrandLogo";

import "./Found.css";

function Found() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [foundItems, setFoundItems] = useState([]);

  // ================= LOAD FOUND ITEMS =================

  useEffect(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("foundItems")) || [];

    setFoundItems(savedItems);
  }, []);

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  // ================= SEARCH =================

  const filteredItems = foundItems.filter((item) => {
    const itemName =
      item.item ||
      item.itemName ||
      item.title ||
      "";

    const location =
      item.location ||
      "";

    const description =
      item.description ||
      "";

    const search =
      searchTerm.toLowerCase();

    return (
      itemName.toLowerCase().includes(search) ||
      location.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search)
    );
  });

  return (
    <div className="found-page">

      {/* ================= HEADER ================= */}

      <header className="found-header">

        {/* BRAND */}

        <Link to="/" className="found-brand">
          <BrandLogo small={true} />
        </Link>


        {/* ================= NAVIGATION ================= */}

        <nav className="found-nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/lost">
            Lost
          </Link>

          <Link to="/report-lost">
            Report Lost
          </Link>

          <Link
            to="/found"
            className="active"
          >
            Found
          </Link>

          <Link to="/report-found">
            Report Found
          </Link>

          <Link to="/matches">
            Matches
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        {/* ================= SIGN OUT ================= */}

        <button
          className="found-signout-btn"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="found-main">


        {/* ================= PAGE HEADING ================= */}

        <section className="found-page-heading">

          <span className="found-eyebrow">
            CAMPUS COMMUNITY
          </span>

          <h2>
            Found <span>Items</span>
          </h2>

          <p>
            Browse items found around campus and help reconnect
            them with their rightful owners.
          </p>

        </section>


        {/* ================= SEARCH ================= */}

        <section className="found-toolbar">

          <div className="found-search-wrapper">

            <span className="found-search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search found items..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          <Link
            to="/report-found"
            className="found-report-btn"
          >

            <span className="found-report-plus">
              +
            </span>

            Report Found

          </Link>

        </section>


        {/* ================= RESULTS HEADER ================= */}

        <div className="found-results-header">

          <div>

            <h3>
              Recently Found
            </h3>

            <p>
              {filteredItems.length} item(s) available
            </p>

          </div>


          <div className="found-results-badge">
            🔎 Browse Items
          </div>

        </div>


        {/* ================= FOUND ITEMS ================= */}

        <section className="found-items-grid">

          {filteredItems.length > 0 ? (

            filteredItems.map((item, index) => {

              const itemName =
                item.item ||
                item.itemName ||
                item.title ||
                "Unnamed Item";

              const image =
                item.photo ||
                item.image;

              const category =
                item.category ||
                "Found Item";

              const date =
                item.date ||
                item.dateFound ||
                "Recently";

              return (

                <article
                  className="found-item-card"
                  key={item.id || index}
                >

                  {/* ================= CARD TOP ================= */}

                  <div className="found-card-top">

                    <span className="found-category">
                      {category}
                    </span>

                    <span className="found-date">
                      {date}
                    </span>

                  </div>


                  {/* ================= IMAGE ================= */}

                  <div className="found-item-image">

                    {image ? (

                      <img
                        src={image}
                        alt={itemName}
                        className="found-uploaded-image"
                      />

                    ) : (

                      <div className="found-no-image">

                        <div className="found-image-icon">
                          📦
                        </div>

                        <span>
                          Found Item
                        </span>

                      </div>

                    )}

                  </div>


                  {/* ================= CONTENT ================= */}

                  <div className="found-card-content">

                    <h3>
                      {itemName}
                    </h3>


                    <p className="found-item-description">

                      {item.description ||
                        "No description available for this item."}

                    </p>


                    {/* ================= LOCATION ================= */}

                    <div className="found-location">

                      <span className="found-location-icon">
                        📍
                      </span>

                      <span>
                        {item.location ||
                          "Location not available"}
                      </span>

                    </div>


                    {/* ================= VIEW BUTTON ================= */}

                    <button
                      className="found-view-btn"
                      onClick={() =>
                        alert(
                          `Item: ${itemName}\n\n` +
                          `Found at: ${
                            item.location ||
                            "Not provided"
                          }\n\n` +
                          `Description: ${
                            item.description ||
                            "Not provided"
                          }\n\n` +
                          `Reported by: ${
                            item.name ||
                            item.reportedBy ||
                            "Not provided"
                          }`
                        )
                      }
                    >
                      View Details
                      <span>→</span>
                    </button>

                  </div>

                </article>

              );
            })

          ) : (

            <div className="found-no-items">

              <div className="found-empty-icon">
                🔎
              </div>

              <h3>
                No Found Items
              </h3>

              <p>
                No item matches your search. Try another keyword.
              </p>

            </div>

          )}

        </section>


        {/* ================= BOTTOM MESSAGE ================= */}

        <section className="found-bottom-message">

          <div className="found-bottom-icon">
            ✓
          </div>


          <div className="found-bottom-content">

            <h3>
              Found something around campus?
            </h3>

            <p>
              Help someone recover their belongings by reporting
              the item you found.
            </p>

          </div>


          <Link
            to="/report-found"
            className="found-bottom-link"
          >
            Report Found →
          </Link>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="found-footer">


        {/* ================= BRAND ================= */}

        <div className="found-footer-brand">
          <BrandLogo small={true} />
        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="found-footer-section">

          <h4>
            Explore
          </h4>

          <Link to="/">
            Home
          </Link>

          <Link to="/lost">
            Lost Items
          </Link>

          <Link to="/found">
            Found Items
          </Link>

        </div>


        {/* ================= REPORT ================= */}

        <div className="found-footer-section">

          <h4>
            Report
          </h4>

          <Link to="/report-lost">
            Report Lost
          </Link>

          <Link to="/report-found">
            Report Found
          </Link>

          <Link to="/matches">
            Matches
          </Link>

        </div>


        {/* ================= ACCOUNT ================= */}

        <div className="found-footer-section">

          <h4>
            Account
          </h4>

          <Link to="/profile">
            My Profile
          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="found-footer-section">

          <h4>
            Contact
          </h4>

          <p>
            Campus Lost & Found
          </p>

          <p>
            Helping students reconnect.
          </p>

        </div>

      </footer>


      {/* ================= COPYRIGHT ================= */}

      <div className="found-copyright">

        <span>
          © 2026 FINDIT
        </span>

        <span>
          Made for the Campus Community
        </span>

      </div>

    </div>
  );
}

export default Found;