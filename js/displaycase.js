const exhibits = document.querySelectorAll('.display-case-exhibit');
let displaycaseLastYPosition;

// Add a click event listener to each "image-container" element
exhibits.forEach((exhibit) => {
  exhibit.addEventListener('click', () => {
    // Toggle the "bigger" class on the clicked element
    if (exhibit.classList.contains('bigger')) {
      exhibit.classList.remove('bigger');
      window.scrollTo({ top: displaycaseLastYPosition });
    } else {
      enlargedExhibits = document.querySelectorAll('.display-case-exhibit.bigger');
      enlargedExhibits.forEach((e) => e.classList.remove('bigger'));
      exhibit.classList.add('bigger');

      const yOffset = -80;
      const y = exhibit.getBoundingClientRect().top + window.scrollY + yOffset;
      displaycaseLastYPosition = window.scrollY;
      window.scrollTo({ top: y });
    }
  });
});