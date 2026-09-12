import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "./components/BrandLogo";

import "./ReportFound.css";

function ReportFound() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    dateFound: "",
    location: "",
    description: "",
    features: "",
    contact: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ================= HANDLE IMAGE =================

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

  // ================= SUBMIT =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingItems =
      JSON.parse(localStorage.getItem("foundItems")) || [];

    const newItem = {
      id: Date.now(),

      itemName: formData.itemName,
      category: formData.category,
      dateFound: formData.dateFound,
      location: formData.location,
      description: formData.description,
      features: formData.features,
      contact: formData.contact,
      image: formData.image,

      status: "Found",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "foundItems",
      JSON.stringify([newItem, ...existingItems])
    );

    setSubmitted(true);

    setFormData({
      itemName: "",
      category: "",
      dateFound: "",
      location: "",
      description: "",
      features: "",
      contact: "",
      image: "",
    });

    setTimeout(() => {
      navigate("/found");
    }, 1500);
  };

  return (
    <div className="reportfound-page">

      {/* ================= BACKGROUND ================= */}

      <div className="reportfound-circle reportfound-circle-one"></div>
      <div className="reportfound-circle reportfound-circle-two"></div>


      {/* ================= HEADER ================= */}

      <header className="reportfound-header">

        {/* CONSISTENT BRAND LOGO */}

        <Link to="/" className="reportfound-brand">
          <BrandLogo small={true} />
        </Link>


        {/* BACK BUTTON */}

        <button
          className="reportfound-back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="reportfound-main">


        {/* ================= LEFT SECTION ================= */}

        <section className="reportfound-intro-section">

          <div className="reportfound-search-icon-container">
            ✨
          </div>


          <div className="reportfound-intro-content">

            <div className="reportfound-small-label">
              FOUND SOMETHING?
            </div>


            <h2>
              Help Return
              <br />

              <span>Found Items</span>
            </h2>


            <p>
              Report the item you found and help someone in the
              campus community get their belongings back.
            </p>

          </div>


          {/* ================= TIPS ================= */}

          <div className="reportfound-tips">


            <div className="reportfound-tip">

              <div className="reportfound-tip-icon">
                ✓
              </div>

              <div>

                <h3>
                  Be Specific
                </h3>

                <p>
                  Add clear details to help identify the owner.
                </p>

              </div>

            </div>


            <div className="reportfound-tip">

              <div className="reportfound-tip-icon reportfound-cyan">
                📍
              </div>

              <div>

                <h3>
                  Add Location
                </h3>

                <p>
                  Tell us exactly where you found the item.
                </p>

              </div>

            </div>


            <div className="reportfound-tip">

              <div className="reportfound-tip-icon reportfound-amber">
                🤝
              </div>

              <div>

                <h3>
                  Help Someone
                </h3>

                <p>
                  Your report could help reunite someone with their item.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FORM ================= */}

        <section className="reportfound-form-section">

          <div className="reportfound-form-card">


            {/* FORM HEADING */}

            <div className="reportfound-form-heading">

              <h2>
                Report Found Item
              </h2>

              <p>
                Provide the details below to create a found listing.
              </p>

            </div>


            {/* SUCCESS MESSAGE */}

            {submitted && (

              <div className="reportfound-success-message">
                ✓ Found item listed successfully!
              </div>

            )}


            <form
              className="reportfound-form"
              onSubmit={handleSubmit}
            >


              {/* ================= ITEM NAME ================= */}

              <div className="reportfound-input-group">

                <label htmlFor="itemName">
                  Item Name
                </label>


                <div className="reportfound-input-wrapper">

                  <span className="reportfound-input-icon">
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


              {/* ================= CATEGORY ================= */}

              <div className="reportfound-input-group">

                <label htmlFor="category">
                  Category
                </label>


                <div className="reportfound-input-wrapper">

                  <span className="reportfound-input-icon">
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


              {/* ================= DATE + LOCATION ================= */}

              <div className="reportfound-two-column">


                <div className="reportfound-input-group">

                  <label htmlFor="dateFound">
                    Date Found
                  </label>


                  <div className="reportfound-input-wrapper">

                    <span className="reportfound-input-icon">
                      📅
                    </span>

                    <input
                      type="date"
                      id="dateFound"
                      name="dateFound"
                      value={formData.dateFound}
                      onChange={handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="reportfound-input-group">

                  <label htmlFor="location">
                    Location Found
                  </label>


                  <div className="reportfound-input-wrapper">

                    <span className="reportfound-input-icon">
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


              {/* ================= DESCRIPTION ================= */}

              <div className="reportfound-input-group">

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


              {/* ================= FEATURES ================= */}

              <div className="reportfound-input-group">

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


              {/* ================= CONTACT ================= */}

              <div className="reportfound-input-group">

                <label htmlFor="contact">
                  Contact Information
                </label>


                <div className="reportfound-input-wrapper">

                  <span className="reportfound-input-icon">
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


              {/* ================= IMAGE ================= */}

              <div className="reportfound-input-group">

                <label htmlFor="image">
                  Item Image <span>(Optional)</span>
                </label>


                <label
                  htmlFor="image"
                  className="reportfound-upload-box"
                >

                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="reportfound-upload-icon">
                    ↑
                  </div>


                  <div>

                    <strong>
                      {formData.image
                        ? "Image selected ✓"
                        : "Upload an image"}
                    </strong>

                    <p>
                      PNG, JPG or JPEG
                    </p>

                  </div>

                </label>


                {formData.image && (

                  <img
                    className="reportfound-preview"
                    src={formData.image}
                    alt="Preview"
                  />

                )}

              </div>


              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="reportfound-submit-button"
              >

                <span>
                  List Found Item
                </span>

                <span>
                  →
                </span>

              </button>

            </form>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ReportFound;