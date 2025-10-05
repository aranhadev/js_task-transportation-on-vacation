/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyPrice = 40;
  let totalPrice = days * dailyPrice;
  const longTerm = 7;
  const longTermDiscount = 50;
  const middleTerm = 3;
  const middleTermDiscount = 20;

  if (days >= longTerm) {
    totalPrice -= longTermDiscount;
  } else if (days >= middleTerm) {
    totalPrice -= middleTermDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
