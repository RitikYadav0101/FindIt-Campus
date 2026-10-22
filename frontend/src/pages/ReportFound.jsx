import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import { useLanguage } from "../context/LanguageContext";
import "./ReportFound.css";

function ReportFound() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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

    const today = new Date().toISOString().split("T")[0];

    if (formData.dateFound > today) {
      alert(t("reportFound.alertFutureDate", "Date found cannot be in the future."));
      return;
    }

    if (!formData.contact.trim()) {
      alert(t("reportFound.alertContactRequired", "Please enter your contact information."));
      return;
    }

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
          {t("nav.back", "← Back")}
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="reportfound-main">
        {/* ================= LEFT SECTION ================= */}

        <section className="reportfound-intro-section">
          <div className="reportfound-search-icon-container">✨</div>

          <div className="reportfound-intro-content">
            <div className="reportfound-small-label">
              {t("reportFound.eyebrow", "FOUND SOMETHING?")}
            </div>

            <h2>
              {t("reportFound.heroTitle1", "Report a")}
              <br />
              <span>{t("reportFound.heroTitle2", "Found Item")}</span>
            </h2>

            <p>
              {t(
                "reportFound.heroDesc",
                "Help a fellow student by reporting an item you found on campus."
              )}
            </p>
          </div>

          {/* ================= TIPS ================= */}

          <div className="reportfound-tips">
            <div className="reportfound-tip">
              <div className="reportfound-tip-icon">✓</div>
              <div>
                <h3>{t("reportFound.tip1Title", "Safe Keeping")}</h3>
                <p>
                  {t(
                    "reportFound.tip1Desc",
                    "Keep the item in a secure place or hand it to campus security."
                  )}
                </p>
              </div>
            </div>

            <div className="reportfound-tip">
              <div className="reportfound-tip-icon reportfound-cyan">📍</div>
              <div>
                <h3>{t("reportFound.tip2Title", "Accurate Location")}</h3>
                <p>
                  {t(
                    "reportFound.tip2Desc",
                    "Specify where the item was found."
                  )}
                </p>
              </div>
            </div>

            <div className="reportfound-tip">
              <div className="reportfound-tip-icon reportfound-amber">🤝</div>
              <div>
                <h3>{t("reportFound.tip3Title", "Check ID First")}</h3>
                <p>
                  {t(
                    "reportFound.tip3Desc",
                    "Verify ownership details before handing the item over."
                  )}
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
              <h2>{t("reportFound.formHeading", "Report Found Item")}</h2>
              <p>
                {t(
                  "reportFound.formDesc",
                  "Provide the details below to help locate the owner."
                )}
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="reportfound-success-message">
                {t(
                  "reportFound.successMessage",
                  "✓ Found item listed successfully!"
                )}
              </div>
            )}

            <form className="reportfound-form" onSubmit={handleSubmit}>
              {/* ================= ITEM NAME ================= */}
              <div className="reportfound-input-group">
                <label htmlFor="itemName">
                  {t("reportFound.itemNameLabel", "Item Name")}
                </label>

                <div className="reportfound-input-wrapper">
                  <span className="reportfound-input-icon">📦</span>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder={t(
                      "reportFound.itemNamePlaceholder",
                      "e.g. Scientific Calculator"
                    )}
                    value={formData.itemName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* ================= CATEGORY ================= */}
              <div className="reportfound-input-group">
                <label htmlFor="category">
                  {t("reportFound.categoryLabel", "Category")}
                </label>

                <div className="reportfound-input-wrapper">
                  <span className="reportfound-input-icon">🏷️</span>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      {t("reportFound.selectCategory", "Select a category")}
                    </option>
                    <option value="Electronics">
                      {t("reportFound.catElectronics", "Electronics")}
                    </option>
                    <option value="Wallet / Money">
                      {t("reportFound.catWallet", "Wallet / Money")}
                    </option>
                    <option value="ID / Documents">
                      {t("reportFound.catId", "ID / Documents")}
                    </option>
                    <option value="Keys">
                      {t("reportFound.catKeys", "Keys")}
                    </option>
                    <option value="Clothing">
                      {t("reportFound.catClothing", "Clothing")}
                    </option>
                    <option value="Books / Stationery">
                      {t("reportFound.catBooks", "Books / Stationery")}
                    </option>
                    <option value="Accessories">
                      {t("reportFound.catAccessories", "Bottles / Accessories")}
                    </option>
                    <option value="Other">
                      {t("reportFound.catOthers", "Other")}
                    </option>
                  </select>
                </div>
              </div>

              {/* ================= DATE + LOCATION ================= */}
              <div className="reportfound-two-column">
                <div className="reportfound-input-group">
                  <label htmlFor="dateFound">
                    {t("reportFound.dateFoundLabel", "Date Found")}
                  </label>

                  <div className="reportfound-input-wrapper">
                    <span className="reportfound-input-icon">📅</span>
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
                    {t("reportFound.locationLabel", "Location Found")}
                  </label>

                  <div className="reportfound-input-wrapper">
                    <span className="reportfound-input-icon">📍</span>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder={t(
                        "reportFound.locationPlaceholder",
                        "e.g. Room 204, Campus Grounds, Cafeteria"
                      )}
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
                  {t("reportFound.descriptionLabel", "Description")}
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder={t(
                    "reportFound.descriptionPlaceholder",
                    "Describe the item condition and where it's stored..."
                  )}
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>

              {/* ================= FEATURES ================= */}
              <div className="reportfound-input-group">
                <label htmlFor="features">
                  {t("reportFound.featuresLabel", "Identifying Features")}
                </label>

                <textarea
                  id="features"
                  name="features"
                  placeholder={t(
                    "reportFound.featuresPlaceholder",
                    "Brand, color, specific marks, stickers, etc."
                  )}
                  value={formData.features}
                  onChange={handleChange}
                  rows="2"
                />
              </div>

              {/* ================= CONTACT ================= */}
              <div className="reportfound-input-group">
                <label htmlFor="contact">
                  {t("reportFound.contactLabel", "Your Contact / Pickup Location")}
                </label>

                <div className="reportfound-input-wrapper">
                  <span className="reportfound-input-icon">📞</span>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder={t(
                      "reportFound.contactPlaceholder",
                      "Your phone number, email or campus desk"
                    )}
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* ================= IMAGE ================= */}
              <div className="reportfound-input-group">
                <label htmlFor="image">
                  {t("reportFound.imageLabel", "Item Image (Optional)")}
                </label>

                <label htmlFor="image" className="reportfound-upload-box">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="reportfound-upload-icon">↑</div>

                  <div>
                    <strong>
                      {formData.image
                        ? t("reportFound.successMessage", "Image selected ✓")
                        : t("reportFound.chooseFile", "Upload an image")}
                    </strong>
                    <p>PNG, JPG or JPEG</p>
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
              <button type="submit" className="reportfound-submit-button">
                <span>{t("reportFound.submitBtn", "Submit Found Item")}</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReportFound;
