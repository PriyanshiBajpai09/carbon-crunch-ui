import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Discover Rare <br />
          Collections Of <br />
          Art & NFT’s
        </h1>

        <p>
          Create, Explore, & Collect Digital Art NFTs
        </p>

        <button className="explore-btn">EXPLORE</button>

        <div className="stats">
          <div>
            <h3>32k+</h3>
            <span>Artwork</span>
          </div>
          <div>
            <h3>20k+</h3>
            <span>Auction</span>
          </div>
          <div>
            <h3>10k+</h3>
            <span>Artist</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="nft-card back"></div>
        <div className="nft-card front"></div>
      </div>
    </section>
  );
}

export default Hero;
