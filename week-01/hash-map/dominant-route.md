# Dominant Incident Route

## Problem

Your incident platform records the routing destination chosen for each alert during a noisy outage. Every entry in the stream is represented by an integer ID for the cluster, team, or service that ultimately received that alert.

In this environment, one destination is known to have handled more than half of all alerts in the stream. Given the full routing record, determine which destination dominated the incident. You may rely on the guarantee that such a dominant destination always exists.

Your answer should return that destination ID exactly as recorded.

Constraints
- 1 <= len(routes) <= 5 * 10^4
- -2^31 <= routes[i] <= 2^31 - 1
- A dominant destination exists and appears more than floor(len(routes) / 2) times

### Examples

routes = [14] → 14

routes = [7, 3, 7] → 7

## Approach plan.

### Key constraint

The key constraint is "A dominant destination exists and appears more than floor(len(routes) / 2) times" because it guarantee us that such a dominant destination always exists. without this constraint I might be thinking of using other data structure.

### Pattern

Hash map

### Complexity 

Time - O(n)
Space - O(1)

### Steps
1. iterate the routes while keeping one current frontrunner and a balance score or count,
2. letting matching entries strengthen it (increases the count or score) and 
3. conflicting entries cancel or decreases the count or score until the true dominant remains.