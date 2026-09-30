function findTightestDispatchGap(shipment) {
  let minGap = Infinity;
  let prev = null;

  function Inorder(node) {
    if (!node) return;
    Inorder(node.left);

    if (prev !== null) {
      minGap = Math.min(minGap, node.val - prev);
    }
    prev = node.val;

    Inorder(node.right);
  }

  Inorder(shipment);
  return minGap;
}

// using stack
function findTightestDispatchGap(shipment) {
  let minGap = Infinity;
  let prev = null;

  let stack = [];
  let curr = shipment;

  while (curr !== null || stack.length) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    let node = stack.pop();

    if (prev !== null) {
      minGap = Math.min(minGap, node.val - prev);
    }
    prev = node.val;

    curr = node.right;
  }

  return minGap;
}
