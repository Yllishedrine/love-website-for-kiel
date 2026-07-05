function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (15 + Math.random()*30) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(createHeart,350);
