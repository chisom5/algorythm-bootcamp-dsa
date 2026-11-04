# Exact Scoop Sets

## Problem Statement

A scoop station offers several distinct scoop sizes, and each size can be used as often as needed. Find every scoop set whose sizes add exactly to target. A set is identified by how many times each size appears, so changing the order of the same scoops does not make a new set. Return the sets in any order.

Constraints

- candidates contains between 1 and 30 distinct integers.
- Each value in candidates is between 2 and 40, inclusive.
- target is between 1 and 40, inclusive.
- A scoop size may appear repeatedly in a scoop set.

### Examples

- candidates = [2, 3, 6, 7], target = 7
→ [[2, 2, 3], [7]]
The scoop sets [2,2,3] and [7] each total 7. Example 1 includes a repeated scoop size, and different orders of [2,2,3] still describe the same set.

- candidates = [2, 3, 5], target = 8
→ [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
These are the scoop sets totaling 8. Choosing the largest size, 5, first gives [3,5], but the other two returned sets use smaller sizes.

#### Follow-up

Check how the available scoop sizes and target affect which scoop sets can be returned.

## Approach Plan

The approach will be to use backtracking to explore all possible combinations of scoop sizes that sum up to the target. We will start with an empty combination and recursively add scoop sizes, ensuring that we do not exceed the target. If we reach the target, we will add the current combination to the result set.

#### Key Constraints

The constraint that matter most is "A scoop size may appear repeatedly in a scoop set." This means that we can use the same scoop size multiple times in our combinations, which allows for more flexibility in forming sets. Additionally, the constraints on the number of candidates and their values will help us manage the recursion depth and ensure that we do not exceed the target.

#### Pattern

- Backtracking, Dynamic Programming

#### Complexity

- Time Complexity: O(N * 2^N) - where O(N) is copying a valid combination into the result and 2^N - is at most there are two possible subsets.

- Space Complexity: O(N * 2^N) - where O(N) is the auxiliary space while O(N * 2^N) is the total space including output space.