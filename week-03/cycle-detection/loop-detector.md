# Pipeline Loop Detector

## Problem

You are given server, the first stage in this chain. Determine whether a deployment starting there will ever revisit a stage instead of finishing. Some stages may have identical numeric IDs, so IDs alone do not prove two stages are the same object. The incident dashboard also records who approved the rollout and which container image tags were involved, but those details do not affect this check. Return true if the pipeline loops, otherwise return false.

Constraints

- The number of stages reachable from server is in the range [0, 10^4].
- Each stage value is in the range [-10^5, 10^5].
- server is either null or a valid reference to the first stage of a singly linked chain.

### Examples

- server = [7] → False
- server = {'values': [1, 2, 3], 'cycle_at': 1} → True

## Approach Plan

To determine if the development starting ever revisit mean we are checking if it ever cycle. i.e cycle detection.

### Key Constraint

The constraint that matter most is "The number of stages reachable from server is in the range [0, 10^4]." because a cycle has no null termination node, a standard traversal loop would run forever and crash my program. so since N can be up to 10^4, it forces me to use 
Floyd's Cycle-Finding Algorithm to safely detect loops in O(N) time.

### Pattern

- Linked list, Two pointers

### Complexity 

- Time O(N)
- Space O(1)

### Steps

- declare and initialize slow and fast to point at the listNode "server"
- Traverse at dual speeds move slow by 1 step and fast by 2 steps. while fast and fast.next is not null
- check intersection, If slow === fast at any point, a cycle is detected