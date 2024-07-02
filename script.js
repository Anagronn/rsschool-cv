
document.addEventListener('DOMContentLoaded', function () {
  const telegramIcon = document.querySelector('.contacts__contact-telegram');
  const githubIcon = document.querySelector('.contacts__contact-github');
  const instagramIcon = document.querySelector('.contacts__contact-instagram');

  telegramIcon.style.opacity = 1;
  githubIcon.style.opacity = 0;
  instagramIcon.style.opacity = 0;

  function alternateOpacity() {
    setTimeout(() => {
      // Telegram -> GitHub
      telegramIcon.style.opacity = 0;
      githubIcon.style.opacity = 1;

      setTimeout(() => {
        // GitHub -> Instagram
        githubIcon.style.opacity = 0;
        instagramIcon.style.opacity = 1;

        setTimeout(() => {
          // Instagram -> Telegram 
          instagramIcon.style.opacity = 0;
          telegramIcon.style.opacity = 1;
          alternateOpacity();
        }, 2000);
      }, 2000);
    }, 2000);
  }
  alternateOpacity();
});

document.addEventListener('DOMContentLoaded', function () {
  const leaves = document.querySelectorAll('g[transform]');
  leaves.forEach((leaf, index) => {
    leaf.style.animationDelay = `${index}s`;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.projects__slider');
  const sliderContainer = slider.querySelector('.projects__slider-container');
  const leftButton = document.querySelector('.projects__buttons_left');
  const rightButton = document.querySelector('.projects__buttons_right');
  const cards = sliderContainer.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(${-currentIndex * (cardWidth + 10)}px)`;
  }

  rightButton.addEventListener('click', function () {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  leftButton.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });
});


