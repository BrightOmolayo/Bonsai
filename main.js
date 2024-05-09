// eslint-disable-next-line no-unused-vars
const switchButton = document.getElementById('switchbtn').addEventListener('click', slider)

function slider () {
  const year = document.getElementById('yearContainer')

  if (year.style.display === 'none') {
    year.style.display = 'block'
  } else {
    year.style.display = 'none'
  }
}

// eslint-disable-next-line no-unused-vars
const changeButton = document.getElementById('switchbtn').addEventListener('click', changebtn)

function changebtn () {
  const month = document.getElementById('monthlyContainer')

  if (month.style.display === 'block') {
    month.style.display = 'none'
  } else {
    month.style.display = 'block'
  }
}

// eslint-disable-next-line no-unused-vars
function toggleSection (element) {
  const content = element.nextElementSibling

  // Close all other sections before opening the clicked one
  const allSections = document.querySelectorAll('.accordion-answer')
  allSections.forEach(function (section) {
    if (section !== content && section.classList.contains('see')) {
      section.classList.remove('see')
    }
  })

  // Toggle the 'show' class to display or hide the content
  content.classList.toggle('see')
}
