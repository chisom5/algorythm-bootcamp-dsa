/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

function merge(nums1, m, nums2, n) {
  let a = m + n - 1,
    i = m - 1,
    j = n - 1;

  while (i >= 0 && j >= 0) {
    nums1[a--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }

  // when the first loop ends and there are still value that need to be merge.

  while (j >= 0) {
    nums1[a--] = nums2[j--];
  }
}
