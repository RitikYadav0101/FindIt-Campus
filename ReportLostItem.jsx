import React, { useState } from "react";
import "./App.css";

function LostItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    dateLost: "",
    location: "",
    description: "",
    features: "",
    contact: "",
  });

  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    console.log("Lost Item:", formData);
    console.log("Image:", image);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="lost-page">

      {/* Decorative background */}
      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      {/* HEADER */}
      <header className="header">

        <div className="brand">

          <div className="brand-logo">
            <div className="box box-one"></div>
            <div className="box box-two"></div>
            <div className="box box-three"></div>

            <div className="lost-box">
              Lost
              <br />
              & Found
            </div>
          </div>

          <div className="brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </div>

        <button className="back-button">
          ← Back
        </button>

      </header>

      {/* MAIN CONTENT */}
      <main className="main-container">

        {/* LEFT SECTION */}
        <section className="intro-section">

          <div className="search-icon-container">
            <div className="search-icon"></div>
          </div>

          <div className="intro-content">

            <div className="small-label">
              LOST SOMETHING?
            </div>

            <h2>
              List Your
              <br />
              <span>Lost Item</span>
            </h2>

            <p>
              Tell us about the item you lost and help the
              campus community get it back to you.
            </p>

          </div>

          <div className="dashed-path">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="tips">

            <div className="tip">
              <div className="tip-icon">✓</div>
              <div>
                <h3>Be Specific</h3>
                <p>
                  Add details that make your item easy to identify.
                </p>
              </div>
            </div>

            <div className="tip">
              <div className="tip-icon cyan">⌖</div>
              <div>
                <h3>Add Location</h3>
                <p>
                  Mention where you last remember having it.
                </p>
              </div>
            </div>

            <div className="tip">
              <div className="tip-icon amber">⚡</div>
              <div>
                <h3>Act Quickly</h3>
                <p>
                  The sooner you report it, the better.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* FORM SECTION */}
        <section className="form-section">

          <div className="form-card">

            <div className="form-heading">
              <h2>Report Lost Item</h2>
              <p>
                Provide the details below to create your listing.
              </p>
            </div>

            {submitted && (
              <div className="success-message">
                ✓ Lost item listed successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>

              {/* ITEM NAME */}
              <div className="input-group">
                <label htmlFor="itemName">
                  Item Name
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">▣</span>

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
              <div className="input-group">
                <label htmlFor="category">
                  Category
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">◇</span>

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
                    <option value="electronics">
                      Electronics
                    </option>
                    <option value="wallet">
                      Wallet / Money
                    </option>
                    <option value="id">
                      ID / Documents
                    </option>
                    <option value="keys">
                      Keys
                    </option>
                    <option value="clothing">
                      Clothing
                    </option>
                    <option value="books">
                      Books / Stationery
                    </option>
                    <option value="accessories">
                      Accessories
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>
              </div>

              {/* DATE + LOCATION */}
              <div className="two-column">

                <div className="input-group">
                  <label htmlFor="dateLost">
                    Date Lost
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">◷</span>

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

                <div className="input-group">
                  <label htmlFor="location">
                    Location Lost
                  </label>

                  <div className="input-wrapper">
                    <span className="input-icon">⌖</span>

                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="e.g. Library"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

              </div>

              {/* DESCRIPTION */}
              <div className="input-group">
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
                ></textarea>
              </div>

              {/* FEATURES */}
              <div className="input-group">
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
                ></textarea>
              </div>

              {/* CONTACT */}
              <div className="input-group">
                <label htmlFor="contact">
                  Contact Information
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">♙</span>

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
              <div className="input-group">
                <label htmlFor="image">
                  Item Image <span>(Optional)</span>
                </label>

                <label className="upload-box">

                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="upload-icon">
                    ↑
                  </div>

                  <div>
                    <strong>
                      {image
                        ? image.name
                        : "Upload an image"}
                    </strong>

                    <p>
                      PNG, JPG or JPEG
                    </p>
                  </div>

                </label>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="submit-button"
              >
                <span>List Lost Item</span>
                <span>→</span>
              </button>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default LostItem;