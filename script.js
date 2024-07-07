// Function to find the highest and lowest numbers in an array
function findHighLow(numbers) {
  if (numbers.length === 0) {
    console.log("Array is empty");
    return;
  }

  let highest = numbers[0];
  let lowest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }

  console.log("Highest number:", highest);
  console.log("Lowest number:", lowest);
}

// Example usage
const array = [3, 5, 7, 2, 8, -1, 4, 10, 12, -5];
findHighLow(array);
