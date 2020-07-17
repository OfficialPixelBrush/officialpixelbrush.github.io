function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost(nmbr) {
	document.getElementById('mainpost').innerHTML = FileHelper('posts/' + nmbr + '.txt');
}
