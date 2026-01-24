// ===== Day 6 – JS Basics =====

// 1️⃣ Toggle text for h1
const title=document.querySelector("header h1");

title.addEventListener("click", () => {
  title.textContent = 
  title.textContent === "Frontend Web3 Journey"
  ? "Keep Building Web3 🚀"
  : "Frontend Web3 Journey"
});

// 2️⃣ Highlight article when click
const articles = document.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("click", () => {
    article.classList.toggle("active");
  });
});

// 3️⃣ (Bonus) Active nav link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});