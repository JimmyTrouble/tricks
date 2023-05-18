const values = [10, 20, 30];
const sum = (nums) => nums.reduce((total, num) => total + num, 0);

const result = sum(values);

console.log(result); // Output: 60
