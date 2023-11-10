
  function loadSecondary(){
    var sec = document.querySelector(".subChap");
    var isHidden = window.getComputedStyle(sec).display === 'none';
    if (isHidden) {
      console.log(1);
      sec.style.display = 'block'; // or 'flex' or 'grid', depending on your layout
      // Trigger reflow before adding the class for the transition
      sec.offsetHeight; // This line is necessary to force a reflow
      sec.classList.add('subChap_visible');
    } else {
      sec.classList.remove('subChap_visible');
      // Delay setting display to 'none' to allow the transition to complete
      setTimeout(() => {
        sec.style.display = 'none';
      }, 200); // Adjust the delay based on your transition duration
    }

  }

  function returnM(sectionNumber) {
    var gallery = document.querySelector(".img_gallery");
    var contentDiv = document.getElementById('sec' + sectionNumber);
    // if (contentDiv) {
    //   contentDiv.style.display = 'none';
    //   if(gallery){
    //     gallery.style.display ='none';
    //   }
    // }
    gallery.innerHTML='';
    contentDiv.style.display='none';
    var menu = document.querySelector('.menu');
    var intro = document.querySelector('.intro');
    var newContentDiv = document.querySelector('.allChap');
    if (newContentDiv) {
      newContentDiv.style.display = 'block';
      intro.style.display = 'block';
    }
  }