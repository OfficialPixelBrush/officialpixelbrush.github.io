let nmbr_of_posts = 30;
let nmbr = 30;
let disCSS = 0;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const post_type = urlParams.get('post')
nmbr = post_type;
loadPost();


function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	if ((nmbr <= nmbr_of_pages) && (nmbr > 0)) {
		updatePageNumberURL();
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
	} else {
		first();
	}
}

function next() {
	if (nmbr+1 <= nmbr_of_pages) {
		nmbr = nmbr+1;
		updatePageNumberURL();
		loadPost();
	}
}

function first() {
	nmbr = 1;
	updatePostNumberURL();
	loadPost();
}

function latest() {
	nmbr = nmbr_of_pages;
	updatePostNumberURL();
	loadPost();
}

function previous() {
	if (nmbr-1 > 0) {
		nmbr = nmbr-5;
		updatePostNumberURL();
		loadPost();
	}
}

function updatePostNumberURL() {
	var queryParams = new URLSearchParams(window.location.search);
	queryParams.set("post", nmbr);
	history.replaceState(null, null, "?"+queryParams.toString());
}

/* misc stuff */

function disableCSS() {
	if (disCSS == 0) {
		swapStyleSheet("");
		document.getElementById('90smode').innerHTML = 'modern mode';
		disCSS = 1;
	} else {
		swapStyleSheet("css/dark.css");
		document.getElementById('90smode').innerHTML = '90s mode';
		disCSS = 0;
	}
}

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}