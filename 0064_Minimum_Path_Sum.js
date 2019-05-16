// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0) {
        return 0;
    }
    
    const row = grid.length;
    const col = grid[0].length;
    
    const sum = new Array(row);
    for (let i = 0; i < row; i++) {
        sum[i] = new Array(col).fill(null);
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i - 1 < 0 && j - 1 < 0) {
                sum[i][j]  = grid[i][j];
            } else if (i - 1 < 0) {
                sum[i][j]  = sum[i][j - 1] + grid[i][j];
            } else if (j - 1 < 0) {
                sum[i][j]  = sum[i - 1][j] + grid[i][j];
            } else {
                sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j];
            }
        }
    }    
    
    return sum[row - 1][col - 1];
};
