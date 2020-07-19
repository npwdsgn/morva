const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', e => {
  cursor.style.setProperty('--x', `${e.clientX}px`);
  cursor.style.setProperty('--y', `${e.clientY}px`);
});

document.querySelector('button').addEventListener('click', () => {
  document.documentElement.classList.toggle('no-cursor');
});

const tg = () => cursor.classList.toggle('cursor--active');
document.addEventListener('mousedown', tg);
document.addEventListener('mouseup', tg);