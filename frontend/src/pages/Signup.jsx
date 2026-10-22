import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import BrandLogo from "../components/BrandLogo";
import { useLanguage } from "../context/LanguageContext";

function Signup() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // ================= STATES =================

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [terms, setTerms] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [loading, setLoading] = useState(false);

  // ================= SIGNUP FUNCTION =================

  const handleSignup = (event) => {
    event.preventDefault();

    // Clear old messages
    setMessage("");
    setMessageType("");

    // Remove unnecessary spaces
    const trimmedName = name.trim();
    const trimmedUsername = username.trim();
    const trimmedRollNumber = rollNumber.trim();

    // ================= VALIDATION =================

    if (
      !trimmedName ||
      !trimmedUsername ||
      !trimmedRollNumber ||
      !password ||
      !confirmPassword
    ) {
      setMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    // Password match
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    // Password length
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setMessageType("error");
      return;
    }

    // Terms validation
    if (!terms) {
      setMessage("Please agree to the Terms of Service and Privacy Policy.");
      setMessageType("error");
      return;
    }

    // ================= SIMULATE SAVING USER =================

    setLoading(true);

    setTimeout(() => {
      const newUser = {
        name: trimmedName,
        username: trimmedUsername,
        rollNumber: trimmedRollNumber,
        password: password,
      };

      // Save user to LocalStorage
      localStorage.setItem("registeredUser", JSON.stringify(newUser));

      setLoading(false);

      setMessage("Account created successfully! Redirecting to login...");
      setMessageType("success");

      // Redirect to login page
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }, 1000);
  };

  // ================= UNIVERSITY SSO =================

  const universitySignup = () => {
    alert(
      "University Single Sign-On feature will be added later."
    );
  };

  return (
    <div className="signup-page">
      {/* Background Decorative Blur */}
      <div className="blur-circle blur-one"></div>
      <div className="blur-circle blur-two"></div>

      <div className="signup-container">
        {/* ================= HEADER ================= */}

        <header className="signup-header">
          <Link to="/" className="brand">
            <BrandLogo small />
          </Link>

          <Link to="/login" className="header-login">
            {t("auth.loginLink", "Sign In")}
          </Link>
        </header>

        {/* ================= MAIN CARD ================= */}

        <main className="signup-main">
          <div className="signup-card">
            {/* Decorative Circles */}
            <div className="circle circle-top"></div>
            <div className="circle circle-bottom"></div>

            {/* ================= HEADING ================= */}

            <div className="signup-heading">
              <h2>{t("auth.signupTitle", "Create Account")}</h2>
              <p>{t("auth.signupSubtitle", "Join your campus lost & found community")}</p>
            </div>

            {/* ================= MESSAGE ================= */}

            {message && (
              <div className={`message ${messageType}`}>{message}</div>
            )}

            {/* ================= FORM ================= */}

            <form onSubmit={handleSignup} className="signup-form">
              {/* ================= FULL NAME ================= */}

              <div className="form-group">
                <label htmlFor="name">
                  {t("auth.name", "Full Name")}
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    placeholder={t(
                      "auth.namePlaceholder",
                      "Enter your full name"
                    )}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ================= USERNAME ================= */}

              <div className="form-group">
                <label htmlFor="username">
                  {t("auth.username", "Username")}
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    placeholder={t(
                      "auth.usernamePlaceholder",
                      "Create a username"
                    )}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ================= ROLL NUMBER ================= */}

              <div className="form-group">
                <label htmlFor="rollNumber">
                  {t("auth.rollNumber", "Roll Number")}
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">🎫</span>
                  <input
                    type="text"
                    id="rollNumber"
                    autoComplete="rollNumber"
                    placeholder={t(
                      "auth.rollNumberPlaceholder",
                      "Enter your roll number"
                    )}
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* ================= PASSWORD ================= */}

              <div className="form-group">
                <label htmlFor="password">
                  {t("auth.password", "Password")}
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder={t(
                      "auth.passwordPlaceholder",
                      "Create a password"
                    )}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* ================= CONFIRM PASSWORD ================= */}

              <div className="form-group">
                <label htmlFor="confirmPassword">
                  {t("auth.confirmPassword", "Confirm Password")}
                </label>

                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder={t(
                      "auth.confirmPasswordPlaceholder",
                      "Confirm your password"
                    )}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {/* ================= TERMS ================= */}

              <label className="terms">
                <input
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <span>
                  I agree to the <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </span>
              </label>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                disabled={loading}
                className="signup-button"
              >
                {loading
                  ? "Creating Account..."
                  : t("auth.signupBtn", "Create Account")}
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>

            {/* ================= UNIVERSITY ACCOUNT ================= */}

            <button
              type="button"
              onClick={universitySignup}
              className="university-button"
            >
              🎓 Continue with University Account
            </button>

            {/* ================= LOGIN ================= */}

            <p className="login-text">
              {t("auth.haveAccount", "Already have an account?")}{" "}
              <Link to="/login">
                {t("auth.loginLink", "Sign In")}
              </Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Signup;
