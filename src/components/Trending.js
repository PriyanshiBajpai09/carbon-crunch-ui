import "./Trending.css";

function Trending() {
  return (
    <section className="trending-section">
   
      <div className="trending-header">
        <h2>Trending This Week</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur dolore adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Content */}
      <div className="trending-content">
        {/* LEFT COLUMN */}
        <div className="trending-left">
          <div className="trending-item large">
            <div className="item-info">
              <h4>Sebastian</h4>
              <span>Golden Flower</span>
              <b>2.3 ETH</b>
            </div>
            <img
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb"
              alt="NFT"
            />
          </div>

          <div className="trending-item medium">
            <div className="item-info">
              <h4>Javier Miranda</h4>
              <span>Golden Flower</span>
              <b>2.3 ETH</b>
            </div>
            <img
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
              alt="NFT"
            />
          </div>

          <div className="trending-item medium">
            <div className="item-info">
              <h4>Milad Fakurian</h4>
              <span>Golden Flower</span>
              <b>2.3 ETH</b>
            </div>
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="NFT"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="trending-right">
          <div className="trending-item tall">
            <div className="item-info">
              <h4>Ferhat Deniz</h4>
              <span>Golden Flower</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
              alt="NFT"
            />
          </div>

          <div className="trending-item tall">
            <div className="item-info">
              <h4>Polina Kondrashova</h4>
              <span>Golden Flower</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="NFT"
            />
          </div>

          <div className="trending-item tall">
            <div className="item-info">
              <h4>Enrick Butler</h4>
              <span>Golden Flower</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              alt="NFT"
            />
          </div>
        </div>
      </div>

      <div className="explore-more-wrapper">
        <button className="explore-more-btn">Explore More</button>
      </div>
    </section>
  );
}

export default Trending;
