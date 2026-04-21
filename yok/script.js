// ================= DATA =================
const backgroundImages = [
  "New folder/temp_image_60A0D3C9-5A78-4592-8C3D-53E05E4D6619.WEBP",
  "New folder/temp_image_3D048E8E-E3A1-4F56-B816-8BCD2BEAD754.WEBP",
  "New folder/SAM_6110.jpg",
  "New folder/SAM_6280.JPEG",
  "New folder/SAM_6282.JPEG",
  "New folder/SAM_6286.JPEG",
  "New folder/SAM_6288.JPEG",
  "New folder/IMG_4548.JPG",
  "New folder/IMG_4592.JPG",
  "New folder/IMG_4636.JPG"
];

const memoryImages = [
  { src: "New folder/IMG_4459.JPG", title: "รูปที่แค่เห็นก็ยิ้มแล้ว", text: "บางภาพพอกลับมาดู ก็ยังรู้สึกเหมือนวันนั้นอยู่ใกล้ ๆ", tag: "favorite" },
  { src: "New folder/IMG_4464.JPG", title: "โมเมนต์เล็ก ๆ ของเรา", text: "ไม่ได้ต้องมีอะไรยิ่งใหญ่ แค่มีเธออยู่ด้วยก็พิเศษแล้ว", tag: "little things" },
  { src: "New folder/IMG_4870.JPG", title: "ยังคิดถึงบรรยากาศวันนั้น", text: "รูปนี้ทำให้เค้าจำได้ว่าความสุขของเราเรียบง่ายและน่ารักแค่ไหน", tag: "soft day" },
  { src: "New folder/IMG_5243.JPG", title: "รูปที่ใจอ่อนทุกครั้ง", text: "พอเห็นเธอในรูปนี้ ก็ยังเผลอยิ้มเหมือนเดิมทุกที", tag: "you" },
  { src: "New folder/IMG_5287.JPG", title: "ภาพประจำวันที่ดี", text: "ถ้าย้อนกลับไปวันนั้นได้ เค้าก็คงยังอยากเลือกยืนข้างเธอเหมือนเดิม", tag: "us" },
  { src: "New folder/IMG_6214.JPG", title: "ความทรงจำที่ไม่อยากหายไป", text: "มันเป็นช่วงเวลาธรรมดา แต่กลับมีค่ามากเพราะเป็นเรา", tag: "forever" }
];

const highlightVideos = [
  { src: "New folder/4228aa4ff0b5441ba1f52c7011a89a93.MP4", title: "คลิปที่ดูแล้วใจละลาย", text: "กดเล่นแล้วเหมือนได้กลับไปอยู่ตรงนั้นอีกครั้ง" },
  { src: "New folder/v14044g50000d43kh4nog65n7q1v8kbg.MP4", title: "ความน่ารักที่อยากเปิดซ้ำ", text: "เป็นช่วงเวลาที่อยากเก็บไว้ใกล้ตัวเสมอ" },
  { src: "New folder/video_563608548690100414-i68ucBWi.MP4", title: "วันนั้นที่ยังชัดอยู่เลย", text: "บางคลิปไม่ต้องมีคำบรรยายก็อบอุ่นพอแล้ว" },
  { src: "New folder/VxgpfWk8WUYGP5b6faF_rXq5xHDkPyX-UOVJWOsW5yI.MP4", title: "คลิปโปรดของเรา", text: "อยากกลับมาดูด้วยกันเรื่อย ๆ ทุกปีเลย" }
];

const anniversaryStart = new Date("2024-04-21T00:00:00");

// ================= ELEMENTS =================
const bgTrack = document.getElementById("bgTrack");
const memoryStack = document.getElementById("memoryStack");
const videoStrip = document.getElementById("videoStrip");
const scrollProgress = document.getElementById("scrollProgress");
const sparkleLayer = document.getElementById("sparkleLayer");
const floatingHearts = document.getElementById("floatingHearts");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const letterChips = [...document.querySelectorAll(".letter-chip")];
const letterParagraphs = [...document.querySelectorAll(".letter-paragraph")];
const heartExplosion = document.getElementById("heartExplosion");

// ================= SOUND =================
const clickSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
const successSound = new Audio("https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3");
const errorSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3");

// ================= BACKGROUND =================
function createBackgroundSlides() {
  backgroundImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "bg-slide";
    slide.style.backgroundImage = `url("${src}")`;
    if (index === 0) slide.classList.add("active");
    bgTrack.appendChild(slide);
  });

  const slides = [...document.querySelectorAll(".bg-slide")];
  let current = 0;

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4200);
}

