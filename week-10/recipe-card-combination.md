# Recipe Card Combinations

## Problem Statement

A recipe uses the numbered cards listed in nums. Create a collection containing every possible group of those cards, including the group with none selected. Each group must appear once, and the collection may be returned in any order. The numbers are distinct, so each label identifies one available recipe card.

Constraints

- 1 <= nums.length <= 10
- -10 <= nums[i] <= 10
- All numbers in nums are unique.
- Return every possible recipe card group exactly once, including the empty group. The groups may appear in any order.

### Examples

- Input: nums = [5] Output: [[], [5]]

- Input: nums = [4, -2] Output: [[], [-2], [4], [4, -2]]


## Approach Plan

To create a collection containing every possible group, including the group with none selected. in which order doesn't matter. is having a subset of each input including it's empty subset.

#### Key Constraints

The constraints that matter most is "All numbers in nums are unique. and Return every possible recipe card group exactly once, including the empty group" because it tells me I don't have to worry about handling duplicate subsets. and the input "1 <= nums.length <= 10" is small enough for exponential time.

#### Pattern

- Dynamic Programming, subset

#### Complexity

- Time O(N *\(2^{N}\)) = O(N) is the iteration of copying to the result array, while \(2^{N}\) - is the total subsets.

- Space O(N *\(2^{N}\)) - where O(N) is the auxilary space, for copying to the result array, while O(N!) is the total permutation.