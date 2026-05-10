import { Player } from "textalive-app-api";

//Initialize the player
const player = new Player({ app: { token: "axMa03SlS6U3CHwQ", parameters: []},
  //TextAlive App API for UI element
   mediaElement: document.querySelector("#media"), mediaBannerPosition: "bottom-left"});

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
        player.createFromSongUrl("https://www.youtube.com/watch?v=ygY2qObZv24", {
          /*
        video: {
          beatId: 4694276,
          chordId: 2830731,
          repetitiveSegmentId: 2946479,
          lyricId: 67811,
          lyricDiffId: 20655
        }
          */
      });
    }
  },
  // Fired when the video/audio is ready to be played
  onVideoReady: (video) => {
    console.log("Status: Video Ready");
    if (player.app && player.app.refresh) {
      player.app.refresh();
    }
    if (player.app && typeof player.app.requestNextScene == "function") {
      player.app.refresh(); 
    }
    window.dispatchEvent(new Event('resize'));
    textContainer.textContent = "Ready! Press Play.";
    playBtn.disabled = false;
    stopBtn.disabled = false;
  },
  // Fired when the video/audio starts playing
  onBeatUpdate:(beat) => {
    console.log("Beat Index:", beat.index);
    // This slightly rotates the gradient on every beat
    document.body.style.filter = `hue-rotate(${beat.index * 90}deg) brightness(1.2)`;
  },
  // Fired when the current position of the video/audio changes
  onTimeUpdate: (position) => {
    if (player.video) {
        const currentWord = player.video.findWord(position);
        
        if (currentWord) {
          const previousWord = currentWord.previous;
          const previousText = previousWord ? previousWord.text : "";
            textContainer.textContent = previousText + " " + currentWord.text;
        } else {
            // Check if we are in the middle of a song or just the intro
            //textContainer.textContent = player.isPlaying ? "♪ ♪ ♪" : "Waiting...";
            //textContainer.textContent = " ";
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
    player.requestPlay();
    playBtn.textContent = "Pause";
  }
});
// Stop button event listener
stopBtn.addEventListener("click", () => {
  player.requestStop();
  playBtn.textContent = "Play";
  textContainer.textContent = "Stopped.";
});