window.onload = function () {
  const key = document.querySelectorAll(".key");
  const audio = document.querySelectorAll("audio");
  let audioData = [];
  let keyData = [];

  key.forEach((k) => {
    keyData = [...keyData, parseInt(k.dataset.key)];
  });

  audio.forEach((a) => {
    audioData = [...audioData, parseInt(a.dataset.key)];
  });

  key.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
  });

  window.onkeydown = function (e) {
    if (keyData.indexOf(e.keyCode) >= 0) {
      let currentKey = key[keyData.indexOf(e.keyCode)];
      currentKey.classList.add("playing");
      playAudio(e.keyCode);
    }
  };

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  function playAudio(dataSet) {
    let currentAudio = audio[audioData.indexOf(dataSet)];
    currentAudio.currentTime = 0;
    currentAudio.play();
  }
};
