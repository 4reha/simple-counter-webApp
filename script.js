let count = 0;
let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let check = 0;

function	increment() {
	countEL.textContent = ++count;
}
function decrement() {
	countEL.textContent = --count;
}
function reset() {
	saveEL.textContent = "Previous entries: ";
}
function save() {
	if (check != count)	{
		saveEL.textContent += countEL.textContent + " | ";
		countEL.textContent = count = check = 0;
	}
}
