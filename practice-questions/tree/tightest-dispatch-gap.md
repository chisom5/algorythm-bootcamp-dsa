# Tightest Dispatch Gap

## Problem Statement
A fleet dispatch system stores shipment priority codes in a routing tree: codes below a checkpoint appear on its left side and higher codes on its right. Each checkpoint represents one shipment waiting for a dock.

Determine the smallest numeric gap between the codes of any two different shipments. This identifies shipments that are nearly identical in urgency and may compete for the same loading window.

Return that smallest gap.

Constraints

- shipment contains between 2 and 10^4 checkpoints.
- 0 <= checkpoint.val <= 10^5.
- All shipment priority codes are distinct, and each left-side code is lower than its checkpoint while each right-side code is higher.

### Examples

- shipment = [8, 4, 12, 2, 6, 10, 14] 
Expected result - 2

- shipment = [5, 3, 9, 1, 4, 7, 11]
Expected result - 1

### Approach Plan

From the question, I can know that this is a BST because it follows a order where the left-side code of the tree are lower or less than the checkpoint while the right-side are higher. and all the shipment codes are unique.

To return the smallest gap between the codes of any two different shipment. mean to get the minimum value.

#### Pattern

- BST

#### Complexity

- Time O(N)

- Space O(H) - where H is the height of the tree.