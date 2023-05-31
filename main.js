const searchIcon = document.querySelector(".search-icon");
const searchContainer = document.querySelector(".search-container");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const menuCloseIcon = document.querySelector(".menu-close-icon");

searchIcon.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});

mobileMenuIcon.addEventListener("click", function () {
  mobileMenuContainer.classList.add("active");
});

menuCloseIcon.addEventListener("click", function () {
  mobileMenuContainer.classList.remove("active");
});

/*down-top*/
const button = document.querySelector('.down-top');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();