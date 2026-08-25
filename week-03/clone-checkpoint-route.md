# Clone a Campaign Checkpoint Route

## Problem

A campaign route is a singly linked chain of checkpoint nodes. Each node has a score threshold in val, a next pointer to the following checkpoint, and a random shortcut pointer that is either null or points to any checkpoint in the same route.

Given the head checkpoint, create a completely independent copy of the route. The copied route must preserve every threshold, next relationship, and shortcut relationship. Every returned node must be new: changing the copied route must never affect the source route. Return null when the input head is null.

Constraints

- The route contains between 0 and 1000 checkpoints.
- -10000 <= checkpoint.val <= 10000.
- Each random shortcut is null or points to a checkpoint in the same route.
- Repeated score thresholds are allowed.

### Examples

- head is one checkpoint with val = 80 and random pointing to itself → a distinct one-checkpoint route with val = 80 and random pointing to the copied checkpoint

- route values are 999 -> 1 -> 450; random pointers are first -> second, second -> third, third -> first
→ a distinct route with the same values, next links, and random links

- head = null → null

#### Follow up 

Can you copy the route using only constant auxiliary space beyond the newly created checkpoints?

## Approach Plan

Obviously we know that this problem is a linked list, but to create a copy of the route preserving every threshold, next relationship. this will have to be Linked list + Hash map. But the follow up question said do this in constant auxiliary space. so Hash map is out of it. we have to implement this in-place.

### Key Constraint

The constraint that matter most is "Each random shortcut is null or points to a checkpoint in the same route." because it tells me I can't recreate the random pointer by using the node's value.

### Pattern

- Linked list

### Complexity

- Time O(n)
- Space O(1)
