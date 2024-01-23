//------------------------ Horizontal Song Operations -------------------------//
import { displayBars, hideBars } from "./File";
let ListOfMusic2 = [
  {
    Name: "Sari Dunia Bhula Denge",
    Singers: "B.Praak",
    Movie: "Animal",
  },
  {
    Name: "Hare Krishna ",
    Singers: "Palak Muchhal",
    Movie: "Album",
  },
  {
    Name: "O Mahi ",
    Singers: "Arijit Singh",
    Movie: "Dunki",
  },
  {
    Name: "Suna Suna Lamha Lamha",
    Singers: "Shreya Goshal",
    Movie: "Krishna Cottage",
  },
  {
    Name: "Sansoon Ko",
    Singers: "Arijit Singh",
    Movie: "Zid",
  },

  {
    Name: "Bhagwan Hai Kahan Re Tu",
    Singers: "Sonu Nigam",
    Movie: "PK",
  },
  {
    Name: "Husn",
    Singers: "Anuv Jain",
    Movie: "Album",
  },
  {
    Name: "Kal Ho Na Ho",
    Singers: "Sonu Nigam",
    Movie: "Kal Ho Na Ho",
  },
  {
    Name: "Tune Jo Na Kaha",
    Singers: "Mohit Chauhan",
    Movie: "NeW York",
  },
];

let x = document.getElementsByClassName("fadeImg");

export function Hoverfirst() {
  x[0].style.display = "block";
}
export function Leavefirst() {
  x[0].style.display = "none";
}

export function Hoversecond() {
  x[1].style.display = "block";
}
export function Leavesecond() {
  x[1].style.display = "none";
}

export function Hoverthird() {
  x[2].style.display = "block";
}
export function Leavethird() {
  x[2].style.display = "none";
}
export function Hoverfourth() {
  x[3].style.display = "block";
}
export function Leavefourth() {
  x[3].style.display = "none";
}
export function Hoverfifth() {
  x[4].style.display = "block";
}
export function Leavefifth() {
  x[4].style.display = "none";
}

export function Hoversixth() {
  x[5].style.display = "block";
}
export function Leavesixth() {
  x[5].style.display = "none";
}

export function Hoverseventh() {
  x[6].style.display = "block";
}
export function Leaveseventh() {
  x[6].style.display = "none";
}

export function Hovereight() {
  x[7].style.display = "block";
}
export function Leaveeight() {
  x[7].style.display = "none";
}

export function Hovernineth() {
  x[8].style.display = "block";
}
export function Leavenineth() {
  x[8].style.display = "none";
}
//songs play Horizontal//

let p = document.getElementsByClassName("SongsinLine");
let c = document.getElementsByClassName("myAudios");
let b = document.getElementsByClassName("PlayIcon");
let a = document.getElementsByClassName("songsItem");
let e = document.getElementsByClassName("SongDetails");

// first----------------------------

let visiblenPlaying = false;
export function Hoz1() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }

  c[11].load();

  e[0].innerHTML =
    ListOfMusic2[0].Name +
    "<br>" +
    ListOfMusic2[0].Singers +
    "   , " +
    ListOfMusic2[0].Movie;

  document.getElementById(
    "displaySongBox"
  ).src = require("./images/sari dunia.webp");

  if (visiblenPlaying == false) {
    c[11].play();
    displayBars();
    x[0].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[0].src = require("./images/icon.jpg");
    //c[11].load();

    visiblenPlaying = false;
  }
}

// second----------------------------

export function Hoz2() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[12].load();

  e[0].innerHTML =
    ListOfMusic2[1].Name +
    "<br>" +
    ListOfMusic2[1].Singers +
    "   , " +
    ListOfMusic2[1].Movie;
  document.getElementById("displaySongBox").src = require("./images/hk.webp");

  if (visiblenPlaying == false) {
    c[12].play();
    displayBars();
    x[1].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[1].src = require("./images/icon.jpg");
    //c[12].load();

    visiblenPlaying = false;
  }
}

