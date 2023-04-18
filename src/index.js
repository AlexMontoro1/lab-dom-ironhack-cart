// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let priceDOM = product.querySelector(".price span");
  let quantityDOM = product.querySelector(".quantity input");
  let newPriceDOM = priceDOM.innerText;
  let newQuantityDOM = quantityDOM.value;
  let finalValueDOM = newPriceDOM * newQuantityDOM;
  let subTotalDOM = product.querySelector(".subtotal span");
  return (subTotalDOM.innerText = finalValueDOM);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalValueDOM = document.querySelector("#total-value span");
  let allproductDOM = document.querySelectorAll(".product");
  let total = 0;
  allproductDOM.forEach((eachProduct) => {
    let subTotal = updateSubtotal(eachProduct);
    total += subTotal;
  });
  totalValueDOM.innerText = total;
  // ITERATION 3
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  console.log("The target in remove is:", target);
  target = target.parentNode;
  target.parentNode.remove();
  calculateAll();
  
}

// ITERATION 5

function createProduct() {
  let inputsDOM = document.querySelectorAll(".create-product input");
  let textInput = inputsDOM[0];
  let priceInput = inputsDOM[1];
  let newProductDOM = document.createElement("tr");
  newProductDOM.classList.add("product");
  newProductDOM.innerHTML = `<td class="name">
  <span>${textInput.value}</span>
</td>
<td class="price">$<span>${priceInput.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`;
let tBodyDOM = document.querySelector("tbody");
tBodyDOM.append(newProductDOM);
console.log(newProductDOM.innerHTML);
updateSubtotal(newProductDOM);
calculateAll();
let btnRemoveDOM = newProductDOM.querySelector(".btn.btn-remove");
btnRemoveDOM.addEventListener("click", removeProduct);
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  let btnRemoveDOM = document.querySelectorAll(".btn.btn-remove");
  btnRemoveDOM.forEach((eachElement) => {
    eachElement.addEventListener("click", removeProduct);
  });
  let createProductDOM = document.getElementById("create");
  createProductDOM.addEventListener("click", createProduct);
});
