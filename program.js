//Variables
const balOutput = document.getElementById('balOutput');
var storedFontSize = parseFloat(balOutput.style.fontSize);
const incr = 15;
//

//Check font size has been parsed
console.log("Current font size: " + storedFontSize + "px");

//Add event listener
document.addEventListener('keypress', balFlation);

//Functions
function balFlation(event) {
    console.log(event.keyCode + " Key pressed")

    if (event.keyCode == 43) {
        inflation();
        if (storedFontSize > 60) {
            balOutput.innerHTML = "💥";
            document.removeEventListener('keypress', balFlation);
        }
    }
    else if (event.keyCode == 45) {
        deflation();
        if (storedFontSize == 0) {
            balOutput.style.fontSize = 30 + "px";
            balOutput.innerHTML = "Done";
            document.removeEventListener('keypress', balFlation);
        }
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