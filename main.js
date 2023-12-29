function toggleSection(element) {
    var content = element.nextElementSibling;
  
    // Close all other sections before opening the clicked one
    var allSections = document.querySelectorAll('.accordion-content');
    allSections.forEach(function (section) {
      if (section !== content && section.classList.contains('show')) {
        section.classList.remove('show');
      }
    });
  
    // Toggle the 'show' class to display or hide the content
    content.classList.toggle('show');
  }