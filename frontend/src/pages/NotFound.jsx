
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist
        or may have been moved.
      </p>

      <Link to="/" className="not-found-link">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
