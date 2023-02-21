console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted successfully! Good job!")
}

function handleMouseOver(evt) {
	evt.preventDefault();

	alert("YOU'RE SO PRETTY TODAY")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
thora.addEventListener('mouseover', handleMouseOver);