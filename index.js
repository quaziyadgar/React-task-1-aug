// Create an array and calculate the sum of that array and console it.

const arr = [45,23,4,7,2,1,6,6,9];
console.log(arr);
let sum = 0;
for(let i of arr)
{
    sum += i;
}
console.log("sum of array = ",sum);

// Create another array and console the largest number from that array.

let max = arr[0];
for(let i of arr)
{
    if(max < i)
    max = i;
}
console.log("Max element in array = ",max);