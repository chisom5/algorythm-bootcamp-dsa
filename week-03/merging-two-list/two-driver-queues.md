# Merging Two Driver Queues

## Problem
During a surge pricing event in a busy metro zone, two separate dispatch hubs each maintain their own queue of available drivers, sorted by estimated fare pickup value from lowest to highest. When the surge window closes, the city's central routing system needs to consolidate both queues into a single unified driver line, preserving the fare-based ordering so the next dispatcher can immediately assign the cheapest available pickups first.

The hubs communicate via linked driver records, where each record holds a fare value and a pointer to the next driver in that hub's queue. Your job is to weave these two already-sorted chains together into one continuous chain without allocating new driver records; instead, you redirect the existing links between records.

Note that each hub independently applies its own surge multiplier before building the queue, so fare values across hubs may overlap freely. The resulting merged chain must remain sorted in non-decreasing fare order from front to back.

Constraints
- The number of driver records in both hub_queue and overflow_queue is in the range [0, 50].
- -100 <= driver_record.fare <= 100
- Both hub_queue and overflow_queue are sorted in non-decreasing fare order.

### Examples
- hub_queue = [2, 5, 8], overflow_queue = [3, 6, 9] → [2, 3, 5, 6, 8, 9]
- hub_queue = [1, 2, 4], overflow_queue = [1, 3, 4] → [1, 1, 2, 3, 4, 4]

## Approach Plan

- when we combine the two queues I notice that the head change in the new list, hence I will be using dummy head node.
### Key Constraint

The constraint that matter most is "Both hub_queue and overflow_queue are sorted in non-decreasing fare order." Because it enables two pointer technique for merge and it allows O(1) space link manipulation

### Pattern

- Linked list, Two pointer

### Complexity

- Time O(N + M)
- Space O(1)

### Steps

- Create a dummy head node and set var tail = dummy;
- Iterate as long as both list are not empty
- if the value in hub_queue is less than the value in overflow_queue, 
- Save the next node and point tail reference to be the current hub_queue then advance hub_queue.
- else do similar action and tail = tail.next;
- at the end of the iteration tail will combine or take of what's left in either queues.