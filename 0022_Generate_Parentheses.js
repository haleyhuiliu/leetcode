// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const arr = [
        [],
        ['()'],
        ['(())', '()()'],
    ];
    
    let current = null;
    let prev = null;

    for (let i = 3; i <= n; i++) {
        current = [];
        prev = arr[i - 1];
        
        for (let j = 0; j < prev.length; j++) {
            current.push('(' + prev[j] + ')');
        }
        
        for (let j = i - 1; j >= i / 2; j--) {
            let k = i - j;
            for (let a = 0; a < arr[j].length; a++) {
                for (let b = 0; b < arr[k].length; b++) {
                    let temp = arr[k][b] + arr[j][a];
                    if (current.indexOf(temp) === -1) {
                        current.push(temp);
                    }
                    
                    temp = arr[j][a] + arr[k][b];
                    if (current.indexOf(temp) === -1) {
                        current.push(temp);
                    }
                }
            }
            
        }
        arr.push(current);
    }
    return arr[n];
};
