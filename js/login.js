const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

const validateInput = ({ target }) => {
	if (target.value.length > 2) {
		button.removeAttribute("disabled");
	} else {
		button.setAttribute("disabled", "true");
	}
};

// Save the login information in the browser's local storage and send it to the game page
const handleSubmit = (event) => {
	event.preventDefault();

	localStorage.setItem("player", input.value);
	window.location.href = "/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
