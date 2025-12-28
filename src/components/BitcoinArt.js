// import "./Bitcoin.css";

function BitcoinArt() {
  return (
    <section className="bitcoin-section">
      
      <div className="bitcoin-inner">

        <div className="bitcoin-left">
          <img
            src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c"
            alt="Bitcoin Art"
          />
        </div>

        <div className="bitcoin-right">
          <h2>
            Bitcoin <br /> Art Work
          </h2>

          <p className="creator">
            Created by <span>Jonathan Borba</span>
          </p>

          <div className="auction-info">
            <div>
              <p className="label">Current Bid</p>
              <h3>1.09 ETH</h3>
              <span>$1,835</span>
            </div>

            <div className="divider"></div>

            <div>
              <p className="label">Auction Ends In</p>
              <h3>18 : 57</h3>
              <span>Hours&nbsp;&nbsp;&nbsp;Minutes</span>
            </div>
          </div>

          <button className="view-btn">
            View Art Work ↗
          </button>
        </div>

      </div>
    </section>
  );
}

export default BitcoinArt;
