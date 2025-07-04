// Sticky navbar effect on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// SIDEBAR
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

// Ambil semua link di sidebar
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Biarkan anchor link bekerja normal
    // lalu tutup sidebar setelah sedikit delay
    setTimeout(() => {
      hideSidebar();
    }, 300);
  });
});

// Section Gallery
const bigSlide = document.querySelector(".big-slide");
const slideContent = document.querySelector(".slide-content");
const thumbs = document.querySelectorAll(".thumb");
const prevBtn = document.querySelector(".nav.prev");
const nextBtn = document.querySelector(".nav.next");

const slidesData = [
  {
    img: "url(/image/img/img1.jpg)",
    title: "Slide 01",
    desc: "Deskripsi untuk gambar 1.",
  },
  {
    img: "url(/image/img/img2.jpg)",
    title: "Slide 02",
    desc: "Deskripsi untuk gambar 2.",
  },
  {
    img: "url(/image/img/img3.jpg)",
    title: "Slide 03",
    desc: "Deskripsi untuk gambar 3.",
  },
  {
    img: "url(/image/img/img4.jpg)",
    title: "Slide 04",
    desc: "Deskripsi untuk gambar 4.",
  },
  {
    img: "url(/image/img/img5.jpg)",
    title: "Slide 05",
    desc: "Deskripsi untuk gambar 5.",
  },
  {
    img: "url(/image/img/img6.jpg)",
    title: "Slide 06",
    desc: "Deskripsi untuk gambar 6.",
  },
  {
    img: "url(/image/img/img7.jpg)",
    title: "Slide 07",
    desc: "Deskripsi untuk gambar 7.",
  },
  {
    img: "url(/image/img/img8.jpg)",
    title: "Slide 08",
    desc: "Deskripsi untuk gambar 8.",
  },
];

let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  bigSlide.style.backgroundImage = slidesData[index].img;
  slideContent.querySelector("h2").textContent = slidesData[index].title;
  slideContent.querySelector("p").textContent = slidesData[index].desc;

  // Highlight thumbnail aktif
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });

  // Scroll thumbnail aktif ke tengah dalam container
  const container = document.querySelector(".thumbnails");
  const activeThumb = thumbs[index];
  container.scrollTop =
    activeThumb.offsetTop -
    container.clientHeight / 2 +
    activeThumb.clientHeight / 2;
}

// Inisialisasi pertama
showSlide(0);

// Klik thumbnail
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    showSlide(index);
  });
});

// Navigasi tombol prev
prevBtn.addEventListener("click", () => {
  let newIndex = currentIndex - 1;
  if (newIndex < 0) newIndex = slidesData.length - 1;
  showSlide(newIndex);
});

// Navigasi tombol next
nextBtn.addEventListener("click", () => {
  let newIndex = currentIndex + 1;
  if (newIndex >= slidesData.length) newIndex = 0;
  showSlide(newIndex);
});
