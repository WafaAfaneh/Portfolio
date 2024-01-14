function findMissingNumber(nums) {
    const n = nums.length;

    // Find the actual sum of the elements
    let actualSum = 0;
    for (const num of nums) {
        actualSum += num;
    }

    // The sum of numbers from 0 to n according to math = n(n+1)/2
    let formulaSum = (n * (n+1)) / 2;

    // The result is the missing number found from the difference between the sums
    return formulaSum - actualSum;
}

// Example:
const numbersArray = [9,6,4,2,3,5,7,0,1];
const missingNumber = findMissingNumber(numbersArray);
console.log("The missing number is:", missingNumber);
