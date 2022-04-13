var main = document.getElementsByTagName("main")[0];
// ------------------------------SlideShow JS Code------------------------------
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

var slideInterval = setInterval(() => {
  showSlides(slideIndex);
  slideIndex++;
}, 3000);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  slides[slideIndex - 1].style.opacity = 0.5;
}
// ------------------------------Cart Code------------------------------

var cart = [];

var shoesCard = [
  "imgs/shoes1.jpg",
  "imgs/shoes2.jpg",
  "imgs/shoes3.jpg",
  "imgs/shoes4.jpg",
  "imgs/shoes5.jpg",
];
var clothesCard = [
  "imgs/clothes1.jpg",
  "imgs/clothes2.jpeg",
  "imgs/clothes3.jpg",
  "imgs/clothes4.jpg",
  "imgs/clothes5.jpeg",
];
var gadgetsCard = [
  "imgs/gad1.jpg",
  "imgs/gad2.jpg",
  "imgs/gad3.jpg",
  "imgs/gad4.png",
];
var skinCard = [
  "imgs/skin1.jpg",
  "imgs/skin2.jpg",
  "imgs/skin3.jpg",
  "imgs/skin4.png",
];

var cartMessage = document.getElementById("cartMessage");
var cartMessage2 = document.getElementById("cartMessage2");
var cardsContainer = document.getElementsByClassName("cardsContainer")[0];
var uiButtons = document.getElementsByClassName("uiButtons");

function buildUI(n) {
  var card = document.createElement("div");
  card.className = "card";
  var imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";
  var imgContainerElem = document.createElement("img");
  var addButtonElem = document.createElement("button");
  addButtonElem.innerText = "Add to Cart";
  addButtonElem.className = "addButton";
  addButtonElem.onclick = function () {
    cart.push(1);
    cartMessage.innerText = cart.length;
    cartMessage2.innerText = cart.length;
  };

  imgContainerElem.setAttribute("src", n);

  imgContainer.appendChild(imgContainerElem);
  card.appendChild(imgContainer);
  card.appendChild(addButtonElem);
  cardsContainer.appendChild(card);
  card.classList.add("faded-out");
  cardsContainer.classList.add("faded-out");
}

function createShoes(evt) {
  cardsContainer.innerHTML = "";
  for (var i = 0; i < shoesCard.length; i++) {
    buildUI(shoesCard[i]);
  }
  for (var i = 0; i < uiButtons.length; i++) {
    if (uiButtons[i].classList.contains("active")) {
      uiButtons[i].classList.remove("active");
    }
  }
  if (arguments.length === 0) {
    uiButtons[0].classList.add("active");
  } else {
    evt.currentTarget.classList.add("active");
  }
}

function createClothes(evt) {
  cardsContainer.innerHTML = "";
  for (var i = 0; i < clothesCard.length; i++) {
    buildUI(clothesCard[i]);
  }
  for (var i = 0; i < uiButtons.length; i++) {
    if (uiButtons[i].classList.contains("active")) {
      uiButtons[i].classList.remove("active");
    }
  }
  evt.currentTarget.classList.add("active");
}

function createGadgets(evt) {
  cardsContainer.innerHTML = "";
  for (var i = 0; i < gadgetsCard.length; i++) {
    buildUI(gadgetsCard[i]);
  }
  for (var i = 0; i < uiButtons.length; i++) {
    if (uiButtons[i].classList.contains("active")) {
      uiButtons[i].classList.remove("active");
    }
  }
  evt.currentTarget.classList.add("active");
}

