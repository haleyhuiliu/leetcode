// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
// Input: word1 = "coding", word2 = "practice"
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1
// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    const pos = [];
    let step = 1;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            pos.push(i);
        }
    }
    
    while(step < words.length) {
        for (let i = 0; i < pos.length; i++) {
            if (words[pos[i] + step] === word2 || words[pos[i] - step] === word2) {
                return step;
            }
        }
        step = step + 1;
    }
    
    return step;
};
