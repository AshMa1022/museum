
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
    var menu = document.querySelector(".menu");
    menu.style.opacity = 0;
    var galleryc = document.querySelector(".img_gallery_container");
    var contentDiv = document.getElementById('sec' + sectionNumber);
    // if (contentDiv) {
    //   contentDiv.style.display = 'none';
    //   if(gallery){
    //     gallery.style.display ='none';
    //   }
    // }
    galleryc.innerHTML='';
    contentDiv.style.display='none';
    if(sectionNumber == 5){
      galleryc.innerHTML='';
    }
    var menu = document.querySelector('.menu');
    var intro = document.querySelector('.intro');
    var newContentDiv = document.querySelector('.allChap');
    if (newContentDiv) {
      newContentDiv.style.display = 'flex';
      intro.style.display = 'block';
    }
  }

  function scrollToTarget(target) {
    var targetElement = document.querySelector(target);
    if (targetElement) {
      // Scroll the container to the top of the target element with smooth animation
      document.querySelector('.img_gallery_container').scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
      console.log(target);
      if(target ==".sub_gallery2"){
      document.querySelector('.menu').scrollTo({
        top:410,
        behavior: 'smooth'
      });
    }
    }
  
  }