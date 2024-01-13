let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
let intervalId;

window.addEventListener('resize', function () {
  if (window.innerWidth > 848) {
    if (!intervalId) {
      startAutoSlide();
    }
  } else {
    stopAutoSlide();
  }
});

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}
function startAutoSlide() {
  intervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}


startAutoSlide();

      document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
      
        hamburger.addEventListener('click', function () {
          hamburgerMenu.classList.toggle('active');
        });
      });

      function toggleDropdown() {
        var dropdown = document.querySelector('.dropdown');
        var dropdownContent = document.querySelector('.dropdown-content');

        dropdown.classList.toggle('active');
        dropdownContent.classList.toggle('flex');
      }
      