// ================= MEMORY =================
function createMemoryCards() {
  memoryImages.forEach(({ src, title, text, tag }) => {
    const button = document.createElement("button");
    button.className = "glass-card memory-card reveal";
    button.innerHTML = `
      <img src="${src}">
      <div class="memory-copy">
        <p>${tag}</p>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    `;
    button.onclick = () => {
      lightboxImage.src = src;
      lightbox.showModal();
    };
    memoryStack.appendChild(button);
  });
}

// ================= VIDEO =================
function createVideoCards() {
  highlightVideos.forEach(({ src, title, text }) => {
    const card = document.createElement("article");
    card.className = "glass-card video-card reveal";
    card.innerHTML = `
      <video controls>
        <source src="${src}">
      </video>
      <div class="video-caption">
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
    `;
    videoStrip.appendChild(card);
  });
}

// ================= COUNTER =================
function animateCounters() {
  const today = new Date();
  const diffDays = Math.floor((today - anniversaryStart) / 86400000);

  document.getElementById("yearsTogether").textContent = 2;
  document.getElementById("daysTogether").textContent = diffDays;
  document.getElementById("hoursTogether").textContent = diffDays * 24;
}

// ================= REVEAL =================
function setupRevealObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ================= SCROLL =================
function updateScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (window.scrollY / max) * 100;
  scrollProgress.style.width = percent + "%";
}

// ================= EFFECT =================
function popSparkle(x, y) {
  const s = document.createElement("span");
  s.className = "sparkle";
  s.style.left = x + "px";
  s.style.top = y + "px";
  sparkleLayer.appendChild(s);
  setTimeout(() => s.remove(), 1000);
}

function popHeart(x, y) {
  const h = document.createElement("span");
  h.className = "heart-pop";
  h.textContent = "♡";
  h.style.left = x + "px";
  h.style.top = y + "px";
  floatingHearts.appendChild(h);
  setTimeout(() => h.remove(), 1000);
}

// ================= HEART EXPLOSION =================
function burstHearts() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "heart";
      heart.textContent = "♡";
      heart.style.left = Math.random() * w + "px";
      heart.style.top = Math.random() * h + "px";
      heartExplosion.appendChild(heart);
      setTimeout(() => heart.remove(), 1600);
    }, i * 20);
  }
}

// ================= INTERACTION =================
function setupInteractions() {
  window.addEventListener("scroll", updateScrollProgress);

  window.addEventListener("pointermove", e => {
    if (Math.random() > 0.95) popSparkle(e.clientX, e.clientY);
  });

  window.addEventListener("click", e => {
    popHeart(e.clientX, e.clientY);
  });

  closeLightbox.onclick = () => lightbox.close();

  letterChips.forEach((chip, i) => {
    chip.onclick = () => {
      letterChips.forEach(c => c.classList.remove("is-active"));
      letterParagraphs.forEach(p => p.classList.remove("is-visible"));
      chip.classList.add("is-active");
      letterParagraphs[i].classList.add("is-visible");
    };
  });
}

// ================= LOCK =================
const correctPin = "210467";
let currentPin = "";

const pinDisplay = document.getElementById("pinDisplay");
const lockScreen = document.getElementById("lockScreen");

document.querySelectorAll(".keypad button").forEach(btn => {
  btn.onclick = () => {
    clickSound.currentTime = 0;
    clickSound.play();

    if (btn.dataset.num && currentPin.length < 6) {
      currentPin += btn.dataset.num;
    }

    if (btn.classList.contains("clear")) {
      currentPin = currentPin.slice(0, -1);
    }

    if (btn.classList.contains("enter")) {
      if (currentPin === correctPin) {
        unlock();
      } else {
        errorSound.play();
        shake();
        currentPin = "";
      }
    }

    pinDisplay.textContent = "•".repeat(currentPin.length).padEnd(4, "•");
  };
});

function unlock() {
  successSound.play();
  lockScreen.classList.add("hide");
  burstHearts();
}

function shake() {
  document.querySelector(".lock-card").animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-8px)" },
      { transform: "translateX(8px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 300 }
  );
}

// ================= INIT =================
createBackgroundSlides();
createMemoryCards();
createVideoCards();
animateCounters();
setupRevealObserver();
setupInteractions();
updateScrollProgress();