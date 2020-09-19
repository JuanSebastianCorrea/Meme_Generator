const form = document.querySelector('#form');
const memeResults = document.querySelector('#memeDisplayer');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	let imgDiv = document.createElement('div');
	let inputURL = document.querySelector('#imgURL').value;
	let topTextDiv = document.createElement('div');
	let inputTopText = document.querySelector('#topText').value;
	let bottomTextDiv = document.createElement('div');
	let inputBottomText = document.querySelector('#bottomText').value;
	let hoverDiv = document.createElement('div');

	imgDiv.style.backgroundImage = `url("${inputURL}")`;
	imgDiv.classList.add('imgDivStyles');

	topTextDiv.innerText = inputTopText;
	topTextDiv.classList.add('textStyles');

	bottomTextDiv.innerText = inputBottomText;
	bottomTextDiv.classList.add('textStyles');
	bottomTextDiv.setAttribute('id', 'pushDown');

	hoverDiv.classList.add('remover');
	hoverDiv.innerText = 'X';

	// if (inputTopText && inputBottomText === '') {
	// 	alert('Incomplete meme!');
	// 	return;
	// }

	form.reset();
	imgDiv.append(topTextDiv);
	imgDiv.append(bottomTextDiv);
	imgDiv.append(hoverDiv);
	memeResults.append(imgDiv);
});

memeResults.addEventListener('click', function(e) {
	console.log(e.target.className);
	if (e.target.className === 'remover') {
		e.target.parentElement.remove();
	}
});
