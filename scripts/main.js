let nmbr_of_posts = 17;
let nmbr = 17;

let latestcommit="";

 function componentDidMount() {
    // Replace this with your own repo
    // https://api.github.com/repos/:owner/:repo/branches/master
    fetch(
      "https://api.github.com/repos/OfficialPixelBrush/officialpixelbrush.github.io/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            author: json.commit.author.login,
            branch: json.name,
            date: json.commit.commit.author.date,
            sha: json.commit.sha,
            link: json._links.html
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
	  
	  latestcommit=this.state.date;
}

function FileHelper(pathOfFileToReadFrom) {
    var request = new XMLHttpRequest();
    request.open("GET", pathOfFileToReadFrom, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

function loadPost() {
	if (nmbr > 0) {
		document.getElementById('mainpost').innerHTML = FileHelper('posts/' + nmbr + '.txt');
	} else {
		document.getElementById('mainpost').innerHTML = '-';
	}
	if (nmbr-1 > 0) {
		document.getElementById('mainpost2').innerHTML = FileHelper('posts/' + (nmbr-1) + '.txt');
	} else {
		document.getElementById('mainpost2').innerHTML = '-';
	}
	if (nmbr-2 > 0) {
		document.getElementById('mainpost3').innerHTML = FileHelper('posts/' + (nmbr-2)  + '.txt');
	} else {
		document.getElementById('mainpost3').innerHTML = '-';
	}
	if (nmbr-3 > 0) {
		document.getElementById('mainpost4').innerHTML = FileHelper('posts/' + (nmbr-3)  + '.txt');
	} else {
		document.getElementById('mainpost4').innerHTML = '-';
	}
	if (nmbr-4 > 0) {
		document.getElementById('mainpost5').innerHTML = FileHelper('posts/' + (nmbr-4)  + '.txt');
	} else {
		document.getElementById('mainpost5').innerHTML = '-';
	}
}

function next() {
	if (nmbr+5 <= nmbr_of_posts) {
		nmbr = nmbr+5
		loadPost();
	}
}

function previous() {
	if (nmbr-5 > 0) {
		nmbr = nmbr-5
		loadPost();
	}
}