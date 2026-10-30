
const dialog = document.querySelector('.picture__content');
const openMobal = document.querySelector('.open-mobal');
const closeMobal = document.querySelector('.close-mobal');
const sourceMobal = document.querySelector('.source-mobal');

function openModalAndBlockScroll(){
    dialog.showModal();
    document.body.classList.add('scroll-block');
};
function sourceModalAndBlockScroll(){
    dialog.showModal();
    document.body.classList.add('scroll-block');
};
function returnScroll(){
    document.body.classList.remove('scroll-block');
};
function close(){
    dialog.close();
    returnScroll();
}
openMobal.addEventListener('click', () => {
    openModalAndBlockScroll();
});
closeMobal.addEventListener('click', () => {
    close();
});
sourceMobal.addEventListener('click', () => {
    sourceModalAndBlockScroll();
});



const audio = document.querySelector('audio');
const playBtn = document.querySelector('.player-btn');
const timeDisplay = document.querySelector('.player-time');
const range = document.querySelector('.player-range');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.classList.add('is-playing'); 
  } else {
    audio.pause();
    playBtn.classList.remove('is-playing');
  }
});

audio.addEventListener('loadedmetadata', () => {
  range.max = audio.duration;
  timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
});

audio.addEventListener('timeupdate', () => {
  range.value = audio.currentTime;
  timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
});

range.addEventListener('input', () => {
  audio.currentTime = range.value;
  timeDisplay.textContent = `${formatTime(range.value)} / ${formatTime(audio.duration)}`;
});

audio.addEventListener('ended', () => {
  playBtn.classList.remove('is-playing');
  range.value = 0;
  timeDisplay.textContent = `00:00 / ${formatTime(audio.duration)}`;
});