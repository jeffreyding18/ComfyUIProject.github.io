document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('videoBG');
    const audioElement = document.getElementById('audioBG');

    // Start the audio muted
    audioElement.muted = true;
    audioElement.volume = 0.15;

    function isVideoPlaying(video) {
        return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
    }

    videoElement.addEventListener('click', () => {
        if (isVideoPlaying(videoElement)) {
            videoElement.pause();
        } else {
            videoElement.play();
        }

        // Toggle the muted state on click
        if (audioElement.muted) {
            audioElement.muted = false;
            audioElement.play(); // Start playing audio when video is clicked
        } else {
            audioElement.muted = true;
        }
    });
});
