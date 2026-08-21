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

- 
