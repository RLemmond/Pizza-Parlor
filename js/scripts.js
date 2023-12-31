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

window.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('pizzaOrderForm');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let size;
    const sizeInput = document.getElementsByName('size');
    for (let i = 0; i < sizeInput.length; i++) {
      if (sizeInput[i].checked) {
        size = sizeInput[i].value;
        break;
      }
    }

    const toppings = [];
    const toppingInputs = document.getElementsByName('topping');
    for (let i = 0; i < toppingInputs.length; i++) {
      if (toppingInputs[i].checked) {
        toppings.push(toppingInputs[i].value);
      }
    }

    const myPizza = new Pizza(toppings, size);

    const cost = myPizza.calculatePrice();
    resultDiv.textContent = "Your Pizza Will Cost $" + cost;

    resultDiv.classList.add('show');

    form.reset();
  });
});
