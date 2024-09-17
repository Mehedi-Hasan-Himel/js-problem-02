const heights = [65, 66, 72, 78, 60, 65];

function getMax(numbers) {
  let max = numbers[0];

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

const max = getMax(heights);
console.log("Max value is: ", max);
