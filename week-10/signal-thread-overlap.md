# Signal Thread Overlap

## Problem Statement

Two signal threads carry sequences of lowercase marks. Return the length of their longest shared thread that keeps marks in the same left-to-right order, though marks may be skipped in either signal. Return 0 when no mark is shared. The returned value is a count, not a new signal.

Constraints

- 1 <= text1.length, text2.length <= 1000
- text1 and text2 contain only lowercase English letters.

### Follow-up

How do the signal threads compare when they share marks but place them at different offsets?

#### Examples

- text1 = 'abc', text2 = 'def' → 0
The signal threads share no marks, so there is no shared thread to count.

- text1 = 'abcd', text2 = 'badc' → 2

## Approach Plan

My approach plan will be to use 2D table for representing both strings, initialize the empty state as 0, then for each iteration compare the first character of both text if they share a common character add dp table by 1 (i.e number of share character etc.) else if there is no match get the max. (max(dp[i-1][j], dp[i][j -1]))

#### Key Constraint 

The constraint that matter most is " 1 <= text1.length, text2.length <= 1000" because it tells me that it is suitable to create a 2D array of size text1.length x text2.length.

#### Pattern

- 2D Dynamic Programming, Grid traversal, LCS

#### Complexity

- Time O(M x N) - where M is the length of the first string and N is the length of the second string. this is for 2D table

- Space O(M x N)

#### Steps

- Create a 2D Dp table, initialize to 0

- Iterate both string, starting from 1 and if the first character of the first string matches the second string first character
    dp[i][j] = dp[i - 1][j - 1] + 1

    else: dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])

- Return the length of the lowest common subsequence. as dp[m][n]