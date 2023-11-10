document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('videoBG');
    const audioElement = document.getElementById('audioBG');

    // Start the audio muted
    audioElement.muted = true;
    audioElement.volume = 0.15;

    videoElement.addEventListener('click', () => {
        // Toggle the muted state on click
        if (audioElement.muted) {
            audioElement.muted = false;
            audioElement.play(); // Start playing audio when video is clicked
        } else {
            audioElement.muted = true;
        }
    });
});
