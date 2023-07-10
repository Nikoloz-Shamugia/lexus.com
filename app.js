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
const logInModal = document.querySelector('.fixed-background');

logInBtn.addEventListener('click', () => {
  logInModal.style.display = 'grid'
  signInBox.style.display = 'none'
});

const closeModalIcon = document.querySelector('.close-icon')
closeModalIcon.addEventListener('click' , () =>{
  logInModal.style.display = 'none'
})

const registrationBtn = document.getElementById('sign-up-btn')
const registrationForm = document.querySelector('.fixed-background.fixed-background-log-in')

registrationBtn.addEventListener('click' , () =>{
  registrationForm.style.display = 'grid'
  signInBox.style.display = 'none'
})

const closeModalIcon2 = registrationForm.querySelector('.close-icon');
closeModalIcon2.addEventListener('click', () => {
  registrationForm.style.display = 'none';
});

const checkBox1 = document.getElementById('checkbox-input1');
const passwordInput1 = document.querySelector('.log-in-modal .password-input');
const checkBox2 = document.getElementById('checkbox-input2');
const passwordInput2 = document.querySelector('.registration-modal .password-input');

checkBox1.addEventListener('click', () => {
  if (checkBox1.checked) {
    passwordInput1.type = 'text';
  } else {
    passwordInput1.type = 'password';
  }
});

checkBox2.addEventListener('click', () => {
  if (checkBox2.checked) {
    passwordInput2.type = 'text';
  } else {
    passwordInput2.type = 'password';
  }
});

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const passcode = document.getElementById('passcode');
const form = document.querySelector('.login-form');
const registerBtn = document.querySelector('.login-btn.registration-btn');
const signInResponsive = document.getElementById('sign-in-responsive');
const logInmodal = document.querySelector('.fixed-background');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const enteredEmail = email.value;
  const enteredPasscode = passcode.value;

  const storedEmail = localStorage.getItem('email');
  const storedPasscode = localStorage.getItem('password');

  if (firstName.value === '' || lastName.value === '' || username.value === '' || email.value === '' || passcode.value === '') {
    alert('Please fill in all fields');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', passcode.value);
    alert('Form submitted successfully');

    if (storedEmail === enteredEmail && storedPasscode === enteredPasscode) {
      const welcomeMessage = document.getElementById('welcome-message');
      welcomeMessage.textContent = `Welcome ${firstName.value}!`;
      registrationForm.style.display = 'none'
      logoutBtn.style.display = 'flex';
      signUpBtn.style.display = 'none';
      signInResponsive.style.display = 'none';
    }
  }
});

const logInButton = document.querySelector('.login-btn');
const logInEmail = document.getElementById('login-email');
const logInPassword = document.getElementById('login-password');
const logoutBtn = document.querySelector('.logout')

logInButton.addEventListener('click', (e) => {
  e.preventDefault();

  const storedEmail = localStorage.getItem('email');
  const storedPasscode = localStorage.getItem('password');

  if (logInEmail.value === storedEmail && logInPassword.value === storedPasscode) {
    const storedName = localStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = `Welcome ${storedName}!`;
    logoutBtn.style.display = 'flex'
    logInmodal.style.display = 'none';
    signUpBtn.style.display = 'none';
    signInResponsive.style.display = 'none';
  } else {
    alert('Account is not registered.');
  }
});

const html = document.getElementById('html')

logoutBtn.addEventListener('click' , () =>{
  html.style.display = 'none'
})
async function fetchData() {
  try {
    const model = 'rx';
    const response = await fetch(`https://api.api-ninjas.com/v1/cars?model=${model}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': '83IN8vRlgrD+g+fE9rCDBQ==bjyLQVwhSKEwHM8K',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    const bestCarsWrapper = document.querySelector('.best-selling-cars-wrapper');
    for (let i = 0; i < result.length; i++) {
      const bestCar = document.createElement('div');
      bestCar.innerHTML = `
      <h3 class='model-name'>lexus ${result[i].model}</h3>
      <div class="best-selling-car">
        <div class='best-selling-car-info'>
          <h5>Make</h5>
          <h5>Model</h5>
          <h5>Year</h5>
          <h5>Class</h5>
          <h5>Fuel Type</h5>
          <h5>Cylinders</h5>
          <h5>Displacement</h5>
          <h5>Transmission</h5>
          <h5>Drive</h5>
          <h5>City MPG</h5>
          <h5>Highway MPG</h5>
          <h5>Combination MPG</h5>
        </div>
        <div class='best-selling-car-info best-selling-car-value'>
          <p>${result[i].make}</p> 
          <p>${result[i].model}</p> 
          <p>${result[i].year}</p> 
          <p>${result[i].class}</p> 
          <p>${result[i].fuel_type}</p>
          <p>${result[i].cylinders}</p> 
          <p>${result[i].displacement}</p> 
          <p>${result[i].transmission}</p> 
          <p>${result[i].drive}</p> 
          <p>${result[i].city_mpg}</p> 
          <p>${result[i].highway_mpg}</p> 
          <p>${result[i].combination_mpg}</p> 
        </div>
      </div>
      `;
      bestCarsWrapper.appendChild(bestCar);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();


