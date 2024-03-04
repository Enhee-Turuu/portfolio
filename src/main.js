// Header에 페이지 아래로 스크롤시 다크 스타일링 적용(추가 & 삭제)**
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.addEventListener("scroll", () => {
  // 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!**
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 opacity 1->0 적용.**
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 홈이 아래로 50%내려 갔을때 나타나기**
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리**
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌**
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
