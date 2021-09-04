const now = new Date();
const d = new Date('September 05, 2021 12:00:00 +0200');

const time = d.getTime() - now.getTime();
const days = Math.floor(time / 1000 / 60 / 60 / 24);
const hours = Math.floor(time / 1000 / 60 / 60) % 24;
//const minutes = Math.floor(time / 1000 / 60) % 60;
//const seconds = Math.floor(time / 1000) % 60;
let final = days.toString() + " Days, " + hours.toString()+ " Hours\n";
if (days <= 1) {
	document.getElementById('countdownDIV').innerHTML = "Soon...";
} else {
	document.getElementById('countdownDIV').innerHTML = final + "</br>(based on GMT+2)";
}