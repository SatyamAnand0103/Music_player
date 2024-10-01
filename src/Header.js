import React, { useState } from "react";
import { musicList } from "./MasterPlay";
import { emotionalList } from "./EmotionalList";
import { weddingList } from "./WeddingList";

function Header({ onPlaylistChange, inputValue }) {
  let [value, setValue] = useState("");
  let [isvisible, setIsvisible] = useState(false);
  let [details, setDetails] = useState("");

  let textOnSearch = (e) => {
    setValue(e.target.value);
  };

  let Search_song = () => {
    // alert("Its working here");

    setIsvisible(true);
    setTimeout(() => {
      setIsvisible(false);
    }, 12000);

    // };

    if (value === "") {
      setDetails("Search Song in Search Bar !");
    }
    // for (let i = 0; i < 21; i++) {

    let foundSong = musicList.find((song) =>
      song.name.toLowerCase().includes(value.toLowerCase())
    );

    if (foundSong) {
      onPlaylistChange(musicList);
      setDetails(
        "Song is present in My PlayList Songs on " +
          (musicList.indexOf(foundSong) + 1) +
          " " +
          "Position"
      );
      // currentPlayList[i].id +
      // " position";
      return;
    }

    let foundWedSong = weddingList.find((song) =>
      song.name.toLowerCase().includes(value.toLowerCase())
    );

    if (foundWedSong) {
      onPlaylistChange(weddingList);
      setDetails(
        "Song is present in Wedding Songs on " +
          (weddingList.indexOf(foundWedSong) + 1) +
          " " +
          "Position"
      );
      // currentPlayList[i].id +
      // " position";
      return;
    }

    let foundEmotSong = emotionalList.find((song) =>
      song.name.toLowerCase().includes(value.toLowerCase())
    );

    if (foundEmotSong) {
      onPlaylistChange(emotionalList);
      setDetails(
        "Song is present in Emotional Songs on " +
          (emotionalList.indexOf(foundEmotSong) + 1) +
          " " +
          "Position"
      );
      // currentPlayList[i].id +
      // " position";
      return;
    }
    // !musicList.find((song) => song.name.toLowerCase().includes(value)) ||
    // !weddingList.find((song) => song.name.toLowerCase().includes(value)) ||
    // !emotionalList.find((song) => song.name.toLowerCase().includes(value))
    else {
      setDetails("song does not found !");
    }
  };
  return (
    <>
      <div className="containerBox">
        <div className="MusicIcon">
          <img src={require("./images/WynkMusicIcon.png")}></img>
          <p>Tor Toise Music</p>
        </div>

        <input
          type="search"
          placeholder="Search for the Music..."
          value={value}
          onChange={textOnSearch}
        ></input>
        <div className="searchBox" onClick={Search_song}>
          <img src={require("./images/search.jpg")}></img>
        </div>

        {isvisible && (
          <div id="detailsBox" style={{ display: "block" }}>
            {details}{" "}
          </div>
        )}
        <div id="PopUpShow">Welcome {inputValue.toUpperCase() + "👦"}</div>
      </div>

      {/* <div className="Listofitems">
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
      </div> */}
    </>
  );
}

export default Header;
