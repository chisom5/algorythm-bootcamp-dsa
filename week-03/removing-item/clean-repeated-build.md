# Clean Repeated Build Records

## Problem

A maintenance tool receives a release chain whose records are ordered by build rank. Each record points to the next record, and the chain may contain repeated ranks when several deployments share the same build.

The tool must keep the first record for each rank and reconnect the chain so every retained record leads to the next higher rank. It should return the original entry point when one exists, or an empty result when the chain has no records.

The input can be empty or contain up to 300 records, with ranks already ordered low to high. Cleanup should reuse existing records rather than create replacements.

Constraints

- The number of records in release_chain is between 0 and 300.
- Each build rank is between -100 and 100.
- release_chain is ordered in ascending build-rank order.
- Existing release records should be reused.

### Examples

- release_chain = [4, 4, 9] → [4, 9]

- release_chain = [2, 5, 5, 8, 8, 8] → [2, 5, 8]

## Approach Plan

### Key constraint

The constraint that matter most is "release_chain is ordered in ascending build-rank order." because it tells me that the duplicate sit directly next to each other. and it enable O(n) & O(1) complexity as i can do this in place without needing a set.

### Pattern

- Linked List

### Complexity

- Time O(N)
- Space O(1)

### Steps

- on the function where releaseChain represent the listNode.
- iterate as long as it not empty
- then compare the current node val if it is the same as the next, skip(remove)
- else move pointer.