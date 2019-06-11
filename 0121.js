/**
 * @param {number[]} prices
 * @return {number}
 */

expect(
  maxProfit([])
).toBe(0);

expect(
  maxProfit([100])
).toBe(0);

expect(
  maxProfit([100, 1])
).toBe(0);

var maxProfit = function(prices) {
  var len = prices.length;

  if (len < 2) {
    return 0;
  }

  var profitdp = Array(len);
  var i = 0;
  var min = prices[0];

  profitdp[0] = 0;

  for (i = 1; i < len; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    profitdp[i] = Math.max(profitdp[i - 1], prices[i] - min);
  }

  return profitdp[len - 1];
}
