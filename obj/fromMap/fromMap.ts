import { entries } from "../../map/entries/entries.ts";
import { plainObject } from "../../types/plainObject.ts";

/**
 * # fromMap
 *
 * Returns an object with the same key-value pairs of the passed Map instance.
 *
 * ## Example
 *
 * ```ts
 * obj.fromMap(new Map([])) // { }
 * ```
 *
 * ```ts
 * obj.fromMap(
 *     new Map([
 *         ['Paul', 'Bass'],
 *         ['John', 'Guitar'],
 *         ['George', 'Guitar'],
 *         ['Ringo', 'Drums'],
 *     ])
 * )
 * // {
 * //     Paul: 'Bass',
 * //     John: 'Guitar',
 * //     George: 'Guitar',
 * //     Ringo: 'Drums',
 * // }
 * ```
 */
export function fromMap<const T>(
    map: Map<string | number, T>,
): plainObject<T> {
    return Object.fromEntries(entries(map));
}
