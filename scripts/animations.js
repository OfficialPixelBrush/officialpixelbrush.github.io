function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadYear(year) {
	if (year != null) {
		document.getElementById('selected').innerHTML = FileHelper('animations/' + year + '.txt');
	} else {
		document.getElementById('selected').innerHTML = '-';
	}
}