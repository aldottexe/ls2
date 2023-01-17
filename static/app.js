console.log("gonna connect to the johnsky john")
const socket = io.connect('http://raspberrypi.local:80')

document.querySelector('p').setAttribute("style", "color:red");

const color1 = document.querySelector('#c1');
color1.addEventListener('input', () => {
    //console.log("color changed"+input.value);
    socket.emit("color1",color1.value);
});

const color2 = document.querySelector('#c2');
color2.addEventListener('input', () => {
    //console.log("color changed"+input.value);
    socket.emit("color2",color2.value);
});