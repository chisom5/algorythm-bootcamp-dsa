function twoSum(nums, target) {
  const sum = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];

    if (sum.has(compliment)) {
      return [sum.get(compliment), i];
    }

    sum.set(nums[i], i);
  }
}
