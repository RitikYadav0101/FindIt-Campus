import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { findMatches } from "../utils/matchItems";

import "./Matches.css";

function Matches() {
  const navigate = useNavigate();

  const [matches, setMatches] = useState([]);

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

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <div className="matches-page">

      {/* ================= HEADER ================= */}

      <header className="matches-navbar">

        <Link to="/" className="matches-brand">

          <div className="matches-brand-logo">

            <div className="matches-box matches-box-one"></div>
            <div className="matches-box matches-box-two"></div>
            <div className="matches-box matches-box-three"></div>

            <div className="matches-logo-text">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div className="matches-brand-name">
            <h2>I FOUND</h2>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </Link>


        {/* NAVIGATION */}

        <nav className="matches-nav-links">

          <Link to="/">Home</Link>

          <Link to="/lost">
            Lost
          </Link>

          <Link to="/report-lost">
            Report Lost
          </Link>

          <Link to="/found">
            Found
          </Link>

          <Link to="/report-found">
            Report Found
          </Link>

          <Link
            to="/matches"
            className="active"
          >
            Matches
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        <button
          className="matches-signout-btn"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="matches-main">


        {/* ================= HERO ================= */}

        <section className="matches-hero">

          <div className="matches-hero-badge">
            🔍 SMART MATCHING SYSTEM
          </div>

          <h1>
            Possible <span>Matches</span>
          </h1>

          <p>
            Our system compares reported lost and found items
            to identify possible connections.
          </p>


          <div className="matches-stats">

            <div className="matches-stat">
              <strong>{matches.length}</strong>
              <span>Possible Matches</span>
            </div>

            <div className="matches-stat">
              <strong>🔒</strong>
              <span>Privacy Protected</span>
            </div>

            <div className="matches-stat">
              <strong>⚡</strong>
              <span>Smart Comparison</span>
            </div>

          </div>

        </section>


        {/* ================= MATCHES ================= */}

        {matches.length > 0 ? (

          <section className="matches-container">

            {matches.map((match, index) => (

              <article
                className="premium-match-card"
                key={index}
              >


                {/* CARD HEADER */}

                <div className="match-card-header">

                  <div>

                    <span className="match-number">
                      MATCH #{index + 1}
                    </span>

                    <h2>
                      Possible Item Connection
                    </h2>

                  </div>


                  <div className="match-confidence">

                    <span>Match Confidence</span>

                    <strong>
                      {match.score}%
                    </strong>

                  </div>

                </div>


                {/* MATCH CONTENT */}

                <div className="match-comparison">


                  {/* LOST */}

                  <div className="premium-item-card lost-item-card">

                    <div className="item-status lost-status">
                      🔴 LOST ITEM
                    </div>


                    <div className="premium-image-box">

                      {match.lostItem.image ? (

                        <img
                          src={match.lostItem.image}
                          alt={match.lostItem.itemName}
                        />

                      ) : (

                        <div className="no-image-placeholder">
                          📦
                        </div>

                      )}

                    </div>


                    <div className="premium-item-content">

                      <h3>
                        {match.lostItem.itemName}
                      </h3>

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


                  {/* MATCH CENTER */}

                  <div className="match-center">

                    <div className="match-line"></div>


                    <div className="match-circle">

                      <div className="match-circle-inner">

                        <strong>
                          {match.score}%
                        </strong>

                        <span>
                          MATCH
                        </span>

                      </div>

                    </div>


                    <div className="match-label">
                      POSSIBLE MATCH
                    </div>

                    <div className="match-line"></div>

                  </div>


                  {/* FOUND */}

                  <div className="premium-item-card found-item-card">

                    <div className="item-status found-status">
                      🟢 FOUND ITEM
                    </div>


                    <div className="premium-image-box">

                      {match.foundItem.photo ? (

                        <img
                          src={match.foundItem.photo}
                          alt={match.foundItem.item}
                        />

                      ) : (

                        <div className="no-image-placeholder">
                          📦
                        </div>

                      )}

                    </div>


                    <div className="premium-item-content">

                      <h3>
                        {match.foundItem.item}
                      </h3>

                      <p className="item-description">
                        {match.foundItem.description}
                      </p>


                      <div className="item-details">

                        <div className="detail-chip">
                          📍 {match.foundItem.location}
                        </div>

                        <div className="detail-chip">
                          📅 {match.foundItem.date}
                        </div>

                      </div>

                    </div>

                  </div>


                </div>


                {/* PRIVACY FOOTER */}

                <div className="match-privacy">

                  🔒 Contact information is hidden to protect user privacy.
                  Verify the item details before confirming ownership.

                </div>

              </article>

            ))}

          </section>

        ) : (

          /* ================= EMPTY STATE ================= */

          <section className="premium-no-matches">

            <div className="empty-icon">
              🔍
            </div>

            <h2>
              No Possible Matches Yet
            </h2>

            <p>
              Don't worry! As more lost and found items are
              reported, our matching system will automatically
              compare them.
            </p>


            <div className="empty-actions">

              <Link
                to="/lost"
                className="empty-lost-btn"
              >
                View Lost Items
              </Link>

              <Link
                to="/found"
                className="empty-found-btn"
              >
                View Found Items
              </Link>

            </div>

          </section>

        )}

      </main>

    </div>
  );
}

export default Matches;