

const body = document.body;
const profile = document.querySelector('.header .flex .profile');
const searchForm = document.querySelector('.header .flex .search-form');
const sideBar = document.querySelector('.side-bar');
const userBtn = document.querySelector('#user-btn');
const searchBtn = document.querySelector('#search-btn');
const menuBtn = document.querySelector('#menu-btn');
const closeSideBar = document.querySelector('.side-bar .close-side-bar');

const toggleSideBar = () => {
  sideBar.classList.toggle('active');
};

closeSideBar.addEventListener('click', toggleSideBar);
document.addEventListener('DOMContentLoaded', toggleSideBar);
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('side-bar')) {
    sideBar.classList.remove('active');
  }
});

userBtn.onclick = () => {
  profile.classList.toggle('active');
  searchForm.classList.remove('active');
};

searchBtn.onclick = () => {
  searchForm.classList.toggle('active');
  profile.classList.remove('active');
};

menuBtn.onclick = () => {
  sideBar.classList.toggle('active');
  body.classList.toggle('active');
};

closeSideBar.onclick = () => {
  sideBar.classList.remove('active');
  body.classList.remove('active');
};

window.onscroll = () => {
  profile.classList.remove('active');
  searchForm.classList.remove('active');
  if (window.innerWidth < 1200) {
    sideBar.classList.remove('active');
    body.classList.remove('active');
  }
};

let toggleBtn = document.querySelector('#toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
  toggleBtn.classList.replace('fa-sun', 'fa-moon');
  body.classList.add('dark');
  localStorage.setItem('dark-mode', 'enabled');
};

const disableDarkMode = () => {
  toggleBtn.classList.replace('fa-moon', 'fa-sun');
  body.classList.remove('dark');
  localStorage.setItem('dark-mode', 'disabled');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  let darkMode = localStorage.getItem('dark-mode');
  if (darkMode === 'disabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};





/* make the slide codes Dynamics*/
window.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(function(slide) {
        slide.classList.remove("active");
      });
  
      slides[index].classList.add("active");
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });



  