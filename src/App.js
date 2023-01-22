import "./App.css";
import React from "react";
import Artists from "./pages/Artists/artists";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import About from "./pages/Aboutus/About";
import DashAbout from "./dashboardpages/About/DashAbout.js";
import DashArtists from "./dashboardpages/artists/artistsdash";
import ArtistPost from "./dashboardpages/artists/artistpost";
import DashArtWorks from "./dashboardpages/artworks/artworksDash";
import ArtworkPost from "./dashboardpages/artworks/artworkspost";
import Artworks from "./pages/Artworks/Artworks";
import DashHeroImage from "./dashboardpages/HeroImageHome/HeroImageDash";
import HeroImagePost from "./dashboardpages/HeroImageHome/HeroImagePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard/" element={<DashHeroImage />} />
          <Route path="/Dashboard/artworks" element={<DashArtWorks />} />
          <Route path="/Dashboard/artworks/post" element={<ArtworkPost />} />
          <Route path="/Dashboard/artists" element={<DashArtists />} />
          <Route path="/Dashboard/artists/post" element={<ArtistPost />} />
          <Route path="/Dashboard/aboutus" element={<DashAbout />} />
          <Route path="Dashboard/home/hero/post" element={<HeroImagePost />} />
        </Routes>
      </Router>
    </div>
  );
  /*test*/
}

export default App;
