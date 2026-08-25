class Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}
// implementation with Hash map.
function cloneCampaignRoute(head) {
  if (head === null) {
    return null;
  }

  let current = head;
  let map = new Map();

  // create a copy of the route.
  while (current !== null) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

  current = head;

  //   connect pointers
  while (current !== null) {
    const copy = map.get(current);

    copy.next = map.get(current.next) || null;
    copy.random = map.get(current.random) || null;

    current = current.next;
  }

  return map.get(head);
}



// implementation to achieve O(1) - without Hash map
function cloneCampaignRoute(head) {
  if (head === null) {
    return null;
  }

  let current = head;

  //  create copy node side by side with original.
  while (current !== null) {
    let copy = new Node(current.val);

    copy.next = current.next;
    current.next = copy;

    current = copy.next;
  }

  current = head;
  //   connect pointers
  while (current !== null) {
    if (current.random !== null) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  current = head;
  let copyHead = head.next;

  //  separate original from copy;
  while (current !== null) {
    let copy = current.next;

    current.next = copy.next;

    if (copy.next !== null) {
      copy.next = copy.next.next;
    }

    current = current.next;
  }

  return copyHead;
}
