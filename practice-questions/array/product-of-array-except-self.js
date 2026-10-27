/**
 * @param {number[]} nums
 * @return {number[]}
 */

function productExceptSelf(nums) {
  let result = new Array(nums.length).fill(1);
  let left = 1,
    right = 1;

  for (let i = 0; i < nums.length; i++) {
    // left pass
    result[i] *= left;
    left *= nums[i];

    // right pass
    result[nums.length - 1 - i] *= right;
    right *= nums[nums.length - 1 - i];
  }
  return result;
}
