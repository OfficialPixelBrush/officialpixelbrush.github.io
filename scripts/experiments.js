let nmbr_of_posts = 1;
let nmbr = 1;
let disCSS = 0;

async function getNumberOfPosts() {
	nmbr_of_posts = await FileHelper('/experiments/numberOfEntries.txt');
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const post_type = urlParams.get('entry')
if (post_type) {
	nmbr = post_type;
	loadPost();
} else {
	randomPost();
}


async function FileHelper(pathOfFileToReadFrom) {
    const request = await fetch(pathOfFileToReadFrom); //new XMLHttpRequest();
    const returnValue = await request.text();
	// console.log(returnValue);
    return returnValue;
}

async function loadPost() {
	await getNumberOfPosts();
	if ((nmbr <= nmbr_of_posts) && (nmbr > 0)) {
		updatePostNumberURL();
		document.getElementById('currentEntry').innerHTML = await FileHelper('/experiments/entries/' + nmbr + '.html');
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

async function latest() {
	await getNumberOfPosts();
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

function updatePostNumberURL(passedValue) {
	if (passedValue) {
		nmbr = passedValue;
	}
	var queryParams = new URLSearchParams(window.location.search);
	queryParams.set("entry", nmbr);
	history.replaceState(null, null, "?"+queryParams.toString());
}

async function randomPost() {
	await getNumberOfPosts();
	nmbr = Math.floor(Math.random() * nmbr_of_posts)+1; 
	updatePostNumberURL();
	loadPost();
}