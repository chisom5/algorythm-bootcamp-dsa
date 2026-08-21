# Retire a Mislogged Lab Reading

## Problem

A hospital laboratory records each patient's assay readings in a singly linked processing chain. The chain preserves arrival order because downstream dosage reviews depend on the exact sequence in which samples were cleared. During an audit, one reading is found to be unreliable and must be retired from the chain.

Given the first sample record and a backward position, remove the record occupying that position when counting from the most recently processed reading, then return the revised chain. A patient may have only one reading, in which case the sole record can be removed. The ward's diagnosis code and collection timestamps are retained elsewhere and do not affect which record is selected. The returned chain must preserve every other reading and their original order.

Constraints

- sample_chain contains between 1 and 30 linked records.
- 0 <= sample_chain record value <= 100.
- 1 <= backward_position <= number of records in sample_chain.
- sample_chain is represented by the first linked record and may become empty.

### Examples

- sample_chain = [42, 58, 61, 73], backward_position = 2 → [42, 58, 73]
- sample_chain = [33, 46], backward_position = 1 → [33]
- sample_chain = [12, 25, 39, 44, 57], backward_position = 5 → [25, 39, 44, 57]

## Approach Plan

### Key Constraint 

The constraint that matter most is "1 <= backward_position <= number of records in sample_chain." because it elminate out of bound edge and guarantee a vaild target node.

### Pattern

- Linked List, Offset pointer

### Complexity

- Time O(N)
- Space O(1)

### Steps

- Create a dummy node because the head can change as our backward_position can the val to remove head. 
- Initialize both slow and fast pointer to dummy.
- iterate over the backward_position and move the fast pointer first. i.e the K-Node gap.
- then iteration again move both pointers one step at a time. 
- By the time fast reaches the last node, slow will be sitting on the node immediately before the node to remove.
- Then delete and return dummy.next