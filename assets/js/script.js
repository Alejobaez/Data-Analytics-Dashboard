const menuBtn = document.querySelector('.menu-btn')
const backBtn = document.querySelector('.back-btn')
const nav = document.querySelector('nav')

backBtn.onclick = function () {
  nav.style.transform = 'translateX(-100%)'
}
menuBtn.onclick = function () {
  nav.style.transform = 'translateX(0)'
}
