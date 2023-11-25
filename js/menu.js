
  function loadSecondary(){
    var sec = document.querySelector(".subChap");
    var isHidden = window.getComputedStyle(sec).display === 'none';
    if (isHidden) {
      console.log(1);

      sec.style.display = 'flex'; // or 'flex' or 'grid', depending on your layout
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

  // a really bad approach of returning to homepage.
  function returnM(sectionNumber) {
    var menu = document.querySelector(".menu");
    menu.style.opacity = 0;
    var galleryc = document.querySelector(".img_gallery_container");
    var header = document.querySelector('.header'); 
    header.style.color="white";
    galleryc.innerHTML='';

    if(sectionNumber ==-1){
      var contentDiv = document.querySelector('.menu');
      contentDiv.style.display='none';
    }
    else{
   
    var contentDiv = document.getElementById('sec' + sectionNumber);
    
    contentDiv.style.display='none';

  }

    var intro = document.querySelector('.intro');
    var newContentDiv = document.querySelector('.side_nav');
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

  // this function is called to load the about section.
  function about(){
    
      // Get the header element
      var add = document.querySelector('.add');
      var header =document.querySelector('.header');

     
     var newContentDiv = document.querySelector('.about');
     console.log(newContentDiv);
     var isVisible = newContentDiv.style.display !== 'none';
     

  if (isVisible) {
    // If already visible, hide the new content div
    newContentDiv.style.display = 'none';
    header.style.height = '3rem'; 
    add.style.marginTop = '0'; 
  } else {
    // If not visible, show the new content div with a smooth ease-in animation
    newContentDiv.style.display = 'block';
    header.style.height = '20rem';
    add.style.marginTop = '1rem';

    // Apply a smooth transition effect
    setTimeout(function () {
      newContentDiv.style.transition = 'height 0.3s ease'; // Adjust the duration and easing function
    }, 0);
  }
  }