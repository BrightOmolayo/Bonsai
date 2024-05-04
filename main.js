// switch button
document.addEventListener('DOMContentLoaded', function () {
  const switchbtn = document.getElementById('switchbutton')
  const yc = document.getElementById('yearContainer')
  switchbtn.addEventListener('click', function () {
    switchbtn.style.transform = 'translateX(40px)'
    if (yc.style.display === 'none') {
      yc.style.display = 'block'
    } else {
      yc.style.display = 'none'
    }
  })
})
