// Variable Window

// Problem Statement : Find the lenght of samallest subarray with sum >= S

const array = [3,1,5,6,1,1,10,7,6,3,6,7,4,9];
const sum = 17;
let result = smallestArrayLength(array, sum);
console.log(result);

function smallestArrayLength(array, sum){
    let windowSize = array.length;
    let windowSum = 0;
    let start = 0;


    for(let i = 0; i < array.length; i++){
        windowSum += array[i];
        while(windowSum >= sum){
            windowSize = Math.min(windowSize, (i - start + 1));
            windowSum -= array[start];
            start++;
        }
    }
    return windowSize;
}