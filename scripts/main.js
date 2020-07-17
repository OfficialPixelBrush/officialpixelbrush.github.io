let nmbr_of_posts = 0;
let nmbr = 0;

const fs = require('fs');
const dir = './posts/';

fs.readdir(dir, (err, files) => {
  nmbr_of_posts = (files.length);
  nmbr = nmbr_of_posts;
});

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	document.getElementById('mainpost').innerHTML = FileHelper('./posts/' + nmbr + '.txt');
	document.getElementById('mainpost2').innerHTML = FileHelper('./posts/' + nmbr-1 + '.txt');
	document.getElementById('mainpost3').innerHTML = FileHelper('./posts/' + nmbr-2 + '.txt');
}

function next() {
	if (nmbr+3 <= nmbr_of_posts) {
		nmbr = nmbr+3
		loadPost();
	}
}

function previous() {
	if (nmbr-3 < 1) {
		nmbr = nmbr-3
		loadPost();
	}
}