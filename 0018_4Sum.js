// Given an array nums of n integers and an integer target, 
// are there elements a, b, c, and d in nums such that a + b + c + d = target? 
// Find all unique quadruplets in the array which gives the sum of target.

// Note:
// The solution set must not contain duplicate quadruplets.

// Example:
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const arr = nums.sort((a, b) => (a - b));
    
    let a = null;
    let b = null;
    let c = null;
    let d = null;
    
    const result = [];
    
    for (let i = 0; i < arr.length - 3; i++) {
        a = arr[i];
        
        if (i !== 0 && a === arr[i - 1]) {
            continue;
        }
        
        for (let j = i + 1; j < arr.length - 2; j++) {
            b = arr[j];
            
            if (j !== i + 1 && b === arr[j - 1]) {
                continue;
            }
            
            for (let x = j + 1, y = arr.length - 1; x < y ;) {
                c = arr[x];
                d = arr[y];
                
                if (x !== j + 1 && c === arr[x - 1]) {
                    x++;
                    continue;
                }
                
                if (y !== arr.length - 1 && d === arr[y + 1]) {
                    y--;
                    continue;
                }
                
                if (a + b + c + d === target) {
                    x++;
                    y--;
                    result.push([a, b, c, d]);
                } else if (a + b + c + d < target) {
                    x++;
                } else if (a + b + c + d > target) {
                    y--;
                }
            }
        }
    }
    
    return result;
};
