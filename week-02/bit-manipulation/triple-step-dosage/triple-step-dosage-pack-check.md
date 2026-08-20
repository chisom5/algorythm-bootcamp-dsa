# Triple-Step Dosage Pack Check

## Problem

A hospital pharmacy prepares certain dosage packs by repeatedly tripling a base unit so supply plans stay standardized across wards. Valid pack sizes therefore follow a strict ladder, where each size is exactly three times the previous approved size.

You are given an integer sample representing the number of units in a pack pulled for inspection. Return true if this pack size could have come from that approved ladder, and false otherwise. Packs with zero or negative units are automatically invalid, since no approved chain starts there.

Your check should work for any 32 bit signed integer sample.

Constraints

- sample is an integer in the range [-2^31, 2^31 - 1]
- Return true only when sample matches 3^k for some integer k >= 0

### Examples

- sample = 1 → True
A single unit is the base approved pack, so it already qualifies without any reduction.

- sample = 9 → True
The pack can be reduced evenly by three more than once and eventually reaches the base unit.

- sample = 12 → False
Although divisible by three once, the remaining count does not stay on the approved tripling ladder.

#### Follow up
Can you verify the pack size without using loops or recursion?

## Approach plan

### Key constraint

The constraint that matter most is "sample is an integer in the range [-2^31, 2^31 - 1]". it tells us to the input highest range is 
a standard 32-bit. with this we can precalculate the largest power of 3. that fit into the 32-bit signed integer.
And from this thinking we can bypass using recursion or loops. so our solution can account for the follow-up question.

### Pattern

Bit manipulation, Recursion

### Complexity

- Time O(1)
- Space O(1)



