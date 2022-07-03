/**
 * 
 * @param number to convert to its string representation
 * @returns a string representatiosn of a the number in base 26
 */
export function numberToString(number: Number, base: number) {
    const exponents = number.toString(base)
    return exponents
        .split('')
        .map(elem => parseInt(elem, base))
        .map(elem => (elem + 10).toString(36))
        .join('')
}

