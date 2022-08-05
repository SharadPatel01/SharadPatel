const background = document.getElementById("bck");
for (let i = 0; i < 20; i++) {
    background.innerHTML += `<span id="span"></span>`;
    span = document.querySelectorAll(".background span")[i];
    console.log(Math.floor(Math.random() * 100));
    span.style.left = Math.floor(Math.random() * 1400) + "px";
    span.style.top = Math.floor(Math.random() * 1000) + "px";
}