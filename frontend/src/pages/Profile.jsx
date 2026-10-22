import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BrandLogo from "../components/BrandLogo";
import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";

import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const { user: savedUser, login } = useAuth();
  const { t } = useLanguage();

  const currentUser = savedUser || {};

  // ================= PROFILE DATA =================

  const [formData, setFormData] = useState({
    username: currentUser.username || "",
    rollNumber: currentUser.rollNumber || "",
    name: currentUser.name || "",
    phone: currentUser.phone || "",
    studentEmail: currentUser.studentEmail || "",
    parentName: currentUser.parentName || "",
    parentEmail: currentUser.parentEmail || "",
  });

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= EDIT PROFILE =================

  const handleEdit = () => {
    setSaved(false);
    setEditing(true);
  };

  // ================= CANCEL EDIT =================

  const handleCancel = () => {
    const user = savedUser || {};

    setFormData({
      username: user.username || "",
      rollNumber: user.rollNumber || "",
      name: user.name || "",
      phone: user.phone || "",
      studentEmail: user.studentEmail || "",
      parentName: user.parentName || "",
      parentEmail: user.parentEmail || "",
    });

    setEditing(false);
  };

  // ================= SAVE PROFILE =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...(savedUser || {}),
      ...formData,
    };

    login(updatedUser);

    setEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  // ================= BACK =================

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="profile-page">
      {/* ================= BACKGROUND ================= */}

      <div className="profile-circle profile-circle-one"></div>
      <div className="profile-circle profile-circle-two"></div>

      {/* ================= HEADER ================= */}

      <header className="profile-header">
        {/* ================= CONSISTENT BRAND LOGO ================= */}
        <Link to="/" className="profile-brand">
          <BrandLogo small />
        </Link>

        {/* ================= BACK BUTTON ================= */}
        <button className="profile-back-button" onClick={handleBack}>
          {t("nav.back", "← Back to Home")}
        </button>
      </header>

      {/* ================= MAIN ================= */}

      <main className="profile-main-container">
        {/* ================= LEFT SIDE ================= */}

        <section className="profile-intro-section">
          <div className="profile-small-label">
            {t("profile.title", "STUDENT PROFILE")}
          </div>

          <h2>
            Your
            <br />
            <span>{t("nav.profile", "Profile")}</span>
          </h2>

          <p className="profile-intro-description">
            {t(
              "profile.subtitle",
              "View and manage your personal information and contact details."
            )}
          </p>

          {/* ================= TIPS ================= */}

          <div className="profile-tips">
            <div className="profile-tip">
              <div className="profile-tip-icon">✓</div>
              <div>
                <h3>Student Details</h3>
                <p>Keep your contact information updated.</p>
              </div>
            </div>

            <div className="profile-tip">
              <div className="profile-tip-icon">✉</div>
              <div>
                <h3>Email Information</h3>
                <p>Your email helps you receive important updates.</p>
              </div>
            </div>

            <div className="profile-tip">
              <div className="profile-tip-icon">⚡</div>
              <div>
                <h3>Contact Details</h3>
                <p>Keep your contact information up to date.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROFILE FORM ================= */}

        <section className="profile-form-section">
          <div className="profile-form-card">
            {/* ================= HEADING ================= */}

            <div className="profile-form-heading">
              <h2>{t("profile.title", "Student Profile")}</h2>
              <p>{t("profile.subtitle", "Your account and contact information.")}</p>
            </div>

            {/* ================= SUCCESS MESSAGE ================= */}

            {saved && (
              <div className="profile-success-message">
                {t("profile.savedSuccess", "✓ Profile updated successfully!")}
              </div>
            )}

            {/* ================= FORM ================= */}

            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (
                  e.nativeEvent.submitter?.classList.contains(
                    "profile-edit-button"
                  )
                ) {
                  return;
                }

                handleSubmit(e);
              }}
            >
              {/* ================= NAME ================= */}

              <div className="profile-input-group">
                <label htmlFor="name">
                  {t("profile.name", "Full Name")}
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </div>

              {/* ================= USERNAME ================= */}

              <div className="profile-input-group">
                <label htmlFor="username">
                  {t("profile.username", "Username")}
                </label>

                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </div>

              {/* ================= ROLL NUMBER ================= */}

              <div className="profile-input-group">
                <label htmlFor="rollNumber">
                  {t("profile.rollNumber", "Roll Number")}
                </label>

                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
                  autoComplete="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </div>

              {/* ================= PHONE + EMAIL ================= */}

              <div className="profile-two-column">
                {/* PHONE */}
                <div className="profile-input-group">
                  <label htmlFor="phone">
                    {t("profile.phone", "Phone Number")}
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    readOnly={!editing}
                  />
                </div>

                {/* EMAIL */}
                <div className="profile-input-group">
                  <label htmlFor="studentEmail">
                    {t("profile.studentEmail", "Student Email")}
                  </label>

                  <input
                    type="email"
                    id="studentEmail"
                    name="studentEmail"
                    autoComplete="studentEmail"
                    placeholder="Enter email"
                    value={formData.studentEmail}
                    onChange={handleChange}
                    readOnly={!editing}
                  />
                </div>
              </div>

              {/* ================= PARENT NAME ================= */}

              <div className="profile-input-group">
                <label htmlFor="parentName">
                  {t("profile.parentName", "Parent Name")}
                </label>

                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  autoComplete="parentName"
                  placeholder="Enter parent name"
                  value={formData.parentName}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </div>

              {/* ================= PARENT EMAIL ================= */}

              <div className="profile-input-group">
                <label htmlFor="parentEmail">
                  {t("profile.parentEmail", "Parent Email")}
                </label>

                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
                  autoComplete="parentEmail"
                  placeholder="Enter parent email"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  readOnly={!editing}
                />
              </div>

              {/* ================= BUTTONS ================= */}

              <div className="profile-buttons">
                {!editing ? (
                  <button
                    type="button"
                    className="profile-edit-button"
                    onClick={handleEdit}
                  >
                    {t("profile.editBtn", "Edit Profile")}
                  </button>
                ) : (
                  <>
                    <button
                      type="submit"
                      className="profile-save-button"
                    >
                      {t("profile.saveBtn", "Save Changes")}
                    </button>

                    <button
                      type="button"
                      className="profile-cancel-button"
                      onClick={handleCancel}
                    >
                      {t("profile.cancelBtn", "Cancel")}
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Profile;
