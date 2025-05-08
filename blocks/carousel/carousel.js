export default function decorate(block) {
  if (block.children.length > 1) {
    // DOM Manipulation
    const unorderedList = document.createElement('ul');
    const carouselItems = block.querySelectorAll('.carousel.block > div');
    carouselItems[0].classList.add('carousel-active');
    let index = carouselItems.length;

    while (index > 0) {
      const listItem = document.createElement('li');
      if (index === carouselItems.length) {
        listItem.classList.add('list-active');
      }
      unorderedList.append(listItem);
      index -= 1;
    }

    document.querySelector('div.carousel.block').append(unorderedList);

    const buttonContainers = document.createElement('div');
    buttonContainers.classList.add('button-action-container');
    buttonContainers.innerHTML = `
      <button class="action--previous prev" type="button" aria-label="Prev Button">
        <span class="action-icon"></span>
        <span>Previous</span>
      </button>
      <button class="action--next" type="button" aria-label="Next Button">
        <span class="action-icon"></span>    
        <span>Next</span>
      </button>
    `;
    document.querySelector('div.carousel.block').append(buttonContainers);

    // Functionality
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = carouselWrapper.querySelector('.action--previous');
    const nextButton = carouselWrapper.querySelector('.action--next');
    const indicators = Array.from(carouselWrapper.querySelectorAll('ul li'));

    let currentIndex = 0;

    // Move these functions to the top level
    function updateCarousel() {
      carouselItems.forEach((item, i) => {
        item.classList.toggle('carousel-active', i === currentIndex);
      });
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('list-active', i === currentIndex);
      });
    }

    function showPrevious() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      updateCarousel();
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }

    function showSlide(i) {
      currentIndex = i;
      updateCarousel();
    }

    prevButton.addEventListener('click', showPrevious);
    nextButton.addEventListener('click', showNext);
    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => showSlide(i));
    });

    updateCarousel();
  } else {
    block.querySelector('.carousel.block > div').classList.add('carousel-active');
  }
}
