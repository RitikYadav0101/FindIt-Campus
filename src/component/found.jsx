import "./found.css";

import wirelessEarbuds from "./wireless-earbuds.png";
import blueWaterBottle from "./blue-water-bottle.png";
import blackNotebook from "./black-notebook.png";
import studentIdCard from "./student-id-card.png";

function found() {
  const foundItems = [
    {
      id: 1,
      category: "Electronics",
      title: "Wireless Earbuds",
      description:
        "Black wireless earbuds found near the library entrance. The case has a small scratch on the front.",
      location: "Central Library",
      date: "Today",
      image: wirelessEarbuds,
    },
    {
      id: 2,
      category: "Accessories",
      title: "Blue Water Bottle",
      description:
        "Blue stainless steel water bottle found near the basketball court. It has a silver cap.",
      location: "Sports Complex",
      date: "Yesterday",
      image: blueWaterBottle,
    },
    {
      id: 3,
      category: "Stationery",
      title: "Black Notebook",
      description:
        "Black notebook with handwritten notes found in one of the classrooms after the lecture.",
      location: "Academic Block",
      date: "2 days ago",
      image: blackNotebook,
    },
    {
      id: 4,
      category: "Personal Items",
      title: "Student ID Card",
      description:
        "Student identification card found near the cafeteria. Please verify the details before claiming.",
      location: "Campus Cafeteria",
      date: "3 days ago",
      image: studentIdCard,
    },
  ];

  return (
    <div className="found-page">

      {/* ================= HEADER ================= */}
      <header className="found-header">

        {/* LOGO - SAME AS ORIGINAL */}
        <div className="found-brand">

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

        </div>


        {/* NAVIGATION */}
        <nav className="found-nav-links">
          <a href="#">Home</a>
          <a href="#">Lost</a>
          <a href="#">Report Lost</a>
          <a href="#" className="active">
            Found
          </a>
          <a href="#">Report Found</a>
          <a href="#">Profile</a>
        </nav>


        {/* SIGN OUT */}
        <button className="found-signout-btn">
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


        {/* ================= SEARCH / ACTION BAR ================= */}
        <section className="found-toolbar">

          <div className="found-search-wrapper">

            <span className="found-search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Search found items..."
              aria-label="Search found items"
            />

          </div>


          <a href="#" className="found-report-btn">
            <span className="found-report-plus">
              +
            </span>

            Report Found
          </a>

        </section>


        {/* ================= RESULTS HEADER ================= */}
        <div className="found-results-header">

          <div >
            <h3>
              Recently Found
            </h3>

            <p>
              Items reported by members of the campus community
            </p>
          </div>


          <button className="found-filter-btn">
            <span>
              ☷
            </span>

            Filter
          </button>

        </div>


        {/* ================= FOUND ITEMS ================= */}
        <section className="found-items-grid">

          {foundItems.map((item) => (

            <article
              className="found-item-card"
              key={item.id}
            >

              {/* CARD TOP */}
              <div className="found-card-top">

                <span className="found-category">
                  {item.category}
                </span>

                <span className="found-date">
                  {item.date}
                </span>

              </div>


              {/* REAL ITEM IMAGE */}
              <div className="found-item-image">

                <img
                  src={item.image}
                  alt={item.title}
                  className="found-item-photo"
                />

              </div>


              {/* CARD CONTENT */}
              <div className="found-card-content">

                <h3>
                  {item.title}
                </h3>

                <p className="found-item-description">
                  {item.description}
                </p>


                {/* LOCATION */}
                <div className="found-location">

                  <span className="found-location-icon">
                    ◉
                  </span>

                  <span>
                    {item.location}
                  </span>

                </div>


                {/* VIEW BUTTON */}
                <a
                  href="#"
                  className="found-view-btn"
                >
                  View Item
                </a>

              </div>

            </article>

          ))}

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

          <a
            href="#"
            className="found-bottom-link"
          >
            Report Found →
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="found-footer">

        {/* FOOTER BRAND */}
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


        {/* SITE */}
        <div className="found-footer-section">

          <h4>
            Site
          </h4>

          <a href="#">
            Lost
          </a>

          <a href="#">
            Report Lost
          </a>

          <a href="#">
            Found
          </a>

          <a href="#">
            Report Found
          </a>

        </div>


        {/* HELP */}
        <div className="found-footer-section">

          <h4>
            Help
          </h4>

          <a href="#">
            Customer Support
          </a>

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Privacy Policy
          </a>

        </div>


        {/* LINKS */}
        <div className="found-footer-section">

          <h4>
            Links
          </h4>

          <a href="#">
            LinkedIn
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            YouTube
          </a>

          <a href="#">
            About Us
          </a>

        </div>


        {/* CONTACT */}
        <div className="found-footer-section">

          <h4>
            Contact
          </h4>

          <p>
            Tel: +91 7416520690
          </p>

          <p>
            Email: info@yourdomain.com
          </p>


          <div className="found-socials">

            <span>𝕏</span>
            <span>f</span>
            <span>◎</span>
            <span>◉</span>

          </div>

        </div>

      </footer>


      {/* COPYRIGHT */}
      <div className="found-copyright">
        © Copyright 2026 I FOUND. All Rights Reserved.
      </div>

    </div>
  );
}

export default found;