let nmbr_of_posts = 3;
let nmbr = 3;
let disCSS = 0;

function getNumberOfPosts() {
	nmbr_of_posts = FileHelper('/atscraft/news/numberOfPosts.txt');
	nmbr = nmbr_of_posts;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const post_type = urlParams.get('n')
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
	if ((nmbr <= nmbr_of_posts) && (nmbr > 0)) {
		updatePostNumberURL();
		if (nmbr > 0) {
			document.getElementById('mainpost').innerHTML = FileHelper('news/' + nmbr + '.txt');
		} else {
			document.getElementById('mainpost').innerHTML = '-';
		}
	} else {
		latest();
	}
}

function next() {
	if (nmbr+1 <= nmbr_of_posts) {
		nmbr = nmbr+1;
		updatePostNumberURL();
		loadPost();
	}
}

function first() {
	nmbr = 1;
	updatePostNumberURL();
	loadPost();
}

function latest() {
	getNumberOfPosts();
	nmbr = nmbr_of_posts;
	updatePostNumberURL();
	loadPost();
}

function previous() {
	if (nmbr-1 > 0) {
		nmbr = nmbr-1;
		updatePostNumberURL();
		loadPost();
	}
}

function updatePostNumberURL() {
	var queryParams = new URLSearchParams(window.location.search);
	queryParams.set("n", nmbr);
	history.replaceState(null, null, "?"+queryParams.toString());
}