
const sliderHeight = document.getElementById("sliderHeight");
const brickSelect = document.getElementById("brickSelect");
const sliderValue = document.getElementById("sliderValue");

sliderHeight.addEventListener('input', determineHeightAndThenDrawPyramid);
brickSelect.addEventListener('input', determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
	sliderValue.innerHTML = sliderHeight.value;
	const heightInput = sliderHeight.value;
	const brickInput = brickSelect.value;
	return printPyramid(heightInput, brickInput);
}

function printPyramid(height, brick) {

	document.getElementById("pyramid").innerHTML = "";

	for (let i = 1; i <= height; i++) {
		let space = " ";

		let layer = space.repeat(height - i) + brick.repeat(i + 1);

		const rowStr = document.createElement("p");

		const node = document.createTextNode(layer);

		rowStr.appendChild(node);

		const element = document.getElementById("pyramid");

		element.appendChild(rowStr);
	}

}
