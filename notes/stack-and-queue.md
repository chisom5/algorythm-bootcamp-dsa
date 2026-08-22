# Stack And Queue

Stack and Queue are both linear data structure, in which you add and remove items only at the ends.
A stack removes the item that was added most recently. This order is called last-in, first-out (LIFO).
A queue removes the item that was added first. This order is called first-in, first-out (FIFO).

Both structure mostly handle 5 operations. The important part is the cost trade-off. A linked list lets you insert
and delete at any position but lookup at O(N) time. But a stack & queue do not give you access at the middle of the sequence.
In return every operation they support runs in O(1) time.

## Building on Previous Knowledge

From previous lesson Linked lists give you one of the two implementations. Recursion explains the call stack,
which is itself a stack. Big-O analysis is the tool you use to compare the two implementations.

- Linked list are what this structure are built out of. - A stack is a linked list where you only touch the head. A queue is a linked list with a head pointer and a tail pointer.

- Recursion runs on stack - The call stack that runs your recursive functions is the same structure. This is why a recursive function uses O(depth) memory.

- Big-O is how every design decision here gets justified

N.B - Most problem in Stack & Queue Keep returning to

- Does the problem care about the most recent thing or the earileest thing?
- What should one entry hold?

### How to recongise a stack problem

- The problem ask about the last item you saw not the first. - here you look for word such as "most recent", "Unmatched", "Innermost" etc.

- Reverse or Undo - The output order is the reverse of the input order.

- Pairing & Matching - every opener needs a closer.

### Stack Patterns

1. Monotonic Stack 

A monotonic stack turns a family of O(n²) problems into O(n) problems. It is the highest-value stack pattern.

The problem Shape:

`html "For each element, find the next (or previous) element that is greater (or smaller)."`

The brute force is two nested loops: for each element, walk forward until you find one that qualifies.
That runs in O(n²) time and repeats a large amount of work.

#### The trick

Keep the stack sorted, either always decreasing or always increasing.
Before you push a new element, pop every entry that would violate that order.
Each pop resolves the answer for one element. If the new element breaks the order for an entry on the stack,
the new element is the answer for that entry. And this algorithm runs in O(N)

#### Why the algorithm is O(n)

- The code has a while loop inside a for loop, which looks like O(n²). The total cost is O(n).

- Each element is pushed exactly once, and popped at most once.

- So total pushes ≤ n and total pops ≤ n. Total work ≤ 2n = O(n).

- It processes and discards elements as soon as their "greater/smaller" successor is found, keeping overall time complexity at O(N).

#### Store indices, not values

If the answer involves a distance or a position, such as "how many days until" or "the width of the rectangle", a stored value does not carry the information you need. Store the index instead.

2. Pairing & Symbol Matching  

#### The Algorithm Shape

- Scan left to right, pushing opening symbols ((, {, [) on the stack

- When encountering a closing symbols (),}, ]), check if the top of the stack matches 
the corresponding opening symbols, then pop. At the end of input the stack must be empty.

#### When to use

- Validating syntax, matching nested structures, or evaluating expression closures.


3. The nested-structure family

Is the umbrella term for any stack pattern where the inner items must be completely resolved before outer 
Items can finish processing. The last structure open is always the first structure closed.

