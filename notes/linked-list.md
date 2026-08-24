# Linked List

Linked List is a sequence built from separate objects. each object is a node that stores a value and a
reference to the next node.

### How Linked list store data

Each node in a linked list contains two fields

- Data / Value: The actual information you want to store.
- Pointer(Next): A reference/memory address pointing directly to the location of the next node in the chain.

[ Data | Next ] ---> [ Data | Next ] ---> [ Data | Null ]
(Node 1) (Node 2) (Node 3)

- Head: A reference pointing to the very first node in the list.
- Tail: The final node, whose "Next" reference point to null. (it indicate the end of the chain).

Because Node only need to know where the next element lives, they can be scattered randomly across the computer's RAM.

## Difference between Linked list and an array

An array can calculate the address of element k and jump directly to it, but inserting an element may require
shifting existing values to make room. But A linked list cannot jump directly to element k;
reaching it requires following references one at a time. In return, once the relevant position has been found,
an element can be inserted or removed by updating only a few references—without moving any other element.

Hence most Linked list operations involves around :

- Which reference is read
- Which reference is overwritten
- Which reference is in what order.

Key difference:
| Features | Linked List | Array |
| --- | --- | --- |
| Element Access (Lookup) | O(N) Sequential Access: Must start at the Head and traverse node-by-node. | O(1) Random Access: Instant access by index |
| Insertion / Deletion | O(1) Constant: Relink pointers without shifting data. | O(N) Linear: Requires shifting elements to fill or open space. |
| Size Flexibility. | Flexible: Grows and shrinks dynamically as needed. | Fixed size for static array or resizing operations (in dynamic arrays). |

## When to use which ?

- Choose Array when: You need fast random access to elements by index or prioritize lower memory footprint and cache locality.

- Choose a Linked List when: Your application requires frequent insertions and deletions (especially at the beginning or middle of the sequence) and doesn't rely on index-based lookups.

## Reordering 

Linked list are better than array when reordering elements. For example we have a user's playlist as an array of 10,000 songs. The user then drag the song "Not Like Us" by Kendrick Lamar from the bottom of the playlist all the way to position 1 — they want it next.

What will happen is Every one of the other 9,999 songs shifts one slot to the right, so the song "Not Like Us" is written into slot 0.
so this affect time performance for an array.

But with the same example in a linked list, since each song has it own object holding a reference to whichever song plays next. when the last item is move to the top, the last item in the 9,999 reference will point to null indicating that's the new tail. then the item that's move to the top becomes the head with it reference pointing to the next second item. that's the total 3 write operations.

###  Identifying Patterns in Linked list

To identify patterns in linked list, you need to answer this question first:

- Am i modifying the links?
If yes - then consider using a dummy node.

- Can the head be removed?
If yes - dummy node is needed.

- Can the head change because of insertion or merging?
If yes - consider using dummy node.

### Here are some algorithmic patterns used to solve linked list problems:

1. Two pointers (Fast & Slow):

Initialize two pointers starting at the head: a slow pointer that moves 1 step at a time, and a fast pointer that moves 2 steps at a time.

2.  Offset pointers: 

Instead of moving at different speeds, advance the fast pointer $K$ steps ahead before starting the slow pointer. Then, move both at the same speed ($1$ step at a time).

3. Skip-flip Advance (In-place reversal): 

Manipulating pointer references dynamically using three variables: prev, curr, and next.

4. Dummy Head Node: 

Create a fake node (const dummy = new ListNode(0)) to serve as a fixed starting reference before the actual head.