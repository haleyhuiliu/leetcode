// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:
// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL

// Example 2:
// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) {
        return head;
    }
    
    if (head.next === null) {
        return head;
    }
    
    let start = head;
    let end = head;
    let len = 1;
    
    start.prev = null;
    
    while (end.next !== null) {
        len++;
        end.next.prev = end;
        end = end.next;
    }
    
    for (let i = 0; i < k % len; i++) {
        end.next = start;
        start.prev = end;
        
        start = end;
        end = end.prev;
        
        start.prev = null;
        end.next = null;
    }
    
    return start;
};
