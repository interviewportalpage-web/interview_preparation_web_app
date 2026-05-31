import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      <p>
        If you have questions, suggestions, or feedback, please contact us.
      </p>

      <p>
        Email: interviewportalpage@gmail.com
      </p>

      <p>
        We aim to respond to all inquiries as soon as possible.
      </p>
      <button onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ContactUs;