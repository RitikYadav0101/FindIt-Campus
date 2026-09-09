import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Lost.css";

function Lost() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [lostItems, setLostItems] = useState([]);

  // ================= LOAD LOST ITEMS =================

  useEffect(() => {
    const savedItems =
      JSON.parse(localStorage.getItem("lostItems")) || [];

    setLostItems(savedItems);
  }, []);

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  // ================= SEARCH =================

  const filteredItems = lostItems.filter((item) => {
    const itemName =
      item.itemName || item.title || item.item || "";

    const category =
      item.category || "";

    const location =
      item.location || "";

    const search = searchTerm.toLowerCase();

    return (
      itemName.toLowerCase().includes(search) ||
      category.toLowerCase().includes(search) ||
      location.toLowerCase().includes(search)
    );
  });

  return (
    <div className="lost-page">

      {/* ================= HEADER ================= */}

      <header className="lost-header">

        <Link to="/" className="lost-brand">

          <div className="lost-brand-logo">

            <div className="lost-box lost-box-one"></div>
            <div className="lost-box lost-box-two"></div>
            <div className="lost-box lost-box-three"></div>

            <div className="lost-logo-text">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div className="lost-brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </Link>


        {/* ================= NAVIGATION ================= */}

        <nav className="lost-nav-links">

          <Link to="/">Home</Link>

          <Link to="/lost" className="active">
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

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        <button
          className="lost-signout-btn"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="lost-main">

        {/* HEADING */}

        <section className="lost-page-heading">

          <div className="lost-heading-content">

            <span className="lost-eyebrow">
              CAMPUS COMMUNITY
            </span>

            <h2>
              Lost <span>Items</span>
            </h2>

            <p>
              Browse items reported as lost by students and help reunite
              them with their owners.
            </p>

          </div>

        </section>


        {/* ================= SEARCH ================= */}

        <section className="lost-toolbar">

          <div className="lost-search-wrapper">

            <span className="lost-search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search lost items..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>


          <Link
            to="/report-lost"
            className="lost-report-btn"
          >
            <span className="lost-report-plus">
              +
            </span>

            Report Lost

          </Link>

        </section>


        {/* ================= RESULTS HEADER ================= */}

        <div className="lost-results-header">

          <div>

            <h3>
              Recently Lost
            </h3>

            <p>
              {filteredItems.length} item(s) found
            </p>

          </div>

        </div>


        {/* ================= ITEMS ================= */}

        <section className="lost-items-grid">

          {filteredItems.length > 0 ? (

            filteredItems.map((item) => {

              const itemName =
                item.itemName || item.title || item.item;

              const date =
                item.dateLost || item.date;

              const image =
                item.image || item.photo;

              return (

                <article
                  className="lost-item-card"
                  key={item.id}
                >

                  {/* CARD TOP */}

                  <div className="lost-card-top">

                    <span className="lost-category">
                      {item.category || "Other"}
                    </span>

                    <span className="lost-date">
                      {date || "Date not available"}
                    </span>

                  </div>


                  {/* IMAGE */}

                  <div className="lost-item-image">

                    {image ? (

                      <img
                        src={image}
                        alt={itemName}
                        className="lost-uploaded-image"
                      />

                    ) : (

                      <div className="lost-no-image">
                        📦
                      </div>

                    )}

                  </div>


                  {/* CONTENT */}

                  <div className="lost-card-content">

                    <h3>
                      {itemName}
                    </h3>

                    <p className="lost-item-description">
                      {item.description ||
                        "No description available."}
                    </p>


                    <div className="lost-location">

                      <span className="lost-location-icon">
                        📍
                      </span>

                      <span>
                        {item.location ||
                          "Location not available"}
                      </span>

                    </div>


                    <button
                      className="lost-view-btn"
                      onClick={() =>
                        alert(
                          `Item: ${itemName}\n\n` +
                          `Description: ${
                            item.description ||
                            "Not provided"
                          }\n\n` +
                          `Features: ${
                            item.features ||
                            "Not provided"
                          }\n\n` +
                          `Contact: ${
                            item.contact ||
                            "Not provided"
                          }`
                        )
                      }
                    >
                      View Item
                    </button>

                  </div>

                </article>

              );
            })

          ) : (

            <div className="lost-no-items">

              <h3>No Lost Items Found</h3>

              <p>
                No item matches your search.
              </p>

            </div>

          )}

        </section>


        {/* ================= BOTTOM ================= */}

        <section className="lost-bottom-message">

          <div className="lost-bottom-icon">
            ?
          </div>

          <div>

            <h3>
              Can't find your lost item?
            </h3>

            <p>
              Report your lost item with detailed information so the campus
              community can help you find it.
            </p>

          </div>


          <Link
            to="/report-lost"
            className="lost-bottom-link"
          >
            Report Lost →
          </Link>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="lost-footer">

        <div className="lost-footer-brand">

          <div className="lost-brand-logo lost-footer-logo">

            <div className="lost-box lost-box-one"></div>
            <div className="lost-box lost-box-two"></div>
            <div className="lost-box lost-box-three"></div>

            <div className="lost-logo-text">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div>

            <h3>I FOUND</h3>

            <p>
              Discover. Connect. Reclaim.
            </p>

          </div>

        </div>

      </footer>


      <div className="lost-copyright">
        © Copyright 2026 I FOUND. All Rights Reserved.
      </div>

    </div>
  );
}

export default Lost;