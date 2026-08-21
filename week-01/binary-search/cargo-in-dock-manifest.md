# Find a Cargo in dock manifest

## Problem
A warehouse routing system keeps each dock's cargo manifest in strictly increasing code order so staff can look up items quickly during loading. Each code appears at most once in the manifest.

You are given the ordered manifest for one dock and a cargo code requested by the routing team. Return the position of that code in the manifest if it is present. If the code does not appear, return -1.

The lookup must stay fast even when the manifest grows large, because route planning depends on repeated searches throughout the day.

constraints:
- 1 <= len(manifest_codes) <= 10^4
- -10^4 < manifest_codes[i], requested_code < 10^4
- All values in manifest_codes are unique
- manifest_codes is sorted in strictly increasing order

### Examples 

manifest_codes = [4, 11, 18, 26, 39, 57], requested_code = 39  -> return index 4


## Approach Plan.

### key Constraint

my key constraint is "manifest_codes is sorted in strictly increasing order". because it makes me think in the line of using binary search if the list is sorted and i have a target to search for instead of comparing each item one after the one, i can halve the list and check if the requested_code is the middle value or check left and right section. 

### Pattern

Binary search.

### Complexity

- Time - O(logN)
- Space - O(1)

### Steps 
1. get the left and right of the list. is what i will use as a range in my iteration.
2. iterate with the condition while(left <= right)
3. get the middle value using Math.floor(l + (r -l) /2)
4. then compare with our target, which is the requested_code. 
5. if the target is the mid val return the index. else if our current value is less than target check left and do same for right.