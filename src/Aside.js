import React, { useState } from "react";
import { musicList } from "./MasterPlay";
import { weddingList } from "./WeddingList";
import { emotionalList } from "./EmotionalList";
import BottomBox from "./BottomBox"; // Import the new component
import Header from "./Header";
import PopUp from "./PopUp";

let a = document.getElementsByClassName("PlayIcon");
let b = document.getElementsByClassName("myAudios");
let e = document.getElementsByClassName("fadeImg");
let f = document.getElementsByClassName("displaySongBox");
let g = document.getElementsByClassName("SongDetails");

function Aside() {
  // React Hook UseStates:-
  // State to hold the current volume
  const [volume, setVolume] = useState(1); // Assuming the initial volume is  1 (100%)
  const [inputValue, setInputValue] = useState(""); // State to store input value

  let [idx_1, setIdx_1] = useState(0);
  let [index, setIndex] = useState(0);
  let [currentValue, setCurrentValue] = useState(0);
  let [currentPlayList, setCurrentPlayList] = useState(musicList);
  let [currentTime, setCurrentTime] = useState(0);
  let [totalTime, setTotalTime] = useState(0);
  let [isPlaying, setIsPlaying] = useState(false);
  const [prevSongIndex, setPrevSongIndex] = useState(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  let inds = 0;

  let Playlist_1 = () => {
    setCurrentPlayList(weddingList);
  };

  let Playlist_2 = () => {
    setCurrentPlayList(emotionalList);
  };
  let Playlist_3 = () => {
    setCurrentPlayList(musicList);
  };

  // forward and backward:-
  const OneForward = () => {
    // Calculate the next index
    let nextIndex = (currentSongIndex + 1) % currentPlayList.length;
    // Update the previous song index
    setPrevSongIndex(currentSongIndex);
    // Update the current song index
    setCurrentSongIndex(nextIndex);
    // Play the next song
    if (nextIndex >= 12) H_Select_Play(nextIndex);
    else V_selectAndPlay(nextIndex);
  };

  // Function to play the previous song:-
  const OneBackward = () => {
    // Use the previous song index to play the previous song
    if (prevSongIndex !== null) {
      // Update the current song index
      setCurrentSongIndex(prevSongIndex);
      // Play the previous song
      if (prevSongIndex >= 12) {
        H_Select_Play(prevSongIndex);
      } else {
        V_selectAndPlay(prevSongIndex);
      }
    }
  };

  // Add this function to update the current playlist
  const handleSearchChange = (newPlaylist) => {
    setCurrentPlayList(newPlaylist);
    setCurrentSongIndex(0); // Optionally reset to the first song
    setIsPlaying(false); // Pause the song if you switch playlists
  };

  // verticall songs on left //--------------------------------
  const V_selectAndPlay = (i) => {
    setIdx_1(i);

    console.log(i + 1 + " song is selected and is playing");
    ///// To find the timings of songs/////
    setTotalTime(b[i].duration.toFixed(2));

    for (let k = 0; k < currentPlayList.length; k++) {
      b[k].pause();
    }

    for (let k = 0; k < 9; k++) {
      if (i < 12)
        document.getElementsByClassName("SongsitemInLine")[
          k
        ].style.borderBottom = "0px solid black";
    }

    for (let n = 0; n < 12; n++) {
      a[n].src = require("./images/mainplay.png");

      document.getElementsByClassName("songsItem")[n].style.backgroundColor =
        "#0b0f12";
    }
    document.getElementsByClassName("songsItem")[i].style.backgroundColor =
      "#202230";

    if (i < 11) {
      document.getElementsByClassName("SongsitemInLine")[8].style.borderBottom =
        "0px solid black";
    }
    for (let n = 0; n <= 8; n++) {
      e[n].src = require("./images/icon.png");
    }

    f[0].style.display = "block";
    f[0].src = currentPlayList[i].imgPath;
    g[0].innerHTML =
      currentPlayList[i].name +
      "<br>" +
      currentPlayList[i].artist +
      " , " +
      " " +
      currentPlayList[i].movie;
    document.getElementById("back_2").style.display = "block";
    document.getElementById("back_2").style.backgroundImage =
      "images/haunted.webp"; //currentPlayList[i].imgPath;

    a[i].src = require("./images/pausebutton.png");
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");
    b[i].load();

    // Update the current song index
    setCurrentSongIndex(i);
    b[i].play();

    if (i !== 0) {
      setPrevSongIndex(i - 1);
    }

    setIsPlaying(true);
    b[i].ontimeupdate = () => {
      setCurrentTime(b[i].currentTime);
      // setCurrentTime(b[i].currentTime);

      //console.log(b[i].duration.toFixed(2) + " ye chal raha hai");
      //console.log(b[i].currentTime.toFixed(2) + "Ye bhi chal rah hai");

      // When song is finished in Vertical Playlist :-
      if (b[i].currentTime.toFixed(2) === b[i].duration.toFixed(2)) {
        b[i].pause();
        a[i].src = require("./images/mainplay.png");
        document.getElementById(
          "masterPlay"
        ).src = require("./images/playbtn.png");
        document.getElementById("vibration").src = require("./images/bb.jpg");
      }

      let percentagePlayed;
      // setCurrentValue(
      percentagePlayed = (b[i].currentTime / b[i].duration) * 100;
      // );
      // console.log("percentagePlayed==>" + percentagePlayed);
      // Update the progress bar value
      document.getElementById("ProgressBar").value = percentagePlayed;
    };

    b[i].onended = () => {
      setIsPlaying(false);
    };

    document.getElementById(
      "masterPlay"
    ).src = require("./images/pausebtn.png");
    inds = i;
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

  // Horizontal song play and pause...
  const H_Select_Play = (i) => {
    // Update the current song index
    setIdx_1(i);
    setCurrentSongIndex(i);
    for (let k = 0; k < 9; k++) {
      document.getElementsByClassName("SongsitemInLine")[k].style.borderBottom =
        "0px solid black";
    }

    for (let k = 0; k < 12; k++) {
      if (i > 11) {
        document.getElementsByClassName("songsItem")[k].style.backgroundColor =
          "#0b0f12";
      }
    }
    document.getElementsByClassName("SongsitemInLine")[
      i - 12
    ].style.borderBottom = "2px solid white";

    console.log(i + 1 + " song is selected and is playing");

    ///// To find the timings of songs/////
    setTotalTime(b[i].duration.toFixed(2) || 0);

    setIsPlaying(true);
    b[i].ontimeupdate = () => {
      setCurrentTime(b[i].currentTime);

      // When song is finished in Horizontal Playlist :-
      if (b[i].currentTime.toFixed(2) === b[i].duration.toFixed(2)) {
        b[i].pause();
        e[i - 12].src = require("./images/icon.png");
        document.getElementById(
          "masterPlay"
        ).src = require("./images/playbtn.png");
        document.getElementById("vibration").src = require("./images/bb.jpg");
      }

      const percentagePlayed = (b[i].currentTime / b[i].duration) * 100;
      // Update the progress bar value
      document.getElementById("ProgressBar").value = percentagePlayed;
    };
    b[i].onended = () => {
      setIsPlaying(false);
    };

    // console.log(currentTime + " update or not !");
    for (let k = 0; k < currentPlayList.length; k++) {
      b[k].pause();
    }

    document.getElementById(
      "masterPlay"
    ).src = require("./images/pausebtn.png");

    for (let n = 0; n < 12; n++) {
      a[n].src = require("./images/mainplay.png");
    }

    for (let m = 0; m < 10; m++) {
      if (i == 12) {
        e[0].src = require("./images/icon2.png");

        e[m].src = require("./images/icon.png");
      } else if (i == 13) {
        e[1].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 14) {
        e[2].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 15) {
        e[3].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 16) {
        e[4].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 17) {
        e[5].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 18) {
        e[6].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 19) {
        e[7].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      } else if (i == 20) {
        e[8].src = require("./images/icon2.png");
        e[m].src = require("./images/icon.png");
      }
    }
    b[i].load();
    b[i].play();
    f[0].style.display = "block";
    document.getElementById("vibration").style.display = "block";
    document.getElementById("vibration").src = require("./images/ab.gif");
    f[0].src = currentPlayList[i].imgPath;
    g[0].innerHTML =
      currentPlayList[i].name +
      "<br>" +
      currentPlayList[i].artist +
      " , " +
      " " +
      currentPlayList[i].movie;
    inds = i;
  };

  //masterplay:-

  let togglePlayPause = (inds) => {
    // Update the current song index
    setCurrentSongIndex(inds);
    //console.log(b[inds].duration);
    setTotalTime(b[inds].duration.toFixed(2));

    setIsPlaying(true);
    b[inds].ontimeupdate = () => {
      setCurrentTime(b[inds].currentTime);
      //When no song is selected an default song has player:-

      if (b[inds].currentTime.toFixed(2) == b[inds].duration.toFixed(2)) {
        b[inds].pause();
        document.getElementById(
          "masterPlay"
        ).src = require("./images/playbtn.png");
        document.getElementById("vibration").src = require("./images/bb.jpg");
        a[inds].src = require("./images/mainplay.png");
      }

      const percentagePlayed = (b[inds].currentTime / b[inds].duration) * 100;
      // Update the progress bar value
      document.getElementById("ProgressBar").value = percentagePlayed;
    };
    b[inds].onended = () => {
      setIsPlaying(false);
    };

    console.log(inds);

    for (let k = 0; k < currentPlayList.length; k++) {
      if (inds == k) {
        if (isPlaying == false) {
          document.getElementById(
            "masterPlay"
          ).src = require("./images/pausebtn.png");
          document.getElementById("vibration").src = require("./images/ab.gif");

          document.getElementById(
            "masterPlay"
          ).src = require("./images/pausebtn.png");
          if (inds > 11) {
            e[inds - 12].src = require("./images/icon2.png");
          }
          if (inds <= 11) {
            a[inds].src = require("./images/pausebutton.png");
          }

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

          if (inds > 11) {
            e[inds - 12].src = require("./images/icon.png");
          }
          if (inds <= 11) {
            a[inds].src = require("./images/mainplay.png");
          }

          b[k].pause();

          setIsPlaying(false);
        }
        console.log(inds + 1 + " song is playing. Got it in Masterplay!");
      }
    }

    // Download Song
    const audioSource = b[inds].src; // Assuming b[inds] is the audio element
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = audioSource; // Set the song file URL to the download button
    downloadLink.download = `song${inds + 1}.mp3`; // Dynamically set the filename
  };
  const handleProgressBarChange = (e) => {
    const percentage = e.target.value; // Get the percentage from the progress bar
    const newTime = (percentage / 100) * totalTime; // Calculate the corresponding time
    b[currentSongIndex].currentTime = newTime; // Update the song to the new time
  };

  const handleVolumeChange = (event) => {
    // Get the new volume from the input value
    const newVolume = parseFloat(event.target.value);

    // Update the audio volume and the input value
    b[idx_1].volume = newVolume;

    // Update the state to reflect the new volume
    setVolume(newVolume);

    // Optional: Update another visual representation of the volume if needed
    document.getElementById("range_2").value = newVolume; // This might not be necessary since you're already binding value
  };
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // Vertical song in a playlist:-
  const listItems_1 = currentPlayList
    .filter(function (eachSong) {
      return eachSong.id < 13;
    })
    .map((eachSong, index) => (
      <div
        key={index}
        className="songsItem"
        onClick={() => V_selectAndPlay(index)}
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
          <img src={eachSong.playImgPath} className="PlayIcon"></img>
          <audio className="myAudios" src={eachSong.audioPath}></audio>;
        </div>
      </div>
    ));

  //  Horizontal song playing:-
  let listItems_2 = currentPlayList
    .filter(function (eachSong) {
      return eachSong.id >= 13;
    })
    .map((eachSong, index) => (
      <div
        key={index}
        className="SongsitemInLine"
        onClick={() => H_Select_Play(index + 12)}
        onMouseEnter={() => onIn(index)}
        onMouseLeave={() => onOut(index)}
      >
        <img src={eachSong.imgPath} className="songs_img"></img>
        <h5>{eachSong.name} </h5>
        <h6>{eachSong.artist}</h6>

        <div className="OnFading">
          <img src={require("./images/icon.png")} className="fadeImg"></img>
          <audio className="myAudios" src={eachSong.audioPath}></audio>;
        </div>
      </div>
    ));

  return (
    <>
      <Header inputValue={inputValue} onPlaylistChange={handleSearchChange} />
      <PopUp onInputChange={handleInputChange} />

      <div className="MusicListBigBox">
        <div id="back_2"></div>
        <div className="OnlyMusicList">
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
          <img src={require("./images/gifs.webp")} id="AlanWalkerImg"></img>
          {/* <img src={require("./images/faded.webp")} id="AlanWalkerImg2"></img> */}

          {/* <img src={require("./images/faded2.jpg")} id="AlanWalkerImg3"></img> */}

          <div className="dropBox">
            <span className="PlaylistHeading">Playlist</span>

            <div onClick={Playlist_1}>
              {" "}
              ○ &nbsp;<i>Wedding Songs</i>
            </div>
            <div onClick={Playlist_2}>
              {" "}
              ○ &nbsp; <i>Emotional Songs</i>
            </div>
            <div onClick={Playlist_3}>
              {" "}
              ○ &nbsp; <i>My Playlist Songs</i>
            </div>
          </div>

          <div className="Buttons_2">
            <button className="button" id="btn1">
              play
            </button>
            <button className="button" id="btn2">
              follow
            </button>
          </div>
          <div className="SongQuote">
            You were the shadow to my light Did you feel us? Another star, you
            fade away Afraid our aim is out of sight Wanna see us alight
          </div>
          <div className="PopularSongs"> Popular Songs</div>

          {/* ----------------------Horizontal Song Display------------------------ */}

          <div className="SongsinLine">
            {listItems_2}
            <div className="OnFading">
              <img src={require("./images/icon.png")} className="fadeImg"></img>
            </div>
          </div>
        </div>
      </div>

      <BottomBox
        togglePlayPause={togglePlayPause}
        currentTime={currentTime}
        totalTime={totalTime}
        volume={volume}
        OneBackward={OneBackward}
        OneForward={OneForward}
        handleVolumeChange={handleVolumeChange}
        handleProgressBarChange={handleProgressBarChange}
        index={index} // Pass current index
        idx_1={idx_1} // Pass next song index
        currentValue={currentValue} // Pass current time value
      />
    </>
  );
}
export default Aside;
