# Find the Viable Concert Kickoff

## Problem Statment

A concert bus follows a circular route among venues, collecting fuel at each stop and spending fuel to reach the next. It starts with an empty tank at one venue and travels in the stated direction. Find the unique zero-based kickoff venue that lets it complete the full circuit, or return -1 when no venue works.

Constraints

- fuel_at_venues and fuel_to_next_venue are integer arrays of equal length n.
- 1 <= n <= 100000.
- 0 <= fuel_at_venues[i], fuel_to_next_venue[i] <= 10000.
- If a valid concert kickoff exists, it is unique.

### Follow-up

Return the zero-based venue index for the concert kickoff, or -1 if no venue works.

#### Examples

- fuel_at_venues = [1, 2, 3, 4, 5], fuel_to_next_venue = [3, 4, 5, 1, 2] → 3

For this concert kickoff, venue 3 leaves enough fuel to complete the full circuit and return to index 3. The venue with the most fuel is index 4, but starting there runs short; the returned kickoff is 3.

- fuel_at_venues = [2, 3, 4], fuel_to_next_venue = [3, 4, 3] →  -1

No concert kickoff works: the route requires more fuel overall than the venues provide, so the bus cannot complete the circuit.

## Approach Plan

First we check our fuel budget, if total fuel is not enough to handle cost return -1 immediately because no matter where we start collecting fuel from, we won't be able to complete the full circuit. then we initialize tank as empty so at each station we add gas - cost. If tank is negative every start from the current index has fail, hence we start at i + 1 with an empty tank. otherwise we continue.

#### Key Constraint

The constraint that matter most is "i <= n <= 100000" because n can reach 10^5, a brute-force solution that tries starting at every venue start from 0 to n - 1 and simulates up to n steps takes O(n^2) time and it would eventually time out.

#### Pattern

- Greedy Alogrithm

#### Complexity 

- Time O(N)

- Space O(1)