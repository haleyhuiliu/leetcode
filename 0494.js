/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

expect(
  findTargetSumWays([], 99)
).toBe(0);

expect(
  findTargetSumWays([1], 99)
).toBe(0);

var findTargetSumWays = function(nums, S) {
  var len = nums.length;

  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return nums[0] === S ? 1 : 0;
  } else if (len === 2) {
    if (nums[0] + nums[1] === S && nums[0] - nums[1] === S) {
      return 2;
    } else if (nums[0] + nums[1] === S || nums[0] - nums[1] === S) {
      return 1;
    }
    return 0;
  }

  var i = 0;
  var max = 0;
  var min = 0;

  for (i = 0; i < len; i++) {
    max = max + nums[i];
    min = min - nums[i];
  }
}
