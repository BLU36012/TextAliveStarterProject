import { Player } from "textalive-app-api";

//Initialize the player
const player = new Player({ app: { token: "axMa03SlS6U3CHwQ", mediaElement: document.querySelector("#media") } });

//Initialize UI Elements
const textContainer = document.querySelector("#text-container");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
//Tutorial function 
const animateWord = function (now, unit) {
  if (unit.contains(now)) {
    document.querySelector("#text").textContent = unit.text;
  }
};

player.addListener({
    // Fired when the app is ready. You can load a song here.
  onAppReady: (app) => {
    console.log("Status: App Ready");
    if (!app.songUrl) {
        console.log("Video Ready to Play");
        player.createFromSongUrl("https://piapro.jp/t/RoPB/20220122172830");
    }
  },
  // Fired when the video/audio is ready to be played
  onVideoReady: (video) => {
    console.log("Status: Video Ready");
    textContainer.textContent = "Ready! Press Play.";
    playBtn.disabled = false;
    stopBtn.disabled = false;
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
    }
  },
  onBeatUpdate:(beat) => {
    // This example slightly rotates the gradient on every beat
    document.body.style.filter = `hue-rotate(${beat.index * 10}deg)`;
  },
  onTimeUpdate: (position) => {
    // Get the current lyric based on the song's playback position
    let currentVideo = player.video;
    if (currentVideo) {
      let currentWord = currentVideo.findWord(position);
      
      if (currentWord) {
        textContainer.textContent = currentWord.text;
      } else {
        textContainer.textContent = " "; // Clear screen if no word is sung
      }
    }
  }
});

playBtn.addEventListener("click", () => {
  if (player.isPlaying) {
    player.requestPause();
    playBtn.textContent = "Play";
  } else {
    player.requestPlay();
    playBtn.textContent = "Pause";
  }
});

stopBtn.addEventListener("click", () => {
  player.requestStop();
  playBtn.textContent = "Play";
  textContainer.textContent = "Stopped.";
});