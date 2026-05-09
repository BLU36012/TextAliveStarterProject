import { Player } from "textalive-app-api";

//Initialize the player
const player = new Player({ app: { token: "axMa03SlS6U3CHwQ", parameters: []
 }, mediaElement: document.querySelector("#media"), mediaBannerPosition: "bottom-left"});

//Initialize UI Elements
const textContainer = document.querySelector("#text");
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
  },
  // Fired when the video/audio starts playing
  onBeatUpdate:(beat) => {
    // This example slightly rotates the gradient on every beat
    document.body.style.filter = `hue-rotate(${beat.index * 10}deg)`;
  },
  // Fired when the current position of the video/audio changes
  onTimeUpdate: (position) => {
    if (player.video) {
        const currentWord = player.video.findWord(position);
        
        if (currentWord) {
            textContainer.textContent = currentWord.text;
        } else {
            // Check if we are in the middle of a song or just the intro
            textContainer.textContent = player.isPlaying ? "♪ ♪ ♪" : "Waiting...";
        }
    }
    }
});
// Play/Pause button event listener
playBtn.addEventListener("click", () => {
  if (player.isPlaying) {
    player.requestPause();
    playBtn.textContent = "Play";
  } else {
    player.requestPlay().catch((err) => {
      console.error("Playback failed to start:", err);
      // Sometimes clicking a second time fixes it after the first interaction
      alert("Please click the page once more to enable audio!");
    });
    playBtn.textContent = "Pause";
  }
});
// Stop button event listener
stopBtn.addEventListener("click", () => {
  player.requestStop();
  playBtn.textContent = "Play";
  textContainer.textContent = "Stopped.";
});