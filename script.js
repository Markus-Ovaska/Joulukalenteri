let today = new Date();
let first = new Date("01-12-2023");
let second = new Date("02-12-2023");
let third = new Date("03-12-2023");
let fourth = new Date("04-12-2023");
let fifth = new Date("05-12-2023");
let sixth = new Date("06-12-2023");
let seventh = new Date("07-12-2023");
let eighth = new Date("08-12-2023");
let ninth = new Date("09-12-2023");
let tenth = new Date("10-12-2023");
let eleventh = new Date("11-12-2023");
let twelvth = new Date("12-12-2023")
let thirteenth = new Date("13-12-2023")
let fourteenth = new Date("14-12-2023")
let fifteenth = new Date("15-12-2023")
let sixteenth = new Date("16-12-2023")
let seventeeth = new Date("17-12-2023")
let eighteenth = new Date("18-12-2023")
let nineteenth = new Date("19-12-2023")
let twentieth = new Date("20-12-2023")
let twentyfirst = new Date("21-12-2023")
let twentysecond = new Date("22-12-2023")
let twentythird = new Date("23-12-2023")
let twentyfourth = new Date("24-12-2023")

function open(){
    if (Date() < today) {
        return false
    } else {
        return true
    }
}



let addSnow = () => {
    const random = (min, max) => Math.random() * (max - min) + min;
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

let snow = document.createElement('div');

snow.style.position = "fixed";
snow.style.top = "-2px";
snow.style.right = random(0, screenWidth) + "px";
snow.style.width = "10px";
snow.style.height = "10px";
snow.style.backgroundColor = "#fff";
snow.style.borderRadius = "50%";
snow.style.zIndex = "999";
snow.style.pointerEvents = "none";
const animateSnow = () => {
    snow.style.top = parseInt(snow.style.top) + 2 + "px";
    snow.style.right = parseInt(snow.style.right) + random(0, 2) + "px";
    /**
     * If it's out of the screen, move it to the top
     * and randomize it's position
     * */
    if (parseInt(snow.style.top) > screenHeight) {
        snow.style.right = random(0, screenWidth) + "px";
        snow.style.top = parseInt("-" + random(0, 20) + "px");
    }
    window.requestAnimationFrame(animateSnow);
};
window.requestAnimationFrame(animateSnow);
document.body.appendChild(snow);
};

for (let i = 0; i < 60; i++) {
    setTimeout(addSnow, i * 100);
};




  