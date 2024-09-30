import React from "react";

const BottomBox = ({
  togglePlayPause,
  currentTime,
  totalTime,
  volume,
  OneBackward,
  OneForward,
  handleVolumeChange,
  handleProgressBarChange,
  index,
  idx_1,
  currentValue,
}) => {
  // To convert time into a formated time with minutes and seconds:-

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60); ///5.653
    let extraSeconds = Math.floor(seconds % 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
    let total = minutes + ":" + extraSeconds;
    console.log(minutes, extraSeconds);
    return total;
  }

  return (
    <>
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

        <div>
          {/* Download Button */}

          <div id="DownloadOption">
            <a id="downloadLink" download="song.mp3">
              <img src={require("./images/downld.gif")} alt="Download" />
            </a>
          </div>

          <div id="musicIcon">
            <img src={require("./images/music icon.png")}></img>
          </div>
          <div id="soundIcon">
            <img src={require("./images/soundIcon.png")}></img>
            {/* ----------------------------------------- */}
            <input
              type="range"
              min="0"
              max="1"
              value={volume} // Bind the volume state here
              step="0.1"
              id="range_2"
              onChange={handleVolumeChange} // Change to onChange
            />
          </div>

          <div className="Range">
            <div id="initials_Timings">{formatTime(currentTime)}</div>

            <input
              type="range"
              min="0"
              max="100"
              value={currentValue || 0}
              step="0.1"
              id="ProgressBar"
              onChange={handleProgressBarChange} // Use the new function to update time
            />

            <div id="song_Timings">{formatTime(totalTime)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomBox;
