import { std } from "../../std/mod.ts";
import { plainObject } from "../../types/plainObject.ts";

/**
 * # mapKeys
 *
 * Map the object keys into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapKeys(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     key => `v2_${key}_test`,
 * )
 * // {
 * //     v2_a_test: 1,
 * //     v2_b_test: 'two',
 * //     v2_c_test: true,
 * //     v2_4_test: 'nada',
 * // }
 * ```
 */
export function mapKeys(
    obj: plainObject,
    cb: (key: string | number) => string | number,
): plainObject {
    return std.pipe(
        () => obj,
        Object.entries,
        (entries) => entries.map(([key, value]) => [cb(key), value]),
        Object.fromEntries,
    )(undefined);
}
