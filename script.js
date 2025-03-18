console.log("Hello");
function Display1() {
    console.log("Welcome");
}
setTimeout(Display1, 3000);
function Display2() {
    document.querySelector('h1').innerHTML = 'INTERNSHIP BATCH';
    console.log("Display2 executed");
}
let changeTimeout = setTimeout(Display2, 6000); 
let changeInterval;
function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
document.querySelector('#start').addEventListener('click', () => {
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    changeInterval = setInterval(changeBgColor, 2000);
    console.log("Background color change started");
});
document.querySelector('#stop').addEventListener('click', () => {
    if (changeInterval) {
        clearInterval(changeInterval);
        console.log("Stopped background color change");
    }
    if (changeTimeout) {
        clearTimeout(changeTimeout); 
        console.log("Stopped Display2 timeout");
        changeTimeout = null; 
    } else {
        console.log("Restarting Display2 timeout");
        changeTimeout = setTimeout(Display2, 6000);
    }
});
