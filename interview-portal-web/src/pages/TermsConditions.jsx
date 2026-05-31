import { useNavigate } from "react-router-dom";

function TermsConditions() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Terms & Conditions</h1>

      <p>
        By using this website, you agree to the following terms and conditions.
      </p>

      <h3>Content Usage</h3>

      <p>
        All content is provided for educational and informational purposes only.
      </p>

      <h3>Limitation of Liability</h3>

      <p>
        We do not guarantee interview success and are not responsible for any
        decisions made based on the information provided on this website.
      </p>

      <h3>Updates</h3>

      <p>
        We may modify these terms at any time without prior notice.
      </p>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default TermsConditions;