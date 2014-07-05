function sum(nums) {
  sum = 0;
  for (var i = 2; i <  nums.length; i++) {
    sum += Number(nums[i]);
  }
  
  return sum;
}

if (require.main === module) {
  console.log(sum(process.argv));
}