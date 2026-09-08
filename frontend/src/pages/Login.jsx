import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      {/* ================= HEADER ================= */}
      <header className="login-header">

        {/* LOGO */}
        <div className="brand">

          <div className="brand-logo">
            <div className="box box-one"></div>
            <div className="box box-two"></div>
            <div className="box box-three"></div>

            <div className="lost-box">
              LOST
              <br />
              &
              <br />
              FOUND
            </div>
          </div>

          <div className="brand-text">
            <h1>I FOUND</h1>
            <p>Discover. Connect. Reclaim.</p>
          </div>

        </div>


        {/* MENU BUTTON */}
        <button className="menu-button" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>


      {/* ================= MAIN CONTENT ================= */}
      <main className="login-main">

        {/* ================= LEFT SIDE ================= */}
        <section className="hero-section">

          <div className="hero-content">

            <h2>
              Smart Campus
              <br />

              <span>Lost & Found</span>
            </h2>

            {/* Static message */}
            <p className="hero-description">
              Find what's lost.
              <br />
              Return what's found.
            </p>

          </div>


          {/* FEATURES */}

          <div className="features">

            <div className="feature">

              <div className="feature-icon secure-icon">
                ♢
              </div>

              <div>
                <h3>Secure & Reliable</h3>
                <p>Your data is safe with us.</p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon community-icon">
                ♧
              </div>

              <div>
                <h3>Community Driven</h3>
                <p>Helping each other, every day.</p>
              </div>

            </div>


            <div className="feature">

              <div className="feature-icon quick-icon">
                ⚡
              </div>

              <div>
                <h3>Quick & Easy</h3>
                <p>Report, Search & Reclaim in minutes.</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= LOGIN SECTION ================= */}
        <section className="login-section">

          <div className="login-card">

            {/* Heading */}
            <div className="login-heading">

              <h2>Welcome Back</h2>

              <p>
                Login to your campus account
              </p>

            </div>


            {/* FORM */}
            <form>

              {/* University Email */}
              <div className="input-group">

                <label htmlFor="username">
                  University Email/ID
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    ♙
                  </span>

                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your University Email or ID"
                  />

                </div>

              </div>


              {/* Password */}
              <div className="input-group">

                <label htmlFor="password">
                  Password
                </label>

                <div className="input-wrapper">

                  <span className="input-icon">
                    🔒
                  </span>

                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />

                  {/* Visual only for now */}
                  <span className="eye-icon">
                    👁
                  </span>

                </div>

              </div>


              {/* Remember + Forgot */}
              <div className="login-options">

                <label className="remember">

                  <input type="checkbox" />

                  <span>Remember Me</span>

                </label>


                <a href="#">
                  Forgot Password?
                </a>

              </div>


              {/* Sign In Button */}
              <button
                type="submit"
                className="login-button"
              >
                Sign In
              </button>

            </form>


            {/* DIVIDER */}
            <div className="divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            {/* University Login */}

            <button className="university-button">

              <span>♜</span>

              Continue with University Account

            </button>


            {/* Sign Up */}

            <p className="signup-text">

              Don't have an account?

              <a href="#">
                Sign Up
              </a>

            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Login;