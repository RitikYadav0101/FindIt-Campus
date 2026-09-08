import React, { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (event) => {
    event.preventDefault();

    // Password validation
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      setMessageType("error");
      return;
    }

    // Loading
    setLoading(true);
    setMessage("");
    setMessageType("");

    // Simulate signup
    setTimeout(() => {
      setLoading(false);
      setMessage("Welcome, " + name + "! Your account has been created.");
      setMessageType("success");

      setName("");
      setEmail("");
      setStudentId("");
      setPassword("");
      setConfirmPassword("");
      setTerms(false);

      setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 2000);
    }, 1200);
  };

  const universitySignup = () => {
    alert("Redirecting to University Single Sign-On...");
  };

  return (
    <div
      style={{
        boxSizing: "border-box",
        minHeight: "100vh",
        width: "100%",
        padding: "2rem",
        overflowX: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
        background:
          "linear-gradient(135deg, #f8fafc, #eef2ff)",
        color: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* ================= HEADER ================= */}

        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "2rem",
          }}
        >
          {/* Brand */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            {/* Logo */}

            <div
              style={{
                position: "relative",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "#6366f1",
                  top: "0",
                  left: "0",
                  opacity: 0.9,
                  boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "28px",
                  height: "28px",
                  borderRadius: "8px",
                  background: "#06b6d4",
                  bottom: "0",
                  right: "0",
                  opacity: 0.9,
                  boxShadow: "0 4px 12px rgba(6,182,212,0.3)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  borderRadius: "8px",
                  background: "#ec4899",
                  top: "6px",
                  right: "4px",
                  opacity: 0.85,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.1,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  padding: "4px",
                  borderRadius: "6px",
                  color: "#0f172a",
                  border: "1px solid rgba(226,232,240,0.8)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                Lost
                <br />
                & Found
              </div>
            </div>

            {/* Brand text */}

            <div>
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "1px",
                  margin: 0,
                  background:
                    "linear-gradient(90deg,#6366f1,#ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                I FOUND
              </h1>

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Discover. Connect. Reclaim.
              </p>
            </div>
          </div>

          <a
            href="login.html"
            style={{
              color: "#6366f1",
              textDecoration: "none",
              fontSize: "0.85rem",
              fontWeight: 700,
              padding: "0.7rem 1rem",
              borderRadius: "10px",
            }}
          >
            Already have an account?
          </a>
        </header>

        {/* ================= MAIN ================= */}

        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* ================= SIGNUP CARD ================= */}

          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(226,232,240,0.8)",
              backdropFilter: "blur(16px)",
              padding: "2.5rem",
              borderRadius: "24px",
              boxShadow:
                "0 25px 50px -12px rgba(15,23,42,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
              overflow: "hidden",
            }}
          >
            {/* Decorative circle */}

            <div
              style={{
                position: "absolute",
                width: "180px",
                height: "180px",
                background: "rgba(99,102,241,0.08)",
                borderRadius: "50%",
                top: "-100px",
                right: "-80px",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                width: "140px",
                height: "140px",
                background: "rgba(6,182,212,0.08)",
                borderRadius: "50%",
                bottom: "-80px",
                left: "-60px",
                pointerEvents: "none",
              }}
            />

            {/* ================= HEADING ================= */}

            <div
              style={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: 0,
                }}
              >
                Create Account
              </h2>

              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#64748b",
                  marginTop: "0.25rem",
                  marginBottom: 0,
                }}
              >
                Join your campus lost & found community
              </p>
            </div>

            {/* ================= MESSAGE ================= */}

            {message && (
              <div
                style={{
                  padding: "0.75rem",
                  borderRadius: "10px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textAlign: "center",
                  background:
                    messageType === "success"
                      ? "#d1fae5"
                      : "#fee2e2",
                  color:
                    messageType === "success"
                      ? "#047857"
                      : "#b91c1c",
                }}
              >
                {message}
              </div>
            )}

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSignup}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Full Name */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  Full Name
                </label>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                      pointerEvents: "none",
                    }}
                  >
                    ♙
                  </span>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding:
                        "0.85rem 1rem 0.85rem 2.75rem",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "12px",
                      color: "#0f172a",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* University Email */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  University Email
                </label>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                    }}
                  >
                    ✉
                  </span>

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your university email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: "100%",
                      padding:
                        "0.85rem 1rem 0.85rem 2.75rem",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "12px",
                      color: "#0f172a",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* University ID */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="studentId"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  University ID
                </label>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                    }}
                  >
                    #
                  </span>

                  <input
                    type="text"
                    id="studentId"
                    placeholder="Enter your University ID"
                    required
                    value={studentId}
                    onChange={(e) =>
                      setStudentId(e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding:
                        "0.85rem 1rem 0.85rem 2.75rem",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "12px",
                      color: "#0f172a",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Password */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="password"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  Password
                </label>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                    }}
                  >
                    🔒
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create a password"
                    required
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding:
                        "0.85rem 3rem 0.85rem 2.75rem",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "12px",
                      color: "#0f172a",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    style={{
                      position: "absolute",
                      right: "1rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                      opacity: 0.6,
                    }}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <label
                  htmlFor="confirmPassword"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#0f172a",
                  }}
                >
                  Confirm Password
                </label>

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "1rem",
                      fontSize: "0.95rem",
                      color: "#64748b",
                    }}
                  >
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
                    required
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    style={{
                      width: "100%",
                      padding:
                        "0.85rem 3rem 0.85rem 2.75rem",
                      background: "#f8fafc",
                      border: "1px solid #cbd5e1",
                      borderRadius: "12px",
                      color: "#0f172a",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    style={{
                      position: "absolute",
                      right: "1rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1rem",
                      opacity: 0.6,
                    }}
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Terms */}

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.75rem",
                  color: "#64748b",
                  lineHeight: 1.5,
                }}
              >
                <input
                  type="checkbox"
                  required
                  checked={terms}
                  onChange={(e) =>
                    setTerms(e.target.checked)
                  }
                  style={{
                    marginTop: "3px",
                    accentColor: "#6366f1",
                    cursor: "pointer",
                  }}
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    style={{
                      color: "#6366f1",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    style={{
                      color: "#6366f1",
                      textDecoration: "none",
                      fontWeight: 600,
                    }}
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  cursor: loading
                    ? "not-allowed"
                    : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background:
                    "linear-gradient(135deg,#6366f1,#4f46e5)",
                  color: "white",
                  border: "none",
                  boxShadow:
                    "0 4px 12px rgba(99,102,241,0.3)",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>
            </form>

            {/* ================= DIVIDER ================= */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  flex: 1,
                  height: "1px",
                  background: "#e2e8f0",
                }}
              />

              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#64748b",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                OR
              </p>

              <span
                style={{
                  flex: 1,
                  height: "1px",
                  background: "#e2e8f0",
                }}
              />
            </div>

            {/* ================= UNIVERSITY LOGIN ================= */}

            <button
              type="button"
              onClick={universitySignup}
              style={{
                width: "100%",
                padding: "0.85rem",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                background: "#ffffff",
                color: "#0f172a",
                border: "1px solid #cbd5e1",
              }}
            >
              <span>♜</span>
              Continue with University Account
            </button>

            {/* ================= LOGIN ================= */}

            <p
              style={{
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#64748b",
                fontWeight: 500,
                position: "relative",
                zIndex: 2,
                margin: 0,
              }}
            >
              Already have an account?

              <a
                href="login.html"
                style={{
                  color: "#6366f1",
                  textDecoration: "none",
                  fontWeight: 700,
                  marginLeft: "0.25rem",
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;