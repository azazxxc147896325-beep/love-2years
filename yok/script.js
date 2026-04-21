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
  { src: "New folder/IMG_5287.JPG", title: "ภาพจำวันที่ดี", text: "ถ้าย้อนกลับไปวันนั้นได้ เค้าก็คงยังอยากเลือกยืนข้างเธอเหมือนเดิม", tag: "us" },
  { src: "New folder/IMG_6214.JPG", title: "ความทรงจำที่ไม่อยากหายไป", text: "มันเป็นช่วงเวลาธรรมดา แต่กลับมีค่ามากเพราะเป็นเรา", tag: "forever" }
];

const highlightVideos = [
  { src: "New folder/4228aa4ff0b5441ba1f52c7011a89a93.MP4", title: "คลิปที่ดูแล้วใจละลาย", text: "กดเล่นแล้วเหมือนได้กลับไปอยู่ตรงนั้นอีกครั้ง" },
  { src: "New folder/v14044g50000d43kh4nog65n7q1v8kbg", title: "ความน่ารักที่อยากเปิดซ้ำ", text: "เป็นช่วงเวลาที่อยากเก็บไว้ใกล้ตัวเสมอ" },
  { src: "New folder/video_563608558655766995-hYro8ara.MP4", title: "วันนั้นที่ยังชัดอยู่เลย", text: "บางคลิปไม่ต้องมีคำบรรยายก็อบอุ่นพอแล้ว" },
  { src: "New folder/VxgpfWk8WUYGP5b6faF_rXq5xHDkPyX-UOVJWOsW5yI.MP4", title: "คลิปโปรดของเรา", text: "อยากกลับมาดูด้วยกันเรื่อย ๆ ทุกปีเลย" }
];

const anniversaryStart = new Date("2024-04-21T00:00:00");

const bgTrack = document.getElementById("bgTrack");
const memoryStack = document.getElementById("memoryStack");
const videoStrip = document.getElementById("videoStrip");
const scrollProgress = document.getElementById("scrollProgress");
const sparkleLayer = document.getElementById("sparkleLayer");
const floatingHearts = document.getElementById("floatingHearts");
const themePulse = document.getElementById("themePulse");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const letterChips = [...document.querySelectorAll(".letter-chip")];
const letterParagraphs = [...document.querySelectorAll(".letter-paragraph")];

function createBackgroundSlides() {
  backgroundImages.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "bg-slide";
    slide.style.backgroundImage = `url("${src}")`;
    if (index === 0) {
      slide.classList.add("active");
    }
    bgTrack.appendChild(slide);
  });

  const slides = [...document.querySelectorAll(".bg-slide")];
  let current = 0;

  window.setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 4200);
}

function createMemoryCards() {
  memoryImages.forEach(({ src, title, text, tag }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "glass-card memory-card reveal";
    button.innerHTML = `
      <img src="${src}" alt="${title}" loading="lazy">
      <div class="memory-copy">
        <p>${tag}</p>
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    `;
    button.addEventListener("click", () => {
      lightboxImage.src = src;
      lightboxImage.alt = title;
      lightbox.showModal();
    });
    memoryStack.appendChild(button);
  });
}

function createVideoCards() {
  highlightVideos.forEach(({ src, title, text }) => {
    const card = document.createElement("article");
    card.className = "glass-card video-card reveal";
    card.innerHTML = `
      <video controls playsinline preload="metadata">
        <source src="${src}" type="video/mp4">
      </video>
      <div class="video-caption">
        <strong>${title}</strong>
        <p>${text}</p>
      </div>
    `;
    videoStrip.appendChild(card);
  });
}

function animateCounters() {
  const today = new Date();
  const diffDays = Math.max(1, Math.floor((today - anniversaryStart) / 86400000));
  const years = Math.max(2, today.getFullYear() - anniversaryStart.getFullYear());
  document.getElementById("yearsTogether").textContent = years.toLocaleString("th-TH");
  document.getElementById("daysTogether").textContent = diffDays.toLocaleString("th-TH");
  document.getElementById("hoursTogether").textContent = (diffDays * 24).toLocaleString("th-TH");
}

function updateScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function popSparkle(x, y) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = `${x - 8}px`;
  sparkle.style.top = `${y - 8}px`;
  sparkleLayer.appendChild(sparkle);
  window.setTimeout(() => sparkle.remove(), 1000);
}

function popHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "heart-pop";
  heart.textContent = "♡";
  heart.style.left = `${x - 8}px`;
  heart.style.top = `${y - 8}px`;
  floatingHearts.appendChild(heart);
  window.setTimeout(() => heart.remove(), 1000);
}

function setupInteractions() {
  window.addEventListener("scroll", updateScrollProgress, { passive: true });

  window.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "touch" && Math.random() > 0.955) {
      popSparkle(event.clientX, event.clientY);
    }
  }, { passive: true });

  window.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    if (touch) {
      popSparkle(touch.clientX, touch.clientY);
      popHeart(touch.clientX + 16, touch.clientY - 6);
    }
  }, { passive: true });

  themePulse.addEventListener("click", () => {
    document.body.animate(
      [
        { transform: "scale(1)", filter: "saturate(1) brightness(1)" },
        { transform: "scale(1.003)", filter: "saturate(1.08) brightness(1.02)" },
        { transform: "scale(1)", filter: "saturate(1) brightness(1)" }
      ],
      { duration: 850, easing: "ease" }
    );

    const width = window.innerWidth;
    const height = window.innerHeight;
    for (let index = 0; index < 10; index += 1) {
      window.setTimeout(() => {
        popHeart(Math.random() * width, Math.random() * height * 0.8 + 40);
      }, index * 70);
    }
  });

  document.querySelectorAll(".flip-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("is-flipped"));
  });

  letterChips.forEach((chip, index) => {
    chip.addEventListener("click", () => {
      letterChips.forEach((item) => item.classList.remove("is-active"));
      letterParagraphs.forEach((paragraph) => paragraph.classList.remove("is-visible"));
      chip.classList.add("is-active");
      letterParagraphs[index].classList.add("is-visible");
    });
  });

  closeLightbox.addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    const rect = lightbox.getBoundingClientRect();
    const clickedInside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;

    if (!clickedInside) {
      lightbox.close();
    }
  });
}

createBackgroundSlides();
createMemoryCards();
createVideoCards();
animateCounters();
setupRevealObserver();
setupInteractions();
updateScrollProgress();
