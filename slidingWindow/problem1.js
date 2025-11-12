// Fixed Size Window Problem

//Problem Statement: Given an array of integers of size n, find the maximum sum of k consecutive elements.

const array = [3,1,5,6,1,1,10,7,6,3,6,7,4,9];
const windowSize = 3;
let result = maxSumOfInterger(array, windowSize);
console.log(result);

function maxSumOfInterger(array, windowSize){
    let maxSum = 0;
    let windowSum = 0;
    let start = 0;

    for(let i = 0; i < array.length; i++){
        windowSum += array[i];
        if(i >= (windowSize - 1)){
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= array[start];
            start++;
        }
    }
    return maxSum;
}