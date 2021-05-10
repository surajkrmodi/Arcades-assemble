var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var modal = document.querySelector("#myModal");
var btn = document.querySelector(".leaderboard_pop");
var score = 0;
var maxScore = 100;
var alreadyWon = false;

const sound={
    select: new Audio('../../resources/colorGame/sounds/select.mp3')
}

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function logout(){
    if(localStorage.getItem("JWT")){
        localStorage.removeItem("JWT");
    }
    window.location.href = "http://localhost:4000/login";
}

function checkLoginStatus(){
	if(!localStorage.getItem("JWT")){
		document.getElementById("login-btn").innerHTML = "Login";
	}
}
function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				if(!alreadyWon){
				score += maxScore;
				sound.select.play();
				}
				alreadyWon = true;
				messageDisplay.textContent = "SCORE : " + score;
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				maxScore -= 20;
				this.style.background = "#232323";
				messageDisplay.textContent = "SCORE : " + score;
				sound.select.play();
			}

		});
	}
}



function reset(){
	maxScore = 100;
	alreadyWon = false;
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "SCORE : " + score;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	// ani();
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


/////leaderboard pop up///////////
btn.addEventListener("click", function(){
	modal.style.display = "block";
})
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
span.addEventListener("click", function(){
	modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}