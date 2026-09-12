import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import BrandLogo from "./components/BrandLogo";

import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  // ================= GET LOGGED IN USER =================

  const savedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  // ================= PROFILE DATA =================

  const [formData, setFormData] = useState({
    username: savedUser.username || "",
    rollNumber: savedUser.rollNumber || "",
    name: savedUser.name || "",
    phone: savedUser.phone || "",
    studentEmail: savedUser.studentEmail || "",
    parentName: savedUser.parentName || "",
    parentEmail: savedUser.parentEmail || "",
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
    setEditing(true);
    setSaved(false);
  };

  // ================= CANCEL EDIT =================

  const handleCancel = () => {
    const currentUser =
      JSON.parse(localStorage.getItem("user")) || {};

    setFormData({
      username: currentUser.username || "",
      rollNumber: currentUser.rollNumber || "",
      name: currentUser.name || "",
      phone: currentUser.phone || "",
      studentEmail: currentUser.studentEmail || "",
      parentName: currentUser.parentName || "",
      parentEmail: currentUser.parentEmail || "",
    });

    setEditing(false);
  };

  // ================= SAVE PROFILE =================

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...savedUser,
      ...formData,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

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

        <Link
          to="/"
          className="profile-brand"
        >
          <BrandLogo small />
        </Link>


        {/* ================= BACK BUTTON ================= */}

        <button
          className="profile-back-button"
          onClick={handleBack}
        >
          ← Back to Home
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="profile-main-container">


        {/* ================= LEFT SIDE ================= */}

        <section className="profile-intro-section">

          <div className="profile-small-label">
            STUDENT PROFILE
          </div>


          <h2>
            Your
            <br />

            <span>
              Profile
            </span>
          </h2>


          <p className="profile-intro-description">

            View and manage your personal information
            and contact details.

          </p>


          {/* ================= TIPS ================= */}

          <div className="profile-tips">


            {/* TIP 1 */}

            <div className="profile-tip">

              <div className="profile-tip-icon">
                ✓
              </div>

              <div>

                <h3>
                  Student Details
                </h3>

                <p>
                  Keep your contact information updated.
                </p>

              </div>

            </div>


            {/* TIP 2 */}

            <div className="profile-tip">

              <div className="profile-tip-icon">
                ✉
              </div>

              <div>

                <h3>
                  Email Information
                </h3>

                <p>
                  Your email helps you receive important updates.
                </p>

              </div>

            </div>


            {/* TIP 3 */}

            <div className="profile-tip">

              <div className="profile-tip-icon">
                ⚡
              </div>

              <div>

                <h3>
                  Contact Details
                </h3>

                <p>
                  Keep your contact information up to date.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROFILE FORM ================= */}

        <section className="profile-form-section">

          <div className="profile-form-card">


            {/* ================= HEADING ================= */}

            <div className="profile-form-heading">

              <h2>
                Student Profile
              </h2>

              <p>
                Your account and contact information.
              </p>

            </div>


            {/* ================= SUCCESS MESSAGE ================= */}

            {saved && (

              <div className="profile-success-message">

                ✓ Profile updated successfully!

              </div>

            )}


            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit}>


              {/* ================= NAME ================= */}

              <div className="profile-input-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  readOnly={!editing}
                />

              </div>


              {/* ================= USERNAME ================= */}

              <div className="profile-input-group">

                <label htmlFor="username">
                  Username
                </label>

                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  readOnly={!editing}
                />

              </div>


              {/* ================= ROLL NUMBER ================= */}

              <div className="profile-input-group">

                <label htmlFor="rollNumber">
                  Roll Number
                </label>

                <input
                  type="text"
                  id="rollNumber"
                  name="rollNumber"
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
                    Phone Number
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
                    Student Email
                  </label>

                  <input
                    type="email"
                    id="studentEmail"
                    name="studentEmail"
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
                  Parent Name
                </label>

                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  placeholder="Enter parent name"
                  value={formData.parentName}
                  onChange={handleChange}
                  readOnly={!editing}
                />

              </div>


              {/* ================= PARENT EMAIL ================= */}

              <div className="profile-input-group">

                <label htmlFor="parentEmail">
                  Parent Email
                </label>

                <input
                  type="email"
                  id="parentEmail"
                  name="parentEmail"
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
                    Edit Profile
                  </button>

                ) : (

                  <>

                    <button
                      type="submit"
                      className="profile-save-button"
                    >
                      Save Changes
                    </button>


                    <button
                      type="button"
                      className="profile-cancel-button"
                      onClick={handleCancel}
                    >
                      Cancel
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