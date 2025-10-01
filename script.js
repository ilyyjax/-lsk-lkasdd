// Just for extra fun animations

// Button click = Grandma talks
document.querySelector(".btn").addEventListener("click", () => {
  alert("Grandma says: Don’t burn your cookies, honey! 🍪👵");
});

// Cookie rain effect
function cookieRain() {
  const cookie = document.createElement("div");
  cookie.innerText = "🍪";
  cookie.style.position = "fixed";
  cookie.style.left = Math.random() * window.innerWidth + "px";
  cookie.style.top = "-50px";
  cookie.style.fontSize = Math.random() * 40 + 20 + "px";
  cookie.style.animation = "fall 5s linear forwards";
  document.body.appendChild(cookie);

  setTimeout(() => cookie.remove(), 5000);
}
setInterval(cookieRain, 800);

// Add falling animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh); opacity: 0; }
}
`;
document.head.appendChild(style);
