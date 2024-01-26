import React from "react";
// import { MasterPlayOnLoad } from "./File";
function MasterPlay() {
  // let callme = () => {
  //   MasterPlayOnLoad();
  // };

  return (
    <>
      <div className="bottomBox">
        <div className="AllIconsOfSongs">
          <img
            src={require("./images/backward (3).jpeg")}
            className="backwardicon" //onClick={OneBackward}
          ></img>
          <img
            src={require("./images/mainplay.png")}
            className="PlayPauseicon"
            id="MasterPlay"
            // onClick={callme}
          ></img>
          <img
            src={require("./images/forward (2).jpeg")}
            className="forwardicon" //onClick={Oneforward}
          ></img>
        </div>
      

      <div className="displaySongPoster">
        <img src={require("./images/haunted.webp")} id="displaySongBox"></img>
        <div>
          <img src={require("./images/vvvv.gif")} id="vibration"></img>
        </div>
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

export default MasterPlay;
