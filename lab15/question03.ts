function sumAll(...nums: number[]): number {
    return nums.reduce((sum, curr) => sum + curr, 0);
}
