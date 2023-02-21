function randomRestaurant(evt) {
    evt.preventDefault();

    let food = ["Wendy's","Uncle Julio's","Twisted Root","Pie Tap","Drake's"]
    let random = Math.floor(Math.random() * food.length);
    alert(food[random]);
}

random.addEventListener('click', randomRestaurant)