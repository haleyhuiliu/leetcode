// We have a collection of rocks, each rock has a positive integer weight.

// Each turn, we choose the two heaviest rocks and smash them together.
// Suppose the stones have weights x and y with x <= y.

// The result of this smash is:
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Example 1:
// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 
// Note:
// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const arr = new Array(stones.length).fill(null);
    
    for (let i = 0; i < stones.length; i++) {
        arr[i] = stones[i];
    }
    
    let s1 = null;
    let i1 = -1;
    let s2 = null;
    let i2 = -1;
    
    let count = arr.length;
    
    while(count > 1) {
        
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] !== null) {
                if (s1 === null || s1 < arr[i]) {
                    s1 = arr[i];
                    i1 = i;
                }
            }
        }
        
        
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] !== null && i !== i1) {
                if (s2 === null || s2 < arr[i]) {
                    s2 = arr[i];
                    i2 = i;
                }                
            }     
        }
        
        if (s1 === s2) {
            arr[i1] = null;
            arr[i2] = null;
        } else {
            arr[i1] = Math.abs(s1 - s2);
            arr[i2] = null;
        }
        
        s1 = null;
        i1 = -1;
        s2 = null;
        i2 = -1;

        count = arr.reduce((acc, w) => (acc + (w !== null ? 1 : 0)), 0);
    }
    
    return arr.find(w => w !== null) || 0;
}
