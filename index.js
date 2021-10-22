const video = document.querySelector('video');
const volumeInputSlider = document.querySelector('.js-volume');
const timeVideoSlider = document.querySelector('.js-time-video');
let volumeValue = 1;
let currentTimeVideo = 0;
const PERCENTAGE = 100;

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
    } else {
        video.muted = false;
        volumeInputSlider.value = currentVolumeValue;

    }
}

function volumeChange() {
    video.volume = volumeInputSlider.value / PERCENTAGE;
}

function timeChangeVideo() {
    let x = (timeVideoSlider.value * video.duration) / PERCENTAGE;
    video.currentTime = x;
}

function fullScreenVideo() {
    video.requestFullscreen();
}