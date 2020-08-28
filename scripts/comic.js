let nmbr_of_pages = 2;
let nmbr = 2;
let disCSS = 0;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	if (nmbr > 0) {
		if (nmbr < nmbr_of_pages+1) {
			document.getElementById('pageNumber').innerHTML = FileHelper('Page ' + nmbr);
			document.getElementById('part1').src = FileHelper('comics/kangaskhanslife/page_' + nmbr + '_1.png');
			document.getElementById('part2').src = FileHelper('comics/kangaskhanslife/page_' + nmbr + '_2.png');
			document.getElementById('postdate').innerHTML = FileHelper('comics/kangaskhanslife/page_' + nmbr + '.txt');
		}
	}
}

function next() {
	if (nmbr+1 <= nmbr_of_posts) {
		nmbr = nmbr+1
		loadPost();
	}
}

function first() {
	nmbr = 1;
	loadPost();
}

function latest() {
	nmbr = nmbr_of_pages;
	loadPost();
}

function previous() {
	if (nmbr-1 > 0) {
		nmbr = nmbr-1
		loadPost();
	}
}