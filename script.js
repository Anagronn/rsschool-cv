document.addEventListener('DOMContentLoaded', function () {
  initializeIconAnimation();
  initializeLeavesAnimation();
  initializeSlider();
  initializeModal();
  initializeTreeList();
  initializePageLoadEffects();
  initializeBurgerMenu();
});

function initializeIconAnimation() {
  const telegramIcon = document.querySelector('.contacts__contact-telegram');
  const githubIcon = document.querySelector('.contacts__contact-github');
  const instagramIcon = document.querySelector('.contacts__contact-instagram');

  telegramIcon.style.opacity = 1;
  githubIcon.style.opacity = 0;
  instagramIcon.style.opacity = 0;

  function alternateOpacity() {
    setTimeout(() => {
      telegramIcon.style.opacity = 0;
      githubIcon.style.opacity = 1;

      setTimeout(() => {
        githubIcon.style.opacity = 0;
        instagramIcon.style.opacity = 1;

        setTimeout(() => {
          instagramIcon.style.opacity = 0;
          telegramIcon.style.opacity = 1;
          alternateOpacity();
        }, 2000);
      }, 2000);
    }, 2000);
  }
  alternateOpacity();
}

function initializeLeavesAnimation() {
  const leaves = document.querySelectorAll('g[transform]');
  leaves.forEach((leaf, index) => {
    leaf.style.animationDelay = (index === 0) ? `${2}s` : `${2 + index}s`;
  });
}

function initializeSlider() {
  const slider = document.querySelector('.projects__slider');
  const sliderContainer = slider.querySelector('.projects__slider-container');
  const leftButton = document.querySelector('.projects__buttons_left');
  const rightButton = document.querySelector('.projects__buttons_right');
  const cards = sliderContainer.querySelectorAll('.card');
  let currentIndex = 0;

  function updateSliderPosition() {
    const cardWidth = cards[0].offsetWidth;
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

  window.onload = function () {
    updateSliderPosition();
  };

  window.onresize = function () {
    updateSliderPosition();
  };
}

function initializeModal() {
  const blockPhoto = document.querySelector('.magnifier');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close-btn');

  blockPhoto.addEventListener('click', function () {
    modal.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

function initializeTreeList() {
  const arrowBtn = document.querySelector('.arrow');
  const tree = document.querySelector('.tree');
  const treeSpan = document.querySelector('.tree__span');

  const treeItemLanguages = document.getElementById('languages');
  const treeLanguages = document.querySelector('.tree__languages');

  arrowBtn.addEventListener('click', function () {
    arrowBtn.classList.toggle('active');
    tree.classList.toggle('active');
  });

  treeSpan.addEventListener('click', function () {
    treeItemLanguages.classList.toggle('active');
    treeLanguages.classList.toggle('active');
  });
}

function initializeBurgerMenu() {
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenuContainer = document.querySelector('.burger-menu-container');
  const menuLinks = document.querySelectorAll('.menu-list__link');
  burgerBtn.addEventListener('click', function () {
    burgerMenuContainer.classList.toggle('active');
    burgerBtn.classList.toggle('active');
  });

  menuLinks.forEach( link => {
    link.addEventListener('click', function(){
      burgerMenuContainer.classList.remove('active');
    })
  })

  window.onresize = function(){
    burgerMenuContainer.classList.remove('active');
  }
}

function initializePageLoadEffects() {
  window.onload = function () {
    setTimeout(function () {
      document.body.style.display = 'block';
    }, 300);

    setTimeout(function () {
      const wrapper = document.querySelector('.wrapper');
      wrapper.style.opacity = '1';
    }, 1500);
  };
}
