// import Audio from "./Audio.js";
let ListOfMusic1 = [
  {
    Name: "Tera Hi Bas Hona Chaahoon",
    Singers: "JoJo",
    Movie: "Haunted",
  },
  {
    Name: "Hamari Adhuri Kahani",
    Singers: "Arijit Singh",
    Movie: "Hamari Adhuri Kahani",
  },
  {
    Name: "Jab Bhi Teri Yaad",
    Singers: "Ishoj",
    Movie: "Album",
  },
  {
    Name: "Mohabbat Ho Na Jaye",
    Singers: "Kumar Sanu,Alka Yagini",
    Movie: "Kasoor",
  },
  {
    Name: "Khamoshiyaan",
    Singers: "Arijit Singh",
    Movie: "Khamoshiyaan",
  },
  {
    Name: "Humnava",
    Singers: "Papon",
    Movie: "Hamari Adhuri Kahani",
  },
  {
    Name: "Naina",
    Singers: "Arijit Singh",
    Movie: "Dangal",
  },
  {
    Name: "Mai Dhoondne Ko Zamane Me",
    Singers: "Arijit Singh",
    Movie: "Heartless",
  },
  {
    Name: "Pal Pal Dil K Paas",
    Singers: "Kishore Kumar",
    Movie: "BlackMail",
  },
  {
    Name: "Milne Hai Mujhse Aai",
    Singers: "Arijit Singh",
    Movie: "Ashique 2",
  },
  {
    Name: "Shiddat Bana Lu Tujhe",
    Singers: "Manan Bhardwaj",
    Movie: "Shiddat",
  },
];

let displayBars = () => {
  document.getElementById("vibration").style.display = "block";
};
let hideBars = () => {
  document.getElementById("vibration").style.display = "none";
};

export { displayBars, hideBars,ListOfMusic1 };

var play = false;
export function MasterPlayOnLoad() {
  if (play == false) {
    for (let i = 0; i < a.length; i++) {
      c[i].pause();
    }

    document.getElementById("MasterPlay").src = require("./images/pause.png");
    setTimeout(() => {
      displayBars();
    }, 300);

    //  c[0].play(); // by default first song will play;
    //console.log(c[0].timeupdate());
    play = true;
  } else if (play == true) {
    for (let i = 0; i < a.length; i++) {
      c[i].pause();
    }
    document.getElementById(
      "MasterPlay"
    ).src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    //c[0].pause();
    play = false;
  }
}

//for the songs Items in left side
let a = document.getElementsByClassName("songsItem");
let b = document.getElementsByClassName("PlayIcon");
let c = document.getElementsByClassName("myAudios");
let d = document.getElementsByClassName("PlayPauseicon");
let e = document.getElementsByClassName("SongDetails");

// c[1].addEventListener("ontimeupdate", (event) => {
//   console.log(event);
// });
export function forlistOne() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/haunted.webp");
  c[0].load();

  a[0].style.border = "1px solid white";
  b[0].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[0].Name +
    "<br>" +
    ListOfMusic1[0].Singers +
    "   , " +
    ListOfMusic1[0].Movie;

  // d[0].src = require("./images/pause.png");
  //c[0].play();

  // ---------
  if (play == false) {
    b[0].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[0].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    b[0].src = require("./images/play.png");
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    c[0].pause();
    play = false;
  }
}

export function forlistTwo() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[1].load();

  document.getElementById("displaySongBox").src = require("./images/hak.webp");
  a[1].style.border = "1px solid white";
  b[1].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[1].Name +
    "<br>" +
    ListOfMusic1[1].Singers +
    "   , " +
    ListOfMusic1[1].Movie;

  // ---------
  if (play == false) {
    b[1].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[1].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");

    b[1].src = require("./images/play.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    play = false;
  }
}

export function forlistThree() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[2].load();

  document.getElementById("displaySongBox").src = require("./images/jty.webp");
  a[2].style.border = "1px solid white";
  b[2].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[2].Name +
    "<br>" +
    ListOfMusic1[2].Singers +
    "   , " +
    ListOfMusic1[2].Movie;

  // ---------
  if (play == false) {
    b[2].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[2].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[2].src = require("./images/play.png");
    play = false;
  }
}

