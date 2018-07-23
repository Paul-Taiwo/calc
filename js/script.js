// Get the value of each button first
// .........I think loop through the buttons
// set the input to show the value

	var btns = document.querySelectorAll(".btn");
	var display = document.querySelector("#input");
	var answerDisplay = document.querySelector("#answer");

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function(e) {
			e.preventDefault();
			var btnValue = e.target.getAttribute("value");
			
			if (btnValue === "=") {
				answerDisplay.value = eval(display.value);
			} else if (btnValue === ""){
				display.value = "";
				answerDisplay.value = "";
			} else {
				display.value += btnValue;
			}

		});
	}


/*function one() {
	document.querySelector("input").value += "1";
}

function two() {
	document.querySelector("input").value += "2";
}

function three() {
	document.querySelector("input").value += "3";
}

function four() {
	document.querySelector("input").value += "4";
}

function five() {
	document.querySelector("input").value += "5";
}

function six() {
	document.querySelector("input").value += "6";
}

function seven() {
	document.querySelector("input").value += "7";
}

function eight() {
	document.querySelector("input").value += "8";
}

function nine() {
	document.querySelector("input").value += "9";
}

function zero() {
	document.querySelector("input").value += "0";
}

function dot() {
	document.querySelector("input").value += ".";
}

function btnPlus() {
	document.querySelector("input").value += "+";
}

function btnMinus() {
	document.querySelector("input").value += "-";
}

function btnMultiply() {
	document.querySelector("input").value += "*";
}

function btnDiv() {
	document.querySelector("input").value += "/";
}

function btnEqual() {
	document.querySelector("input").value = eval(document.querySelector("input").value);
}

function btnMod() {
	document.querySelector("input").value += "%";
}

function btnClear() {
	document.querySelector("input").value = "";
}
*/