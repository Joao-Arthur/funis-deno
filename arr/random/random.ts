import { random as randomNum } from "../../num/random/random.ts";

/**
 * # random
 *
 * Returns a random character of the array.
 *
 * ## Example
 *
 * ```ts
 * arrays.random([]) // undefined
 * ```
 *
 * ```ts
 * arrays.random([true]) // [true]
 * arrays.random(false, 0, 'n') // false | 0 | 'n'
 * ```
 */
export function random<const T>(arr: readonly T[]): T | undefined {
    return arr[randomNum(0, arr.length - 1)];
}