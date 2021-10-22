const video = document.querySelector('video');
const volumeInputSlider = document.querySelector('.js-volume');
const timeVideoSlider = document.querySelector('.js-time-video');
let volumeValue = 1;
let currentTimeVideo = 0;
const PERCENTAGE = 100;
const speed = document.querySelector(".js-speed-video");
const choose = document.querySelector(".js-choose-video");
const playPauseBtn = document.querySelector('.js-play-pause-btn');
const muteBtn = document.querySelector('.js-mute-btn');
let play = true;

document.addEventListener("DOMContentLoaded", function() {
    volumeValue = video.volume;
    currentTimeVideo = video.currentTime;
    timeVideoSlider.min = 0;
    timeVideoSlider.max = 100;
    timeVideoSlider.value = 0;
    volumeInputSlider.value = volumeValue * PERCENTAGE;
});

video.addEventListener('timeupdate', function() {
    let value = (PERCENTAGE / video.duration) * video.currentTime;
    timeVideoSlider.value = value;
});

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

let currentVolumeValue = volumeInputSlider.max;
function muteVideo() {
    if (video.muted === false) {
        video.muted = true;
        currentVolumeValue = volumeInputSlider.value;
        volumeInputSlider.value = 0;
        muteBtn.style.backgroundImage = "url('images/mutebtn_32x32.png')"

    } else {
        video.muted = false;
        volumeInputSlider.value = currentVolumeValue;
        muteBtn.style.backgroundImage = "url('images/volume_32x32.png')"
    }
}

function volumeChange() {
    if (volumeInputSlider.value > 0) {
        muteBtn.style.backgroundImage = "url('images/volume_32x32.png')";
    } else {
        muteBtn.style.backgroundImage = "url('images/mutebtn_32x32.png')";
    }
    video.volume = volumeInputSlider.value / PERCENTAGE;
}

function timeChangeVideo() {
    let x = (timeVideoSlider.value * video.duration) / PERCENTAGE;
    video.currentTime = x;
}

function fullScreenVideo() {
    video.requestFullscreen();
}

function speedChangeVideo() {
    video.playbackRate = speed.value;
}

function chooseVideo() {
    video.src = choose.value;
    video.pause();
    video.currentTime = 0;
    video.play()
}

function playPauseVideo() {
    if (play === true) {
        playPauseBtn.style.backgroundImage = "url('images/pausebtn_32x32.png')";
        playVideo();
        play = false;
    } else {
        playPauseBtn.style.backgroundImage = "url('images/playbtn_32x32.png')";
        pauseVideo();
        play = true;
    }
}