# Remove Linked List Elements

## Problem Statement

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Constraints:

- The number of nodes in the list is in the range [0, 10^4].
- 1 <= Node.val <= 50
- 0 <= val <= 50

### Examples

- Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

- Input: head = [7,7,7,7], val = 7
Output: []

### Approach Plan

The head or the starting value can be remove, hence I need a dummy head node. then I iterate through the list whenever i encounter the current node value that's same as the val passed to the function I will remove it and return the list.

### Complexity

- Time O(N)
- Space O(1)

### Pattern

- Linked List
