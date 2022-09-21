// Loading the Musical Chord audio to avoid delays while playing it

var audio = new Audio("Musical Chord.mp3");

// Function that plays the Musical Chord audio, makes the current page fade-out and then changes the current page to a new page

function playChord(buttonPressed) {

	audio.currentTime = 0;
	audio.play();
	fadeOutPage()
	setTimeout(function () { changePage(buttonPressed) }, audio.duration*1000);

	return false;

}

// Function that changes the old page to the new page

function changePage(buttonPressed) {

	if (buttonPressed == "Home") {
		window.location.assign("index.html");
	} else if (buttonPressed == "Watch") {
		window.location.assign("watch.html");
	}

	audio.stop();

}

// Function that makes the old page fade-out

function fadeOutPage() {

	let navbar = document.getElementsByClassName("navbar")[0];
	let content = document.getElementsByClassName("content")[0];

	navbar.className = navbar.className.replace(" fade-in", " fade-out");
	content.className = content.className.replace(" fade-in", " fade-out");

}

// Note: The new page will fade-in by itself

// -------------------------------------------------- \\

// Function that changes the old part to the new part

function changePart(buttonPressed) {

	hidePart(buttonPressed);
	showPart(buttonPressed);
	slidePart(buttonPressed);

}

// Function that hides the current part

function hidePart(buttonPressed) {

	var part;

	if (buttonPressed.includes("First")) {
		part = document.getElementsByClassName("start")[0];
	} else if (buttonPressed.includes("Second")) {
		part = document.getElementsByClassName("middle")[0];
	} else if (buttonPressed.includes("Third")) {
		part = document.getElementsByClassName("end")[0];
	}

	part.style.display = "none";
	part.style.visibility = "hidden";

}

// Function that shows the new part

function showPart(buttonPressed) {

	var part;

	if (buttonPressed == "Left Second") {
		part = document.getElementsByClassName("start")[0];
	} else if (buttonPressed == "Right First" || buttonPressed == "Left Third") {
		part = document.getElementsByClassName("middle")[0];
	} else if (buttonPressed == "Right Second") {
		part = document.getElementsByClassName("end")[0];
	}

	part.style.display = "block";
	part.style.visibility = "visible";

}

function slidePart(buttonPressed) {

	var sliders = document.getElementsByClassName("slider");

	for (let i = 0; i < sliders.length; i++) {
		sliders[i].className = sliders[i].className.replace(" slide-right", "");
		sliders[i].className = sliders[i].className.replace(" slide-left", "");
	}

	if (buttonPressed == "Left Second") {
		for (let i = 0; i < sliders.length; i++) {
			if (sliders[i].classList.contains("first")) {
				sliders[i].className = sliders[i].className + " slide-right";
			}
		}
	} else if (buttonPressed == "Right First") {
		for (let i = 0; i < sliders.length; i++) {
			if (sliders[i].classList.contains("second")) {
				sliders[i].className = sliders[i].className + " slide-left";
			}
		}
	} else if (buttonPressed == "Left Third") {
		for (let i = 0; i < sliders.length; i++) {
			if (sliders[i].classList.contains("second")) {
				sliders[i].className = sliders[i].className + " slide-right";
			}
		}
	} else if (buttonPressed == "Right Second") {
		for (let i = 0; i < sliders.length; i++) {
			if (sliders[i].classList.contains("third")) {
				sliders[i].className = sliders[i].className + " slide-left";
			}
		}
	}

}

// Function that returns the current page address

function getCurrentPage() {

	let currentPageLong = window.location.href;
	let currentPageShort = currentPageLong.substring(currentPageLong.lastIndexOf("/")+1);

	return currentPageShort;

}
