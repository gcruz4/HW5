const Output = document.getElementById('Output');
var storedFontSize = parseFloat(Output.style.fontSize);
const incr = 15;
//

console.log("Current font size: " + storedFontSize + "px");

document.addEventListener('keyup', Flation);

function Flation(event) {
    console.log(event.keyCode + " Key pressed")

    if (event.keyCode == 107) {
        inflation();
        if (storedFontSize > 60) {
            Output.innerHTML = "💥";
            document.removeEventListener('keyup', Flation);
        }
    }
    else if (event.keyCode == 109) {
        deflation();
        if (storedFontSize == 0) {
            Output.style.fontSize = 30 + "px";
            Output.innerHTML = "Done";
            document.removeEventListener('keyup', Flation);
        }
    }
    else {
        console.log("Invalid key. Use the + and - keys to inflate or deflate the balloon.")
    }
}

function inflation() {
    if (storedFontSize <= 60) {
        storedFontSize += incr;
        balOutput.style.fontSize = storedFontSize + "px";
        console.log(storedFontSize + "px");
    }
}

function deflation() {
    if (storedFontSize > 0) {
        storedFontSize -= incr;
        balOutput.style.fontSize = storedFontSize + "px";
        console.log(storedFontSize + "px");
    }
}
//