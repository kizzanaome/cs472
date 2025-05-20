function secondLargest(numbers: number[]): number | null {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (const num of numbers) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax === -Infinity ? null : secondMax;
}

console.log(secondLargest([20, 120, 111, 215, 54, 78])); // Output: 120
