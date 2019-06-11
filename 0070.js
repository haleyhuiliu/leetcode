/**
 * @param {number} n
 * @return {number} n
 */

expect(
  climbStairs(0)
).toBe(1);

expect(
  climbStairs(1)
).toBe(1);

expect(
  climbStairs(2)
).toBe(2);

var climbStairs = function (n) {
  if (n <= 0) {
    return 1;
  }

  if (n < 3) {
    return n;
  }

  var waysdp = Array(n + 1);
  var i = 0;

  waysdp[0] = 1;
  waysdp[1] = 1;

  for (i = 2; i < n + 1; i++) {
    waysdp[i] = waysdp[i - 2] + waysdp[i - 1];
  }

  return waysdp[n];
}
