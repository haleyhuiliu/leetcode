// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.

// Note:
// The solution set must not contain duplicate triplets.

// Example:
// Given array nums = [-1, 0, 1, 2, -1, -4],
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const arr = nums.sort((a, b) => a - b);
    const result = [];
    
    // find a
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let b = null;
        let c = null;
        
        if (i !== 0 && a === arr[i - 1]) {
            continue;
        }
        
        if (a > 0) {
            break;
        }
        
        
        let j = -1; 
        let k = -1;
        
        for (j = i + 1, k = arr.length - 1; j < k; ) {
            b = arr[j];
            c = arr[k];
            
            if (j !== i + 1 && b === arr[j - 1]) {
                j++;
                continue;
            }
 
            if (k !== arr.length - 1 && c === arr[k + 1]) {
                k--;
                continue;
            }
            
            
            if (a + b + c === 0) {
                j++;
                k--;
                
                result.push([a, b, c]);
            } else if (a + b + c > 0) {
                k--;
            } else if (a + b + c < 0) {
                j++;
            }
        }
    }
    
    return result;
};
