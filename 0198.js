/**
 * @param {number[]} nums
 * @return {number}
 */

expect(
  []
).toBe(0);

expect(
  [99]
).toBe(99);

expect(
  [1, 99]
).toBe(99);

var rob = function(nums) {
  var len = nums.length;

  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return nums[0];
  } else if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }

  var amountdp = Array(len);
  var i = 0;
  var max = 0;

  amountdp[0] = nums[0];
  amountdp[1] = nums[1];
  max = nums[0];

  for (i = 2; i < len; i++) {
    amountdp[i] = max + nums[i];

    max = Math.max(max, amountdp[i - 1]);
  }

  return Math.max(...amountdp);
}
