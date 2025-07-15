const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

// ธีมมืด/สว่าง
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('dark') ? '☀️ ธีมสว่าง' : '🌙 ธีมมืด';
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// โหลดธีมจาก localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleBtn.textContent = '☀️ ธีมสว่าง';
  }
});

// เพิ่มลูกเล่นการคลิกทีม
const teamItems = document.querySelectorAll('.teams li');
teamItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('clicked');
  });
});

// เพิ่มแอนิเมชันเมื่อเลื่อน
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
