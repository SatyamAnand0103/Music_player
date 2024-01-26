import React from "react";
import { musicList_1, musicList_2 } from "./File";
function Aside() {
  const abc = (i) => {
    console.log(i+1 + "  song is clicked!");
  };

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
      </div>
    </div>
  ));

  let listItems_2 = musicList_2.map((eachSong, index) => (
    <div key={index} className="SongsitemInLine">
      <img src={eachSong.imgPath} className="songs_img"></img>
      <h5>{eachSong.name} </h5>
      <h6>{eachSong.artist}</h6>

      <div className="OnFading">
        <img src={require("./images/icon.jpg")} className="fadeImg"></img>
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

      {/* <audio id="myAudios"></audio> */}
    </>
  );
}

export default Aside;
