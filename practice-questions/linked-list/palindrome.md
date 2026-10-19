# Palindrome  Linked List

## Problem Statement

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Constraints

- The number of nodes in the list is between 1 and 10⁵.
- 0 <= Node.val <= 9

### Examples

- head = [1, 2, 2, 1]
Output: true

- head = [1, 2]
Output: false

#### Follow-up
Could you solve it in \(O(n)\) time and \(O(1)\) extra space?

## Approach Plan

To do this in linked-list my steps will be 

1. get the middle of the list
2. from the middle, reverse onward to the right path
3. then traverse and compare both halves. if the values are not the same, it is not a palindrome. else it is

#### Pattern

- Two pointers (Linked list)

#### Complexity

- Time \(O(n)\) 
- Space \(O(1)\)