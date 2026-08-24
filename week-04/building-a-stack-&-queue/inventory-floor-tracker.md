# Inventory Floor Tracker

## Problem

A kitchen inventory system must track stored item quantities and always report the lowest quantity on hand in constant time. Design an InventoryFloor structure that supports adding quantities, removing the most recent entry, peeking at the latest entry, and fetching the current minimum, all in O(1) time.

Required interface: implement InventoryFloor() exactly, then support these methods:

store(val) updates the structure and returns no value.
removeLatest() updates the structure and returns no value.
latest() returns its int result.
lowestStored() returns its int result. Examples are evaluated as ordered operation sequences. The recorded result contains null for construction and for any method that returns no value.

Constraints

- -2^31 <= quantity <= 2^31 - 1
- removeLatest, latest, and lowestStored will always be called on a non-empty InventoryFloor.
- At most 3 * 10^4 calls will be made across all commands.

### Examples
- commands = ["InventoryFloor", "store", "store", "store", "lowestStored", "removeLatest", "latest", "lowestStored"], arguments = [[], [-2], [0], [-3], [], [], [], []]
→
[null, null, null, null, -3, null, 0, -2]

- commands = ["InventoryFloor", "store", "store", "lowestStored", "removeLatest", "lowestStored"], arguments = [[], [1], [2], [], [], []]
→
[null, null, null, 1, null, 1]

## Approach Plan

Main two parallel stacks: a main stack that will store all values and an auxiliary stack that will track the running minimium.
Each time store() is called push the value to the main stack and push the min(value, aux_top) to the auxiliary stack. removeLatest() is called remove or pop from both stack. latest() read the top from the main stack

### Key Constraint

The constraint that matter most is "At most 3 * 10^4 calls will be made across all commands." because if that large call will be made across all command it helps me prevent naive scanning which is O(N) time and this would exceed time limit.

### Pattern

- Stack pattern

### Complexity

- Time O(1)
- Space O(N)



