import React from "react";
import { useState } from "react";
import { musicList } from "./MasterPlay";
let a = document.getElementsByClassName("PlayIcon");
let b = document.getElementsByClassName("myAudios");
let e = document.getElementsByClassName("fadeImg");
let f = document.getElementsByClassName("displaySongBox");
let g = document.getElementsByClassName("SongDetails");

function Aside() {
  let [idx_1, setIdx_1] = useState(0);
  let [index, setIndex] = useState(0);
  let [initials_Timings, setInitials_Timings] = useState(0);

  let [isPlaying, setIsPlaying] = useState(false);
  let inds = 0;

  const selectAndPlay = (i) => {
    setIdx_1(i);
    console.log(i);

    const audio = new Audio(b[i].audioPath);
    audio.play();
    console.log(audio.currentTime + " sssss");

    console.log(b[i] + "  song");
    ///// To find the timings of songs/////
    let running_Time = b[i].duration;
    document.getElementById("song_Timings").innerHTML = (
      running_Time / 60
    ).toFixed(2);

    // let current_timing = b[i].currentTime.toFixed(2);
    // console.log(current_timing + " current Timing");
    // console.log(setInitials_Timings(audio.currentTime));
    // console.log((initials_Timings = { setInitials_Timings }));

    //   audio.src = songURL;
    //   audio.play();
    // }

    // function seek(value) {
    //   audio.currentTime = value;
    // }

    for (let k = 0; k < musicList.length; k++) {
      b[k].pause();
    }
    document.getElementsByClassName("songsItem")[i].style.backgroundColor =
      "#202230";
    f[0].style.display = "block";
    f[0].src = musicList[i].imgPath;
    g[0].innerHTML =
      musicList[i].name +
      "<br>" +
      musicList[i].artist +
      " , " +
      " " +
      musicList[i].movie;
    console.log(i + " song is selected");
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");
    b[i].play();
    console.log(b[i].currentTime + " song is playing ____");
    document.getElementById(
      "masterPlay"
    ).src = require("./images/pausebtn.png");
    inds = i;
    console.log(i + " for abc ");
  };

  /////////////////////////////////////////////////////////

  // mouseIn Event On Horizontal music list...
  let onIn = (i) => {
    // console.log(i + 13 + "hover on ");
    e[i].style.display = "block";
  };
  // mouseOut Event On Horizontal music list...

  let onOut = (i) => {
    e[i].style.display = "none";
    // console.log(i + 13 + " " + "Left from");
  };
  ////////////////////////////////////////////////////////////

  // Horizontal song play and pause...
  const abcd = (i) => {
    setIdx_1(i);
    console.log(i);

    ///// To find the timings of songs/////
    let running_Time = b[i].duration;
    document.getElementById("song_Timings").innerHTML = (
      running_Time / 60
    ).toFixed(2);

    for (let k = 0; k < musicList.length; k++) {
      b[k].pause();
    }
    document.getElementById(
      "masterPlay"
    ).src = require("./images/pausebtn.png");
    for (let m = 0; m < 10; m++) {
      if (i == 12) {
        e[0].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 13) {
        e[1].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 14) {
        e[2].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 15) {
        e[3].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 16) {
        e[4].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 17) {
        e[5].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 18) {
        e[6].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 19) {
        e[7].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      } else if (i == 20) {
        e[8].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.jpg");
      }
    }
    b[i].load();
    b[i].play();
    f[0].style.display = "block";
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");
    f[0].src = musicList[i].imgPath;
    g[0].innerHTML =
      musicList[i].name +
      "<br>" +
      musicList[i].artist +
      " , " +
      " " +
      musicList[i].movie;
    inds = i;
  };
  /////// for forward and backward/////////////////////
  let OneForward = (inds) => {
    // setIndex(inds + 1);
    // console.log("for forward " + inds);
  };
  let OneBackward = (inds) => {
    // setIndex(inds - 1);
    // console.log("for backward " + inds);
  };

  //masterplay-----------------------------------------
  let togglePlayPause = (inds) => {
    console.log(b[inds].duration);
    for (let k = 0; k < musicList.length; k++) {
      if (inds == k) {
        if (isPlaying == false) {
          document.getElementById(
            "masterPlay"
          ).src = require("./images/pausebtn.png");
          document.getElementById("vibration").src = require("./images/ab.gif");
          document.getElementById(
            "masterPlay"
          ).src = require("./images/pausebtn.png");
          b[k].play();
          setIsPlaying(true);
        } else {
          document.getElementById(
            "masterPlay"
          ).src = require("./images/playbtn.png");
          document.getElementById("vibration").style.display = "block";
          document.getElementById("vibration").src = require("./images/bb.jpg");
          document.getElementById(
            "masterPlay"
          ).src = require("./images/playbtn.png");
          b[k].pause();
          setIsPlaying(false);
        }
        console.log(inds + " song is playing. Got it !");
      }
    }
  };

  //vertical song in a playlist//
  const listItems_1 = musicList
    .filter(function (eachSong) {
      return eachSong.id < 13;
    })
    .map((eachSong, index) => (
      <div
        key={index}
        className="songsItem"
        onClick={() => selectAndPlay(index)}
      >
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
          {/* <img src={eachSong.playImgPath} className="PlayIcon"></img> */}
          <audio className="myAudios" src={eachSong.audioPath}></audio>;
        </div>
      </div>
    ));

  // for hiorizontal song playing//

  let listItems_2 = musicList
    .filter(function (eachSong) {
      return eachSong.id >= 13;
    })
    .map((eachSong, index) => (
      <div
        key={index}
        className="SongsitemInLine"
        onClick={() => abcd(index + 12)}
        onMouseEnter={() => onIn(index)}
        onMouseLeave={() => onOut(index)}
      >
        <img src={eachSong.imgPath} className="songs_img"></img>
        <h5>{eachSong.name} </h5>
        <h6>{eachSong.artist}</h6>

        <div className="OnFading">
          <img src={require("./images/icon.jpg")} className="fadeImg"></img>
          <audio className="myAudios" src={eachSong.audioPath}></audio>;
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
            src={require("./images/backwardd.jpeg")}
            id="backwardicon"
            onClick={() => OneBackward(index)}
          ></img>
          <img
            src={require("./images/playbtn.png")}
            className="PlayPauseicon"
            id="masterPlay"
            onClick={() => togglePlayPause(idx_1)}
          ></img>
          <img
            src={require("./images/forwardd.jpeg")}
            id="forwardicon"
            onClick={() => OneForward(index)}
          ></img>
        </div>

        <div className="displaySongPoster">
          <img
            className="displaySongBox"
            src={require("./images/haunted.webp")}
          ></img>
          <img src={require("./images/bb.jpg")} id="vibration"></img>
        </div>
        <div className="SongDetails">
          Tera Hi Bus Hona Chaahoon
          <br></br>
          JoJo , Haunted
        </div>
        <div id="musicIcon">
          <img src={require("./images/music icon.png")}></img>
        </div>
        <div id="soundIcon">
          <img src={require("./images/soundIcon.png")}></img>
          <input
            type="range"
            min="0"
            max="200"
            value="100"
            steps="1"
            id="range_2"
          ></input>
        </div>
        <div className="Range" value="0">
          <input
            type="range"
            min="0"
            max="100"
            value="10"
            step="10"
            id="ProgressBar"
          ></input>
          <div className="Timings">
            <div id="initials_Timings">00.00</div>
            <div id="song_Timings">05.65</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aside;
