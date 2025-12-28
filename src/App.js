import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import PopularArtists from "./components/PopularArtists";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Trending />
              <PopularArtists />
              <AboutSection />
              <ContactSection />
              <Footer />
            </>
          }
        />

        
      </Routes>
    </Router>
  );
}

export default App;
