const timerEl = document.querySelector(".timer");

const startBtn = document.getElementById("start");

const stopBtn = document.getElementById("stop");

const resetBtn = document.getElementById("restart");

let startTime = 0;
let elapsedTime = 0;
let TimeInterval = 0;

function startTimer() {
	startTime = Date.now() - elapsedTime;
	TimeInterval = setInterval(() => {
		elapsedTime = Date.now() - startTime;
		timerEl.textContent = formateTime(elapsedTime);
	}, 10);
}
function formateTime(elapsedTime) {
	const milisec = Math.floor((elapsedTime % 1000) / 10);
	const sec = Math.floor((elapsedTime % (1000 * 60)) / 1000);
	const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (60 * 1000));
	const hours = Math.floor(elapsedTime / (60 * 1000 * 60));
	return (
		(hours ? (hours > 9 ? hours : "0" + hours) : "00") +
		":" +
		(minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
		":" +
		(sec ? (sec > 9 ? sec : "0" + sec) : "00") +
		":" +
		(milisec > 9 ? milisec : "0" + milisec)
	);
}
function stopTimer() {}

function resetTimer() {}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
