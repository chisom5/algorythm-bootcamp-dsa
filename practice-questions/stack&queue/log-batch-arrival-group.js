/**
 * @param {number} auditVolume
 * @param {number[]} shippedAmount
 * @param {number[]} shipRate
 * @returns {number}
 */
function countArrivalGroups(auditVolume, shippedAmount, shipRate) {
  let n = shippedAmount.length;

  let server = [];

  for (let i = 0; i < n; i++) {
    server.push({ shipped: shippedAmount[i], rate: shipRate[i] });
  }

  // sort by descending order.
  server.sort((a, b) => b.shipped - a.shipped);

  let stack = [];

  // iterate to get the time it take to reach the audit volume.
  for (let i = 0; i < n; i++) {
    let timeToReach = (auditVolume - server[i].shipped) / server[i].rate;

    // if the current server take more time than the previous or the one at the top of the stack.
    if (stack.length === 0 || timeToReach > stack[stack.length - 1]) {
      stack.push(timeToReach);
    }
    // otherwise it catches up and merge into the fleet ahead, do nothing.
  }

  return stack.length;
}
