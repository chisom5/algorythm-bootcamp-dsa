# Clearing a Spawn Meter

## Problem 

In a level generator, each arena starts with a spawn meter that controls how many enemy waves can still appear. The system drains that meter using two fixed rules, depending on its current value.

If the meter is aligned for a split cycle, the generator compresses it to half. Otherwise, it burns off exactly one point to reach the next split cycle. Given the current spawn meter, determine how many generator actions are needed before the meter reaches zero.

Your answer should count every compression and every single-point burn as one action.

Constraints

- 0 <= spawn_meter <= 10^6
- spawn_meter is an integer
- A meter value aligned for a split cycle (even) is halved. An unaligned value (odd) is decremented by one. 
Each operation counts as one manual clear.

### Examples

- spawn_meter = 0 → 0
An empty meter needs no generator actions at all.

- spawn_meter = 2 → 2
One compression reduces the meter, and one final burn finishes the remaining point.

- spawn_meter = 4 → 3
Aligned values can be compressed repeatedly until only a final single point remains.


##  Approach plan

### Key constraint

The constraint that matter most is "A meter value aligned for a split cycle (even) is halved. An unaligned value (odd) is decremented by one. Each operation counts as one manual clear." because it tells us how the algorithm uses iteration halving the input until the condition met.

### Pattern

Iteration (Recursion)

### Complexity 

- Time O(logN)
- Space O(logN)

### Steps

1. Initialize count
2. Iterate as long as input is greater than 0. meaning it will only accept positive integer.
3. If odd input decrement by one. else if input is even halved it. either of odd or even increment count.