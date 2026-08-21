# Matchmaking Streak Multiplier

## Problem

In a competitive arena, each match in a streak applies the same rating multiplier to a player's standing. 
Tournament tools need a reliable way to predict the final multiplier after many repeated matches, 
including recovery scenarios where a negative streak count means reversing the effect of earlier boosts.

Given a base arena multiplier and an integer streak length, compute the resulting combined multiplier 
after applying that same effect repeatedly. If the streak length is negative, treat it as the inverse 
of applying the positive streak.

Your result should be accurate for ordinary floating point calculations and efficient even when 
the streak length is very large.

Constraints

- -100.0 < arena_multiplier < 100.0
- -2^31 <= streak_count <= 2^31 - 1
- streak_count is an integer
- Either arena_multiplier != 0.0 or streak_count > 0
- -10^4 <= result <= 10^4

### Examples

- arena_multiplier = 2.00000, streak_count = 0 → 1
A streak of zero matches leaves the player's standing unchanged, regardless of the arena multiplier.

- arena_multiplier = 0.50000, streak_count = 3 → 0.125
A halving effect applied over three matches keeps reducing the result by the same factor each time.

#### Follow up

Can you compute the final multiplier without repeating the same multiplication once per match in the streak?

## Approach Plan.

use recursive exponentiation by squaring. so instead of multiplying by itself naively that will result to O(N). 
and the power can be as large as 2^31, so repeatedly multiplying each once will eventually exceed limit.
we halve the exponent each step and square the base. that gives us O(logN) time

### Key Constraint

The constraint that matter most is "-2^31 <= streak_count <= 2^31 - 1". because it forces a negative exponential handling
and since the input can be this large having our native exponential time complexity O(2^n) will make the algorithm slow. 

### Pattern

Recursion (Exponentation by Squaring)

### Complexity

- Time O(logN)
- O(1)

### Steps

1. determine the base case. which is if streak_count is 0 return 1.
2. if streak is a negative value, we treat it as inverse to use the positive value.
3. then iterate and compute the result combine multiplier.