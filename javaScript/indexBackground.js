const background = document.getElementById("bck");
if(realWidth<768)
{
    for (let i = 0; i < 10; i++) {
        background.innerHTML += `<span id="span"></span>`;
        span = document.querySelectorAll(".background span")[i];
        span.style.left = Math.floor(Math.random() * 750) + "px";
        span.style.top = Math.floor(Math.random() * 600) + "px";
    }
}
else{
    for (let i = 0; i < 10; i++) {
        background.innerHTML += `<span id="span"></span>`;
        span = document.querySelectorAll(".background span")[i];
        span.style.left = Math.floor(Math.random() * 1400) + "px";
        span.style.top = Math.floor(Math.random() * 1000) + "px";
    }
}