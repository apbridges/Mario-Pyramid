
let userInput = prompt('How tall should the Mario pyramid be? ');

printPyramid(userInput);

function printPyramid(height) {
	
    for (let i = 1; i <= height; i++)
	{
		let space = ".";
		
		let brick = "#";
		
		let layer = space.repeat(height-i)+brick.repeat(i+1);

		const rowStr = document.createElement("p");

		const node = document.createTextNode(layer);

		rowStr.appendChild(node);

		const element = document.getElementById("pyramid");

		element.appendChild(rowStr);
	}

}
