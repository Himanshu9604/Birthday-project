function unlock() {

  const code = document.getElementById("passcode").value.trim();

  if (code === "28/04/2000") {

    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("loadingScreen").classList.remove("hidden");

    let p = 0;
    const msgs = [
      "Searching Memories ❤️",
      "Finding Beautiful Moments 📸",
      "Collecting Happiness 😊",
      "Loading Friendship 🤝",
      "Preparing Something Special ✨"
    ];

    let i = 0;

    const timer = setInterval(() => {

      p += 4;

      document.getElementById("progress").style.width = p + "%";

      document.getElementById("loadingText").innerText =
        msgs[i % msgs.length];

      i++;

      if (p >= 100) {

        clearInterval(timer);

        document.getElementById("loadingScreen")
          .classList.add("hidden");

        document.getElementById("mainContent")
          .classList.remove("hidden");

        document.getElementById("memorySection")
          .classList.remove("hidden");

        setTimeout(() => {

          document.getElementById("memorySection")
            .scrollIntoView({
              behavior: "smooth"
            });

        }, 500);
        const song = document.getElementById("song");

        song.volume = 0.5;

        song.play().catch(() => {
          console.log("Autoplay blocked");
        });

        if (typeof confetti !== "undefined") {

          confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
          });

        }

        startTyping();

      }

    }, 120);

  } else {

    document.getElementById("error").innerText =
      "❌ Oops! That's not Darshu's birthday.";

  }

}

function toggleMusic() {

  const song = document.getElementById("song");

  if (song.paused) {

    song.play();

  } else {

    song.pause();

  }

}

function startTyping() {

  if (typeof Typed !== "undefined") {

    new Typed("#typedText", {

      strings: [
        "One Of The Strongest People I Know ❤️",
        "A Friend I Truly Admire ✨",
        "A Beautiful Soul 🌸",
        "Someone Who Deserves Happiness 💖",
        "Happy Birthday Darshu 🎂"
      ],

      typeSpeed: 50,
      backSpeed: 30,
      loop: true

    });

  }

}

window.addEventListener("load", () => {

  for (let i = 0; i < 40; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.opacity = "0.15";
    heart.style.pointerEvents = "none";
    heart.style.fontSize =
      (10 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

  }

});

function showSecretMessage() {

  const msg = document.getElementById("secretMessage");

  msg.classList.remove("hidden");

  msg.scrollIntoView({
    behavior: "smooth"
  });

  confetti({
    particleCount: 150,
    spread: 120,
    origin: { y: 0.6 }
  });

}

function showSecretMessage() {
  const el = document.getElementById("secretMessage");

  el.classList.remove("hidden");

  setTimeout(() => {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}
setTimeout(() => {

  const noBtn = document.getElementById("noBtn");

  if (noBtn) {

    function moveButton() {

      const x = Math.random() * 300;
      const y = Math.random() * 120;

      noBtn.style.left = x + "px";
      noBtn.style.top = y + "px";
    }

    noBtn.addEventListener("mouseenter", moveButton);
    noBtn.addEventListener("click", moveButton);
    noBtn.addEventListener("touchstart", moveButton);
  }

  const yesBtn = document.getElementById("yesBtn");

  if (yesBtn) {

    yesBtn.addEventListener("click", () => {

      document.getElementById("secretMessage").innerHTML = `

        <h2>💖 You Made My Day 💖</h2>

        <p style="line-height:2">

          Shayad words itne kaafi nahi honge
          jitna khush main iss waqt hu. ✨

          Thank you for giving us a chance.

          Main promise karta hu ki
          tumhari respect,
          tumhari happiness,
          aur tumhari smile
          hamesha mere liye important rahegi. 🌸

          Aaj ka din waise hi special tha,
          lekin tumhare "Yes" ne ise
          meri life ke sabse khoobsurat moments me se ek bana diya. ❤️

          I Love You Darshu 🌹

        </p>
      `;

      if (typeof confetti !== "undefined") {

        confetti({
          particleCount: 400,
          spread: 200,
          origin: { y: 0.6 }
        });

      }

    });

  }

}, 1000);

function openMemory(card) {
  const img = card.querySelector("img").src;
  const text = card.querySelector("p").innerText;

  document.getElementById("popupImg").src = img;
  document.getElementById("popupText").innerText = text;

  document.getElementById("memoryPopup").classList.remove("hidden");
}

function closeMemory() {
  document.getElementById("memoryPopup").classList.add("hidden");
}

