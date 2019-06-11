/**
 * @param {number[]} cost
 * @return {number}
 */

expect(
  minCost([])
).toBe('invalid input');

expect(
  minCost([999])
).toBe('invalid input');

var minCost = function(cost) {
  var len = cost.length;
  var top = len + 1;
  var costdp = Array(top).fill(0);
  var i = 0;

  costdp[0] = 0;
  costdp[1] = 0;

  for (i = 2; i < top; i++) {
    costdp[i] = Math.min(costdp[i - 2] + cost[i - 2],
                          costdp[i - 1] + cost[i - 1]);
  }

  return costdp[len];
}
