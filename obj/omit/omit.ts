import { plainObject } from "../../types/plainObject.ts";

/**
 * # omit
 *
 * Creates an object without the passed keys.
 *
 * ## Example
 *
 * ```ts
 * obj.omit(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     [],
 * ) // { animal: 'dog', species: 'Canis lupus', age: 5 }
 * ```
 *
 * ```ts
 * obj.omit(
 *     { animal: 'dog', species: 'Canis lupus', age: 5 },
 *     ['animal'],
 * ) // { species: 'Canis lupus', age: 5 }
 * ```
 */
export function omit<const T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keys.includes(key)),
    );
}
