# Cover Risk Alerts With Capital Buffers

## Problem
A trading desk has a queue of accounts that each triggered a risk alert. Every alert needs a minimum capital buffer before the account can be marked safe for the day. Separately, the desk has a limited set of reserve allocations, and each allocation can be used on only one account.

If a reserve allocation is at least as large as an account's required buffer, that alert can be cleared. Your task is to decide how to distribute the available reserves so that the number of cleared alerts is as large as possible.

Return the maximum number of accounts that can be cleared.

Constraints
- 1 <= risk_alerts.length <= 3 * 10^4
- 0 <= reserve_blocks.length <= 3 * 10^4
- 1 <= risk_alerts[i], reserve_blocks[j] <= 2^31 - 1

### Examples

risk_alerts = [2, 5, 7], reserve_blocks = [2, 2] → 1

risk_alerts = [3, 6], reserve_blocks = [3, 6, 9] → 2

risk_alerts = [8, 3, 5], reserve_blocks = [4, 6] → 2

## Approach Plan.

### Key Constraint 
the key constraint is "1 <= risk_alerts.length <= 3 * 10^4" and "0 <= reserve_blocks.length <= 3 * 10^4" because it tells
me that the input can be as large as 3 * 10^4 and that our reserve_block can be empty so our alogrithm should account for it.

### Pattern

Greedy pattern - because we never revist an allocation or change past decision.

### Complexity 

- Time - O(NlogN + MlogM)
- Space - O(1)

### Steps
1. sort both arrays
2. match the items or compare each item if there is a match increment count
4. adjust the two pointers in the array.