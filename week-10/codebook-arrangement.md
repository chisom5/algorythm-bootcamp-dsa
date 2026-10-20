# Codebook Arrangement

## Problem Statement

A codebook is built from the distinct numbered entries in nums. Return every arrangement that uses each entry exactly once; changing the order creates a different arrangement. The arrangements may appear in any order in the returned collection. Each codebook arrangement contains all its entries, with no extra or missing entry.

Constraints

- 1 <= nums.length <= 6
- -10 <= nums[i] <= 10
- All integers in nums are unique.
- Different orders of the entries count as different arrangements.

### Examples

- nums = [1] → [[1]]
The codebook has one entry, so its only arrangement contains that entry.

- nums = [1, 2, 3] → [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
Each arrangement uses all three codebook entries once, and each different order is included.


####  Follow-up

Compare the number of codebook arrangements before and after adding one more distinct entry.

## Approach Plan

This question each codebook arrangement contains all its entries, with no extra or missing entry, meaning there is no empty subset and order matters meaning set [1, 2] is distinct from [2, 1]

#### Key Constraints

The constraints that matter most is "All integers in nums are unique. and different orders of the entries count as different arrangements." because this tells me that order matters hence set [1, 2] is distinct from [2, 1] permutation and the input "1 <= nums.length <= 6" is small enough for factorial time (N * N!).

#### Pattern

- Dynamic Programming, permutation

#### Complexity

- Time O(N * N!) = O(N) is the iteration of copying to the result array, while N! - is the total permutation.

- Space O(N)