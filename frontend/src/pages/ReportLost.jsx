import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "./components/BrandLogo";
import "./ReportLost.css";

function ReportLost() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    dateLost: "",
    location: "",
    description: "",
    features: "",
    contact: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingItems =
      JSON.parse(localStorage.getItem("lostItems")) || [];

    const newItem = {
      id: Date.now(),

      itemName: formData.itemName,
      category: formData.category,
      dateLost: formData.dateLost,
      location: formData.location,
      description: formData.description,
      features: formData.features,
      contact: formData.contact,
      image: formData.image,

      status: "Lost",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "lostItems",
      JSON.stringify([newItem, ...existingItems])
    );

    setSubmitted(true);

    setFormData({
      itemName: "",
      category: "",
      dateLost: "",
      location: "",
      description: "",
      features: "",
      contact: "",
      image: "",
    });

    setTimeout(() => {
      navigate("/lost");
    }, 1200);
  };

  return (
    <div className="reportlost-page">

      {/* ================= HEADER ================= */}

      <header className="reportlost-header">

        {/* CONSISTENT BRAND LOGO */}
        <Link to="/" className="reportlost-brand">
          <BrandLogo small />
        </Link>


        {/* NAVIGATION */}

        <nav className="reportlost-nav-links">

          <Link to="/">Home</Link>

          <Link to="/lost">Lost</Link>

          <Link to="/report-lost" className="active">
            Report Lost
          </Link>

          <Link to="/found">Found</Link>

          <Link to="/report-found">
            Report Found
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        {/* BACK BUTTON */}

        <button
          className="reportlost-back-button"
          onClick={() => navigate("/lost")}
        >
          ← Back
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="reportlost-main">


        {/* ================= LEFT SIDE ================= */}

        <section className="reportlost-intro-section">

          <div className="reportlost-search-icon-container">
            🔍
          </div>

          <span className="reportlost-small-label">
            LOST SOMETHING?
          </span>

          <h2>
            List Your
            <br />
            <span>Lost Item</span>
          </h2>

          <p className="reportlost-intro-description">
            Tell us about the item you lost and help the campus
            community get it back to you.
          </p>


          {/* TIPS */}

          <div className="reportlost-tips">

            <div className="reportlost-tip">

              <div className="reportlost-tip-icon">
                ✓
              </div>

              <div>
                <h3>Be Specific</h3>

                <p>
                  Add details that make your item easy to identify.
                </p>
              </div>

            </div>


            <div className="reportlost-tip">

              <div className="reportlost-tip-icon">
                📍
              </div>

              <div>
                <h3>Add Location</h3>

                <p>
                  Mention where you last remember having it.
                </p>
              </div>

            </div>


            <div className="reportlost-tip">

              <div className="reportlost-tip-icon">
                ⚡
              </div>

              <div>
                <h3>Act Quickly</h3>

                <p>
                  The sooner you report it, the better.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FORM ================= */}

        <section className="reportlost-form-section">

          <div className="reportlost-form-card">

            <div className="reportlost-form-heading">

              <h2>Report Lost Item</h2>

              <p>
                Provide the details below to create your listing.
              </p>

            </div>


            {submitted && (
              <div className="reportlost-success-message">
                ✓ Lost item listed successfully!
              </div>
            )}


            <form
              className="reportlost-form"
              onSubmit={handleSubmit}
            >

              {/* ITEM NAME */}

              <div className="reportlost-input-group">

                <label htmlFor="itemName">
                  Item Name
                </label>

                <div className="reportlost-input-wrapper">

                  <span className="reportlost-input-icon">
                    📦
                  </span>

                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder="e.g. Black Wallet"
                    value={formData.itemName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* CATEGORY */}

              <div className="reportlost-input-group">

                <label htmlFor="category">
                  Category
                </label>

                <div className="reportlost-input-wrapper">

                  <span className="reportlost-input-icon">
                    🏷️
                  </span>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select a category
                    </option>

                    <option value="Electronics">
                      Electronics
                    </option>

                    <option value="Wallet / Money">
                      Wallet / Money
                    </option>

                    <option value="ID / Documents">
                      ID / Documents
                    </option>

                    <option value="Keys">
                      Keys
                    </option>

                    <option value="Clothing">
                      Clothing
                    </option>

                    <option value="Books / Stationery">
                      Books / Stationery
                    </option>

                    <option value="Accessories">
                      Accessories
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>


              {/* DATE + LOCATION */}

              <div className="reportlost-two-column">

                <div className="reportlost-input-group">

                  <label htmlFor="dateLost">
                    Date Lost
                  </label>

                  <div className="reportlost-input-wrapper">

                    <span className="reportlost-input-icon">
                      📅
                    </span>

                    <input
                      type="date"
                      id="dateLost"
                      name="dateLost"
                      value={formData.dateLost}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="reportlost-input-group">

                  <label htmlFor="location">
                    Location Lost
                  </label>

                  <div className="reportlost-input-wrapper">

                    <span className="reportlost-input-icon">
                      📍
                    </span>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g. Central Library"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>

              </div>


              {/* DESCRIPTION */}

              <div className="reportlost-input-group">

                <label htmlFor="description">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the item..."
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                />

              </div>


              {/* FEATURES */}

              <div className="reportlost-input-group">

                <label htmlFor="features">
                  Distinguishing Features
                </label>

                <textarea
                  id="features"
                  name="features"
                  placeholder="Color, brand, stickers, scratches, etc."
                  value={formData.features}
                  onChange={handleChange}
                  rows="2"
                />

              </div>


              {/* CONTACT */}

              <div className="reportlost-input-group">

                <label htmlFor="contact">
                  Contact Information
                </label>

                <div className="reportlost-input-wrapper">

                  <span className="reportlost-input-icon">
                    📞
                  </span>

                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Email or phone number"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              {/* IMAGE */}

              <div className="reportlost-input-group">

                <label>
                  Item Image <span>(Optional)</span>
                </label>

                <label
                  htmlFor="image"
                  className="reportlost-upload-box"
                >

                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="reportlost-upload-icon">
                    ↑
                  </div>

                  <div>

                    <strong>
                      {formData.image
                        ? "Image selected ✓"
                        : "Upload an image"}
                    </strong>

                    <p>PNG, JPG or JPEG</p>

                  </div>

                </label>


                {formData.image && (

                  <img
                    className="reportlost-preview"
                    src={formData.image}
                    alt="Preview"
                  />

                )}

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="reportlost-submit-button"
              >
                List Lost Item →
              </button>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ReportLost;