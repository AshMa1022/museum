function loadContent(sectionNumber) {
  // side bar menu
    var contentDiv = document.querySelector('.allChap');
    if (contentDiv) {
      contentDiv.style.display = 'none';
    }
   
    //section text
    var sectionId = 'chap' + sectionNumber;
    var newContentDiv = document.getElementById(sectionId);
    var name = '.img_gallery'+sectionNumber;
    var gallery = document.querySelector(name);
    console.log(gallery);
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
    sec.classList.add('fade-in');
    if(sec.style.display == 'none'){
      sec.transform = 'translateX(-40px)';
      sec.style.display = 'block';
    }
    else{
      sec.transform = 'translateX(-40px)';
      sec.style.display = 'none';
      
    }
    setTimeout(function () {
      sec.classList.add('show');
      sec.style.transform = 'translateX(0px)';
    }, 10);

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