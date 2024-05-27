/**
 * 
 * @param n take a number for to generate sequence for n
 * @returns "A" | "B" ... "AA" | "AB" | "ZZ"
 */
export const generateSequence = (n: number): string => {
    let result = '';
    while (n > 0) {
        n--; // Adjust for zero-based index
        const remainder = n % 26;
        result = String.fromCharCode(65 + remainder) + result; // Convert remainder to corresponding letter
        n = Math.floor(n / 26); // Move to the next 'digit'
    }
    return result;
}

// Example usage:
// console.log(generateSequence(1));  // Output: A
// console.log(generateSequence(26)); // Output: Z
// console.log(generateSequence(27)); // Output: AA
// console.log(generateSequence(28)); // Output: AB
// console.log(generateSequence(52)); // Output: AZ
// console.log(generateSequence(53)); // Output: BA
// console.log(generateSequence(701)); // Output: ZY
// console.log(generateSequence(702)); // Output: ZZ
// console.log(generateSequence(703)); // Output: AAA