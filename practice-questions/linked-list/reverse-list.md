# Reverse Linked List

## Problem

Given the head of a singly linked list, reverse the list, and return the reversed list.

Constraints:

- The number of nodes in the list is the range [0, 5000].
- -5000 <= Node.val <= 5000

### Examples

- Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

- Input: head = [1,2]
Output: [2,1]

### Approach Plan

To reverse a singly linked list, I will have two pointers one pointer for keeping track of previous, and the other for the current. the iterate through the list and store the reference to the rest of the list before breaking the connection. then flip the current node backward, advance the previous pointer and advance current to the next node.

#### Pattern

- Linked list

#### Complexity

- Time O(N)
- Space O(1)