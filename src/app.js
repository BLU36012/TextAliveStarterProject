import { Player } from "textalive-app-api";

const animateWord = function (now, unit) {
  if (unit.contains(now)) {
    document.querySelector("#text").textContent = unit.text;
  }
};

const player = new Player({ app: { token: "axMa03SlS6U3CHwQ" } });
player.addListener({
  onVideoReady: (v) => {
    let w = player.video.firstWord;
    while (w) {
      w.animate = animateWord;
      w = w.next;
    }
  },
});

player.addListener({
  onAppReady: (app) => {
    if (!app.songUrl) {
      p.createFromSongUrl("Song URL goes her :)");
    }
    if (!app.managed) {
      // 再生コントロールを表示
      showControls();
    }
  },
});