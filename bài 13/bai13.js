let hour1 = document.querySelector(".h1");
let hour2 = document.querySelector(".h2");

let minute1 = document.querySelector(".m1");
let minute2 = document.querySelector(".m2");

let second1 = document.querySelector(".s1");
let second2 = document.querySelector(".s2");

let greeting = document.querySelector(".greeting-text");

function changeNumber(number, image1, image2) {
    let numberString = String(number).padStart(2, "0");

    image1.src = "./images/0" + numberString[0] + ".gif";
    image2.src = "./images/0" + numberString[1] + ".gif";
}

function updateClock() {
    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    changeNumber(hour, hour1, hour2);
    changeNumber(minute, minute1, minute2);
    changeNumber(second, second1, second2);

    if (hour >= 5 && hour < 12) {
        greeting.textContent = "Chào buổi sáng";
    } else if (hour >= 12 && hour < 18) {
        greeting.textContent = "Chào buổi chiều";
    } else {
        greeting.textContent = "Chào buổi tối";
    }
}
updateClock();
setInterval(updateClock, 1000);