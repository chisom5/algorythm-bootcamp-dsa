# FIFO Request Dispatcher via Dual Stacks

## Problem

A load balancer must process incoming requests in strict first-in, first-out order using only two internal stacks as storage. Implement a DispatchQueue that supports enqueuing new requests, dequeuing the oldest request, inspecting the front request, and checking whether the queue is empty. Only standard stack operations are permitted internally.

Required interface: implement DispatchQueue() exactly, then support these methods:

enqueue(x) updates the structure and returns no value.
dequeue() returns its int result.
front() returns its int result.
isEmpty() returns its bool result. Examples are evaluated as ordered operation sequences. The recorded result contains null for construction and for any method that returns no value.

Constraints

- 1 <= x <= 9 for any enqueued value
- At most 100 calls will be made across enqueue, dequeue, front, and isEmpty
- All calls to dequeue and front are guaranteed to be valid (queue is non-isEmpty)
- Only stack-standard commands may be used internally: enqueue to top, front/dequeue from top, size, and isEmpty

### Examples

- commands = ["DispatchQueue", "enqueue", "enqueue", "front", "dequeue", "isEmpty"], arguments = [[], [1], [2], [], [], []]
→ [null, null, null, 1, 1, false]

- commands = ["DispatchQueue", "enqueue", "dequeue", "isEmpty"], arguments = [[], [1], [], []]
→ [null, null, 1, true]

#### Follow up

Can you design DispatchQueue so that each operation runs in amortized O(1) time? That is, any sequence of n operations completes in O(n) total time even if individual operations occasionally take longer.

## Approach Plan

Since our goal is to ensure each operation runs in amortized O(1) time. -Using two stacks "inbox" stack that will store the incoming request. and an "outbox" stack that will handle the dequeuing of oldest request. before dequeue I will check if outbox is empty then transfer request from inbox into it.  front() will return the top request on the outbox stack. while isEmpty() return boolean to ensure our stack aren't empty.

### Key Constraint

The constraint that matter most is "Only stack-standard commands may be used internally: enqueue to top, front/dequeue from top, size, and isEmpty" because it forces me to make use of dual-stack approach rather than using array indexing and unshift() to dequeue.

### Pattern 

- Stack Pattern.

### Complexity

- Time O(1)
- Space O(N)