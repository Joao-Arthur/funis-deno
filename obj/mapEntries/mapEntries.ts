import { std } from "../../std/mod.ts";
import { plainObject } from "../../types/plainObject.ts";

/**
 * # mapEntries
 *
 * Map the object entries into an object.
 *
 * ## Example
 *
 * ```ts
 * obj.mapEntries(
 *     {
 *         a: 1,
 *         b: 'two',
 *         c: true,
 *         4: 'nada',
 *     },
 *     ([key, value]) => [`key_${key}`, `value_${value}`],
 * )
 * // {
 * //     key_a: 'value_1',
 * //     key_b: 'value_two',
 * //     key_c: 'value_true',
 * //     key_4: 'value_nada',
 * // }
 * ```
 */
export function mapEntries(
    obj: plainObject,
    cb: (
        entry: readonly [string | number, unknown],
    ) => readonly [string | number, unknown],
): plainObject {
    return std.pipe(
        () => obj,
        (obj: plainObject) => Object.entries(obj),
        (entries) => entries.map(cb),
        Object.fromEntries,
    )(undefined);
}
