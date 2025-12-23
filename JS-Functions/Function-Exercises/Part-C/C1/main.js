// C1 – calculatePrice with Default Tax
function calculatePrice(basePrice, taxRate = 0.12) {
  return basePrice + basePrice * taxRate;
}

// Examples
console.log(calculatePrice(100));        // 112
console.log(calculatePrice(100, 0.2));   // 120