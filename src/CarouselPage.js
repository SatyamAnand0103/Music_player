import React from "react";
// import Carousel from "react-bootstrap/Carousel";

function CarouselPage() {
  return (
    <>
      <div className="SlideShowBox">
        <marquee>
          <div className="carousel">
            <a href="https://wynk.in/music/playlist/bollywood-dance-dhamaaka-hindi-fb/bb_1457001085589">
              <img src={require("./images/Bollywood.webp")}></img>
            </a>
            <a href="https://wynk.in/music/artist/yo-yo-honey-singh/wa_64e10242?q=honey">
              <img src={require("./images/HipHop.webp")}></img>
            </a>
            <a href="https://wynk.in/music/playlist/beyond-bollywood-hindi-fb/bb_1557816945454">
              <img src={require("./images/bolly.webp")}></img>
            </a>
            <a href="https://wynk.in/music/playlist/latest-love-hits-hindi-fb/bb_1532508304760">
              {" "}
              <img src={require("./images/poll.webp")}></img>
            </a>
          </div>
        </marquee>
      </div>
    </>
  );
}
export default CarouselPage;
