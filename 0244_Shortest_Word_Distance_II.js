// Design a class which receives a list of words in the constructor, 
// and implements a method that takes two words word1 and word2 
// and return the shortest distance between these two words in the list.
// Your method will be called repeatedly many times with different parameters. 

// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
// Input: word1 = "coding", word2 = "practice"
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1

// You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
    this.map = {};
    
    for (let i = 0; i < words.length; i++) {
        if (this.map[words[i]] === undefined) {
            this.map[words[i]] = [i];
        } else {
            this.map[words[i]].push(i);
        }
    }
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let pos1 = this.map[word1];
    let pos2 = this.map[word2];
    
    let min = Infinity; 
    
    for (let i = 0, j = 0; i < pos1.length && j < pos2.length; ) {
        if (pos1[i] < pos2[j]) {
            min = Math.min(min, pos2[j] - pos1[i]);
            i++;
        } else {
            min = Math.min(min, pos1[i] - pos2[j]);
            j++;
        }
    }
    
    return min;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = Object.create(WordDistance).createNew(words)
 * var param_1 = obj.shortest(word1,word2)
 */
