const cursor = document.querySelector('#cursor')
document.addEventListener('mousemove', e => {
  cursor.style.setProperty('--x', `${e.clientX}px`)
  cursor.style.setProperty('--y', `${e.clientY}px`)
})

 document.documentElement.classList.toggle('no-cursor')

 if (window.innerWidth <= 768) {
  document.getElementsByTagName('BODY')[0].style.cursor = 'default'
} else {
  customCursor()
}

$(window).resize(function() {
  if (window.innerWidth <= 768) {
    var cursor = $(".cursor")
    cursor.remove()
    $('body').css({
      cursor: "default",
    })
  } else {
    $('body').css({
      cursor: "none",
    })
    customCursor()
  }
});