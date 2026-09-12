import "./BrandLogo.css";

function BrandLogo({ small = false }) {
  return (
    <div className={`findit-brand ${small ? "small" : ""}`}>

      <div className="findit-logo-icon">
        <span>F.</span>
      </div>

      <div className="findit-brand-text">

        <h1>FINDIT</h1>

        <p>Campus Lost & Found</p>

      </div>

    </div>
  );
}

export default BrandLogo;