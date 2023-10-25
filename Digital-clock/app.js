const clock=document.querySelector(".clock")
function updateClock(){
    let now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let amPm= hours>=12? 'PM' : 'AM';

    hours=hours%12||12;

   
    hours=hours.toString().padStart(2,"0")
    minutes=minutes.toString().padStart(2,"0")
    seconds=seconds.toString().padStart(2,"0")
    let time=hours + ":" + minutes + ":" +seconds + " " +amPm ;
    clock.textContent=time;
}



setInterval(updateClock, 1000)


// const clock=document.querySelector(".clock")
// function updateClock(){
//     let now=new Date();
//     let hours=now.getHours();
//     let minutes=now.getMinutes();
//     let seconds=now.getSeconds();
//     let amPm= hours>=12? 'PM' : 'AM';

//     hours=hours%12||12;

//     hours=padZero(hours);
//     minutes=padZero(minutes);
//     seconds=padZero(seconds);

//     let time=hours + ":" + minutes + ":" +seconds + " " +amPm ;
//     clock.textContent=time;
// }

// function padZero(value){
//     return value<10? '0' + value : value;
// }

// setInterval(updateClock, 1000)