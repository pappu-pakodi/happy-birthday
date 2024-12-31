window.onload = function() {
    document.querySelector('.birthday-box').addEventListener('animationend', function() {
        document.querySelector('.reveal-text').style.animation = 'reveal 3s ease forwards';
        document.querySelector('.typewriter h1').style.animation = 'typing 4s steps(40, end) forwards, blink-caret .75s step-end infinite';
    });
};