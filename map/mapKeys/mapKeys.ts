import { std } from "../../std/mod.ts";
import { entries } from "../entries/entries.ts";

/**
 * # mapKeys
 *
 * Map the _Map instance_ keys into a new _Map instance_.
 *
 * ## Example
 *
 * ```ts
 * map.mapKeys(
 *     new Map([
 *         ['a', 1],
 *         ['b', 'two'],
 *         ['c', true],
 *         [4, 'nada'],
 *     ]),
 *     key => `v2_${key}_test`,
 * )
 * // {
 * //     v2_a_test -> 1,
 * //     v2_b_test -> 'two',
 * //     v2_c_test -> true,
 * //     v2_4_test -> 'nada',
 * // }
 * ```
 */
export function mapKeys<K, V>(
    map: Map<K, V>,
    cb: (key: K) => K,
): Map<K, V> {
    return std.pipe(
        () => map,
        (map) => entries(map),
        (entries) =>
            entries.map(
                ([key, value]) => [cb(key), value] as const,
            ),
        (entries) => new Map(entries),
    )(undefined);
}
