const roadmap = ['HTML', 'CSS', 'JS', 'React', 'Blockchain'];

const container = document.querySelector('.articles');
const form = document.querySelector('#roadmap-form');
const input = document.querySelector('input');

function render() {
  container.innerHTML = '';
  roadmap.forEach((item) => {
    const el = document.createElement('article');
    el.textContent = item;
    container.appendChild(el);
  });
}

render();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (value === '') {
    alert('Please enter a value');
    return;
  }
  roadmap.push(value);
  render();
  input.value = '';
});

// 1️⃣ Toggle text for h1
const title = document.querySelector('header h1');

title.addEventListener('click', () => {
  title.textContent =
    title.textContent === 'Frontend Web3 Journey'
      ? 'Keep Building Web3 🚀'
      : 'Frontend Web3 Journey';
});

// 2️⃣ Highlight article when click
container.addEventListener('click', (e) => {
  if (e.target.tagName === 'ARTICLE') {
    e.target.classList.toggle('active');
  }
});

// 3️⃣ (Bonus) Active nav link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});
