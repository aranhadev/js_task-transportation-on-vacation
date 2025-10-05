/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyPrice = 40;
  let totalPrice = days * dailyPrice;

  if (days >= 7) {
    totalPrice -= 50;
  } else if (days >= 3) {
    totalPrice -= 20;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
