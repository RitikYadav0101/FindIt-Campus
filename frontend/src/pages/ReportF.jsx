import "./ReportF.css";

function ReportF() {
  return (
    <div className="reportf-page">

      {/* ================= HEADER ================= */}
      <header className="reportf-header">

        {/* LOGO */}
        <div className="reportf-brand">

          <div className="reportf-brand-logo">

            <div className="reportf-box reportf-box-one"></div>
            <div className="reportf-box reportf-box-two"></div>
            <div className="reportf-box reportf-box-three"></div>

            <div className="reportf-lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>

          </div>

          <div className="reportf-brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </div>


        {/* NAVIGATION */}
        <nav className="reportf-nav-links">

          <a href="#">Home</a>

          <a href="#">Lost</a>

          <a href="#">Report Lost</a>

          <a href="#">Found</a>

          <a href="#" className="active">
            Report Found
          </a>

          <a href="#">Profile</a>

        </nav>


        {/* SIGN OUT */}
        <button className="reportf-signout-btn">
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}
      <main className="reportf-main">

        {/* PAGE TITLE */}
        <div className="reportf-heading">

          <span className="reportf-heading-line"></span>

          <h2>
            Report <span>Found</span> Item
          </h2>

          <p>
            Help someone reconnect with their lost belonging.
          </p>

        </div>


        {/* ================= FORM CARD ================= */}
        <section className="reportf-card">

          {/* CARD HEADER */}
          <div className="reportf-card-header">

            <div className="reportf-form-icon">
              +
            </div>

            <div>
              <h3>Found Item Details</h3>

              <p>
                Provide the details below so the owner can identify
                their item.
              </p>
            </div>

          </div>


          {/* FORM */}
          <form className="reportf-form">


            {/* NAME */}
            <div className="reportf-form-group">

              <label htmlFor="reportf-name">
                Name <span>*</span>
              </label>

              <input
                id="reportf-name"
                type="text"
                placeholder="Enter your name"
              />

            </div>


            {/* ITEM */}
            <div className="reportf-form-group">

              <label htmlFor="reportf-item">
                Item <span>*</span>
              </label>

              <select id="reportf-item" defaultValue="">
                <option value="" disabled>
                  Select item type
                </option>

                <option value="phone">
                  Mobile Phone
                </option>

                <option value="laptop">
                  Laptop
                </option>

                <option value="wallet">
                  Wallet
                </option>

                <option value="id">
                  ID / Card
                </option>

                <option value="bag">
                  Bag
                </option>

                <option value="book">
                  Book
                </option>

                <option value="keys">
                  Keys
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            {/* LOCATION */}
            <div className="reportf-form-group">

              <label htmlFor="reportf-location">
                Location <span>*</span>
              </label>

              <select id="reportf-location" defaultValue="">
                <option value="" disabled>
                  Where did you find it?
                </option>

                <option value="library">
                  Library
                </option>

                <option value="canteen">
                  Canteen
                </option>

                <option value="classroom">
                  Classroom
                </option>

                <option value="parking">
                  Parking Area
                </option>

                <option value="hostel">
                  Hostel
                </option>

                <option value="ground">
                  Sports Ground
                </option>

                <option value="other">
                  Other Campus Area
                </option>

              </select>

            </div>


            {/* DATE */}
            <div className="reportf-form-group">

              <label htmlFor="reportf-date">
                Date <span>*</span>
              </label>

              <input
                id="reportf-date"
                type="date"
              />

            </div>


            {/* DESCRIPTION */}
            <div className="reportf-form-group reportf-full-width">

              <label htmlFor="reportf-description">
                Item Description <span>*</span>
              </label>

              <textarea
                id="reportf-description"
                placeholder="Describe the item, its color, brand, distinguishing features, etc."
                rows="4"
              ></textarea>

              <div className="reportf-character-info">
                Please provide enough details to help identify the item.
              </div>

            </div>


            {/* PHOTO */}
            <div className="reportf-form-group reportf-full-width">

              <label htmlFor="reportf-photo">
                Upload Photo
              </label>

              <div className="reportf-upload-area">

                <input
                  id="reportf-photo"
                  type="file"
                  accept="image/*"
                />

                <div className="reportf-upload-content">

                  <div className="reportf-upload-icon">
                    ↑
                  </div>

                  <div>
                    <strong>Upload an image</strong>

                    <p>
                      PNG, JPG or JPEG • Max 5MB
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* BUTTONS */}
            <div className="reportf-form-actions">

              <button
                type="submit"
                className="reportf-submit-btn"
              >
                Submit Report
              </button>

              <button
                type="reset"
                className="reportf-reset-btn"
              >
                Reset
              </button>

            </div>

          </form>

        </section>


        {/* BOTTOM NOTE */}
        <div className="reportf-bottom-note">

          <span>✓</span>

          <p>
            Your report helps make our campus community safer and
            more connected.
          </p>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="reportf-footer">

        {/* BRAND */}
        <div className="reportf-footer-brand">

          <div className="reportf-brand-logo reportf-footer-logo">

            <div className="reportf-box reportf-box-one"></div>
            <div className="reportf-box reportf-box-two"></div>
            <div className="reportf-box reportf-box-three"></div>

            <div className="reportf-lost-box">
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
        <div className="reportf-footer-section">

          <h4>Site</h4>

          <a href="#">Lost</a>
          <a href="#">Report Lost</a>
          <a href="#">Found</a>
          <a href="#">Report Found</a>

        </div>


        {/* HELP */}
        <div className="reportf-footer-section">

          <h4>Help</h4>

          <a href="#">Customer Support</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>

        </div>


        {/* LINKS */}
        <div className="reportf-footer-section">

          <h4>Links</h4>

          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
          <a href="#">YouTube</a>
          <a href="#">About Us</a>

        </div>


        {/* CONTACT */}
        <div className="reportf-footer-section">

          <h4>Contact</h4>

          <p>Tel: +91 7416520690</p>
          <p>Email: info@yourdomain.com</p>

          <div className="reportf-socials">
            <span>𝕏</span>
            <span>f</span>
            <span>◎</span>
            <span>◉</span>
          </div>

        </div>

      </footer>


      {/* COPYRIGHT */}
      <div className="reportf-copyright">
        © Copyright 2026 I FOUND. All Rights Reserved.
      </div>

    </div>
  );
}

export default ReportF;