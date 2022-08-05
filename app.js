const navbar = document.getElementsByClassName('bar')[0];
window.onscroll=function () {
  if(document.documentElement.scrollTop >=40){
    navbar.classList.remove("bar");
    navbar.classList.add("bar_color");
    }
  else{
    navbar.classList.add("bar");
    navbar.classList.remove("bar_color");
  }
}

//  INTRO TYPEWRITER EFFECT ANIMATION
var _CONTENT = [ "BHAVYA GUPTA.", "A FULL STACK DEVELOPER."];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = "I'M " + text + "|";
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 200);
		}, 2000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = "I'M " + text + "|";
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 200);
		}, 500);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 200);
