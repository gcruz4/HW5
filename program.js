var balloon;

balloon = 30;
var balloonDOM = document.querySelector('.balloon');

document.addEventListener('keyup', resize, true);

function resize(event) {
    if (event.keyCode == 107) {
        if (balloon >= 60) {
            balloonDOM.src = "images/collision.png";
            document.removeEventListener('keyup', resize, true);
        }
        else {
            balloon = balloon + 15;
            balloonDOM.style.width = balloon + 'px';
            balloonDOM.style.height = balloon + 'px';
        }
    }
    if (event.keyCode == 109) {
        if (balloon <= 0) {
            balloonDOM.style.display = 'none';
            document.getElementById('done').innerHTML = 'Done';
            document.removeEventListener('keyup', resize, true);
        }
        else {
            balloon = balloon - 15;
            balloonDOM.style.width = balloon + 'px';
            balloonDOM.style.height = balloon + 'px';
        }
    }
}