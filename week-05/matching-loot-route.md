# Matching Loot Route Layouts

## Problem

In a competitive dungeon crawler, each raid seed generates a loot route map. Every stop on the map contains a loot score, and each stop may branch into a left path and a right path leading to later pickups. Analysts compare maps to detect duplicated seeds, mirrored event scripts, and suspiciously repeated reward patterns between arenas.

Your task is to decide whether two loot route maps are truly identical. They count as identical only when every stop appears in the same place in both maps and carries the same loot score. If one map branches where the other ends, or if matching positions hold different scores, the maps are not the same. Cosmetic skin themes and seasonal badge colors may differ, but those details are irrelevant to this check.

Constraints

- The total number of stops across both loot_route_a and loot_route_b is in the range [0, 100].
- Each stop score is in the range [-10^4, 10^4].
- loot_route_a and loot_route_b are binary tree roots of type Optional[TreeNode].

### Examples

- loot_route_a = [], loot_route_b = [6]

- loot_route_a = [8,5,8], loot_route_b = [8,8,5]

## Approach Plan

To determine if two loot route are identical.

- if both route are not empty - it is identical
- if either of the route is empty - then it is not identical
- if the loot route values are the same - it is identical

### Key Constraint

The constraint that matter most is "The total number of stops across both loot_route_a and loot_route_b is in the range [0, 100]." because it tell me that recursive solution is reasonable as maximum of 100 total nodes guarantees that the tree depth cannot exceed 100. with stack limit around 10,000 frames. (10^4), 100 recursive call will never trigger a maximium call stack exceed.

### Pattern

- Tree Traversal

### Complexity

- Time O(N)
- Space O(h) where h - depth of the tree.
