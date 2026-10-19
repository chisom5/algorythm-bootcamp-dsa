# Reverse Node in k-Group

## Problem Statement

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

- k is a positive integer and is less than or equal to the length of the linked list. 

- If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

- You may not alter the values in the list's nodes, only nodes themselves may be changed.

Constraints:

- The number of nodes in the list is n.
- 1 <= k <= n <= 5000
- 0 <= Node.val <= 1000

### Examples

- Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

- Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

## Approach Plan

1. Using offset pointers, I will traverse forward to k steps, to check if there are fewer than $k$ nodes left, do not reverse them.—leave the remaining nodes intact and terminate or return.

2. Perform k-node reversal - i.e group reversal on k-nodes.

3. Re-link boundaries. After reversing $k$ nodes, the original head of that group becomes the tail of the reversed group. and it must point to the head of the next group.

#### Pattern

- Offset Pointers