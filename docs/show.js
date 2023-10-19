

const gallery = document.querySelectorAll('.img_gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const caption = document.getElementById('caption');
const captionText = document.getElementsByTagName('figcaption');

let currentImageIndex = 0;

// Open the modal and display the clicked image
gallery.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    currentImageIndex = index;
    captionText.innerText = captionText[currentImageIndex].innerHTML;
  });
});

const closeModal = () => {
  modal.style.display = 'none';
};

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

const nextImage = () => {
  currentImageIndex = (currentImageIndex + 1) % gallery.length;
  modalImg.src = gallery[currentImageIndex].src;
  captionText.innerText = captionText[currentImageIndex].innerHTML;
};

const prevImage = () => {
  currentImageIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
  modalImg.src = gallery[currentImageIndex].src;
  captionText.innerText = captionText[currentImageIndex].innerHTML;
};

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});