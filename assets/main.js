const $shareBtn = document.getElementById("share-btn");
const $shareSocial = document.querySelector(".card__footer__socials");

$shareBtn.addEventListener("click", function () { 
  this.classList.toggle("is-active");
  $shareSocial.classList.toggle("is-active");
})