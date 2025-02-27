let songIndex = 0;
let audioElement = new Audio(
  "assets/indian-bollywood-hindi-song-background-music-294105.mp3"
);
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByTagName("songItem"));

let songs = [
  {
    songName: "Salam-e-Ishq",

    filePath: "assets/indian-bollywood-hindi-song-background-music-294105.mp3",
    coverPath: "./assets/img1.jpeg",

    songName: "adhuri-kahani-jo-na-hosaki-puri-hindi-song",
    filePath: "assets/adhuri-kahani-jo-na-hosaki-puri-hindi-song-236791.mp3",
    coverPath: "./assets/img2.jpeg",

    songName: "meri-duniya",
    filePath: "assets/meri-duniya-294226.mp3 ",
    coverPath: "./assets/img3.jpeg ",

    songName: "tasvir-old-bollywood-pop-music-2009 ",
    filePath: "assets\tasvir-old-bollywood-pop-music-2009-206522.mp3 ",
    coverPath: "./assets/img4.jpeg ",

    songName: "tere-sang-with-you",
    filePath: "assets\tere-sang-with-you-207644.mp3 ",
    coverPath: "./assets/img5.jpeg ",

    songName: "adhuri-kahani",
    filePath: " assets/adhuri-kahani-jo-na-hosaki-puri-hindi-song-236791.mp3",
    coverPath: "./assets/img6.jpeg ",

    songName: "teri-ye-adaa-romantic-songs ",
    filePath: "assets\teri-ye-adaa-romantic-song-206526.mp3 ",
    coverPath: "./assets/img7.jpeg ",

    songName: "adhuri-kahani-jo-na-hosaki-puri-hindi-song ",
    filePath: "assets/adhuri-kahani-jo-na-hosaki-puri-hindi-song-236791.mp3 ",
    coverPath: "./assets/img8.jpeg ",

    songName: "adhuri-kahani",
    filePath: " assets/adhuri-kahani-jo-na-hosaki-puri-hindi-song-236791.mp3",
    coverPath: "./assets/img9.jpeg "
  }
];

songItems.forEach((element) => {
  element.getElementByTagName("img")[0].src = songs[i].coverPath;
  element.getElementByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener("click", () => {
  let play = "./assets/AA.svg";
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    masterPlay.classList.remove("play");
    masterPlay.classList.add("'./assets/AA.svg'");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("./assets/AA.svg");
    masterPlay.classList.add("'./assets/AA.svg'");
    gif.style.opacity = 0;
  }
});

//listen to event
audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressbar.value = progress;
});

myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songlistplay")).forEach(
    (element) => {
      element.classList.remove("./assets/AA.svg");
      element.classList.add("./assets/AA.svg");
    }
  );
};

Array.from(document.getElementsByClassName("songlistplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      e.target.classList.remove("./assets/AA.svg");
      e.target.classList.add("./assets/AA.svg");
      audioElement.src =
        "assets/indian-bollywood-hindi-song-background-music-294105.mp3";
      audioElement.currentTime = 0;
      audioElement.play();
    });
  }
);
