import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
// import CarouselPage from "./CarouselPage";
// import Aside from "./Aside";
// import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loading from "./Loading";
import MusicPlayer from "./MusicPlayer";
import { useState } from "react";

function App() {
  return (
    <>
      <Router>
        {/* <CarouselPage />
        <Aside />
        <Footer />
        <MusicPlayer /> */}
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/musicPlayer" element={<MusicPlayer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
