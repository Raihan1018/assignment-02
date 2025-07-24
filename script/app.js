const allBtn = document.getElementsByClassName("add-to-cart");

for (let btn of allBtn) {
  btn.addEventListener("click", function (event) {
    alert("Flower Added to Cart");
  });
}
