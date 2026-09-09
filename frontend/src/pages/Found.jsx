import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    return (
      item.item
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      item.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      item.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="found-page">

      {/* ================= HEADER ================= */}

      <header className="found-header">

        <Link to="/" className="found-brand">

          <div className="found-brand-logo">

            <div className="found-box found-box-one"></div>
            <div className="found-box found-box-two"></div>
            <div className="found-box found-box-three"></div>

            <div className="found-lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div className="found-brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

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

          {/* ================= MATCHES ================= */}

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

          <div className="found-heading-content">

            <span className="found-eyebrow">
              CAMPUS COMMUNITY
            </span>

            <h2>
              Found <span>Items</span>
            </h2>

            <p>
              Browse items that have been found around campus and help reconnect
              them with their owners.
            </p>

          </div>

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
              onChange={(e) => setSearchTerm(e.target.value)}
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
              Items reported by members of the campus community
            </p>

          </div>

          <button className="found-filter-btn">
            ☷ Filter
          </button>

        </div>


        {/* ================= FOUND ITEMS ================= */}

        <section className="found-items-grid">

          {filteredItems.length > 0 ? (

            filteredItems.map((item) => (

              <article
                className="found-item-card"
                key={item.id}
              >

                <div className="found-card-top">

                  <span className="found-category">
                    {item.item}
                  </span>

                  <span className="found-date">
                    {item.date}
                  </span>

                </div>


                {/* ================= IMAGE ================= */}

                <div className="found-item-image">

                  {item.photo ? (

                    <img
                      src={item.photo}
                      alt={item.item}
                      className="found-uploaded-image"
                    />

                  ) : (

                    <div className="found-no-image">
                      📦
                    </div>

                  )}

                </div>


                {/* ================= CARD CONTENT ================= */}

                <div className="found-card-content">

                  <h3>
                    {item.item}
                  </h3>

                  <p className="found-item-description">
                    {item.description}
                  </p>


                  {/* LOCATION */}

                  <div className="found-location">

                    <span className="found-location-icon">
                      📍
                    </span>

                    <span>
                      {item.location}
                    </span>

                  </div>


                  {/* VIEW BUTTON */}

                  <button
                    className="found-view-btn"
                    onClick={() =>
                      alert(
                        `Item: ${item.item}\n\nFound at: ${item.location}\n\nDescription: ${item.description}\n\nReported by: ${item.name}`
                      )
                    }
                  >
                    View Item
                  </button>

                </div>

              </article>

            ))

          ) : (

            <div className="found-no-items">

              <h3>
                No Found Items
              </h3>

              <p>
                No item matches your search.
              </p>

            </div>

          )}

        </section>


        {/* ================= BOTTOM MESSAGE ================= */}

        <section className="found-bottom-message">

          <div className="found-bottom-icon">
            ✓
          </div>

          <div>

            <h3>
              Can't find what you're looking for?
            </h3>

            <p>
              Try searching with a different keyword or report an item you've
              found yourself.
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

        <div className="found-footer-brand">

          <div className="found-brand-logo found-footer-logo">

            <div className="found-box found-box-one"></div>
            <div className="found-box found-box-two"></div>
            <div className="found-box found-box-three"></div>

            <div className="found-lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div>

            <h3>
              I FOUND
            </h3>

            <p>
              Discover. Connect. Reclaim.
            </p>

          </div>

        </div>

      </footer>


      {/* ================= COPYRIGHT ================= */}

      <div className="found-copyright">
        © Copyright 2026 I FOUND. All Rights Reserved.
      </div>

    </div>
  );
}

export default Found;