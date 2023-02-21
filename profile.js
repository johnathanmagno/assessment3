var audio = new Audio('jingle.mp3')

function favoriteColor(evt) {
	evt.preventDefault();
	
	alert("My favorite color is PURPLE");

    document.body.style.background = "#b510a9";

    setTimeout(() => {
        document.body.style.background = "#ddd";
        }, "2000");
}

function favoritePlace(evt) {
	evt.preventDefault();
	
	alert("My back yard!");

}

function favoriteRitual(evt) {
	evt.preventDefault();
	
	alert("Playing music!");
    audio.play();
}



color.addEventListener('click', favoriteColor);
place.addEventListener('click', favoritePlace);
ritual.addEventListener('click', favoriteRitual);
