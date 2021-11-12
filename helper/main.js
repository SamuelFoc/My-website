const box1 = document.getElementById("body");
const halfWidth = window.innerWidth/2;
const halfHeight = window.innerHeight/2;

box1.addEventListener("mousemove", (e) => {
    let offsetY = halfHeight - e.clientY;
    let offsetX = halfWidth - e.clientX;
    let distance = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
    box1.style.textShadow = offsetX + "px " + offsetY + "px " + distance/20 + "px black";
    console.log(offsetY);
});


