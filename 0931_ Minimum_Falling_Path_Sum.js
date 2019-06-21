// Given a square array of integers A, we want the minimum sum of a falling path through A.
// A falling path starts at any element in the first row, and chooses one element from each row.
// The next row's choice must be in a column that is different from the previous row's column by at most one.

// Example 1:
// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: 12

// Explanation: 
// The possible falling paths are:
// [1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
// [2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
// [3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
// The falling path with the smallest sum is [1,4,7], so the answer is 12.

// Note:
// 1 <= A.length == A[0].length <= 100
// -100 <= A[i][j] <= 100

/**
 * @param {number[][]} A
 * @return {number}
 */
var minFallingPathSum = function(A) {
    const len = A.length;
    
    let dp = new Array(len).fill(null);
    let dp1 = new Array(len).fill(null);
    let temp = null;
    
    for (let i = 0; i < len; i++) {
        dp[i] = A[len - 1][i];
    }
    
    for (let j = len - 2; j >= 0; j--) {
        for (i = 0; i < len; i++) {
            let l = i === 0 ? dp[i] : dp[i - 1];
            let m = dp[i];
            let r = i === len - 1 ? dp[i] : dp[i + 1];

            if (l <= m && l <= r) {
                dp1[i] = A[j][i] + l;
            } else if (m <= l && m <= r) {
                dp1[i] = A[j][i] + m;
            } else if (r <= l && r <= m) {
                dp1[i] = A[j][i] + r;
            }
        }
        
        temp = dp1;
        dp1 = dp;
        dp = temp;
    }
    
    return Math.min(...dp);
};
