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
