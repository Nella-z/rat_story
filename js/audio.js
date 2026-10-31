
const dialog = document.querySelector('.picture__content');
const dialog_2 = document.querySelector('.picture__source');
const openMobal = document.querySelector('.open-mobal');
const openMobal_dialog = document.querySelector('.mobal-content');
const closeMobal = document.querySelector('.close-mobal');
const closeMobal_2 = document.querySelector('.close-mobal_2');
const sourceMobal = document.querySelector('.source-mobal');

function openModalAndBlockScroll(){
    dialog.showModal();
    document.body.classList.add('scroll-block');
};
function sourceModalAndBlockScroll(){
    dialog_2.showModal();
};
function returnScroll(){
    document.body.classList.remove('scroll-block');
};
function close(){
    dialog.close();
    returnScroll();
}
function close2(){
    dialog_2.close();
    returnScroll();
}
openMobal.addEventListener('click', () => {
    openModalAndBlockScroll();
});

closeMobal.addEventListener('click', () => {
    close();
});
closeMobal_2.addEventListener('click', () => {
    close2();
});
sourceMobal.addEventListener('click', () => {
  close();
    sourceModalAndBlockScroll();
});
openMobal_dialog.addEventListener('click', () => {
  close2();
  openModalAndBlockScroll();
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