let nmbr_of_posts = 21;
let nmbr = 21;
let disCSS = 0;

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadImages(pImages) {
	document.getElementById('images').innerHTML = FileHelper('images/archive/' + pImages + '/' + pImages + '.txt');
}