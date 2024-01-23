import React from "react";

import {
  forlistOne,
  forlistTwo,
  forlistThree,
  forlistFour,
  forlistFive,
  forlistSix,
  forlistSeven,
  forlistEight,
  forlistNine,
  forlistTen,
  forlistEleven,
} from "./File.js";

import {
  Hoverfirst,
  Hoversecond,
  Hoverthird,
  Hoverfourth,
  Hoverfifth,
  Hoversixth,
  Hoverseventh,
  Hovereight,
  Hovernineth,
  Leavefirst,
  Leavefourth,
  Leavesecond,
  Leaveeight,
  Leavefifth,
  Leavesixth,
  Leavethird,
  Leavenineth,
  Leaveseventh,
  Hoz1,
  Hoz2,
  Hoz3,
  Hoz4,
  Hoz5,
  Hoz6,
  Hoz7,
  Hoz8,
  Hoz9,
} from "./File2.js";

function Aside() {
  // let callme = () => {
  //   MasterPlayOnLoad();
  // };

  let listOne = () => {
    forlistOne();
  };

  let listTwo = () => {
    forlistTwo();
  };

  let listThree = () => {
    forlistThree();
  };

  let listFour = () => {
    forlistFour();
  };

  let listFive = () => {
    forlistFive();
  };

  let listSix = () => {
    forlistSix();
  };

  let listSeven = () => {
    forlistSeven();
  };

  let listEight = () => {
    forlistEight();
  };

  let listNine = () => {
    forlistNine();
  };

  let listTen = () => {
    forlistTen();
  };

  let listEleven = () => {
    forlistEleven();
  };

  let HoverOnfirst = () => {
    Hoverfirst();
  };
  let LeaveOnfirst = () => {
    Leavefirst();
  };

  let HoverOnsecond = () => {
    Hoversecond();
  };
  let LeaveOnsecond = () => {
    Leavesecond();
  };

  let HoverOnthird = () => {
    Hoverthird();
  };
  let LeaveOnthird = () => {
    Leavethird();
  };

  let HoverOnfourth = () => {
    Hoverfourth();
  };
  let LeaveOnfourth = () => {
    Leavefourth();
  };

  let HoverOnfifth = () => {
    Hoverfifth();
  };
  let LeaveOnfifth = () => {
    Leavefifth();
  };

  let HoverOnsixth = () => {
    Hoversixth();
  };
  let LeaveOnsixth = () => {
    Leavesixth();
  };
  let HoverOnseventh = () => {
    Hoverseventh();
  };
  let LeaveOnseventh = () => {
    Leaveseventh();
  };
  let HoverOneight = () => {
    Hovereight();
  };
  let LeaveOneight = () => {
    Leaveeight();
  };
  let HoverOnnineth = () => {
    Hovernineth();
  };
  let LeaveOnnineth = () => {
    Leavenineth();
  };

  let firstHoz = () => {
    Hoz1();
  };

  let secondHoz = () => {
    Hoz2();
  };

  let thirdHoz = () => {
    Hoz3();
  };

  let fourthHoz = () => {
    Hoz4();
  };

  let fifthHoz = () => {
    Hoz5();
  };

  let sixthHoz = () => {
    Hoz6();
  };

  let seventhHoz = () => {
    Hoz7();
  };

  let eightHoz = () => {
    Hoz8();
  };

  let ninethHoz = () => {
    Hoz9();
  };

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

          <div className="SongsList">
            {/* ------------------------ */}
            <div className="songsItem" onClick={listOne}>
              <span> 01</span>
              <div>
                <img src={require("./images/haunted.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Tera Hi Bas Hona Chaahoon</h5>
                <br />
                <h6> JoJo</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ---------------------------- */}
            <div className="songsItem" onClick={listTwo}>
              <span> 02</span>
              <div>
                <img src={require("./images/hak.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Hamari Adhuri Kahani</h5> <br />
                <h6>Arijit Singh</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ------------------------------ */}
            <div className="songsItem" onClick={listThree}>
              <span> 03</span>
              <div>
                <img src={require("./images/jty.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Jab Bhi Teri Yaad </h5>
                <br />
                <h6>Ishoj</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="songsItem" onClick={listFour}>
              <span> 04</span>
              <div>
                <img src={require("./images/kasoor.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5> Mohabbat Ho Na Jaye</h5> <br />
                <h6> Kumar Sanu , Alka Yagini</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* --------------------------------- */}
            <div className="songsItem" onClick={listFive}>
              <span> 05</span>
              <div>
                <img src={require("./images/kham.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5> Khamoshiyaan</h5> <br />
                <h6>Arijit Singh</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* -------------------------------- */}
            <div className="songsItem" onClick={listSix}>
              <span> 06</span>
              <div>
                <img src={require("./images/hh.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Humnava </h5>
                <br />
                <h6> Papon</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ------------------------------*/}
            <div className="songsItem" onClick={listSeven}>
              <span> 07</span>
              <div>
                <img src={require("./images/naina.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5> Naina</h5> <br />
                <h6> Arijit Singh</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ---------------------------- */}
            <div className="songsItem" onClick={listEight}>
              <span> 08</span>
              <div>
                <img src={require("./images/heartless.webp")}></img>
              </div>
              <div className="SongNameBox">
                <h5> Mai Dhoondne Ko Zamane Me</h5> <br />
                <h6>Arijit Singh</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ------------------------------ */}
            <div className="songsItem" onClick={listNine}>
              <span> 09</span>
              <div>
                <img src={require("./images/dil k paas.jpg")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Pal Pal Dil K Paas</h5>
                <br />
                <h6> Kishore Kumar</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ----------------------------------- */}
            <div className="songsItem" onClick={listTen}>
              <span> 10</span>
              <div>
                <img src={require("./images/milne hai.jpg")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Milne Hai Mujhse Aai </h5>
                <br />
                <h6> Arijit Singh</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* ------------------------------ */}
            <div className="songsItem" onClick={listEleven}>
              <span> 11</span>
              <div>
                <img src={require("./images/shiddat.jpg")}></img>
              </div>
              <div className="SongNameBox">
                <h5>Shiddat Bana Lu Tujhe</h5>
                <br />
                <h6> Manan Bhardwaj</h6>
              </div>
              <div>
                <img
                  src={require("./images/play.png")}
                  className="PlayIcon"
                ></img>
              </div>
            </div>
            {/* -------------------------------- */}
          </div>
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
          {/* 1 */}
          <div className="SongsinLine">
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnfirst}
              onMouseLeave={LeaveOnfirst}
              onClick={firstHoz}
            >
              <img src={require("./images/sari dunia.webp")}></img>
              <h5> Sari Dunia </h5>
              <h6> B.Praak</h6>

              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 2 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnsecond}
              onMouseLeave={LeaveOnsecond}
              onClick={secondHoz}
            >
              <img src={require("./images/hk.webp")}></img>
              <h5> Hare Krishna </h5>
              <h6>Palak Muchhal</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 3 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnthird}
              onMouseLeave={LeaveOnthird}
              onClick={thirdHoz}
            >
              <img src={require("./images/Omahi.webp")}></img>
              <h5> O Mahi </h5>
              <h6> Arijit Singh</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 4 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnfourth}
              onMouseLeave={LeaveOnfourth}
              onClick={fourthHoz}
            >
              <img src={require("./images/krishnacottage.webp")}></img>
              <h5> Suna Suna </h5>
              <h6> Shreya Ghoshal</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 5 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnfifth}
              onMouseLeave={LeaveOnfifth}
              onClick={fifthHoz}
            >
              <img src={require("./images/zid.webp")}></img>
              <h5> Saason Ko </h5>
              <h6> Arijit Singh</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 6 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnsixth}
              onMouseLeave={LeaveOnsixth}
              onClick={sixthHoz}
            >
              <img src={require("./images/bhagwan.webp")}></img>
              <h5> Bhagwan Hai Kahan </h5>
              <h6> Sonu Nigam</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 7 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnseventh}
              onMouseLeave={LeaveOnseventh}
              onClick={seventhHoz}
            >
              <img src={require("./images/husn.webp")}></img>
              <h5> Husn </h5>
              <h6> Anuv Jain</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 8 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOneight}
              onMouseLeave={LeaveOneight}
              onClick={eightHoz}
            >
              <img src={require("./images/kl ho na ho.webp")}></img>
              <h5> Kal Ho Na Ho </h5>
              <h6> Sonu Nigam </h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>

            {/* 9 */}
            <div
              className="SongsitemInLine"
              onMouseEnter={HoverOnnineth}
              onMouseLeave={LeaveOnnineth}
              onClick={ninethHoz}
            >
              <img src={require("./images/tunejo.webp")}></img>
              <h5> Tune Jo Na Kaha </h5>
              <h6> Mohit Chauhan</h6>
              <div className="OnFading">
                <img
                  src={require("./images/icon.jpg")}
                  className="fadeImg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aside;
