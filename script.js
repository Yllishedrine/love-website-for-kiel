const startDate = new Date("2026-05-28T00:00:00");

function updateCounter(){

    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));
    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("counter").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCounter,1000);
updateCounter();

function updateClock(){

    document.getElementById("clock").innerHTML =
        new Date().toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();

const reasons = [

"Because your smile melts my heart.",

"Because you make ordinary days special.",

"Because you always make me feel safe.",

"Because you're my favorite person.",

"Because home is wherever you are.",

"Because you understand me.",

"Because your laugh is my favorite sound.",

"Because life is better with you.",

"Because every memory with you is precious.",

"Because you're my forever."

];

function randomReason(){

    let random = Math.floor(Math.random()*reasons.length);

    document.getElementById("reason").innerHTML =
        reasons[random];

}

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
        window.location.href = "surprise.html";
    });
}
