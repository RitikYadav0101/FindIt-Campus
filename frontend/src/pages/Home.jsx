import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <div className="home-page">

      {/* ================= HEADER ================= */}

      <header className="home-header">

        {/* LOGO */}

        <Link to="/" className="home-brand">

          <div className="home-logo-mark">
            <span className="logo-letter">F</span>
            <span className="logo-dot"></span>
          </div>

          <div className="home-brand-text">
            <h1>FINDIT</h1>
            <p>Campus Lost & Found</p>
          </div>

        </Link>


        {/* NAVIGATION */}

        <nav className="home-nav-links">

          <Link to="/" className="active">
            Home
          </Link>

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

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        {/* SIGN OUT */}

        <button
          className="home-signout-btn"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="home-main">


        {/* ================= LEFT HERO ================= */}

        <section className="home-hero-section">

          {/* BADGE */}

          <div className="home-badge">
            SMART CAMPUS LOST & FOUND
          </div>


          {/* HEADING */}

          <div className="home-hero-content">

            <h2>
              Smart Campus
              <br />

              <span>
                Lost & Found
              </span>

            </h2>


            <p className="home-description">
              Find what's lost.
              <br />
              Return what's found.
            </p>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="home-features">


            {/* FEATURE 1 */}

            <div className="home-feature">

              <div className="home-feature-icon home-secure-icon">
                ♢
              </div>

              <div className="home-feature-content">

                <h3>
                  Secure & Reliable
                </h3>

                <p>
                  Your information and reports
                  stay safe and protected.
                </p>

              </div>

            </div>


            {/* FEATURE 2 */}

            <div className="home-feature">

              <div className="home-feature-icon home-community-icon">
                ♧
              </div>

              <div className="home-feature-content">

                <h3>
                  Community Driven
                </h3>

                <p>
                  Helping students reconnect
                  with their belongings.
                </p>

              </div>

            </div>


            {/* FEATURE 3 */}

            <div className="home-feature">

              <div className="home-feature-icon home-quick-icon">
                ⚡
              </div>

              <div className="home-feature-content">

                <h3>
                  Quick & Easy
                </h3>

                <p>
                  Report, search and recover
                  items in minutes.
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* ================= RIGHT ACTION PANEL ================= */}

        <section className="home-action-panel">

          <h2>
            Find & Recover
          </h2>


          <p className="home-action-description">
            Helping the campus community reconnect
            with their lost belongings.
          </p>


          <div className="home-action-buttons">


            {/* LOST */}

            <Link
              to="/report-lost"
              className="home-action-card home-lost-card"
            >

              <div>

                <span className="home-small-text">
                  Looking for something?
                </span>

                <h3>
                  Lost
                </h3>

                <p>
                  Report your lost item
                </p>

              </div>


              <div className="home-action-icon">
                📦
              </div>

            </Link>



            {/* FOUND */}

            <Link
              to="/report-found"
              className="home-action-card home-found-card"
            >

              <div>

                <span className="home-small-text">
                  Found something?
                </span>

                <h3>
                  Found
                </h3>

                <p>
                  Help someone get it back
                </p>

              </div>


              <div className="home-action-icon">
                🔎
              </div>

            </Link>

          </div>



          {/* QUICK LINKS */}

          <div className="home-quick-links">

            <Link to="/lost">
              Browse Lost Items →
            </Link>

            <Link to="/found">
              Browse Found Items →
            </Link>

          </div>

        </section>

      </main>



      {/* ================= FOOTER ================= */}

      <footer className="home-footer">


        {/* BRAND */}

        <div className="home-footer-brand">

          <div className="home-footer-logo">
            <div className="home-logo-mark footer-logo-mark">
              <span className="logo-letter">F</span>
              <span className="logo-dot"></span>
            </div>

            <div className="home-brand-text">

              <h1>
                FINDIT
              </h1>

              <p>
                Campus Lost & Found
              </p>

            </div>
          </div>


          <p className="home-footer-description">
            A smart platform helping the campus
            community find, report and recover
            lost belongings easily.
          </p>

        </div>



        {/* SITE */}

        <div className="home-footer-section">

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

          <Link to="/profile">
            Profile
          </Link>

        </div>



        {/* REPORT */}

        <div className="home-footer-section">

          <h4>
            Report
          </h4>

          <Link to="/report-lost">
            Report Lost
          </Link>

          <Link to="/report-found">
            Report Found
          </Link>

          <Link to="/lost">
            Search Lost Items
          </Link>

          <Link to="/found">
            Search Found Items
          </Link>

        </div>



        {/* HELP */}

        <div className="home-footer-section">

          <h4>
            Help
          </h4>

          <a href="#">
            Support
          </a>

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Privacy Policy
          </a>

        </div>



        {/* CONTACT */}

        <div className="home-footer-section">

          <h4>
            Contact
          </h4>

          <p>
            Campus Lost & Found
          </p>

          <p>
            info@finditcampus.com
          </p>

          <div className="home-socials">

            <span>𝕏</span>

            <span>f</span>

            <span>in</span>

          </div>

        </div>

      </footer>



      {/* ================= COPYRIGHT ================= */}

      <div className="home-copyright">

        <span>
          © 2026 FINDIT
        </span>

        <span>
          Built for a smarter campus community.
        </span>

      </div>

    </div>
  );
}

export default Home;