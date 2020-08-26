let nmbr_of_pages = 1;
let nmbr = 1;
let disCSS = 0;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	if (nmbr != null) {
		document.getElementById('pageNmbr').innerHTML = '#' + nmbr;
		document.getElementById('post1').src = FileHelper('comics/kangaskhanslife/page_' + nmbr + '_1.png');
		document.getElementById('post2').src = FileHelper('comics/kangaskhanslife/page_' + nmbr + '_2.png');
		document.getElementById('postdate').innerHTML = FileHelper('comics/kangaskhanslife/page_' + nmbr + '.txt');
	} else {
		document.getElementById('pageNmbr').innerHTML = '';
		document.getElementById('post1').src = FileHelper('comics/kangaskhanslife/page_1_1.png');
		document.getElementById('post2').src = FileHelper('comics/kangaskhanslife/page_2_1.png');
		document.getElementById('postdate').innerHTML = FileHelper('');
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