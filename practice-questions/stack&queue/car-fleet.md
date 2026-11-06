# Car Fleet

## Problem Statement

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer arrays position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a single car or a group of cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

Constraints:

- n == position.length == speed.length
- 1 <= n <= 10^5
- 0 < target <= 10^6
- 0<= position[i] < target
- All the values of position are unique.
- 0 < speed[i] <= 10^6

### Examples

- Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3] -> Output: 3
    Explanation:

    - The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
    - The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
    - The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.


- Input: target = 10, position = [3], speed = [3] -> Output: 1

Explanation:

There is only one car, hence there is only one fleet.

## Approach Plan

My approach will be to first sort the cars by their starting position in descending order. Then, I will calculate the time it takes for each car to reach the target. I will use a stack to keep track of the fleets. For each car, if its time to reach the target is greater than the time of the fleet at the top of the stack, it forms a new fleet and I will push its time onto the stack. If its time is less than or equal to the time of the fleet at the top of the stack, it will join that fleet and I will not push its time onto the stack. Finally, the number of fleets will be equal to the size of the stack.

#### Key Constraints

The constraints that matter most is "All the values of position are unique." This means that no two cars can start at the same position, which simplifies the problem as we don't have to consider multiple cars starting at the same point.

#### Pattern

- Greedy, Monotonic Stack

#### Complexity

- Time Complexity: O(n log n) due to sorting the cars by their starting position.
- Space Complexity: O(n) for the stack that keeps track of the fleets.

#### Steps

- combine each car position and speed into a tuple and sort them by position in descending order.
- initialize an empty stack to keep track of the fleets.
- for each car in the sorted list:
  - calculate the time it takes to reach the target.
  - if the stack is empty or the current car's time is greater than the time at the top of the stack, push the current car's time onto the stack.
  - otherwise, skip the current car as it will join an existing fleet.
- return the size of the stack as the number of fleets.