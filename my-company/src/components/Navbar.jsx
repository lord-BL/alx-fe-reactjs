import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#333", // Dark background
    display: "flex", // Flexbox for layout
    justifyContent: "space-around", // Space items evenly
    padding: "10px",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
