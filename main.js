const roadmap = [
  { name: 'HTML', active: false },
  { name: 'CSS', active: false },
  { name: 'JS', active: false },
  { name: 'React', active: false },
  { name: 'Blockchain', active: false },
];

const container = document.querySelector('.articles');
const form = document.querySelector('#roadmap-form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const emptyMsg = document.querySelector('.empty');

function render() {
  container.innerHTML = '';

  // Conditional UI
  emptyMsg.style.display = roadmap.length === 0 ? 'block' : 'none';

  roadmap.forEach((item, index) => {
    const el = document.createElement('article');
    el.textContent = item.name;

    if (item.active) {
      el.classList.add('active');
    }

    el.dataset.index = index;
    container.appendChild(el);
  });
}

render();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (value === '') {
    return;
  }

  if (roadmap.some((item) => item.name === value)) {
    alert('Item already exists');
    return;
  }

  roadmap.push({ name: value, active: false });
  render();
  input.value = '';
});

input.addEventListener('input', () => {
  btn.disabled = input.value.trim() === '';
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
  if (e.target.tagName != 'ARTICLE') return;

  const index = e.target.dataset.index;
  roadmap[index].active = !roadmap[index].active;

  render();
});

// 3️⃣ (Bonus) Active nav link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
  });
});
