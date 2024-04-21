let headerScroll = document.querySelector(".header").classList;
window.onscroll = function (e) {
  if (this.oldScroll > this.scrollY) {
    headerScroll.remove("hide");
  } else {
    headerScroll.add("hide");
  }
  this.oldScroll = this.scrollY;
};
