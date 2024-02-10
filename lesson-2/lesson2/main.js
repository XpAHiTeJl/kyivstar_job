const video = document.getElementById("video-player");
const pauseButton = document.getElementById("pause-video");
const volumeSlider = document.getElementById("volume-video");
const fullscreenButton = document.getElementById("full-video");
const stopButton = document.getElementById("stop-video");

pauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    pauseButton.textContent = "Пауза";
  } else {
    video.pause();
    pauseButton.textContent = "Play";
  }
});

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value * 1;
  video.volume = Math.min(video.volume, 1);
});

fullscreenButton.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  }
});

stopButton.addEventListener("click", () => {
  video.currentTime = 0;
  video.pause();
  pauseButton.textContent = "Play";
});

function LocalStorageManager() {}

LocalStorageManager.prototype.saveData = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

LocalStorageManager.prototype.getData = function (key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const localStorageManager = new LocalStorageManager();

localStorageManager.saveData("user", { name: "John", age: 30 });

const userData = localStorageManager.getData("user");
console.log(userData);
