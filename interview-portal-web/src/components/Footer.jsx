import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/about">About Us</Link>

      <Link to="/contact">Contact Us</Link>

      <Link to="/privacy-policy">Privacy Policy</Link>

      <Link to="/terms">Terms & Conditions</Link>
    </footer>
  );
}

export default Footer;