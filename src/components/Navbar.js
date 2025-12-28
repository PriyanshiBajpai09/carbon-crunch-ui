import "./Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="logo-icon">S</span>

        <div className="nav-links">
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("contact")}>Contact</span>
        </div>

        <button className="connect-btn">Connect Wallet</button>
      </div>
    </nav>
  );
}

export default Navbar;
