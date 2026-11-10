# Text Repair Distance

## Problem Statement

A text editor repairs word1 so it matches word2, using as few character edits as possible. An edit inserts one character, removes one character, or replaces one character in the text. Return the minimum edit count; matching texts need no repair.

Constraints

- 0 <= word1.length, word2.length <= 500
- word1 and word2 contain only lowercase English letters.
- Return an integer representing the minimum number of edits.

### Follow-up

How many character edits does the text repair require for each pair?

#### Examples

- word1 = 'horse', word2 = 'ros' → 3
  The text repair takes three edits: one replacement and two removals.

- word1 = 'intention', word2 = 'execution' → 5
  Five character edits are enough to complete this text repair.

## Approach Plan

The approach plan is to use 2D DP table similar to LCS but however I am to get the minimum operation and not matching length of the string, then have a base case to initialize the first row and column then when character match dp[i][j] = dp[i -1][j - 1] then when there's no match use Math.min across 3 operations i.e (deleting, inserting and replacement). - dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i- 1][j -1])

#### Key Constraints

The constraint that matter most is "- 0 <= word1.length, word2.length <= 500" because with 500 x 500 2D DP table I can perform rougly 250,000 operation and it can contain it.

#### Pattern

- 2D Dynamic Programming, String DP

#### Complexity

- Time O(M x N) - where M is the length of the first string and N is the length of the second string. this is for 2D table

- Space O(M x N)

#### Steps

- Create a 2D Dp table, initialize to 0

- Initialize base case for the first row and column.
  for (let i = 0; i < n; i++) {
  dp[0][i] = i;
  } // likewise for j representing column.

- Iterate both string, starting from 1 and if the first character of the first string matches the second string first character
  dp[i][j] = dp[i - 1][j - 1]

    <!-- min across Deleting dp[i - 1][j], Inserting dp[i][j - 1] and replacement dp[i - 1][j - 1] -->

  else: dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])

- Return the length of the lowest common subsequence. as dp[m][n]
