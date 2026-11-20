// --- 1. Filtros de Projetos ---
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const selectedFilter = button.dataset.filter;

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (selectedFilter === 'all' || cardCategory === selectedFilter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// --- 2. Modo Claro e Escuro ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já tinha escolhido o tema claro antes
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if (body.classList.contains('light-theme')) {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});