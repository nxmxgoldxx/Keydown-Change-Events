// Exercise #1
// Skills practiced: querySelector(), keydown event, callback function, conditional statements, innerText

var box1 = document.querySelector(".box-1");
var box2 = document.querySelector(".box-2");
var box3 = document.querySelector(".box-3");

// Add an event listener to the document with a keydown event.
// Make sure to pass a parameter for the event in the event handler function.

document.addEventListener("keydown", function (e) {
	var key = e.key;
	if (key === "1") {
		box1.innerText = "😸";
	} else if (key === "2") {
		box2.innerText = "🚀";
	} else if (key === "3") {
		box3.innerText = "💮";
	}
});
