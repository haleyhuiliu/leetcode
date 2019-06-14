// Given a char array representing tasks CPU need to do. 
// It contains capital letters A to Z where different letters represent different tasks. 
// Tasks could be done without original order. 
// Each task could be done in one interval. 
// For each interval, CPU could finish one task or just be idle.

// However, there is a non-negative cooling interval n that means between two same tasks, 
// there must be at least n intervals that CPU are doing different tasks or just be idle.
// You need to return the least number of intervals the CPU will take to finish all the given tasks.

 
// Example:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

// Note:
// The number of tasks is in the range [1, 10000].
// The integer n is in the range [0, 100].


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let counts = tasks.reduce((acc, t) => {
        if (acc[t] === undefined) {
            acc[t] = 1;
        } else {
            acc[t]++;
        }
        return acc;
    }, {});
    
    counts = Object.keys(counts).map(task => counts[task]);
    
    let result = 0;
    
    while(counts.length > 0) {
        counts = counts.sort((a, b) => b - a);
        
        if (counts.length <= 1 + n && counts.every(c => c === 1)) {
            result = result + counts.length;
            
            return result;
        } else {
            counts = counts.map((c, index) => index <= n ? c - 1 : c);
            
            result = result + 1 + n;
        }
        
        counts = counts.filter(c => c > 0);
    }
    
    return result;
};
