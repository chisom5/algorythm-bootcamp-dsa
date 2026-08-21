// Recursion
function isSplitOnlyBatch(reading) {
  if (reading === 1) {
    return true;
  }

  if (reading <= 0 || reading % 2 !== 0) {
    return false;
  }

  return isSplitOnlyBatch(reading / 2);
}

// Follow-up: Bit Manipulation uses O(1) space and O(log n) time
function isSplitOnlyBatch(reading) {
  return reading > 0 && (reading & (reading - 1)) === 0;
}
