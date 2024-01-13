const rep1 = document.getElementById("rep1-1");
const rep2 = document.getElementById("rep2-1");
const rep3 = document.getElementById("rep3-3");
const rep4 = document.getElementById("rep4-3");
const rep5 = document.getElementById("rep5-3");

function calculerScore() {
	let score = 0;
	if (rep1.checked) {
		score = score + 1;
	}
	if (rep2.checked) {
		score = score + 1;
	}
	if (rep3.checked) {
		score = score + 1;
	}
	if (rep4.checked) {
		score = score + 1;
	}
	if (rep5.checked) {
		score = score + 1;
	}

	document.getElementById("scorenum").innerText = `${score}`;
}
