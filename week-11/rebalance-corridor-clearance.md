# Rebalance Corridor Clearance

## Problem Statement

A service corridor has checkpoints, each with a clearance mark showing the maximum number of positions a technician can move forward from there. Starting at the first checkpoint, determine whether the technician can reach the corridor's final checkpoint. Return true if a route exists and false otherwise; a move may pass over intermediate checkpoints.

Constraints

- 1 <= max_clearance.length <= 10^4
- 0 <= max_clearance[i] <= 10^5 for every checkpoint i

### Follow-up 

The returned value reports whether the corridor end is reachable, not how many moves the route uses.

#### Examples

- max_clearance = [2, 3, 1, 1, 4] → True

The first corridor checkpoint reaches the next one, whose clearance extends the route to the final checkpoint.

- max_clearance = [3, 2, 1, 0, 4] → False

The reachable corridor stretch ends before the final checkpoint. The zero-clearance checkpoint cannot extend it.

## Approach Plan

We scan every max_clearance starting from the first checkpoint, if we can reach the current index. if current index is greater than maxReach at the start of the iteration, then we have gotten to a position we can't get pass. and the current index becomes unreachable and nothing from that index can be used.

#### Key Constraints

The constraint that matter most is "1 <= max_clearance.length <= 10^4" because it tells me that the brute force/backtracing branch exploration approach won't work efficently here. at a point we can exceed call stack

#### Pattern

- Greedy Alogrithm

#### Complexity

- Time O(N)

- Space O(1)

#### Steps

- Initialize reachability (let max_Reach = 0;) this will hold the farthest reachable index

- Scan through the max_clearance checkpoint, moving forward from one checkpoint to another

- guard against unreachable checkpoint (if i > max_Reach: return false;) as everyother checkpoint becomes unreachable.

- expand the farthest reach from the current index. (max_Reach = Math.max(max_Reach, i + max_clearance[i]))

- confirm corridor completion (return true).