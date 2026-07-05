const startDate = new Date("2026-05-28T00:00:00");

function updateCounter() {
    const counter = document.getElementById("counter");
    if (!counter) return;

    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    counter.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

updateCounter();
setInterval(updateCounter, 1000);

const reasons = [
    "❤️ Because your smile melts my heart.",
    "🌹 Because you make ordinary days special.",
    "💖 Because you always make me feel safe.",
    "🥹 Because you're my favorite person.",
    "🌍 Because home is wherever you are.",
    "🌙 Because you understand me.",
    "💞 Because your laugh is my favorite sound.",
    "✨ Because life is better with you.",
    "💗 Because every memory with you is precious.",
    "🌸 Because you're my forever."
];

function randomReason() {
    const reason = document.getElementById("reason");
    if (!reason) return;

    const random = Math.floor(Math.random() * reasons.length);
    reason.innerHTML = reasons[random];
}"💖 Because you always make me feel safe.",

"🥹 Because you're my favorite person.",

"🌍 Because home is wherever you are.",

"🌙 Because you understand me.",

"💞 Because your laugh is my favorite sound.",

"✨ Because life is better with you.",

"💗 Because every memory with you is precious.",

"🌸 Because you're my forever."

];

function randomReason(){

    let random = Math.floor(Math.random()*reasons.length);

    document.getElementById("reason").innerHTML =
        reasons[random];

}
