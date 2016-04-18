var randomNumber = Math.floor(Math.random() * 10 + 1);

var userNumber = parseInt(prompt("Pick a number between 1 and 10."));

while(userNumber !== randomNumber) {
	if (userNumber < randomNumber) {
		alert("Your number was too low.");
	} else {
		alert("Your number was too high.");
	}
	userNumber = parseInt(prompt("Pick again."));
}

alert("Congratulations, you picked correctly!");