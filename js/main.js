let images = [
  "assets/images/product-main.png",
  "assets/images/collection.png",
  "assets/images/hero.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const dots = document.querySelectorAll(".dot");

function setImage(index) {
  currentIndex = index;
  mainImage.src = images[index];
  updateDots();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  setImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setImage(currentIndex);
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

/* Mobile Menu */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});



function selectPlan(type) {
  const singleCard = document.querySelectorAll(".subscription-card")[0];
  const doubleCard = document.querySelectorAll(".subscription-card")[1];

  const singleBox = document.getElementById("singleBox");
  const doubleBox = document.getElementById("doubleBox");

  if (type === "single") {
    singleCard.classList.add("active");
    doubleCard.classList.remove("active");
    singleBox.classList.remove("hidden");
    doubleBox.classList.add("hidden");
  } else {
    doubleCard.classList.add("active");
    singleCard.classList.remove("active");
    doubleBox.classList.remove("hidden");
    singleBox.classList.add("hidden");
  }

  updateCartLink();
}

/* Dynamic Cart Link */
function updateCartLink() {
  const fragrance = document.querySelector("input[name='fragrance']:checked").value;
  const purchase = document.querySelector("input[name='purchase']:checked").value;

  const cartLink = document.getElementById("cartLink");
  cartLink.href = `https://dummycart.com/add?fragrance=${fragrance}&type=${purchase}`;
}

/* Attach listeners */
document.querySelectorAll("input[name='fragrance'], input[name='purchase']").forEach(radio => {
  radio.addEventListener("change", updateCartLink);
});

// Percentage Counter Animation
const counters = document.querySelectorAll(".counter");
const statsSection = document.getElementById("statsSection");

let counterStarted = false;

function startCounters() {
  if (counterStarted) return;
  counterStarted = true;

  counters.forEach(counter => {
    let target = +counter.dataset.target;
    let count = 0;

    const interval = setInterval(() => {
      count++;
      counter.innerText = count;

      if (count === target) {
        clearInterval(interval);
      }
    }, 20);
  });
}

window.addEventListener("scroll", () => {
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    startCounters();
  }
});
