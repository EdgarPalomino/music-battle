// Loading the Musical Chord audio to avoid delays while playing it

var audio = new Audio("Musical Chord.mp3");

// Function that plays the Musical Chord audio, makes the current web page fade-out and then changes it to a new page

function playChord(buttonPressed) {

	audio.currentTime = 0;
	audio.play();
	fadeOutPage()
	setTimeout(function () { changePage(buttonPressed) }, audio.duration*1000);

	return false;

}

// Function that makes the current web page fade-out

function fadeOutPage() {

	let navbar = document.getElementsByClassName("navbar")[0];
	let content = document.getElementsByClassName("content")[0];

	navbar.className = navbar.className.replace(" fade-in", " fade-out");
	content.className = content.className.replace(" fade-in", " fade-out");

}

// Function that changes the current web page to a new page

function changePage(buttonPressed) {

	if (buttonPressed == "Home") {
		window.location.assign("index.html");
	} else if (buttonPressed == "Watch") {
		window.location.assign("watch.html");
	}

	audio.stop();

}

// Note: The new page will fade-in by itself because of the CSS settings

// -------------------------------------------------- \\

// Function that changes the current part of the story to a new part

function changePart(buttonPressed) {

	hidePart(buttonPressed);
	showPart(buttonPressed);
	slidePart(buttonPressed);

}

// Function that hides the current part of the story

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

// Function that shows the new part of the story

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

// Function that makes the text and photos from the new part of the story slide-in

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

// Note: The function will also find out if the text and photos should slide-in from the left or right
