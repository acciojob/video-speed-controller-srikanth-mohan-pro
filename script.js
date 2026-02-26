const player=document.querySelector(".player");
const video=player.querySelector("video");
const toggle=player.querySelector(".toggle");
const progress=player.querySelector(".progress");
const progressFilled=player.querySelector(".progress__filled");
const volume=player.querySelector('input[name="volume"]');
const playbackSpeed=player.querySelector('input[name="playbackRate"]')
const skipButtons=player.querySelectorAll("[data-skip]");

function togglePlay(){
	if(video.paused){
		video.play();
	}
	else{
		video.pause();
	}
}
function updateButton(){
	toggle.textContent=vide.paused?"►":"❚ ❚";
}

function updateProgress(){
	const percent=(video.currentTime/video.duration)*100;
	progressFilled.style.flexBasis=`${percent}%`;
}

function setProgress(e){
	const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
	video.currentTime=scrubTime;
}

function handleRangeUpdate(){
	video[this.name]=this.value;
}

function skip(){
	video.currentTime+=parseFloat(this.dataset.skip);
}

video.addEventListener("click",togglePlay);
video.addEventListener("play",updateButton);
video.addEventListener("pause",updateButton);
video.addEventListener("timeupdate",updateProgress);

toggle.addEventListener("click",togglePlay);
progress.addEventListener("click",setProgress);

volume.addEventListener("input",handleRangeUpdate);
playbackSpeed.addEventListener("input",handleRangeUpdate);

skipButtons.forEach(button=>
	button.addEventListener("click",skip)
);




