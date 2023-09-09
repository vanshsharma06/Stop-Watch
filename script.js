let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
let dt = document.getElementById('display-time');
let timer = null;
function stopWatch() {
    miliseconds++;
    if (miliseconds == 100) {
        miliseconds = 0;
        seconds++;
        if (seconds==60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours<10 ? "0"+hours : hours;
        let m = minutes<10 ? "0"+minutes : minutes;
        let s = seconds<10 ? "0"+seconds : seconds;
        let ms = miliseconds<10 ? "0"+miliseconds : miliseconds;
        dt.innerHTML = h+":"+m+":"+s+":"+ms;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,10);
}

function stop() {
    clearInterval(timer);
}
function reset() {
    clearInterval(timer);
    [miliseconds,seconds,minutes,hours] = [0,0,0,0]
    dt.innerHTML='00:00:00:00'
}

let a = document.querySelector('.play img');
a.addEventListener('click',start);
let b = document.querySelector('.stop img');
b.addEventListener('click',stop);
let c = document.querySelector('.back img');
c.addEventListener('click',reset);