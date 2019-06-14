// Given an array of integers A with even length, 
// return true if and only if it is possible to reorder it such that A[2 * i + 1] = 2 * A[2 * i] 
// for every 0 <= i < len(A) / 2.

// Example 1:
// Input: [3,1,3,6]
// Output: false

// Example 2:
// Input: [2,1,2,6]
// Output: false

// Example 3:
// Input: [4,-2,2,-4]
// Output: true
// Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].

// Example 4:
// Input: [1,2,4,16,8,4]
// Output: false
 
// Note:
// 0 <= A.length <= 30000
// A.length is even
// -100000 <= A[i] <= 100000



/**
 * @param {number[]} A
 * @return {boolean}
 */
var canReorderDoubled = function(A) {
    var counts = A.reduce((acc, n) => {
        if (acc[n] === undefined) {
            acc[n] = 1;
        } else {
            acc[n] = acc[n] + 1;
        }
        return acc;
    }, {});
    
    let ns = Object.keys(counts);
    
    
    
    while(1) {
        let flag = false;
        
        if (ns.length === 1 && ns[0] === '0') {
            return true;
        }
        
        for (let i = 0; i < ns.length; i++) {
            let n = ns[i];

            if (counts[n] === undefined) {
                continue;
            }

            let n1 = n / 2;
            let n2 = n * 2;

            if (counts[n1] === undefined && counts[n2] === undefined) {
                return false;
            } else if (counts[n1] === undefined) {
                flag = true;
                
                if (counts[n] === 1) {
                    delete counts[n];
                } else {
                    counts[n] = counts[n] - 1;
                }

                if (counts[n2] === 1) {
                    delete counts[n2];
                } else {
                    counts[n2] = counts[n2] - 1;
                }
            } else if (counts[n2] === undefined) {
                flag = true;
                
                if (counts[n] === 1) {
                    delete counts[n];
                } else {
                    counts[n] = counts[n] - 1;
                }

                if (counts[n1] === 1) {
                    delete counts[n1];
                } else {
                    counts[n1] = counts[n1] - 1;
                }
            }
        }
        
        ns = Object.keys(counts);
        
        if (ns.length === 0) {
            return true;
        }
        
        if (!flag) {
            return false;
        }
    }
    
    return true;
};