// third------------------------

export function Hoz3() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }

  c[13].load();

  e[0].innerHTML =
    ListOfMusic2[2].Name +
    "<br>" +
    ListOfMusic2[2].Singers +
    "   , " +
    ListOfMusic2[2].Movie;
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/Omahi.webp");

  if (visiblenPlaying == false) {
    c[13].play();
    displayBars();
    x[2].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[2].src = require("./images/icon.jpg");
    c[13].pause();
    visiblenPlaying = false;
  }
}
// fourth------------------------------

export function Hoz4() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[14].load();

  e[0].innerHTML =
    ListOfMusic2[3].Name +
    "<br>" +
    ListOfMusic2[3].Singers +
    "   , " +
    ListOfMusic2[3].Movie;

  document.getElementById(
    "displaySongBox"
  ).src = require("./images/krishnacottage.webp");

  if (visiblenPlaying == false) {
    c[14].play();
    displayBars();
    x[3].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[3].src = require("./images/icon.jpg");
    c[14].pause();
    visiblenPlaying = false;
  }
}
// fifth------------------------------

export function Hoz5() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[15].load();

  e[0].innerHTML =
    ListOfMusic2[4].Name +
    "<br>" +
    ListOfMusic2[4].Singers +
    "   , " +
    ListOfMusic2[4].Movie;
  document.getElementById("displaySongBox").src = require("./images/zid.webp");

  if (visiblenPlaying == false) {
    c[15].play();
    displayBars();
    x[4].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[4].src = require("./images/icon.jpg");
    c[15].pause();
    visiblenPlaying = false;
  }
}
// sixth ---------------------------

export function Hoz6() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[16].load();

  e[0].innerHTML =
    ListOfMusic2[5].Name +
    "<br>" +
    ListOfMusic2[5].Singers +
    "   , " +
    ListOfMusic2[5].Movie;

  document.getElementById(
    "displaySongBox"
  ).src = require("./images/bhagwan.webp");

  if (visiblenPlaying == false) {
    c[16].play();
    displayBars();
    x[5].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[5].src = require("./images/icon.jpg");
    c[16].pause();
    visiblenPlaying = false;
  }
}
// seventh-----------------------------------------

export function Hoz7() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[17].load();

  e[0].innerHTML =
    ListOfMusic2[6].Name +
    "<br>" +
    ListOfMusic2[6].Singers +
    "   , " +
    ListOfMusic2[6].Movie;
  document.getElementById("displaySongBox").src = require("./images/husn.webp");

  if (visiblenPlaying == false) {
    c[17].play();
    displayBars();
    x[6].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[6].src = require("./images/icon.jpg");
    c[17].pause();
    visiblenPlaying = false;
  }
}
// eigthh------------------------------

export function Hoz8() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[18].load();

  e[0].innerHTML =
    ListOfMusic2[7].Name +
    "<br>" +
    ListOfMusic2[7].Singers +
    "   , " +
    ListOfMusic2[7].Movie;
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/kl ho na ho.webp");

  if (visiblenPlaying == false) {
    c[18].play();
    displayBars();
    x[7].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[7].src = require("./images/icon.jpg");
    c[18].pause();
    visiblenPlaying = false;
  }
}
// nineth-----------------------------

export function Hoz9() {
  for (let i = 0; i < a.length; i++) {
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  for (let i = 0; i < x.length; i++) {
    x[i].src = require("./images/icon.jpg");
  }
  c[1].load();

  e[0].innerHTML =
    ListOfMusic2[8].Name +
    "<br>" +
    ListOfMusic2[8].Singers +
    "   , " +
    ListOfMusic2[8].Movie;
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/tunejo.webp");

  if (visiblenPlaying == false) {
    c[19].play();
    displayBars();
    x[8].src = require("./images/icon2.png");
    visiblenPlaying = true;
  } else if (visiblenPlaying == true) {
    hideBars();
    x[8].src = require("./images/icon.jpg");
    c[19].pause();
    visiblenPlaying = false;
  }
}
