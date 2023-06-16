//Buisness Logic
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculatePrice = function () {
  let baseCost;
  switch (this.size) {
    case "small":
      baseCost = 10;
      break;
    case "medium":
      baseCost = 12;
      break;
    case "large":
      baseCost = 14;
      break;
    default:
      baseCost = 0;
  }

  const toppingsCost = this.toppings.length * 2;
  return baseCost + toppingsCost;
};

//User Interface Logic

window.addEventListener('DOMContentLoaded', (event) => {
  const form = document, getElementById('pizza-form');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    //get chosen size
    const sizeInput = document.getElementById('size');
    for (let i = 0; i < sizeInput.length; i++) {
      if (sizeInput[i].checked) {
        size = sizeInput[i].value;

        break;
      }
    }

    //Get Chosen Toppings
    const toppings = [];
    const toppingInputs = document.getElementsByClassName('toppings');
    for (let i = 0; i < toppingInputs.length; i++) {
      if (toppingInputs[i].checked) {
        toppings.push(toppingInputs[i].value);
      }
    }

    //Create New Pizza Object
    const myPizza = new Pizza(toppings, size);


    //Calculate and Display Price
    const cost = myPizza.calculatePrice();
    resultDiv.textContent = "Your Pizza will cost $" + cost;
  });
}
});
