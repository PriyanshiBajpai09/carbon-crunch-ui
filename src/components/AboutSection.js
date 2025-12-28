import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Us</h2>

        <p>
          We are a digital art platform focused on showcasing unique NFT artwork
          created by talented artists from around the world.
        </p>

        <p>
          Our goal is to build a simple and transparent space where users can
          explore, discover and connect with digital art.
        </p>

        <div className="about-stats">
          <div>
            <h3>10K+</h3>
            <span>Artworks</span>
          </div>
          <div>
            <h3>3K+</h3>
            <span>Artists</span>
          </div>
          <div>
            <h3>50K+</h3>
            <span>Users</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
