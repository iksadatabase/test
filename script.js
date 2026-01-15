javascript

// Получаем элементы DOM
const greetingElement = document.getElementById('greeting');
const helloBtn = document.getElementById('helloBtn');
const colorBtn = document.getElementById('colorBtn');
const body = document.body;

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
    "#667eea", "#764ba2",  // фиолетовые
    "#f093fb", "#f5576c",  // розовые
    "#4facfe", "#00f2fe",  // голубые
    "#43e97b", "#38f9d7",  // зеленые
    "#fa709a", "#fee140"   // оранжевые
];

// Обработчик для кнопки приветствия
helloBtn.addEventListener('click', function() {
    // Выбираем случайное приветствие
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Обновляем текст
    greetingElement.textContent = randomGreeting;
    
    // Добавляем анимацию
    greetingElement.style.transform = 'scale(1.1)';
    greetingElement.style.transition = 'transform 0.3s ease';
    
    // Возвращаем к нормальному размеру
    setTimeout(() => {
        greetingElement.style.transform = 'scale(1)';
    }, 300);
    
    // Меняем цвет кнопки на случайный
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// Обработчик для кнопки смены цвета
colorBtn.addEventListener('click', function() {
    // Выбираем два случайных цвета для градиента
    const color1 = colors[Math.floor(Math.random() * colors.length)];
    const color2 = colors[Math.floor(Math.random() * colors.length)];
    
    // Применяем градиент к body
    body.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
    
    // Добавляем небольшой эффект к кнопке
    this.style.transform = 'rotate(360deg)';
    this.style.transition = 'transform 0.6s ease';
    
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 600);
});

// Добавляем эффект при загрузке страницы
window.addEventListener('load', function() {
    document.querySelector('.container').style.opacity = '0';
    document.querySelector('.container').style.transform = 'translateY(20px)';
    document.querySelector('.container').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    setTimeout(() => {
        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.container').style.transform = 'translateY(0)';
    }, 300);
});

