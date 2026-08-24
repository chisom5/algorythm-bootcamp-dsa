# Warehouse Dock Wait Times

## Problem

A warehouse logs daily cargo readings at its receiving dock. For each day's reading, find how many days must pass before a strictly higher reading is recorded. If no future day has a higher reading, record 0 for that day.

Constraints

- 1 <= readings.length <= 10^5
- 30 <= readings[i] <= 100

### Examples

- readings = [80,79,78,77,76,75,74,73] → [0, 0, 0, 0, 0, 0, 0, 0]

- readings = [30,35,40,45,50,55,60,65,70,75] → [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]

#### Follow up 

Can you solve this in a single pass using a monotonic stack, ensuring each dock reading index is pushed and popped at most once?

## Approach Plan

To solve this in a single pass using a montonic stack, I would use a stack that stores index of days with unresolved readings i.e 0,
in non-decreasing order of their values. iterate through each days while stack is not empty and the current reading exceed the reading at the index top of the stack, pop the index and record the difference in distance i.e the difference between the current index and the popped index as the wait and push the current index in the stack.

### Key Constraint

The constraint that matter most is "1 <= readings.length <= 10^5" because it strictly rules out brute force approach of using nested loops and mandate on O(N) montonic stack solution.

### Pattern

- Stack pattern

### Complexity

- Time O(N)
- Space O(N)

### Steps

- Initialize a fixed array to the length of readings, and a stack in non-decreasing order of their values.

- Iterate through the readings, while stack is not empty and the current reading is greater than the top index in the stack

- pop, record the difference in our fixed array and push to the stack.

- the final return fixed array will hold the result.