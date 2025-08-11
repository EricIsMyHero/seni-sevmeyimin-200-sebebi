function shareSite() {
  const shareData = {
    title: "Səni Sevməyimin 200 Səbəbi 💖",
    text: "Bax bu sənə həsr olunub 🥺💘",
    url: window.location.href
  };
window.onload = function() {
  document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") searchReasons();
  });
};

function searchReasons() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();
  let reasons = document.querySelectorAll("#reasonList li");

  reasons.forEach(reason => {
    if (input === "" || reason.textContent.toLowerCase().includes(input)) {
      reason.style.display = ""; // normal görünüş
    } else {
      reason.style.display = "none"; // gizlət
    }
  });
}
  if (navigator.share) {
    navigator.share(shareData)
      .then(() => console.log("Paylaşıldı"))
      .catch((err) => console.log("Xəta:", err));
  } else {
    prompt("Linki kopyala və paylaş ✨", window.location.href);
  }
}

const emojis = ["🌸", "🎀", "🩷", "😻", "💝", "💖"];
for (let i = 0; i < 100; i++) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.top = Math.random() * 100 + "vh";
  emoji.style.fontSize = (Math.random() * 20 + 20) + "px";
  document.body.appendChild(emoji);
}
