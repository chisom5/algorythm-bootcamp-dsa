# Delete and Earn

## Problem Statement

You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

 - Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above operation some number of times.

Constraints:

- 1 <= nums.length <= 2 * 10^4
- 1 <= nums[i] <= 10^4

### Examples

- Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.


- Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.

## Approach Plan

The approach will be to first create a frequency map of the numbers in array. Then I sort the keys of the frequency, to get the points for each number. Then I will apply the house robber problem to get the maximum points. The reason we can apply the house robber problem is because if we take a number, we cannot take its adjacent numbers. So we can treat each number as a house and the points as the value of the house. Then we can apply the house robber problem to get the maximum points.

#### Key Constraints

The constraints that matter most is "1 <= nums[i] <= 10^4". This means that we can create a frequency map of size 10^4 + 1, which is manageable. The other constraint is "1 <= nums.length <= 2 * 10^4", which means that we can iterate through the array and create the frequency map in O(n) time.

#### Pattern

- Dyanmic Programming

#### Complexity

- Time Complexity: O(n + m) where n is when we iterate through the input array to create the frequency map and m - we iterate through the frequency map to apply the house robber problem.

- Space Complexity: O(m) where m is the size of the frequency map, which is 10^4 + 1.


#### Steps

1. Create a frequency map of the numbers in the input array. The keys will be the numbers and the values will be the total points for that number (number * frequency).

2. Sort the keys of the frequency map to get the points for each number in ascending order.

3. Apply linear house robber pattern to get the maximum points.