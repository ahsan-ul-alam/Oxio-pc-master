  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');

  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener('resize', updateCarousel);
