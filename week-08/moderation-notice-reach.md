# Moderation Notice Reach

## Problem Statement

A moderation notice begins at channel k and travels through directed review links between n channels. Each link has a nonnegative delivery time. Return the earliest time by which every channel has received the notice, or -1 if some channel cannot be reached.

Constraints

- 1 <= k <= n <= 100
- 1 <= times.length <= 6000
- Each times[i] contains exactly three integers [ui, vi, wi].
- 1 <= ui, vi <= n
- ui != vi
- 0 <= wi <= 100
- Every ordered pair (ui, vi) appears at most once.
- A link is directed from ui to vi and takes wi time units.
- Return the smallest time when all n channels have received the notice, or -1 when at least one channel is unreachable from k.

### Examples

- Times input [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
Expected result 2
The notice reaches channels 1 and 3 at time 1, then channel 4 through channel 3 at time 2. The slowest arrival is therefore 2.

- Times input [[1, 2, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 1
Expected result 3
Channel 2 can be reached directly in 4, but the route through channel 3 takes 2 + 1 = 3. The final arrival time is 3.

### Approach Plan

From the question, we can see that this is a graph problem where we need to find the shortest time to reach all nodes (channels) from a starting node (channel k). We can use Dijkstra's algorithm to solve this problem efficiently to return the earliest time by which every channel has received the notice. and also from the constraints this is 1-indexed, so we need to adjust the indices accordingly.

#### Key Constraints

The constraints that matter most is "1 <= k <= n <= 100" and "1 <= times.length <= 6000". This means that we can use Dijkstra's algorithm with a priority queue to find the shortest path from the starting channel k to all other channels. Given the constraints, this approach will be efficient enough.

#### Patterns

- Shortest path.

#### Complexity

- Time Complexity: O((V + E) log V), where V is the number of channels (n) and E is the number of links (times.length).

- Space Complexity: O(V + E) for storing the graph and the priority queue.

#### Steps

1. create the priority queue.

2. build the adjacency list representation of the graph from the times input.

3. initialize a distance array with infinity for all channels except the starting channel k, which should be set to 0.

4. while the priority queue is not empty, pop the channel with the smallest distance and update the distances of its neighbors if a shorter path is found.

5. After processing all channels, check the distance array. If any channel has a distance of infinity, return -1 (indicating that it is unreachable). Otherwise, return the maximum value in the distance array, which represents the earliest time by which every channel has received the notice.