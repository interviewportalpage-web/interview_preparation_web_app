import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>

      <p>
        We respect your privacy and are committed to protecting your personal
        information.
      </p>

      <h3>Information We Collect</h3>

      <p>
        We may collect anonymous analytics data to improve user experience.
      </p>

      <h3>Cookies</h3>

      <p>
        Our website may use cookies and third-party services such as Google
        AdSense to serve relevant advertisements.
      </p>

      <h3>Third-Party Services</h3>

      <p>
        Third-party providers may collect information according to their own
        privacy policies.
      </p>

      <h3>Changes</h3>

      <p>
        We reserve the right to update this Privacy Policy at any time.
      </p>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default PrivacyPolicy;