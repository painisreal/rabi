// Get the audio player element
const audioPlayer = document.getElementById('background-music');

// Function to play the audio
// function playAudio() {
//   audioPlayer.play();
// }

// Play the audio when the page loads
window.onload = playAudio;

// Play the audio when the page is refreshed or revisited
window.onbeforeunload = function() {
  audioPlayer.play();
};