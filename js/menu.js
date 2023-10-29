function loadContent(sectionNumber) {
  // side bar menu
    var contentDiv = document.querySelector('.allChap');
    if (contentDiv) {
      contentDiv.style.display = 'none';
    }
   
    //section text
    var sectionId = 'chap' + sectionNumber;
    var newContentDiv = document.getElementById(sectionId);
    var gallery = document.querySelector('.img_gallery' + sectionNumber);
    var intro = document.querySelector('.intro');
    
    if (newContentDiv) {
      location.hash = 1;
      newContentDiv.style.display = 'block';
      gallery.style.display = 'block';
      intro.style.display = 'none';
    }
  }

  function loadSecondary(){
    var sec = document.querySelector(".subChap");
    if(sec.style.display == 'none'){
      sec.style.display = 'block';
    }
    else{
      sec.style.display = 'none';
    }

  }

  function returnM(sectionNumber) {
    var gallery = document.querySelector(".img_gallery" + sectionNumber);
    var contentDiv = document.getElementById('chap' + sectionNumber);
    if (contentDiv) {
      contentDiv.style.display = 'none';
      gallery.style.display ='none';
    }
    var menu = document.querySelector('.menu');
    var intro = document.querySelector('.intro');
    var newContentDiv = document.querySelector('.allChap');
    if (newContentDiv) {
      newContentDiv.style.display = 'block';
      intro.style.display = 'block';
    }
  }