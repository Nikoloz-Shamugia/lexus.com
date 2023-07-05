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
    signInBox.style.display = 'none'
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

const signUpBtn = document.getElementById('signUp-modal');
const signInBox = document.querySelector('.sign-in-box');

signUpBtn.addEventListener('click', () => {
  clickCount++;
  if(clickCount % 2 === 1){
    signInBox.style.display = 'block';
    slider.style.display = 'none'
    signInBox.style.transition = 'height 0.3s ease-in-out';
    signInBox.style.height = '0'
    setTimeout(() => {
      signInBox.style.height = 'auto';
    }, 10);
  }
  else{
    signInBox.style.display = 'none'
  }
});

const carInfo = [
  { name: "UX HYBRID", imageUrl: "images/ux-hybrid.webp" },
  { name: "NX", imageUrl: "images/nx.avif" },
  { name: "NX HYBRID", imageUrl: "images/nx-hybrid.avif" },
  { name: "NX PHEV", imageUrl: "images/nx-phev.avif" },
  { name: "RZ", imageUrl: "images/rz.avif" },
  { name: "RX", imageUrl: "images/rx.avif" },
  { name: "RX HYBRID", imageUrl: "images/rx-hybrid.avif" },
  { name: "RX 500h", imageUrl: "images/rx500h.avif" },
  { name: "GX", imageUrl: "images/gx.avif" },
  { name: "LX", imageUrl: "images/lx.avif" }
];

const suvWrapper = document.querySelector('.suv-wrapper');
const mainImg = document.querySelector('.your-lexus-picture');
const carName = document.querySelector('.model');

for(let i = 0 ; i < carInfo.length ; i++){
  const lexusCar = document.createElement('div')
  lexusCar.classList.add('lexus-car')
  lexusCar.innerHTML = `
      <button id = '${i}' class="car-model">
        <img src="${carInfo[i].imageUrl}" alt="#">
        <p>${carInfo[i].name}</p>
      </button>`
  suvWrapper.appendChild(lexusCar)

  const carButton = document.getElementById(`${i}`)
  carButton.addEventListener('click' , () =>{
    mainImg.setAttribute('src' , `${carInfo[i].imageUrl}`)
    carName.textContent = `${carInfo[i].name}`
  })
}


const burgerIcon = document.querySelector('.burger-icon')
const navigationWrapper = document.querySelector('.navigation-wrapper')
let clickCount2 = 0;

burgerIcon.addEventListener('click', () => {
  clickCount2++;

  if (clickCount2 === 1) {
    navigationWrapper.style.display = 'block';
  } else if (clickCount2 === 2) {
    navigationWrapper.style.display = 'none';
    slider.style.display = 'none'
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
    signInBox.style.display = 'none';
    leftBtn.style.display = 'none'
    rightBtn.style.display = 'none'
    slider.style.transition = 'height 3s ease-in-out';
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

const  butgerIconSignUpBtn = document.getElementById('burger-icon-signup-btn')
butgerIconSignUpBtn.addEventListener('click' , () =>{
  clickCount++;
  if(clickCount % 2 === 1){
    signInBox.style.display = 'block';
    slider.style.display = 'none'
    signInBox.style.transition = 'height 0.3s ease-in-out';
    signInBox.style.height = '0'
    signInBox.style.marginTop = '120px'

    setTimeout(() => {
      signInBox.style.height = 'auto';
    }, 10);
  }
  else{
    signInBox.style.display = 'none'
  }
})

const logInBtn = document.getElementById('log-in-btn');
const logInModal = document.querySelector('.log-in-modal');

logInBtn.addEventListener('click', () => {
  logInModal.style.display = 'block'
  signInBox.style.display = 'none'
});

const closeModalIcon = document.querySelector('.close-icon')
closeModalIcon.addEventListener('click' , () =>{
  logInModal.style.display = 'none'
})

const registrationBtn = document.getElementById('sign-up-btn')
const registrationForm = document.querySelector('.log-in-modal.registration-modal')

registrationBtn.addEventListener('click' , () =>{
  registrationForm.style.display = 'block'
  signInBox.style.display = 'none'
})
const closeModalIcon2 = registrationForm.querySelector('.close-icon');
closeModalIcon2.addEventListener('click', () => {
  registrationForm.style.display = 'none';
});




