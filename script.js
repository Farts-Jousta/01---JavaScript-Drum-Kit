
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0
    audio.play()
}

function downKey(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing')

}

function upKey(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove('playing')

}

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', downKey);
window.addEventListener('keyup', upKey)