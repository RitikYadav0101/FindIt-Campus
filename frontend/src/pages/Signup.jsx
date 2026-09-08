import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

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


    // Terms

    if (!terms) {
      setMessage("Please accept the Terms and Conditions.");
      setMessageType("error");
      return;
    }


    // ================= CHECK EXISTING USER =================

    const existingUser = localStorage.getItem("registeredUser");

    if (existingUser) {
      setMessage(
        "Account already exists. Please login."
      );

      setMessageType("error");

      return;
    }


    // ================= LOADING =================

    setLoading(true);


    // ================= CREATE USER DATA =================

    const userData = {
      name: trimmedName,
      username: trimmedUsername,
      rollNumber: trimmedRollNumber,
      password: password,
    };


    // ================= TEMPORARY SIGNUP =================

    setTimeout(() => {

      // Save registered user

      localStorage.setItem(
        "registeredUser",
        JSON.stringify(userData)
      );


      setLoading(false);


      // Success message

      setMessage(
        "Account created successfully! Redirecting to login..."
      );

      setMessageType("success");


      // Clear form

      setName("");
      setUsername("");
      setRollNumber("");
      setPassword("");
      setConfirmPassword("");
      setTerms(false);


      // Redirect to Login

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    }, 1000);
  };


  // ================= UNIVERSITY SIGNUP =================

  const universitySignup = () => {
    alert(
      "University Single Sign-On will be added later."
    );
  };


  // ================= JSX =================

  return (
    <div className="signup-page">

      <div className="signup-container">


        {/* ================= HEADER ================= */}

        <header className="signup-header">

          <Link to="/login" className="brand">

            <div className="brand-logo">

              <div className="logo-box logo-purple"></div>

              <div className="logo-box logo-cyan"></div>

              <div className="logo-box logo-pink"></div>

              <div className="logo-text">
                LOST
                <br />
                &
                <br />
                FOUND
              </div>

            </div>


            <div className="brand-text">

              <h1>I FOUND</h1>

              <p>
                Discover. Connect. Reclaim.
              </p>

            </div>

          </Link>


          <Link
            to="/login"
            className="header-login-link"
          >
            Already have an account?
          </Link>

        </header>


        {/* ================= MAIN ================= */}

        <main className="signup-main">

          <div className="signup-card">


            {/* Decorative Circles */}

            <div className="circle circle-top"></div>

            <div className="circle circle-bottom"></div>


            {/* ================= HEADING ================= */}

            <div className="signup-heading">

              <h2>Create Account</h2>

              <p>
                Join your campus lost & found community
              </p>

            </div>


            {/* ================= MESSAGE ================= */}

            {message && (

              <div
                className={`message ${messageType}`}
              >
                {message}
              </div>

            )}


            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSignup}
              className="signup-form"
            >


              {/* ================= FULL NAME ================= */}

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    👤
                  </span>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />

                </div>

              </div>


              {/* ================= USERNAME ================= */}

              <div className="form-group">

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
                    placeholder="Create a username"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    required
                  />

                </div>

              </div>


              {/* ================= ROLL NUMBER ================= */}

              <div className="form-group">

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


              {/* ================= PASSWORD ================= */}

              <div className="form-group">

                <label htmlFor="password">
                  Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    id="password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>


              {/* ================= CONFIRM PASSWORD ================= */}

              <div className="form-group">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
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
                  onChange={(e) =>
                    setTerms(e.target.checked)
                  }
                />

                <span>

                  I agree to the{" "}

                  <a href="#">
                    Terms of Service
                  </a>

                  {" "}and{" "}

                  <a href="#">
                    Privacy Policy
                  </a>

                  .

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
                  : "Create Account"}

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

              Already have an account?{" "}

              <Link to="/login">
                Sign In
              </Link>

            </p>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Signup;