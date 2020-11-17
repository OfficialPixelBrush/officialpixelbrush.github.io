function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

// Number setup
let nmbr_of_pages = 3;
let nmbr = 3;
let comicID = 0;
var title;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const page_type = urlParams.get('page')
nmbr = page_type;


// Load the appropriate page number and name for the Comic
function loadComic(pComicID) {
	title = FileHelper('/comics/comicIDlist.txt').split("\n");
	console.log('pComicID: '+ title[pComicID]);
	nmbr_of_pages = FileHelper('/comics/' + title[pComicID] + '/numberOfPages.txt');
	nmbr = 1;
	comicID = pComicID;
	loadPost();
}

function loadPost() {
	if (comicID == 1) {
		if ((nmbr <= nmbr_of_pages) && (nmbr > 0)) {
			updatePageNumberURL();
			document.getElementById('pageNumber').innerHTML = ('#' + nmbr);
			document.getElementById('part1').src = ('comics/' + title[comicID] + '/page_' + nmbr + '_1.png');
			document.getElementById('part2').src = ('comics/' + title[comicID] + '/page_' + nmbr + '_2.png');
			document.getElementById('postdate').innerHTML = FileHelper('/comics/' + title[comicID] + '/page_' + nmbr + '.txt');
		} else {
			first();
		}
	} else if (comicID == 0) {
		if ((nmbr <= nmbr_of_pages) && (nmbr > 0)) {
			updatePageNumberURL();
			document.getElementById('pageNumber').innerHTML = ('#' + nmbr);
			document.getElementById('part1').src = ('comics/' + title[comicID] + '/page_' + nmbr + '.png');
			//document.getElementById('postdate').innerHTML = FileHelper('/comics/' + title[comicID] + '/page_' + nmbr + '.txt');
		} else {
			first();
		}
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
	updatePageNumberURL();
	loadPost();
}

function latest() {
	nmbr = nmbr_of_pages;
	updatePageNumberURL();
	loadPost();
}

function previous() {
	if (nmbr-1 > 0) {
		nmbr = nmbr-1;
		updatePageNumberURL();
		loadPost();
	}
}

function updatePageNumberURL() {
	var queryParams = new URLSearchParams(window.location.search);
	queryParams.set("page", nmbr);
	history.replaceState(null, null, "?"+queryParams.toString());
}