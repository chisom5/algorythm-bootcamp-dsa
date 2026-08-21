# Find the First Repeating Service Record

## Problem

A monitoring service stores processed records in a singly linked chain. A retention fault can make a record's next pointer point back to an earlier record, causing the chain to repeat forever.

Given the first service record, return the exact record where repetition begins. Return null when the chain never repeats. Record values may repeat, so identity—not a matching value—defines the first repeating record. Do not modify the chain.

Constraints

- The chain has 0 through 10^4 records before any repetition.
- -10^5 <= record.val <= 10^5.
- The chain is acyclic or has one reachable cycle.
- Return the actual cycle-entry record object.

### Examples

- 3 -> 2 -> 0 -> -4 with -4.next pointing to 2 → the record with value 2

- 1 with no cycle → null

### Follow up 

Can you find the repeating record with constant extra space?

## Approach Plan

- From this "return the exact record where repetition begins", for a linked list i started thinking of cycle detection.

### Key Constraint

Thou this constraint "The chain has 0 through 10^4 records before any repetition." rules out array/set since i want O(1) space. but the constraint that matter most is ""Record values may repeat, so identity—not a matching value—defines the first repeating record." (along with "Return the actual cycle-entry record object")" because it prevent value base trap. as multiple node can have the same .val, so if i compare only node value the algorithm will fail. 

### Pattern

- Linked list, Two pointers

### Complexity

- Time O(N)
- Space O(1)

### Steps

- declare and initialize slow and fast to point at the listNode "server"
- Traverse at dual speeds move slow by 1 step and fast by 2 steps. while fast and fast.next is not null
- check intersection, If slow === fast at any point, a cycle is detected
- when cycle is detected, reset one pointer back to the head, while leaving fast at the intersection node
- then traverse at the same speed moving both pointer at the same step
- finally return entry node where slow and fast meet again.