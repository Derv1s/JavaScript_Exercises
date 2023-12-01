//* The sum of a range
function range(start, end, step = 1) {
    let nums = [];
    /* uzun yol - long way
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            nums.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            nums.push(i);
        }
    }
    */
    let stepCheck = (start < end) ? (i) => i <= end : (i) => i >= end
    for(let i = start; stepCheck(i); i+=step){
        nums.push(i);
    }

    return nums;
}

function sum(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//* Reversing an array
function reverseArray(arr) {
    let reversedArray = [];
    for (let item of arr) {
        reversedArray.unshift(item);
      }
    
    return reversedArray;
}

function reverseArrayInPlace(arr) {
    let len = arr.length;
    for (let i = 0; i < Math.floor(len/2); i++) {
      let swap = arr[i];
      arr[i] = arr[len-i-1];
      arr[len-i-1] = swap;
    }
    return arr;
  }

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

