
const element = document.getElementById("pyramidBtn");
element.addEventListener("click", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
	var heightInput = document.getElementById("height").value;
	printPyramid(heightInput);
}

function printPyramid(height) {

	document.getElementById("pyramid").innerHTML = "";

	for (let i = 1; i <= height; i++) {
		let space = ".";

		let brick = "#";

		let layer = space.repeat(height - i) + brick.repeat(i + 1);

		const rowStr = document.createElement("p");

		const node = document.createTextNode(layer);

		rowStr.appendChild(node);

		const element = document.getElementById("pyramid");

		element.appendChild(rowStr);
	}

}
