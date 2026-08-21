# Return Route Rebuild

## Problem

You are given the first stop in this route record, and must rewire the chain so every stop points to the one that came before it instead. Return the new first stop of the rebuilt chain. The kitchen's menu ratings and a seasonal dumpling promotion are logged elsewhere, but they do not affect the route rewrite.

Some routes are empty, and some contain only a single delivery.

Constraints

- The number of stops in order is in the range [0, 5000]
- Each stop value in order is in the range [-5000, 5000]
- order has type Optional[ListNode] and represents the first stop in a singly linked chain

### Examples:

- order = [14, 27, 33, 48] → [48, 33, 27, 14]
- order = [9, 21] → [21, 9]
- order = [] → None

#### Follow up 

Can you rebuild the route both by walking through the chain step by step and by letting the call stack unwind the rewiring for you?

## Approach Plan

- From the example input and output, I notice that the output is a reverse of the input.

### Key Constraint

The constraint that matter most is "The number of stops in order is in the range [0, 5000]" because for the input N to be 5000 it allows me to consider linear iteration reversal.

### Pattern

Linked List, In-place Reversal

### Complexity

- Time O(N)
- Space O(1)

### Steps

- As a single linked list, declare two pointer prev, curr. 
- curr represent the node which is the head.
- iterate as long as curr is not null
- manipulate the pointers. : 
 - "Save Next Node" saving the next node, so you don't lose the rest of the list when I serve the pointer
 - "Reverse Link" point the curr backward  curr.next = prev
 - "Advance pointer" shift prev and curr.
