let hr;
let min;
let sec;
let sound = new Audio();
sound.src = "audio/alarm.mp3";
let firstNo = Math.floor(Math.random() * 100);
let secondNo = Math.floor(Math.random() * 100);
stops.disabled = true;
// alert(firstNo + " " + secondNo)
function myCount() {
    let defaultDate = new Date;
    let defaultHour = defaultDate.getHours();
    let defaultMinute = defaultDate.getMinutes();
    let defaultSeconds = defaultDate.getSeconds();
    
    currentHr.innerText = defaultHour;
    currentMin.innerText = defaultMinute;
    currentSec.innerText = defaultSeconds;

    if (hr == defaultHour && min == defaultMinute && sec == defaultSeconds) {
        sound.play();
        sound.loop = true;
    }
}
function setAlarm() {
    hr = hours.value;
    min = minutes.value;
    sec = seconds.value;
    // console.log(hr + min + sec);
    stops.disabled = false;
}
function stopAlarm() {
    alert("What is the answer to this mathematics arithmetic? " + firstNo + "+" + secondNo);
    inp.hidden = false;
    sub.hidden = false;
}
function submit() {
    let answer = firstNo + secondNo;
    let input = inp.value;
    if (answer == input) {
        sound.pause();
        sound.loop = false;
        inp.hidden = true;
        sub.hidden = true;
        stops.disabled = true;
    }
    else {
        alert("Try again");
    }
}
setInterval("myCount()", 1000)