export function forlistFour() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[3].load();

  document.getElementById(
    "displaySongBox"
  ).src = require("./images/kasoor.webp");
  a[3].style.border = "1px solid white";
  b[3].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[3].Name +
    "<br>" +
    ListOfMusic1[3].Singers +
    "   , " +
    ListOfMusic1[3].Movie;

  // ---------
  if (play == false) {
    b[3].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[3].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[3].src = require("./images/play.png");
    play = false;
  }
}

export function forlistFive() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  c[4].load();

  document.getElementById("displaySongBox").src = require("./images/kham.webp");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[4].load();

  a[4].style.border = "1px solid white";
  b[4].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[4].Name +
    "<br>" +
    ListOfMusic1[4].Singers +
    "   , " +
    ListOfMusic1[4].Movie;

  // ---------
  if (play == false) {
    b[4].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[4].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[4].src = require("./images/play.png");
    play = false;
  }
}

export function forlistSix() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }

  document.getElementById("displaySongBox").src = require("./images/hh.webp");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
 c[5].load();

  a[5].style.border = "1px solid white";
  b[5].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[5].Name +
    "<br>" +
    ListOfMusic1[5].Singers +
    "   , " +
    ListOfMusic1[5].Movie;
  // ---------
  if (play == false) {
    b[5].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[5].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[5].src = require("./images/play.png");
    play = false;
  }
}

export function forlistSeven() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/naina.webp");
  for (let i = 0; i < c.length; i++) {
    c[6].pause();
  }
  c[6].load();
  a[6].style.border = "1px solid white";
  b[6].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[6].Name +
    "<br>" +
    ListOfMusic1[6].Singers +
    "   , " +
    ListOfMusic1[6].Movie;
  // ---------
  if (play == false) {
    b[6].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[6].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[6].src = require("./images/play.png");
    play = false;
  }
}

export function forlistEight() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/heartless.webp");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[7].load();
  a[7].style.border = "1px solid white";
  b[7].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[7].Name +
    "<br>" +
    ListOfMusic1[7].Singers +
    "   , " +
    ListOfMusic1[7].Movie;
  // ---------
  if (play == false) {
    b[7].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[7].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[7].src = require("./images/play.png");
    play = false;
  }
}

export function forlistNine() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/dil k paas.jpg");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[8].load();
  a[8].style.border = "1px solid white";
  b[8].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[8].Name +
    "<br>" +
    ListOfMusic1[8].Singers +
    "   , " +
    ListOfMusic1[8].Movie;
  // ---------
  if (play == false) {
    b[8].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[8].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[8].src = require("./images/play.png");
    play = false;
  }
}

export function forlistTen() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/milne hai.jpg");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[9].load();
  a[9].style.border = "1px solid white";
  b[9].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[9].Name +
    "<br>" +
    ListOfMusic1[9].Singers +
    "   , " +
    ListOfMusic1[9].Movie;
  // ---------
  if (play == false) {
    b[9].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    c[9].play();
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[9].src = require("./images/play.png");
    play = false;
  }
}

export function forlistEleven() {
  for (let i = 0; i < a.length; i++) {
    a[i].style.border = "none";
    b[i].src = require("./images/play.png");
  }
  document.getElementById(
    "displaySongBox"
  ).src = require("./images/shiddat.jpg");
  for (let i = 0; i < c.length; i++) {
    c[i].pause();
  }
  c[10].load();
  a[10].style.border = "1px solid white";
  b[10].src = require("./images/pauseicon.png");
  e[0].innerHTML =
    ListOfMusic1[10].Name +
    "<br>" +
    ListOfMusic1[10].Singers +
    "   , " +
    ListOfMusic1[10].Movie;
  // ---------
  if (play == false) {
    b[10].src = require("./images/pauseicon.png");
    d[0].src = require("./images/pause.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "block";
      displayBars();
    }, 300);
    c[10].play();

    play = true;
  } else if (play == true) {
    d[0].src = require("./images/mainplay.png");
    setTimeout(() => {
      // document.getElementById("vibration").style.display = "none";
      hideBars();
    }, 300);
    b[10].src = require("./images/play.png");
    play = false;
  }
}
