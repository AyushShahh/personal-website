const words = ["Computer Scientist ", "Techie ", "Amateur Programmer ", "Stargazer ", "Geek "];
let i = 0;
let timer;

time();

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();

function time() {
	let currentTime = new Date();
	let currentOffset = currentTime.getTimezoneOffset();
	const ISTOffset = 330;   // IST offset UTC +5:30
	let ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	// ISTTime now represents the time in IST coordinates
	let hoursIST = ISTTime.getHours();
	if (hoursIST.toString().length == 1)
	{
		hoursIST = "0" + hoursIST;
	}
	let minutesIST = ISTTime.getMinutes();
	if (minutesIST.toString().length == 1)
	{
		minutesIST = "0" + minutesIST;
	}
	let dateIST = ISTTime.getDate();
	let dayIST = ISTTime.getDay();
	let monthIST = ISTTime.getMonth();
	let yearIST = ISTTime.getFullYear();

	const time = document.getElementById("time");
	time.innerHTML = days[dayIST] + ", " + months[monthIST] + " " + dateIST + ", " + yearIST + "<br>&#128338 " + hoursIST + ":" + minutesIST;
}

function timeout()
{
	time();
	setTimeout(timeout, 1000);
}

timeout();