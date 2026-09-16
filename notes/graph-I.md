# Graph I

A graph is a mathematical structure for describing relationships. It consists of a set of objects, called vertices, and a set of connections between pairs of those objects, called edges. A graph with vertex set V and edge set E is written G = (V, E).

A graph has no root, so a traversal must be told where to begin, and it discovers only what is reachable from there.

A graph may contain cycles, so a traversal that does not record where it has been will revisit the same vertices without end.

## Tree is a graph with rules

Every tree is a graph. Not every graph is a tree. The differences are exactly the things that make graph code different from tree code.


- In a graph there is no root, can start anywhere.

- Can have a cycle and can be disconnected.

- A tree has parent and child, while a graph just has neighbours.

N.B Two things to note for the a graph code. First, there is no root, so a traversal has to be told where to start, and it only finds what is reachable from there. Second, there can be a cycle, so a traversal can come back to a vertex it has already processed. 