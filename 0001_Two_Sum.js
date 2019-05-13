/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    let i = 0;
    let j = 0;
    
    while (i < len - 1) {
        j = i + 1;
        while (j < len) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            j = j + 1;
        }
        i = i + 1;
    }
};
