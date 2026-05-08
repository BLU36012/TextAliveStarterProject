import { Player } from "textalive-app-api";

//Initialize the player
const player = new Player({ app: { token: "axMa03SlS6U3CHwQ", mediaElement: document.querySelector("#media") } });
player.addListener({
  onVideoReady: (v) => {
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
    }
  },
});
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
  onAppReady: (app) => {
    if (!app.songUrl) {
      player.createFromSongUrl("https://piapro.jp/t/RoPB");
    }
    if (!app.managed) {
      showControls();
      player.createFromSongUrl("https://piapro.jp/t/RoPB");
    }
  },

  // Fired when the video/audio is ready to be played
  onVideoReady: () => {
    textContainer.textContent = "Ready! Press Play.";
    playBtn.disabled = false;
    stopBtn.disabled = false;
  },
  onTimeUpdate:(beat) => {
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