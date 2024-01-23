import React from "react";

function Header() {
  return (
    <>
      <div className="containerBox">
        <div className="MusicIcon">
          <img src={require("./images/WynkMusicIcon.png")}></img>
          <p>Wynk Music</p>
        </div>

        <div className="searchBox">
          <input type="search" placeholder="Search for the Music..."></input>
          <img src={require("./images/search.jpg")}></img>
        </div>
      </div>
      <div className="Listofitems">
        <a href="https://wynk.in/music">
          <div>All</div>
        </a>
        <a href="https://wynk.in/music/package/trending-in-hindi/amsta_4jf452131595580528558?ref=sub_header">
          <div>Trending Now</div>
        </a>

        <a href="https://wynk.in/music/list/old-songs/bb_1579060284409?ref=sub_header">
          {" "}
          <div> Old Songs</div>
        </a>

        <a href="https://wynk.in/music/list/new-releases/amhyb_vnow19351643796144680?ref=sub_header">
          <div>New Songs</div>
        </a>

        <a href="https://wynk.in/music/albums/hindi?ref=sub_header">
          {" "}
          <div> Top Albums</div>
        </a>
      </div>
    </>
  );
}

export default Header;
