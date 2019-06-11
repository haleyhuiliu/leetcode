// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

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
