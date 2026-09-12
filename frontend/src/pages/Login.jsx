import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import BrandLogo from "./components/BrandLogo";

function Login() {
  const navigate = useNavigate();

  // ================= STATES =================

  const [username, setUsername] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [loading, setLoading] = useState(false);

  // ================= LOGIN FUNCTION =================

  const handleLogin = (event) => {
    event.preventDefault();

    // Clear old messages
    setMessage("");
    setMessageType("");

    // Remove extra spaces
    const trimmedUsername = username.trim();
    const trimmedRollNumber = rollNumber.trim();

    // ================= VALIDATION =================

    if (!trimmedUsername || !trimmedRollNumber || !password.trim()) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      return;
    }

    // ================= GET REGISTERED USER =================

    const savedUser = localStorage.getItem("registeredUser");

    // User has never signed up
    if (!savedUser) {
      setMessage("No account found. Please create an account first.");
      setMessageType("error");
      return;
    }

    const userData = JSON.parse(savedUser);

    // ================= CHECK CREDENTIALS =================

    if (
      trimmedUsername !== userData.username ||
      trimmedRollNumber !== userData.rollNumber ||
      password !== userData.password
    ) {
      setMessage("Invalid username, roll number, or password.");
      setMessageType("error");
      return;
    }

    // ================= LOADING =================

    setLoading(true);

    setTimeout(() => {
      // Login status save
      localStorage.setItem("isLoggedIn", "true");

      // Current logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: userData.username,
          rollNumber: userData.rollNumber,
          name: userData.name,
        })
      );

      // Remember Me
      if (remember) {
        localStorage.setItem("rememberUser", "true");
      } else {
        localStorage.removeItem("rememberUser");
      }

      setLoading(false);

      setMessage("Login successful! Redirecting...");
      setMessageType("success");

      // Redirect to Home
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 1000);
  };

  // ================= UNIVERSITY LOGIN =================

  const universityLogin = () => {
    alert(
      "University Single Sign-On feature will be added later."
    );
  };

  // ================= FORGOT PASSWORD =================

  const handleForgotPassword = () => {
    alert(
      "Forgot Password feature will be added later."
    );
  };

  // ================= JSX =================

  return (
    <div className="login-page">

      {/* ================= HEADER ================= */}

      <header className="login-header">

        <Link to="/" className="brand">

          <BrandLogo small />

        </Link>

        <Link
          to="/signup"
          className="header-signup"
        >
          Create Account
        </Link>

      </header>


      {/* ================= MAIN ================= */}

      <main className="login-main">

        {/* ================= LEFT HERO ================= */}

        <section className="hero-section">

          <div className="hero-content">

            <h2>
              Smart Campus
              <br />
              <span>Lost & Found</span>
            </h2>

            <p className="hero-description">
              Find what's lost.
              <br />
              Return what's found.
            </p>

          </div>


          {/* ================= FEATURES ================= */}

          <div className="features">

            <div className="feature">

              <div className="feature-icon secure-icon">
                ♢
              </div>

              <div>
                <h3>Secure & Reliable</h3>

                <p>
                  Your data is safe with us.
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon community-icon">
                ♧
              </div>

              <div>
                <h3>Community Driven</h3>

                <p>
                  Helping each other, every day.
                </p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon quick-icon">
                ⚡
              </div>

              <div>
                <h3>Quick & Easy</h3>

                <p>
                  Report, Search & Reclaim in minutes.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= LOGIN SECTION ================= */}

        <section className="login-section">

          <div className="login-card">

            {/* ================= HEADING ================= */}

            <div className="login-heading">

              <h2>Welcome Back</h2>

              <p>
                Login to your campus account
              </p>

            </div>


            {/* ================= MESSAGE ================= */}

            {message && (

              <div
                className={`login-message ${messageType}`}
              >
                {message}
              </div>

            )}


            {/* ================= FORM ================= */}

            <form onSubmit={handleLogin}>


              {/* USERNAME */}

              <div className="input-group">

                <label htmlFor="username">
                  Username
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    required
                  />

                </div>

              </div>


              {/* ROLL NUMBER */}

              <div className="input-group">

                <label htmlFor="rollNumber">
                  Roll Number
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    #
                  </span>

                  <input
                    type="text"
                    id="rollNumber"
                    placeholder="Enter your roll number"
                    value={rollNumber}
                    onChange={(e) =>
                      setRollNumber(e.target.value)
                    }
                    required
                  />

                </div>

              </div>


              {/* PASSWORD */}

              <div className="input-group">

                <label htmlFor="password">
                  Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>

                </div>

              </div>


              {/* ================= OPTIONS ================= */}

              <div className="login-options">

                {/* REMEMBER ME */}

                <label className="remember">

                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) =>
                      setRemember(e.target.checked)
                    }
                  />

                  <span>
                    Remember Me
                  </span>

                </label>


                {/* FORGOT PASSWORD */}

                <button
                  type="button"
                  className="forgot-password"
                  onClick={handleForgotPassword}
                >
                  Forgot Password?
                </button>

              </div>


              {/* ================= LOGIN BUTTON ================= */}

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >

                {loading
                  ? "Signing In..."
                  : "Sign In"}

              </button>

            </form>


            {/* ================= DIVIDER ================= */}

            <div className="divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            {/* ================= UNIVERSITY LOGIN ================= */}

            <button
              type="button"
              className="university-button"
              onClick={universityLogin}
            >

              <span>🎓</span>

              Continue with University Account

            </button>


            {/* ================= SIGNUP ================= */}

            <p className="signup-text">

              Don't have an account?{" "}

              <Link to="/signup">
                Sign Up
              </Link>

            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Login;