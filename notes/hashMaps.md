# Hash Maps

A Hash map is also called a Hash table or dictionary. Is a data structure designed to store key-value pairs.
It allows you lookup, inset or delete element in O(1) average time.

##  When to use it

- When you need constant-time lookup, or complement checks.
- When counting or comparing frequencies of items
- When grouping items by a derived key (e.g. a signature)
- When detecting duplicate

### Common mistakes

- Using nested scans instead of a hash-based O(n) approach
- Forgetting how duplicate keys behave when storing hashing
- missing edge cases with empty inputs.
