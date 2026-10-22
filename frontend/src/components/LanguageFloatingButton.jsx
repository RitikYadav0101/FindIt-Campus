import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./LanguageFloatingButton.css";

function LanguageFloatingButton() {
  const { language, changeLanguage, languages, currentLanguageMeta, t } =
    useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelectLanguage = (code) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div
      className="lang-floating-container"
      ref={containerRef}
      aria-label="Language selector"
    >
      {/* POPUP MENU */}
      {isOpen && (
        <div
          className="lang-floating-menu"
          role="listbox"
          aria-label="Available languages"
        >
          <div className="lang-floating-menu-header">
            <div className="lang-menu-title-row">
              <span className="lang-menu-icon">🌐</span>
              <span className="lang-menu-title">
                {t("langSelector.title", "Choose Language")}
              </span>
            </div>
            <span className="lang-menu-hint">
              {t("langSelector.switchPrompt", "Select your preferred language")}
            </span>
          </div>

          <div className="lang-options-list">
            {languages.map((lang) => {
              const isActive = lang.code === language;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`lang-option-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleSelectLanguage(lang.code)}
                >
                  <span className="lang-option-flag" aria-hidden="true">
                    {lang.flag}
                  </span>

                  <div className="lang-option-text">
                    <span className="lang-option-native">
                      {lang.nativeName}
                    </span>
                    <span className="lang-option-label">
                      {lang.label}
                    </span>
                  </div>

                  {isActive ? (
                    <span className="lang-active-check" aria-hidden="true">
                      ✓
                    </span>
                  ) : (
                    <span className="lang-short-tag">{lang.shortCode}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button
        type="button"
        className={`lang-floating-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title={t("langSelector.title", "Choose Language")}
      >
        <span className="lang-trigger-globe" aria-hidden="true">
          🌐
        </span>

        <span className="lang-trigger-badge">
          {currentLanguageMeta?.shortCode || "EN"}
        </span>

        <span className="lang-trigger-name">
          {currentLanguageMeta?.nativeName || "English"}
        </span>

        <span
          className={`lang-trigger-chevron ${isOpen ? "rotate" : ""}`}
          aria-hidden="true"
        >
          ▲
        </span>
      </button>
    </div>
  );
}

export default LanguageFloatingButton;

