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

2. The nested-structure family

Is the umbrella term for any stack pattern where the inner items must be completely resolved before outer
Items can finish processing. The last structure open is always the first structure closed.

The key pattern in this family are :

- Pairing & Symbol Matching

#### The Algorithm Shape

- Scan left to right, pushing opening symbols ((, {, [) on the stack

- When encountering a closing symbols (),}, ]), check if the top of the stack matches
  the corresponding opening symbols, then pop. At the end of input the stack must be empty.

#### When to use

- Validating syntax, matching nested structures, or evaluating expression closures.

- Nested string Decoding "3[a2[c]]" → "accaccacc" (String Manipulation & Parsing). The mechanism is when encountering an opening indicator like [ in "3[a2[c]]"
  push the repeat count and the string built so far. At ], we pop them and combine them.

```js
function decodeString(s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";

  for (let char of s) {
    if (!isNaN(char)) {
      // Build numbers (handles multi-digit like '12')
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "[") {
      // 1. Push outer state onto stack
      stack.push([currentStr, currentNum]);
      // 2. Reset local buffers for the inner scope
      currentStr = "";
      currentNum = 0;
    } else if (char === "]") {
      // 1. Pop saved outer state
      let [prevStr, num] = stack.pop();
      // 2. Expand inner string and attach to saved outer string
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      // Standard letters
      currentStr += char;
    }
  }

  return currentStr;
}
```

- Nested Expression Evaluation with Parentheses (Expression Evaluation & Parsing) - like a basic calculator. The mechanism At ( push the running result and the current sign onto the stack and reset the local tally. when ) is hit, restore them and combine the sub-result.

given a string expression 1 + (4 + 5 \* 2).

```js
function calculate(s) {
  let stack = [];
  let runningResult = 0;
  let currentNum = 0;
  let currentSign = 1; // 1 for +, -1 for -

  for (let char of s) {
    if (!isNaN(char) && char !== " ") {
      currentNum = currentNum * 10 + Number(char);
    } else if (char === "+") {
      runningResult += currentSign * currentNum;
      currentNum = 0;
      currentSign = 1;
    } else if (char === "-") {
      runningResult += currentSign * currentNum;
      currentNum = 0;
      currentSign = -1;
    } else if (char === "(") {
      stack.push([runningResult, currentSign]);
      runningResult = 0;
      currentSign = 1;
    } else if (char === ")") {
      runningResult += currentSign * currentNum;
      currentNum = 0;

      let [prevResult, prevSign] = stack.pop();
      runningResult = prevResult + prevSign * runningResult;
    }
  }
  return runningResult + currentSign * currentNum;
}
```

### Queue

A Queue is a line, you join at the back(rear) and leave from the front. The item that was added first is removed first. This order is called first-in, first-out (FIFO), and sometimes LILO, last-in, last-out.

A queue track two pointers instead of one. and it is the only structural difference from stack. When queue code is wrong, the fastest diagnostic question is: which pointer moved, and should it have moved?.

- The obvious array queue is broken.
  - Attempt 1: a list, append to enqueue. i.e push an item to the queue. and shift() to dequeue. The code is correct but shift() runs in O(n) time. Removing the first element of a contiguous array means shifting every remaining element one slot to the left.

  Contiguity is the reason array[5000] is a constant-time lookup, and a contiguous block cannot contain a hole.

  So draining a queue of n items costs O(n²) time. That is acceptable for ten items and far too slow for a hundred thousand.
  - Attemp 2: do not shift, and advance a front index instead.

  Here to perform dequeue, we advance the front index and those slot, before the advance front will never be use again. And dequeue runs in O(1) time. However, the abandoned slots at the front are never reused, so the array grows without limit. A long-running server queue that processes a million messages leaves a million unused slots behind it. This behavior is a memory leak.

The fix for building this queue will be to use Circular array/buffer - where you wrap indices around using modulo arithmetric
((index + 1) % CAPACITY).

- The Circular array queue

```js
class CircularQueue {
  constructor(capacity) {
    this.data = new Array(capacity).fill(null);
    this.cap = capacity;
    this.front = 0;

    // tells empty from full
    this.size = 0;
  }

  //  implementation
  enqueue(x) {
    if (this.size === this.cap) {
      return false;
    }

    const slot = (this.font + this.size) % this.cap;
    this.data[slot] = x;
    slot += 1;
    return true;
  }

  dequeue(){
    if(this.size === 0){
        // nothing to dequeue.
        return null;
    }
    // get the front item in the data
    const x = this.data[this.front];
    this.data[this.front] = null; // set the front item to null
    this.front = (this.front + 1) % this.cap; // this adjust the front of the array

    this.size -= 1;
    return x;
  }
}
```
N.B There are 3 things that are call queue but they are not.

- A priority queue is not a queue:
A priority queue is a heap. It removes the highest-priority item, not the earliest item, and it ignores insertion order. its operation run in O(logN) not O(1). Use it when a problem says "smallest so far", "k largest", or "most urgent".

- A monotonic deque is not a plain queue
A monotonic deque keeps an ordering invariant on every insertion. It is used to find the maximum or minimum in a sliding window. It is the monotonic stack, plus expiry from the front.

- A message queue is a distributed system, not a data structure.