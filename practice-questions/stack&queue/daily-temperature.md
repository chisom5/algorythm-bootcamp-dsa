# Daily Temperatures

## Problem Statement

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the \(i^{th}\)day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Constraints

- 1 <= temperatures.length <= \(10^{5}\)
- 30 <= temperatures[i] <= 100

### Examples

- Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

- Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]


## Approach Plan

From the Question, this is a monotonic stack, because it says to get the number of days I have to wait after the \(i^{th}\)day to get a warmer temperature. is a pattern that we either we have a slightly increasing or decreasing. and with the inupt constraint upperbound is too large for brute force. 

#### Key Constraint

The constraint that matter most is "1 <= temperatures.length <= \(10^{5}\)" because it give me a clue that the input can be too large to make use of brute force iterating over the array and for each element we iterate again to compare this will result to O\(N^{2}\) which will affect performance. but working with monotonic stack will give me O(N).

#### Pattern

- Monotonic Stack

#### Complexity

- Time O(N)

- Space O(N)