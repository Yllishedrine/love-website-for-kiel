const messages = [

"I love you so much.",

"Thank you for always making me smile.",

"You're my safe place.",

"I hope we stay together forever.",

"Every day with you is my favorite.",

"You're the best thing that's ever happened to me.",

"Thank you for choosing me.",

"I'll always be here for you."

];

function showMessage() {
document.getElementById("coverText").style.display = "none";
document.getElementById("hiddenMessage").classList.add("show");
}

document.getElementById("btn").addEventListener("click", () => {

const random = Math.floor(Math.random()*messages.length);  

document.getElementById("message").innerHTML = messages[random];

});
