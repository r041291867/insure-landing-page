let drawerOpened = false;

function handleDrawerClick() {
  let btn = document.getElementById("drawer-btn");
  let nav = document.getElementById("nav");
  if (drawerOpened) {
    nav.classList.remove('show');
    btn.src = "./images/icon-hamburger.svg";
  } else {
    nav.classList.add('show');
    btn.src = "./images/icon-close.svg";
  }
  drawerOpened = !drawerOpened;
}

document.getElementById("drawer-btn").addEventListener("click", () => {
  handleDrawerClick();
});
