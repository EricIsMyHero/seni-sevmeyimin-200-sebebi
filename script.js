// Axtarış funksiyası
function filterReasons() {
    // Giriş dəyərini al, kiçik hərflərə çevir
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    
    // Səbəblərin siyahısını al
    const ol = document.getElementById('reasons-list');
    const li = ol.getElementsByTagName('li');

    // Hər siyahı elementini dövr et
    for (let i = 0; i < li.length; i++) {
        const text = li[i].textContent;

        // Axtarış sözü səbəb mətnində varsa
        if (text.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove('hidden'); // Göstər
        } else {
            li[i].classList.add('hidden'); // Gizlət
        }
    }
}


// Saytı Paylaş funksiyası (Əvvəlki)
function shareSite() {
    const shareData = {
        title: "Səni Sevməyimin 200 Səbəbi 💖",
        text: "Bax bu sənə həsr olunub 🥺💘",
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log("Paylaşıldı"))
            .catch((err) => console.log("Xəta:", err));
    } else {
        prompt("Linki kopyala və paylaş ✨", window.location.href);
    }
}

// YENİ: WhatsApp Paylaşma funksiyası
function shareWhatsApp() {
    const text = "Səni Sevməyimin 200 Səbəbi 💖. Bax bu sənə həsr olunub 🥺💘. Link: " + window.location.href;
    const url = "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(url, '_blank');
}

// YENİ: Twitter Paylaşma funksiyası
function shareTwitter() {
    const text = "Səni Sevməyimin 200 Səbəbi 💖. Bax bu sənə həsr olunub 🥺💘";
    const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text) + "&url=" + encodeURIComponent(window.location.href);
    window.open(url, '_blank');
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
