import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import { useLanguage } from "../context/LanguageContext";
import "./ReportLost.css";

function ReportLost() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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

    const today = new Date().toISOString().split("T")[0];

    if (formData.dateLost > today) {
      alert(t("reportLost.alertFutureDate", "Date lost cannot be in the future."));
      return;
    }

    if (!formData.contact.trim()) {
      alert(t("reportLost.alertContactRequired", "Please enter your contact information."));
      return;
    }

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
          <Link to="/">{t("nav.home", "Home")}</Link>
          <Link to="/lost">{t("nav.lost", "Lost")}</Link>
          <Link to="/report-lost" className="active">
            {t("nav.reportLost", "Report Lost")}
          </Link>
          <Link to="/found">{t("nav.found", "Found")}</Link>
          <Link to="/report-found">{t("nav.reportFound", "Report Found")}</Link>
          <Link to="/profile">{t("nav.profile", "Profile")}</Link>
        </nav>

        {/* BACK BUTTON */}
        <button
          className="reportlost-back-button"
          onClick={() => navigate("/lost")}
        >
          {t("nav.back", "← Back")}
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="reportlost-main">
        {/* ================= LEFT SIDE ================= */}

        <section className="reportlost-intro-section">
          <div className="reportlost-search-icon-container">🔍</div>

          <span className="reportlost-small-label">
            {t("reportLost.eyebrow", "LOST SOMETHING?")}
          </span>

          <h2>
            {t("reportLost.heroTitle1", "List Your")}
            <br />
            <span>{t("reportLost.heroTitle2", "Lost Item")}</span>
          </h2>

          <p className="reportlost-intro-description">
            {t(
              "reportLost.heroDesc",
              "Tell us about the item you lost and help the campus community get it back to you."
            )}
          </p>

          {/* TIPS */}
          <div className="reportlost-tips">
            <div className="reportlost-tip">
              <div className="reportlost-tip-icon">✓</div>
              <div>
                <h3>{t("reportLost.tip1Title", "Be Specific")}</h3>
                <p>
                  {t(
                    "reportLost.tip1Desc",
                    "Add details that make your item easy to identify."
                  )}
                </p>
              </div>
            </div>

            <div className="reportlost-tip">
              <div className="reportlost-tip-icon">📍</div>
              <div>
                <h3>{t("reportLost.tip2Title", "Add Location")}</h3>
                <p>
                  {t(
                    "reportLost.tip2Desc",
                    "Mention where you last remember having it."
                  )}
                </p>
              </div>
            </div>

            <div className="reportlost-tip">
              <div className="reportlost-tip-icon">⚡</div>
              <div>
                <h3>{t("reportLost.tip3Title", "Act Quickly")}</h3>
                <p>
                  {t(
                    "reportLost.tip3Desc",
                    "The sooner you report it, the better."
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FORM ================= */}

        <section className="reportlost-form-section">
          <div className="reportlost-form-card">
            <div className="reportlost-form-heading">
              <h2>{t("reportLost.formHeading", "Report Lost Item")}</h2>
              <p>
                {t(
                  "reportLost.formDesc",
                  "Provide the details below to create your listing."
                )}
              </p>
            </div>

            {submitted && (
              <div className="reportlost-success-message">
                {t(
                  "reportLost.successMessage",
                  "✓ Lost item listed successfully!"
                )}
              </div>
            )}

            <form className="reportlost-form" onSubmit={handleSubmit}>
              {/* ITEM NAME */}
              <div className="reportlost-input-group">
                <label htmlFor="itemName">
                  {t("reportLost.itemNameLabel", "Item Name")}
                </label>

                <div className="reportlost-input-wrapper">
                  <span className="reportlost-input-icon">📦</span>
                  <input
                    type="text"
                    id="itemName"
                    name="itemName"
                    placeholder={t(
                      "reportLost.itemNamePlaceholder",
                      "e.g. Black Wallet"
                    )}
                    value={formData.itemName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* CATEGORY */}
              <div className="reportlost-input-group">
                <label htmlFor="category">
                  {t("reportLost.categoryLabel", "Category")}
                </label>

                <div className="reportlost-input-wrapper">
                  <span className="reportlost-input-icon">🏷️</span>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      {t("reportLost.selectCategory", "Select a category")}
                    </option>
                    <option value="Electronics">
                      {t("reportLost.catElectronics", "Electronics")}
                    </option>
                    <option value="Wallet / Money">
                      {t("reportLost.catWallet", "Wallet / Money")}
                    </option>
                    <option value="ID / Documents">
                      {t("reportLost.catId", "ID / Documents")}
                    </option>
                    <option value="Keys">
                      {t("reportLost.catKeys", "Keys")}
                    </option>
                    <option value="Clothing">
                      {t("reportLost.catClothing", "Clothing")}
                    </option>
                    <option value="Books / Stationery">
                      {t("reportLost.catBooks", "Books / Stationery")}
                    </option>
                    <option value="Accessories">
                      {t("reportLost.catAccessories", "Bottles / Accessories")}
                    </option>
                    <option value="Other">
                      {t("reportLost.catOthers", "Other")}
                    </option>
                  </select>
                </div>
              </div>

              {/* DATE + LOCATION */}
              <div className="reportlost-two-column">
                <div className="reportlost-input-group">
                  <label htmlFor="dateLost">
                    {t("reportLost.dateLostLabel", "Date Lost")}
                  </label>

                  <div className="reportlost-input-wrapper">
                    <span className="reportlost-input-icon">📅</span>
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
                    {t("reportLost.locationLabel", "Location Lost")}
                  </label>

                  <div className="reportlost-input-wrapper">
                    <span className="reportlost-input-icon">📍</span>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder={t(
                        "reportLost.locationPlaceholder",
                        "e.g. Central Library"
                      )}
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
                  {t("reportLost.descriptionLabel", "Description")}
                </label>

                <textarea
                  id="description"
                  name="description"
                  placeholder={t(
                    "reportLost.descriptionPlaceholder",
                    "Describe the item..."
                  )}
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>

              {/* FEATURES */}
              <div className="reportlost-input-group">
                <label htmlFor="features">
                  {t("reportLost.featuresLabel", "Distinguishing Features")}
                </label>

                <textarea
                  id="features"
                  name="features"
                  placeholder={t(
                    "reportLost.featuresPlaceholder",
                    "Color, brand, stickers, scratches, etc."
                  )}
                  value={formData.features}
                  onChange={handleChange}
                  rows="2"
                />
              </div>

              {/* CONTACT */}
              <div className="reportlost-input-group">
                <label htmlFor="contact">
                  {t("reportLost.contactLabel", "Contact Information")}
                </label>

                <div className="reportlost-input-wrapper">
                  <span className="reportlost-input-icon">📞</span>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder={t(
                      "reportLost.contactPlaceholder",
                      "Email or phone number"
                    )}
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* IMAGE */}
              <div className="reportlost-input-group">
                <label>
                  {t("reportLost.imageLabel", "Item Image (Optional)")}
                </label>

                <label htmlFor="image" className="reportlost-upload-box">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  <div className="reportlost-upload-icon">↑</div>

                  <div>
                    <strong>
                      {formData.image
                        ? t("reportLost.successMessage", "Image selected ✓")
                        : t("reportLost.chooseFile", "Upload an image")}
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
              <button type="submit" className="reportlost-submit-button">
                {t("reportLost.submitBtn", "List Lost Item →")}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ReportLost;
