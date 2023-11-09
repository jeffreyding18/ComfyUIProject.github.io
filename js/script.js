var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var audioBuffer;
var audioSource = null;
var isPlaying = false;

function fetchAndDecodeAudio(url) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(decodedAudio => {
            audioBuffer = decodedAudio;
        });
}

function setupAudioSource() {
    audioSource = audioContext.createBufferSource();
    audioSource.buffer = audioBuffer;
    audioSource.loop = true;
    audioSource.connect(audioContext.destination);
}

function toggleAudioPlayback() {
    if (!isPlaying) {
        if (!audioSource) {
            // Setup the audio source if it's the first time playing
            setupAudioSource();
        }
        audioSource.start(0);
        isPlaying = true;
    } else {
        // Stop the current audio source and flag it so a new one will be created next time
        audioSource.stop();
        audioSource = null;
        isPlaying = false;
    }
}

// Fetch and decode the audio file right away
fetchAndDecodeAudio("../assets/audio/mononokesdreams.mp3");

// Event listener for the video click
document.getElementById('videoBG').addEventListener('click', function() {
    // Chrome requires audio context to be resumed from a user gesture
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    toggleAudioPlayback();
});
