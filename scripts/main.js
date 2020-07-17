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
	if (nbmr != null) {
		document.getElementById('mainpost').innerHTML = FileHelper('posts/' + nmbr + '.txt');
	} else {
		document.getElementById('mainpost').innerHTML = '-';
	}
	if (nbmr-1 != null) {
		document.getElementById('mainpost2').innerHTML = FileHelper('posts/' + (nmbr-1) + '.txt');
	} else {
		document.getElementById('mainpost2').innerHTML = '-';
	}
	if (nbmr-2 != null) {
		document.getElementById('mainpost3').innerHTML = FileHelper('posts/' + (nmbr-2)  + '.txt');
	} else {
		document.getElementById('mainpost3').innerHTML = '-';
	}
	if (nbmr-3 != null) {
		document.getElementById('mainpost4').innerHTML = FileHelper('posts/' + (nmbr-3)  + '.txt');
	} else {
		document.getElementById('mainpost4').innerHTML = '-';
	}
	if (nbmr-4 != null) {
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