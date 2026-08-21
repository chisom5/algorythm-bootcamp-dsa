# Single-Split Sample Batch

## Problem

You are given an integer representing the number of samples in a batch. Return true if that batch size could come from this exact split-only process, or false otherwise.

Invalid counts, empty batches, and mixed leftover sizes must all be rejected, because triage automation depends on this check before routing work to the correct bench.

Constraints

- reading is an integer in the range [-2^31, 2^31 - 1]
- Return a boolean indicating whether reading matches a valid split-only batch size
- A valid batch size is a positive integer that can be repeatedly divided by 2 until 
it reaches exactly 1; at every step before 1, it must be even.

### Examples

- reading = 1  →  True 
A single sample can be the original vial itself, so it satisfies the split-only batching rule.

- reading = 6 → False
Although the count is even, it cannot be produced by only doubling from one original source.

- reading = 2 → True
Two samples can come from one clean split of a single starting vial.

#### Follow-up 
Can you determine this without repeatedly halving the batch count?

## Approach Plan

### Key Constraint

The constraint that matter most is "A valid batch size is a positive integer that can be repeatedly divided by 2 until it reaches exactly 1; at every step before 1, it must be even." This tells me how i can approach the problem by using recursion to repeatedly divide by 2 until a condition met.

### Pattern 

Bit manipulation, Recursion

### Complexity

- Time O(logN) because we are halving the problem by 2.
- Space O(logN) because each recursive call adds a new frame to the stack and it grows linearly with the number of recursive calls.

### Steps

1. determine the base case. if readings is 1 or less 
2. recursive call by halving the reading by 2 

* For the follow-up question uses the bit manipulation pattern.