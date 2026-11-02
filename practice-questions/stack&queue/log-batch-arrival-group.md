# Log Batch Arrival Groups

## Problem Statement

A log aggregation service is collecting batches from many servers before a deployment audit begins. Each server has already processed some portion of its backlog, and every server continues shipping logs toward the same required total volume. Faster servers cannot overtake slower batches already ahead in the pipeline, so when one catches up, they continue effectively as one combined stream.

Given the required audit volume and two arrays describing each server's current shipped amount and shipping rate, determine how many distinct arrival groups will reach the audit threshold. If one stream catches another exactly at the threshold, they still count as a single group.

Constraints

- n == shipped_amount.length == ship_rate.length
- 1 <= n <= 10^5
- 0 < audit_volume <= 10^6
- 0 <= shipped_amount[i] < audit_volume
- All values in shipped_amount are unique
- 0 < ship_rate[i] <= 10^6

### Examples

- audit_volume = 15, shipped_amount = [13, 9, 1, 6, 4], ship_rate = [2, 5, 1, 1, 3]
  → 4
  Some trailing servers catch the streams ahead before the audit volume is reached, while others never do, leaving three distinct arrival groups.

- audit_volume = 50, shipped_amount = [0, 5, 10], ship_rate = [5, 3, 2]
  → 1
  Each server behind is fast enough to eventually join the slower stream ahead, so everything reaches the threshold together.

## Approach Plan

We order server by how far along their backlog shipment already is, evaluate how long each would need to finish and merge any server whose finish time is less than the stream directly ahead of it. The number of distinct finish times is the number of arrival groups.

#### Key Constraints

The constraint that matter most is "1 <= n <= 10^5" because it give me a clue that the input can be too large to make use of brute force iterating over the array and for each element we iterate again to compare this will result to O(N^2) which will affect performance. but working with monotonic stack will give me O(N).

#### Pattern

- Monotonic Stack

#### Complexity

- Time Complexity: O(NlogN) due to sorting the server array by shipped amount in descending order.

- Space Complexity: O(N)

#### Steps

- I want to ensure my server array has both the shipped amount and the ship rate.

- sort the server array by shipped amount in descending order.

- the I will iterate over the server array and calculate the time it will take for each server to reach the audit volume.

- I will use the stack to keep track of the finish times. If the current server's finish time is greater than the top of the stack, I will push it onto the stack. If it is less than or equal to the top of the stack, I will pop from the stack until I find a finish time that is greater than the current server's finish time.

- return the size of the stack as the number of distinct arrival groups.
