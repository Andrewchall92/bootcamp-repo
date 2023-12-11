// largest-sum
// set variable to hold largest sum
// iterate through array and add the first two numbers and set that value to the variable for largest sum
// iterate through array and add the next two numbers and compare that value to the variable for largest sum
// if the sum is larger, set that value to the variable for largest sum
// return the variable for largest sum
function largestSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentSum = arr[i] + arr[i+1];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}