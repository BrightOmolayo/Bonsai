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

const accordion = document.getElementsByClassName('faqContainer')

// eslint-disable-next-line no-undef
for (i = 0; i < accordion.length; i++) {
  // eslint-disable-next-line no-undef
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
