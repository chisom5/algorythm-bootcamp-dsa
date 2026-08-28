# Longest Dispatch Escalation Chain

## Problem

At a ride sharing company, dispatch incidents are tracked as branching escalation records. Each incident can split into at most two follow up investigations, such as a pickup side issue and a destination side issue, and each of those can branch again as specialists review the case.

Operations wants to know how many handoffs the deepest unresolved chain contains, starting from the first incident record. A chain length counts every record visited from the initial report down to the final record that has no further follow ups.

Some records mention fare anomalies or surge weather notes, but those details do not affect this calculation. If there is no incident record at all, the chain length is zero.

Constraints

- The number of records in trip is in the range [0, 10^4]
- Each record value is in the range [-100, 100]
- trip is the trip of a binary branching record structure with fields val, left, and right

### Examples 

- trip = [] - Expected result 0

- trip = [18,9,27,4,13,22,31,2,6,11,15] - Expected result 4

#### Follow up 

Can you compute the deepest escalation chain while using only the call stack beyond the record structure itself?

## Approach Plan

To know how many handoffs the deepest unresolved chain contains - means to know the depth or height of the tree. since A chain length counts every record visited from the initial report down to the final record. The flow is Post order DFS. because it counts every record from the children node.

### Key constraint

The constraint that matter most is "The number of records in trip is in the range [0, 10^4]" because it ensure that recursion is safe for (O(H) space), though in extreme worst-case scenarios (a completely linear tree where H = 10,000), it approaches standard runtime stack frame limits."

### Pattern

- Tree traversal, Post order DFS

### Complexity

- Time O(N)
- Space O(H)