function createSkincare(evt) {
  cardsContainer.innerHTML = "";
  for (var i = 0; i < skinCard.length; i++) {
    buildUI(skinCard[i]);
  }
  for (var i = 0; i < uiButtons.length; i++) {
    if (uiButtons[i].classList.contains("active")) {
      uiButtons[i].classList.remove("active");
    }
  }
  evt.currentTarget.classList.add("active");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
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

var shoesBtn = document.getElementById("shoesBtn");
var clothesBtn = document.getElementById("clothesBtn");
var gadgetsBtn = document.getElementById("gadgetsBtn");
var skincareBtn = document.getElementById("skincareBtn");

shoesBtn.addEventListener("click", function (event) {
  createShoes(event);
});
clothesBtn.addEventListener("click", function (event) {
  createClothes(event);
});
gadgetsBtn.addEventListener("click", function (event) {
  createGadgets(event);
});
skincareBtn.addEventListener("click", function (event) {
  createSkincare(event);
});

function contact() {
  clearInterval(slideInterval);
  main.innerHTML = `
          <div class="formContainer">
            <h2>Contact Us Form</h2>
            <ul id="errorMessage"></ul>
            <div class="form">
                <label for="username">Enter Your Full Name
                </label>
                <input type="text" id="username">
                <label for="email">Enter Your Email
                </label>
                <input type="email" id="email">
                <label for="phone">Enter Your Phone Number
                </label>
                <input type="number" id="phone">
                <label for="message">Enter Your Message:
                </label>
                <textarea name="message" id="message" cols="52" rows="5"></textarea>
            </div>
            <button id="submit" onclick="sendData()">Submit</button>
            
            </div>
            
            `;
}

function home() {
  main.innerHTML = `
  <section class="container slider">
                <div id="image1" class="img" style="opacity: 0;">
                    <img src="1.jpg">
                </div>
                <div id="image2" class="img" style="opacity: 0;">
                    <img src="2.jpg">
                </div>
                <div id="image3" class="img" style="opacity: 0.5;">
                    <img src="3.jpg">
                </div>
                <div class="left" onclick="plusSlides(-1)"></div>
                <div class="right" onclick="plusSlides(1)"></div>
            </section>
            <section class="container introduction">
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste voluptatum neque illo eos, ut, eum,
                    dolore quidem aspernatur modi consequatur amet deleniti consequuntur labore tenetur quae ex itaque esse.
                    Asperiores optio repellendus nesciunt, commodi iusto praesentium iure, corrupti quibusdam officia ipsa
                    dolorem facilis natus autem vel rem deserunt modi pariatur atque nisi exercitationem quo nam tempora
                    voluptas? Vel eligendi minima ipsam aut voluptatum nam officiis nihil? Sit vitae, voluptate corrupti sed
                    maxime, nostrum officia modi cumque eius a, impedit molestias at ex! Tempora repudiandae delectus eum.
                    Omnis
                    voluptatem nesciunt non ipsa dolore, magni consectetur quibusdam repellat inventore! Ex, velit?
                </div>
            </section>
            <section class="container categories">
                <div class="buttonsContainer">
                    <button class="uiButtons active" id="shoesBtn">Shoes</button>
                    <button class="uiButtons" id="clothesBtn">Clothes</button>
                    <button class="uiButtons" id="gadgetsBtn">Gadgets</button>
                    <button class="uiButtons" id="skincareBtn">Skin Care</button>
                </div>
                <div class="cardsContainer faded-out"></div>
            </section>
            <div class="card faded-out"><div class="imgContainer"><img src="imgs/shoes1.jpg"></div><button class="addButton">Add to Cart</button></div><div class="card faded-out"><div class="imgContainer"><img src="imgs/shoes2.jpg"></div><button class="addButton">Add to Cart</button></div><div class="card faded-out"><div class="imgContainer"><img src="imgs/shoes3.jpg"></div><button class="addButton">Add to Cart</button></div><div class="card faded-out"><div class="imgContainer"><img src="imgs/shoes4.jpg"></div><button class="addButton">Add to Cart</button></div><div class="card faded-out"><div class="imgContainer"><img src="imgs/shoes5.jpg"></div><button class="addButton">Add to Cart</button></div>
            `;

  slideInterval = setInterval(() => {
    showSlides(slideIndex);
    slideIndex++;
  }, 3000);
  createShoes();
}
