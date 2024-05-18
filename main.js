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

// const switchButton = document.getElementById('switchbtn')
// switchButton.addEventListener('change', btnswitch)
// function btnswitch () {
//   const year = document.getElementById('yearContainer')
//   const month = document.getElementById('monthlyContainer')

//   if (year.style.display === 'none') {
//     year.style.display = 'block'
//   } else {
//     year.style.display = 'none'
//   }

//   if (month.style.display === 'block') {
//     month.style.display = 'none'
//   } else {
//     month.style.display = 'none'
//   }
// }
// eslint-disable-next-line no-unused-vars


const switchButton = document.getElementById('switchbtn');
switchButton.addEventListener('change', btnswitch);

let containersVisible = true; // Initial state: both containers are visible

function btnswitch() {
  const year = document.getElementById('yearContainer');
  const month = document.getElementById('monthlyContainer');

  // Toggle the visibility of containers
  if (containersVisible) {
    year.style.display = 'none';
    month.style.display = 'block'; // Show monthly container
  } else {
    year.style.display = 'block'; // Show yearly container
    month.style.display = 'none';
  }

  // Update the state
  containersVisible = !containersVisible;
}

function hamburgerIconFunction () {
  const content = document.getElementById('hambugerIconContent')

  const iconline1 = document.getElementById('iconline1')
  const iconline2 = document.getElementById('iconline2')
  const iconline3 = document.getElementById('iconline3')

  content.style.left = '0' // Move to the left edge

  // eslint-disable-next-line no-undef
  if (content.style.display === 'none') {
    content.style.display = 'block'
  } else {
    content.style.display = 'none'
  }

  iconline1.style.transform = 'rotate(126deg)'
  iconline1.style.position = 'relative'
  iconline1.style.top = '7px'
  iconline2.style.transform = 'rotate(-126deg)'
  iconline3.style.display = 'none'
}
