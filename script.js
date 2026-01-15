// Получаем элементы DOM
const greetingElement = document.getElementById('greeting');
const helloBtn = document.getElementById('helloBtn');
const colorBtn = document.getElementById('colorBtn');
const body = document.body;

// Modal elements
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

function showModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function hideModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

// Close handlers
if (modalClose) modalClose.addEventListener('click', hideModal);
if (modal) modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
});

// Массив приветствий на разных языках
const greetings = [
    "Привет, мир! 🌍",
    "Hello, World! 🌎",
    "¡Hola, Mundo! 🌏",
    "Bonjour le Monde! 🌐",
    "Hallo Welt! 🌍",
    "Ciao Mondo! 🌎"
];

// Массив цветов для фона
const colors = [
    "#667eea", "#764ba2",
    "#f093fb", "#f5576c",
    "#4facfe", "#00f2fe",
    "#43e97b", "#38f9d7",
    "#fa709a", "#fee140"
];

// Обработчик для кнопки приветствия
if (helloBtn) {
    helloBtn.addEventListener('click', function() {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        if (greetingElement) greetingElement.textContent = randomGreeting;
        greetingElement.style.transform = 'scale(1.1)';
        greetingElement.style.transition = 'transform 0.3s ease';
        setTimeout(() => {
            greetingElement.style.transform = 'scale(1)';
        }, 300);
        this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
}

// Обработчик для кнопки смены цвета
if (colorBtn) {
    colorBtn.addEventListener('click', function() {
        const color1 = colors[Math.floor(Math.random() * colors.length)];
        const color2 = colors[Math.floor(Math.random() * colors.length)];
        body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
        this.style.transform = 'rotate(360deg)';
        this.style.transition = 'transform 0.6s ease';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 600);
        showModal();
    });
}

// Добавляем эффект при загрузке страницы
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    if (!container) return;
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 300);
});
