

const video = document.getElementById("video-player");
const pauseButton = document.getElementById("pause-video");
const volumeSlider = document.getElementById("volume-video");
const fullscreenButton = document.getElementById("full-video");
const stopButton = document.getElementById("stop-video");

pauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    // Загалом, як підхід може бути
    pauseButton.textContent = "Пауза";
  } else {
    video.pause();
    pauseButton.textContent = "Play";
  }
});

volumeSlider.addEventListener("input", () => {

  /**
    Достатньо викоористати
    video.volume = volumeSlider.value;
  */
  video.volume = volumeSlider.value * 1;
  video.volume = Math.min(video.volume, 1);
});

fullscreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    // +++
    video.requestFullscreen();
  }
});

stopButton.addEventListener("click", () => {
  video.currentTime = 0;
  video.pause();
  pauseButton.textContent = "Play";
});
