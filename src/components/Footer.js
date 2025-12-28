import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>NFTme</h3>

        <ul className="footer-links">
          <li>Explore</li>
          <li>Marketplace</li>
          <li>Artists</li>
          <li>Contact</li>
        </ul>

        <div className="footer-icons">
          <span>📷</span>
          <span>f</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Privacy policy &nbsp; | &nbsp; Copyright @ Kartik Bansal 2022. All
          Rights Reserved. &nbsp; | &nbsp; Terms of service
        </p>
      </div>
    </footer>
  );
}

export default Footer;
