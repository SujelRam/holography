document.getElementById('d1').addEventListener('click', function() {
   document.getElementById('video-container').style.display = 'block';
   document.getElementById('video').play();
});
document.getElementById('back-button').addEventListener('click', function() {
   document.getElementById('video-container').style.display = 'none';
   document.getElementById('video').pause();
});