function isApprovedPackSize(sample) {
  return sample > 0 ? (1162261467 % sample === 0 ? true : false) : false;
}

// where 1162261467 is the largest power of 3 that fits in a 32-bit signed integer (3^19)