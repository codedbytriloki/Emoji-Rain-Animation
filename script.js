const emojis = ['💧','🔥','👻','🥶','😘','🤣','😇','💧','😱','😛','😆','💧'];

let rainInterval;

function createEmoji(){
  const emoji = document.createElement("span");
  emoji.classList.add("emoji");
  emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  // Random horizontal position
  emoji.style.left = Math.random() * 100 + "vw";
  const duration = Math.random() * 2 + 3;
  emoji.style.animationDuration = duration + "s";

  document.body.appendChild(emoji);
  setTimeout(() => {
    emoji.remove();
  },duration*1000)
} 

document.getElementById("start").onclick = () => {
  if(!rainInterval){
    rainInterval = setInterval(createEmoji,200);
  }
}

document.getElementById("stop").onclick = () => {
  clearInterval(rainInterval);
  rainInterval = null;
}