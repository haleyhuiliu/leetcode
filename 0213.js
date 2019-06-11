/**
 * @param {number[]} nums
 * @return {number}
 */

expect(
  rob([])
).toBe(0);

expect(
  rob([99])
).toBe(99);

export(
  rob([1, 99])
).toBe(99);

export(
  rob([1, 2, 99])
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

  var dp1 = Array(len);
  var dp2 = Array(len);

  var i = 0;
  var max1 = nums[0];
  var max2 = 0;

  dp1[0] = nums[0];
  dp1[1] = nums[1];

  dp2[0] = 0;
  dp2[1] = nums[1];

  for (i = 2; i < len; i++) {
    if (i === len - 1) {
      dp1[i] = max2 + nums[i];
    } else {
      dp1[i] = max1 + nums[i];
      dp2[i] = max2 + nums[i];
    }

    max1 = Math.max(max1, dp1[i - 1]);
    max2 = Math.max(max2, dp2[i - 1]);
  }

  return Math.max(...dp1);
}
