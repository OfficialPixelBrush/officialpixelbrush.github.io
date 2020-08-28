let nmbr_of_pages = 2;
let nmbr = 2;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	document.getElementById('pageNumber').innerHTML = ('#' + nmbr);
	document.getElementById('part1').src = ('comics/kangaskhanslife/page_' + nmbr + '_1.png');
	document.getElementById('part2').src = ('comics/kangaskhanslife/page_' + nmbr + '_2.png');
	document.getElementById('postdate').innerHTML = FileHelper('/comics/kangaskhanslife/page_' + nmbr + '.txt');
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