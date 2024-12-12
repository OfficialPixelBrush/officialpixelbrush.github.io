let nmbr_of_posts = 28;
let nmbr = 28;
let disCSS = 0;

async function getNumberOfPosts() {
	nmbr_of_posts = await FileHelper('/posts/numberOfPosts.txt');
	nmbr = nmbr_of_posts;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const post_type = urlParams.get('post')
nmbr = post_type;
loadPost();


async function FileHelper(pathOfFileToReadFrom) {
    const request = await fetch(pathOfFileToReadFrom); //new XMLHttpRequest();
    const returnValue = await request.text();
	console.log(returnValue);
    return returnValue;
}

async function loadPost() {
	if ((nmbr <= nmbr_of_posts) && (nmbr > 0)) {
		updatePostNumberURL();
		if (nmbr > 0) {
			document.getElementById('mainpost').innerHTML = await FileHelper('posts/' + nmbr + '.txt');
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

function updatePostNumberURL() {
	var queryParams = new URLSearchParams(window.location.search);
	queryParams.set("post", nmbr);
	history.replaceState(null, null, "?"+queryParams.toString());
}

function randomPost() {
	nmbr = Math.floor(Math.random() * nmbr_of_posts)+1; 
	updatePostNumberURL();
	loadPost();
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