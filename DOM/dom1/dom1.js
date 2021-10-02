let modalTitle = document.querySelector("#modal-title");
let modalImg = document.querySelector("#modal-image");
let modalText = document.querySelector("#modal-text");
let catalogue1 = document.querySelector("#card-01");
let catalogue2 = document.querySelector("#card-02");
let catalogue3 = document.querySelector("#card-03");
let catalogue4 = document.querySelector("#card-04");

catalogue1.addEventListener("click", function () {
  modalTitle.innerText = "Milk Based Coffee";
  modalImg.src =
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30";
  modalText.innerText =
    "Milk coffee is a category of coffee-based drinks made with milk. Johan Nieuhof, the Dutch ambassador to China, is credited as the first person to drink coffee with milk when he experimented with it around 1660.";
});
catalogue2.addEventListener("click", function () {
  modalTitle.innerText = "v60 coffee";
  modalImg.src =
    "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30";
  modalText.innerText =
    "The ultimate edition of the Hario V60 is the Copper Coffee Dripper. It was designed for high thermal conductivity which, due to better heat retention, leads to a better extraction.";
});
catalogue3.addEventListener("click", function () {
  modalTitle.innerText = "coffee roastery";
  modalImg.src =
    "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30";
  modalText.innerText =
    "Roasting means transforming coffee beans from green to brown. There are different ways to make it, and that affects the flavour.";
});
catalogue4.addEventListener("click", function () {
  modalTitle.innerText = "coffee grinder";
  modalImg.src =
    "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30";
  modalText.innerText =
    "Some quick example text to build on the card title and make up the bulk of the card's content. ";
});
