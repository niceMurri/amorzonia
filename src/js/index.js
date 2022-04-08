class MobileMenu {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
  }

  init() {
    this.click();
  }

  click() {
    this.mobileMenu.addEventListener("click", (e) => {
      if (this.navList.classList.contains("active")) {
        return this.navList.classList.remove("active");
      }

      this.navList.classList.add("active");
    });
  }

}

const mobileMenu = new MobileMenu(
  ".mobile-menu",
  ".navbar-auth",
  ".navbar-auth a"
);

mobileMenu.init();
