import { once } from "../once/once.ts";
import { unique } from "../unique/unique.ts";

/**
 * # disjoint
 *
 * Returns an array with the items that appear in only one array.
 *
 * ## Example
 *
 * ```ts
 * arr.disjoint([[1, 2, 3], [1, 2, 3]]) // []
 * ```
 *
 * ```ts
 * arr.disjoint([[1]]) // [1]
 * arr.disjoint([[false, true], []]) // [false, true]
 * arr.disjoint([[4, 5, 6], [5, 6, 7]]) // [4, 7]
 * arr.disjoint([
 *     ['George', 'Paul', 'John', 'Ringo', 'George'],
 *     ['Ringo'],
 *     ['John'],
 * ]) // ['George', 'Paul']
 * ```
 */
export function disjoint<const T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => once(arrs, (arr) => arr.includes(item)),
        );
}
