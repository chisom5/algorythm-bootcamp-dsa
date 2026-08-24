# Group Entry Log Sanity Check

## Problem

A social platform archives tiny moderation logs that describe members stepping into and out of temporary spaces such as circles, watch rooms, and project hubs. Each symbol in a log marks either an entry token or an exit token for one specific space type.

Trust and safety wants to reject malformed logs before they reach analytics. A log is acceptable only if every exit matches the most recent still-open entry of the same space type, and nothing exits before its matching entry appears. Some moderators like to annotate incidents with lunar phase notes, but those notes are stored elsewhere and do not affect validation. The three space types happen to use different token shapes because of an old design experiment from the platform's early mobile era.

Constraints

- 1 <= activity_log.length <= 10^4
- activity_log consists only of the six characters '(', ')', '[', ']', '{', '}'
- Return a boolean indicating whether the full activity_log is structurally acceptable

### Examples

- activity_log = "{[()]}" → True

- activity_log = "[[[[[[{{{{}}}}]]]]]]" → True

#### Follow up

Could you validate the log in one left-to-right pass while using memory proportional only to the number of currently unmatched entries?

## Approach Plan

For every exit token, scan backwards thrugh the earlier log to find any matching token that has not been paired yet.

### Key Constraint

The constraint that matter most is "1 <= activity_log.length <= 10^4" because it allows the operation to run on a single pass
O(N) and suitable for stack solution.

### Pattern

- Stack pattern

### Complexity

- Time O(N)
- Space O(N) 

### Steps

- I declare a constant that will hold the six characters '(', ')', '[', ']', '{', '}' as key, value pair,
Where closing token map to the corresponding opening tokens. and I initialize an empty stack [].

- Iterate through the input and from left to right. 
- And handle opening tokens by checking if ch is NOT a key in pairs (!(ch in pairs)). If it is an opening token, push ch onto the stack.
- Validate closing token. if ch is a closing token, first check if the stack is empty so I don't pop from an empty stack
- Then check if the top token in the stack doesn't matches the pairs[ch] return false immediately and pop the stack.

