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

