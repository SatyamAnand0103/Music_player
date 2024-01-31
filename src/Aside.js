import React from "react";
import { musicList_1, musicList_2 } from "./File";
// import { OneBackward, Oneforward } from "./MasterPlay";
let a = document.getElementsByClassName("PlayIcon");
let b = document.getElementsByClassName("myAudios_1");
let d = document.getElementsByClassName("myAudios_2");
let e = document.getElementsByClassName("fadeImg");
let f = document.getElementsByClassName("displaySongBox");
let g = document.getElementsByClassName("SongDetails");

function Aside() {
  //Vertical songs list play and pause...
  let masterPlaybtn = () => {};
  const abc = (i) => {
    // console.log(i + 1 + " song is selected");
    for (let j = 0; j < musicList_1.length; j++) {
      if (i == j) {
        a[i].src = require("./images/pause_2.png");
        b[i].load();
        b[i].play();

        document.getElementById(
          "masterPlay"
        ).src = require("./images/pausebtn.png");
      } else {
        a[j].src = require("./images/play.png");
        b[j].pause();
      }
    }
    for (let m = 0; m < musicList_2.length; m++) {
      e[m].src = require("./images/icon.jpg");
      d[m].pause();
    }
    f[0].style.display = "block";
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");

    f[0].src = musicList_1[i].imgPath;
    g[0].innerHTML =
      musicList_1[i].name +
      "<br>" +
      musicList_1[i].artist +
      " , " +
      " " +
      musicList_1[i].movie;
  };
  /////////////////////////////////////////////////////////

  // mouseIn Event On Horizontal music list...
  let onIn = (j) => {
    console.log(j + 12 + "hover on ");
    e[j].style.display = "block";
  };
  // mouseOut Event On Horizontal music list...

  let onOut = (j) => {
    e[j].style.display = "none";
    //e[j].style.transition = " ease-out 1s";

    console.log(j + 12 + " " + "Left from");
  };
  ////////////////////////////////////////////////////////////

  // Horizontal song play and pause...
  const abcd = (j) => {
    console.log(j + 12 + " " + " song is selected");

    for (let k = 0; k < musicList_2.length; k++) {
      if (j == k) {
        e[j].src = require("./images/icon2.png");
        d[j].play();
      } else {
        e[k].src = require("./images/icon.jpg");
        d[k].pause();
      }
    }
    for (let m = 0; m < musicList_1.length; m++) {
      a[m].src = require("./images/play.png");
      b[m].pause();
    }

    f[0].style.display = "block";
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");

    f[0].src = musicList_2[j].imgPath;
    g[0].innerHTML =
      musicList_2[j].name +
      "<br>" +
      musicList_2[j].artist +
      " , " +
      " " +
      musicList_2[j].movie;
  };

  //vertical song in a playlist//

  const listItems_1 = musicList_1.map((eachSong, index) => (
    <div key={index} className="songsItem" onClick={() => abc(index)}>
      <span> {eachSong.id}</span>
      <div>
        <img src={eachSong.imgPath}></img>
      </div>
      <div className="SongNameBox">
        <h5>{eachSong.name}</h5>
        <br />
        <h6> {eachSong.artist}</h6>
      </div>
      <div>
        <img src={eachSong.playImgPath} className="PlayIcon"></img>
        <audio className="myAudios_1" src={eachSong.audioPath}></audio>;
      </div>
    </div>
  ));

  // for hiorizontal song playing//

  let listItems_2 = musicList_2.map((eachSong, index) => (
    <div
      key={index}
      className="SongsitemInLine"
      onClick={() => abcd(index)}
      onMouseEnter={() => onIn(index)}
      onMouseLeave={() => onOut(index)}
    >
      <img src={eachSong.imgPath} className="songs_img"></img>
      <h5>{eachSong.name} </h5>
      <h6>{eachSong.artist}</h6>

      <div className="OnFading">
        <img src={require("./images/icon.jpg")} className="fadeImg"></img>
        <audio className="myAudios_2" src={eachSong.audioPath}></audio>;
      </div>
    </div>
  ));

  return (
    <>
      <div className="MusicListBigBox">
        <div className="OnlyMusicList">
          <div className="PlaylistHeading">Playlist</div>

          <div className="PlaylistIcon">
            <span>
              <img src={require("./images/music icon.png")}></img>
            </span>
            <p>Playlist</p>
          </div>

          <div className="SongsList">{listItems_1}</div>
        </div>

        <div className="MusicStuffs">
          <p>Music_Studio</p>
          <img src={require("./images/where.jpg")} id="AlanWalkerImg"></img>
          <img src={require("./images/faded.jpg")} id="AlanWalkerImg2"></img>

          <img src={require("./images/faded2.jpg")} id="AlanWalkerImg3"></img>

          <div className="SongQuote">
            You were the shadow to my light Did you feel us? Another star, you
            fade away Afraid our aim is out of sight Wanna see us alight
          </div>
          <div className="Buttons_2">
            <button className="button" id="btn1">
              play
            </button>
            <button className="button" id="btn2">
              follow
            </button>
          </div>
          <div className="PopularSongs"> Popular Songs</div>

          {/* ----------------------Horizontal Song Display------------------------ */}

          <div className="SongsinLine">
            {listItems_2}
            <div className="OnFading">
              <img src={require("./images/icon.jpg")} className="fadeImg"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomBox">
        <div className="AllIconsOfSongs">
          <img
            src={require("./images/backward.png")}
            id="backwardicon"
            // onClick={() => OneBackward(index)}
          ></img>
          <img
            src={require("./images/playbtn.png")}
            className="PlayPauseicon"
            id="masterPlay"
            onClick={() => masterPlaybtn()}
          ></img>
          <img
            src={require("./images/forward.png")}
            id="forwardicon"
            // onClick={() => Oneforward(index)}
          ></img>
        </div>

        <div className="displaySongPoster">
          <img className="displaySongBox"></img>
          <div></div>
          <img id="vibration"></img>
        </div>
        <div className="SongDetails"></div>
        <div className="Range" value="0">
          <input
            type="range"
            min="0"
            max="100"
            value="10"
            step="10"
            id="ProgressBar"
          ></input>
        </div>
      </div>
    </>
  );
}
export default Aside;
