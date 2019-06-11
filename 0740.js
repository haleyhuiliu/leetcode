/**
 * @param {number[]} nums
 * @return {number}
 */

expect(
  []
).toBe(0);

expect(
  [1]
).toBe(1);

expect(
  [1, 1, 1, 1]
).toBe(4);

var deleteAndEarn = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  }

  var len = Math.max(...nums);
  var arr = Array(len + 1).fill(0);
  var dp = Array(len + 1);
  var i = 0;
  var max = 0;

  for (i = 0; i < nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] + nums[i];
  }

  max = arr[0];
  dp[0] = arr[0];
  dp[1] = arr[1];

  for (i = 2; i <= len; i++) {
    dp[i] = max + arr[i];

    max = Math.max(max, dp[i - 1]);
  }

  return Math.max(...dp);
}
