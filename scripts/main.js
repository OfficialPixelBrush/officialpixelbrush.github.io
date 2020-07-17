let nmbr_of_posts = 15;
let nmbr = 15;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	document.getElementById('mainpost').innerHTML = FileHelper('posts/' + nmbr + '.txt');
	document.getElementById('mainpost2').innerHTML = FileHelper('posts/' + nmbr + '.txt');
	document.getElementById('mainpost3').innerHTML = FileHelper('posts/' + nmbr  + '.txt');
}

function next() {
	if (nmbr+3 <= nmbr_of_posts) {
		nmbr = nmbr+3
		loadPost();
	}
}

function previous() {
	if (nmbr-3 !< 1) {
		nmbr = nmbr-3
		loadPost();
	}
}