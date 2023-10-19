function loadContent(sectionNumber) {
    var contentDiv = document.querySelector('.allChap');
    if (contentDiv) {
      contentDiv.style.display = 'none';
    }
    
    var sectionId = 'chap' + sectionNumber;
    var newContentDiv = document.getElementById(sectionId);
    
    if (newContentDiv) {
      location.hash = sectionId;
      newContentDiv.style.display = 'block';
    }
  }

  function returnM() {
    var contentDiv = document.querySelector('.sec');
    if (contentDiv) {
      contentDiv.style.display = 'none';
    }
    var menu = document.querySelector('.menu');
    var newContentDiv = document.querySelector('.allChap');
    if (newContentDiv) {
      newContentDiv.style.display = 'block';
    }
  }