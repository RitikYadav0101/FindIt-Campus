import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HEADER ================= */}
      <header className="home-header">

        {/* LOGO */}
        <div className="home-brand">

          <div className="home-brand-logo">
            <div className="home-box home-box-one"></div>
            <div className="home-box home-box-two"></div>
            <div className="home-box home-box-three"></div>

            <div className="home-lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>
          </div>

          <div className="home-brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </div>


        {/* NAVIGATION */}
        <nav className="home-nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Lost</a>
          <a href="#">Report Lost</a>
          <a href="#">Found</a>
          <a href="#">Report Found</a>
          <a href="#">Profile</a>
        </nav>


        {/* SIGN OUT */}
        <button className="home-signout-btn">
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}
      <main className="home-main">

        {/* ================= LEFT HERO ================= */}
        <section className="home-hero-section">

          <div className="home-hero-content">

            <h2>
              Smart Campus
              <br />

              <span>Lost & Found</span>
            </h2>

            <p className="home-description">
              Find what's lost.
              <br />
              Return what's found.
            </p>

          </div>


          {/* FEATURES */}
          <div className="home-features">

            <div className="home-feature">

              <div className="home-feature-icon home-secure-icon">
                ♢
              </div>

              <div>
                <h3>Secure & Reliable</h3>
                <p>Your data is safe with us.</p>
              </div>

            </div>


            <div className="home-feature">

              <div className="home-feature-icon home-community-icon">
                ♧
              </div>

              <div>
                <h3>Community Driven</h3>
                <p>Helping each other, every day.</p>
              </div>

            </div>


            <div className="home-feature">

              <div className="home-feature-icon home-quick-icon">
                ⚡
              </div>

              <div>
                <h3>Quick & Easy</h3>
                <p>Report, Search & Reclaim in minutes.</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= RIGHT ACTION PANEL ================= */}
        <section className="home-action-panel">

          <h2>Find & Recover</h2>

          <p className="home-action-description">
            Helping the campus community reconnect
            with their lost belongings.
          </p>


          <div className="home-action-buttons">

            {/* LOST */}
            <a href="#" className="home-action-card home-lost-card">

              <div>
                <span className="home-small-text">
                  Looking for something?
                </span>

                <h3>Lost</h3>

                <p>Report your lost item</p>
              </div>

              <div className="home-action-icon">
                📦
              </div>

            </a>


            {/* FOUND */}
            <a href="#" className="home-action-card home-found-card">

              <div>
                <span className="home-small-text">
                  Found something?
                </span>

                <h3>Found</h3>

                <p>Help someone get it back</p>
              </div>

              <div className="home-action-icon">
                🔎
              </div>

            </a>

          </div>


          <div className="home-quick-links">

            <a href="#">
              Browse Lost Items →
            </a>

            <a href="#">
              Browse Found Items →
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        {/* BRAND */}
        <div className="home-footer-brand">

          <div className="home-brand-logo home-footer-logo">

            <div className="home-box home-box-one"></div>
            <div className="home-box home-box-two"></div>
            <div className="home-box home-box-three"></div>

            <div className="home-lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div>
            <h3>I FOUND</h3>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </div>


        {/* SITE */}
        <div className="home-footer-section">

          <h4>Site</h4>

          <a href="#">Lost</a>
          <a href="#">Report Lost</a>
          <a href="#">Found</a>
          <a href="#">Report Found</a>

        </div>


        {/* HELP */}
        <div className="home-footer-section">

          <h4>Help</h4>

          <a href="#">Customer Support</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>

        </div>


        {/* LINKS */}
        <div className="home-footer-section">

          <h4>Links</h4>

          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">About Us</a>

        </div>


        {/* CONTACT */}
        <div className="home-footer-section">

          <h4>Contact</h4>

          <p>Tel: +91 7416520690</p>
          <p>Email: info@yourdomain.com</p>

          <div className="home-socials">
            <span>𝕏</span>
            <span>f</span>
            <span>◎</span>
            <span>◉</span>
          </div>

        </div>

      </footer>


      {/* COPYRIGHT */}
      <div className="home-copyright">
        © Copyright 2026 I FOUND. All Rights Reserved.
      </div>

    </div>
  );
}

export default Home;