const cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', e => {
  cursor.style.setProperty('--x', `${e.clientX}px`)
  cursor.style.setProperty('--y', `${e.clientY}px`)
})

 document.documentElement.classList.toggle('no-cursor')