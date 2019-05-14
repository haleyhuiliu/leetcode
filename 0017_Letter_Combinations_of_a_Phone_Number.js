// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note:
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */

const digitToLetters = [
    [], 
    [], 
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

var letterCombinations = function(digits) {
    const nums = digits.split('').map(c => parseInt(c));
    
    if (nums.length === 0) {
        return [];
    } else if (nums.length === 1) {
        return digitToLetters[nums[0]];
    } else {
        const rest = letterCombinations(digits.substring(1));
        
        return digitToLetters[nums[0]].reduce((acc, c) => {
            rest.forEach(cs => {
                acc.push(c + cs);
            });
            
            return acc;
        }, []);
    }
};
