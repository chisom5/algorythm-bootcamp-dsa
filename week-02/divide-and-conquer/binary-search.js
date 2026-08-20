function search(book, name, lo, hi) {  // hi is book.length - 1
  if (lo > hi) {   // base case: nothing left
    return null;
  }
  const mid = Math.floor((lo + hi) / 2);
  if (book[mid] === name) {            // base case: found it
    return mid;
  }
  if (book[mid] < name) {
    return search(book, name, mid + 1, hi);   // the top half
  }
  return search(book, name, lo, mid - 1);   // the bottom half
}