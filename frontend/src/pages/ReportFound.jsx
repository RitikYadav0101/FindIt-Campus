import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ReportFound.css";

function ReportFound() {
  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    item: "",
    location: "",
    date: "",
    description: "",
    photo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState("");

  // ================= HANDLE INPUT =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE IMAGE =================

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Maximum 5 MB
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be less than 5MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        photo: reader.result,
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

      name: formData.name,
      item: formData.item,
      title: formData.item,
      category: formData.item,

      location: formData.location,
      date: formData.date,
      description: formData.description,
      photo: formData.photo,

      status: "Found",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "foundItems",
      JSON.stringify([newItem, ...existingItems])
    );

    setSuccess("Found item reported successfully!");

    setFormData(initialFormData);

    setTimeout(() => {
      navigate("/found");
    }, 1500);
  };

  // ================= RESET =================

  const handleReset = () => {
    setFormData(initialFormData);
    setSuccess("");
  };

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/login", { replace: true });
  };

  return (
    <div className="reportf-page">

      {/* ================= HEADER ================= */}

      <header className="reportf-header">

        <Link to="/" className="reportf-brand">

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

        </Link>


        {/* ================= NAVIGATION ================= */}

        <nav className="reportf-nav-links">

          <Link to="/">Home</Link>

          <Link to="/lost">Lost</Link>

          <Link to="/report-lost">
            Report Lost
          </Link>

          <Link to="/found">
            Found
          </Link>

          <Link
            to="/report-found"
            className="active"
          >
            Report Found
          </Link>

          <Link to="/profile">
            Profile
          </Link>

        </nav>


        {/* ================= SIGN OUT ================= */}

        <button
          className="reportf-signout-btn"
          onClick={handleLogout}
        >
          Sign Out
        </button>

      </header>


      {/* ================= MAIN ================= */}

      <main className="reportf-main">

        {/* PAGE HEADING */}

        <div className="reportf-heading">

          <span className="reportf-heading-line"></span>

          <h2>
            Report <span>Found</span> Item
          </h2>

          <p>
            Help someone reconnect with their lost belonging.
          </p>

        </div>


        {/* SUCCESS MESSAGE */}

        {success && (
          <div className="reportf-success-message">
            ✓ {success}
          </div>
        )}


        {/* ================= FORM CARD ================= */}

        <section className="reportf-card">

          <div className="reportf-card-header">

            <div className="reportf-form-icon">
              +
            </div>

            <div>
              <h3>Found Item Details</h3>

              <p>
                Provide the details below so the owner can
                identify their item.
              </p>
            </div>

          </div>


          <form
            className="reportf-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="reportf-form-group">

              <label htmlFor="reportf-name">
                Name <span>*</span>
              </label>

              <input
                id="reportf-name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* ITEM */}

            <div className="reportf-form-group">

              <label htmlFor="reportf-item">
                Item <span>*</span>
              </label>

              <select
                id="reportf-item"
                name="item"
                value={formData.item}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select item type
                </option>

                <option value="Mobile Phone">
                  Mobile Phone
                </option>

                <option value="Laptop">
                  Laptop
                </option>

                <option value="Wallet">
                  Wallet
                </option>

                <option value="ID / Card">
                  ID / Card
                </option>

                <option value="Bag">
                  Bag
                </option>

                <option value="Book">
                  Book
                </option>

                <option value="Keys">
                  Keys
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>


            {/* LOCATION */}

            <div className="reportf-form-group">

              <label htmlFor="reportf-location">
                Location <span>*</span>
              </label>

              <select
                id="reportf-location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >

                <option value="">
                  Where did you find it?
                </option>

                <option value="Library">
                  Library
                </option>

                <option value="Canteen">
                  Canteen
                </option>

                <option value="Classroom">
                  Classroom
                </option>

                <option value="Parking Area">
                  Parking Area
                </option>

                <option value="Hostel">
                  Hostel
                </option>

                <option value="Sports Ground">
                  Sports Ground
                </option>

                <option value="Other Campus Area">
                  Other Campus Area
                </option>

              </select>

            </div>


            {/* DATE */}

            <div className="reportf-form-group">

              <label htmlFor="reportf-date">
                Date Found <span>*</span>
              </label>

              <input
                id="reportf-date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />

            </div>


            {/* DESCRIPTION */}

            <div className="reportf-form-group reportf-full-width">

              <label htmlFor="reportf-description">
                Item Description <span>*</span>
              </label>

              <textarea
                id="reportf-description"
                name="description"
                placeholder="Describe the item, its color, brand, distinguishing features, etc."
                value={formData.description}
                onChange={handleChange}
                required
              />

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
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleFileChange}
                />

                <div className="reportf-upload-content">

                  <div className="reportf-upload-icon">
                    ↑
                  </div>

                  <div>

                    <strong>
                      {formData.photo
                        ? "Image selected ✓"
                        : "Upload an image"}
                    </strong>

                    <p>
                      PNG, JPG or JPEG • Max 5MB
                    </p>

                  </div>

                </div>

              </div>


              {formData.photo && (

                <div className="reportf-image-preview">

                  <img
                    src={formData.photo}
                    alt="Selected item"
                  />

                </div>

              )}

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
                type="button"
                className="reportf-reset-btn"
                onClick={handleReset}
              >
                Reset
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
}

export default ReportFound;