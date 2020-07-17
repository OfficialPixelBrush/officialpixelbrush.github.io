let nmbr_of_posts = 16;
let nmbr = 16;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	if (nmbr > 0) {
		document.getElementById('mainpost').innerHTML = FileHelper('posts/' + nmbr + '.txt');
	} else {
		document.getElementById('mainpost').innerHTML = '-';
	}
	if (nmbr-1 > 0) {
		document.getElementById('mainpost2').innerHTML = FileHelper('posts/' + (nmbr-1) + '.txt');
	} else {
		document.getElementById('mainpost2').innerHTML = '-';
	}
	if (nmbr-2 > 0) {
		document.getElementById('mainpost3').innerHTML = FileHelper('posts/' + (nmbr-2)  + '.txt');
	} else {
		document.getElementById('mainpost3').innerHTML = '-';
	}
	if (nmbr-3 > 0) {
		document.getElementById('mainpost4').innerHTML = FileHelper('posts/' + (nmbr-3)  + '.txt');
	} else {
		document.getElementById('mainpost4').innerHTML = '-';
	}
	if (nmbr-4 > 0) {
		document.getElementById('mainpost5').innerHTML = FileHelper('posts/' + (nmbr-4)  + '.txt');
	} else {
		document.getElementById('mainpost5').innerHTML = '-';
	}
}

function next() {
	if (nmbr+5 <= nmbr_of_posts) {
		nmbr = nmbr+5
		loadPost();
	}
}

function previous() {
	if (nmbr-5 > 0) {
		nmbr = nmbr-5
		loadPost();
	}
}