var main = document.getElementsByTagName("main")[0];

// ------------------------------Cart Code------------------------------

var cart = [];

var cartMessage = document.getElementById("cartMessage");
var cartMessage2 = document.getElementById("cartMessage");
var cardsContainer = document.getElementsByClassName("cardsContainer")[0];

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
    topBtn2.style.display = "flex";
  } else {
    topBtn.style.display = "none";
    topBtn2.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// ------------------------------Ocordion------------------------------
var acc = document.getElementsByClassName("item");
var contents = document.getElementsByClassName("content");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling.className;
    for (var j = 0; j <= contents.length - 1; j++) {
      contents[j].className = "content hide";
      this.children[1].className = "fas fa-angle-double-down";
    }

    if (panel == "content hide") {
      this.nextElementSibling.className = "content active";
      this.children[1].className = "fas fa-angle-double-up";
    }
    console.log(panel);
    console.log(this.children[1]);
  });
}
