document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });

  swiper.init();
});
const vehicleBtn = document.getElementById('vehicles');
const leftBtn = document.querySelector('.swiper-button-prev2')
const rightBtn = document.querySelector('.swiper-button-next2')
const slider = document.querySelector('.slider-wrapper');
let clickCount = 0;

vehicleBtn.addEventListener('click', () => {
  clickCount++;

  if (clickCount % 2 === 1) {
    slider.style.display = 'block';
    slider.style.height = '0';
    slider.style.transition = 'height 0.3s ease-in-out';
    slider.style.overflow = 'hidden';
    leftBtn.style.display = 'none'
    rightBtn.style.display = 'none'
    setTimeout(() => {
      slider.style.height = '650px';
    }, 10);
  } else {
    slider.style.height = '0';
    leftBtn.style.display = 'block'
    rightBtn.style.display = 'block'
    setTimeout(() => {
      slider.style.display = 'none';
    }, 300);
  }
});

const mainImg = document.querySelector('.your-lexus-picture')
const carName = document.querySelector('.model')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')
const btn10 = document.getElementById('btn10')

btn1.addEventListener('click' , () => {
  mainImg.setAttribute('src' , 'images/ux-hybrid.webp')
  carName.textContent = 'UX HYBRID'
})

btn2.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/nx.avif")
  carName.textContent = 'NX'
})

btn3.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/nx-hybrid.avif")
  carName.textContent = 'NX HYBRID'
})

btn4.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/nx-phev.avif")
  carName.textContent = 'NX PHEV'
})

btn5.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/rz.avif")
  carName.textContent = 'RZ'
})

btn6.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/rx.avif")
  carName.textContent = 'RX'
})

btn7.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/rx-hybrid.avif")
  carName.textContent = 'RX HYBRID'
})

btn8.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/rx500h.avif")
  carName.textContent = 'RX 500h'
})

btn9.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/gx.avif")
  carName.textContent = 'GX'
})

btn10.addEventListener('click' , () => {
  mainImg.setAttribute('src' , "images/lx.avif")
  carName.textContent = 'LX'
})

const burgerIcon = document.querySelector('.burger-icon')
const navigationWrapper = document.querySelector('.navigation-wrapper')
let clickCount2 = 0;

burgerIcon.addEventListener('click', () => {
  clickCount2++;

  if (clickCount2 === 1) {
    navigationWrapper.style.display = 'block';
  } else if (clickCount2 === 2) {
    navigationWrapper.style.display = 'none';
    clickCount2 = 0;
  }
});
const burgerBtn = document.getElementById('burger-icon-btn');
let isOpen = false;

burgerBtn.addEventListener('click', () => {
  if (!isOpen) {
    slider.style.display = 'block';
    slider.style.marginTop = '60px';
    slider.style.height = '0';
    leftBtn.style.display = 'none'
    rightBtn.style.display = 'none'
    slider.style.transition = 'height 0.3s ease-in-out';
    slider.style.overflow = 'hidden';
    setTimeout(() => {
      slider.style.height = '650px';
    }, 10);
    isOpen = true;
  }
   else {
    slider.style.height = '0';
    leftBtn.style.display = 'block'
    rightBtn.style.display = 'block'
    setTimeout(() => {
      slider.style.display = 'none';
    }, 300);
    isOpen = false;
  }
});



