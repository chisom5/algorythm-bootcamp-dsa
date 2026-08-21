# Repeated Driver Signal in Dispatch Feed

## Problem

A ride sharing dispatch service receives a live feed of integer driver signals from several regional brokers. Each signal is supposed to identify a distinct driver currently advertising availability, and operations wants a quick sanity check before the matching engine trusts the feed.

Your task is to inspect the incoming list and decide whether any driver signal appears more than once. Return true if any integer appears more than once; otherwise return false.

Some brokers still attach legacy zone tags from an old airport pilot, and surge multipliers may fluctuate during the same minute, but neither detail changes this validation. Only the integer signals matter, in the order they arrive.

Constraints: 
- 1 <= driver_signals.length <= 10^5
- -10^9 <= driver_signals[i] <= 10^9

### Example

driver_signals = [42, 87, 13, 42] → True

driver_signals = [8, 15, 23, 91] → False


## Approach Plan.

### Key Constraint

the constraint that matter most is "1 <= driver_signals.length <= 10^5". it tells me that the input size can be as large as 10^5 which is 100,000 and using nested loop where you iterate, get one value and iterate on the rest to know if it is unique will result to O(n^2).

### Pattern

Hash map

### Complexity 

- Time - O(n)
- Space - O(n)

### Steps
1. have a hash set to store unique items.
2. iterate through the list using for loop.
3. on each item if the item exist in the hash set return true. then add to the set.