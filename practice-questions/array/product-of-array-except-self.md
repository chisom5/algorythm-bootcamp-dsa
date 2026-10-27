# Product of Array Except Self

## Problem Statement

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Constraints

- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

### Examples

- Input: nums = [1,2,3,4]
  Output: [24,12,8,6]

- Input: nums = [-1,1,0,-3,3]
  Output: [0,0,9,0,0]

#### Follow up:

Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

## Approach Plan

To write an algorithm that runs in O(n) time and considering the follow-up where it should maintain O(1) space complexity, I will explore two pointers and use the output array to store prefix product first, then multiply by suffix product on a second pass in reverse.

#### Key Constraints

The constraint that matter most is "2 <= nums.length <= 10^5" because it tells me that the input can be ver large hence I have to ensure that my solution fit in a 32 bit. and it is optimal to account for the follow up question.

#### Patterns

- Two pointers, (Array)

#### Complexity

- Time O(N)

- Space O(1)
