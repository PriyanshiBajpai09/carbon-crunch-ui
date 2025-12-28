import "./PopularArtists.css";

function PopularArtists() {
  return (
    <section className="popular-artists">
      <div className="artists-header">
        <h2>Popular Artists</h2>
        <button>View all artists</button>
      </div>

      <div className="artists-list">
        <div className="artist">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" />
          <p>Ferhat Deniz</p>
        </div>

        <div className="artist">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
          <p>Sebastian</p>
        </div>

        <div className="artist">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
          <p>Javier Miranda</p>
        </div>

        <div className="artist">
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="" />
          <p>Erick Butler</p>
        </div>
      </div>
    </section>
  );
}

export default PopularArtists;
