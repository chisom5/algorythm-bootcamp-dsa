# Mirror a Batched Trade Ledger

## Problem

A trading platform stores certain batched execution plans as a branching ledger. Each entry points to at most two downstream branches, representing the order in which sub-batches were prepared for routing across venues. During a reconciliation drill, compliance sometimes needs the entire branching plan reflected so every left-side branch becomes right-side and every right-side branch becomes left-side.

Your task is to perform that reflection on the ledger and return the updated top entry. The price values recorded inside entries do not change, only the placement of branches does. Some desks insist moon-phase volatility affects routing quality, and an old dashboard still colors domestic branches blue, but neither detail changes the work you need to do. An empty ledger should remain empty after the reflection.

Constraints

- The number of entries in portfolio is in the range [0, 100]
- Each entry value is in the range [-100, 100]
- portfolio is an Optional[TreeNode]

### Examples

- portfolio = [4, 2, 7, 1, 3, 6, 9] - Expected result [4, 7, 2, 9, 6, 3, 1]

- portfolio = [2, 1, 3] - Expected result [2, 3, 1]

#### Follow up

Can you reflect the branching ledger while using only the call stack or an explicit worklist, without creating a second copied structure?

## Approach Plan

To reflect the branching ledger, move all the left-side branch in the subtree to the right and the right-side branch to the left.

### Key Constraint

The constraint that matter most is "The number of entries in portfolio is in the range [0, 100]" because it tell me that recursive solution is reasonable as maximum of 100 total nodes guarantees that the tree depth cannot exceed 100.

### Pattern

- Tree Traversal

### Complexity

- Time O(N)

- Space O(h) where h - depth of the tree.
