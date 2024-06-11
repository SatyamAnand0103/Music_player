import React from "react";
import { useState } from "react";
import { musicList } from "./MasterPlay";
import { emotionalList } from "./EmotionalList";
import { weddingList } from "./WeddingList";

function Header() {
  let [currentPlayList, setCurrentPlayList] = useState(musicList);
  let [value, setValue] = useState("");
  let textOnSearch = (e) => {
    setValue(e.target.value);
  };
  console.log(value);

  let Search_song = () => {
    document.getElementById("detailsBox").style.display = "block";

    setInterval(() => {
      document.getElementById("detailsBox").style.display = "none";
    }, 12000);

    if (value === "") {
      document.getElementById("detailsBox").innerHTML =
        "Search Song in Search Bar !";
    } else {
      for (let i = 0; i < 21; i++) {
        if (musicList[i].name.toLowerCase().includes(value.toLowerCase())) {
          setCurrentPlayList(musicList);
          document.getElementById("detailsBox").innerHTML =
            "Song is present in My PlayList Songs on " +
            currentPlayList[i].id +
            " position";

          break;
        } else if (
          weddingList[i].name.toLowerCase().includes(value.toLowerCase())
        ) {
          setCurrentPlayList(weddingList);
          document.getElementById("detailsBox").innerHTML =
            "Song is present in Wedding Songs on " +
            currentPlayList[i].id +
            " position";
          break;
        } else if (
          emotionalList[i].name.toLowerCase().includes(value.toLowerCase())
        ) {
          setCurrentPlayList(emotionalList);
          document.getElementById("detailsBox").innerHTML =
            "Song is present in Emotional Songs on " +
            currentPlayList[i].id +
            " position";

          break;
        } else if (
          !musicList[i].name.toLowerCase().includes(value) ||
          !weddingList[i].name.toLowerCase().includes(value) ||
          !emotionalList[i].name.toLowerCase().includes(value)
        ) {
          document.getElementById("detailsBox").innerHTML =
            "song does not found !";
        }
      }
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
        <div id="detailsBox"> </div>
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
