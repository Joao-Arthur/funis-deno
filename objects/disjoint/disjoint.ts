import { groupToArray } from "../../arrays/groupToArray/groupToArray.ts";
import { unique } from "../../arrays/unique/unique.ts";
import { self } from "../../standard/self/self.ts";
import { plainObject } from "../../types/plainObject.ts";

/**
 * # objects.disjoint
 *
 * Returns an object with the entries which the key appears in only one of them.
 *
 * ## Example
 *
 * ```ts
 * objects.disjoint([
 *     { name: 'Steve Harris', country: 'UK' },
 *     { name: 'Megadeth', foundation: 1983 },
 * ]) // { country: 'UK', foundation: 1983 }
 * ```
 */
export function disjoint(
    objs: readonly plainObject[],
): plainObject {
    const allEntries = objs
        .map((obj) => Object.entries(obj))
        .flat();
    const allEntriesObject = Object.fromEntries(allEntries);
    const uniqueKeys = unique(
        groupToArray(
            allEntries.map(([key]) => key),
            self,
        )
            .filter((group) => group.length === 1)
            .flat(),
    );

    return Object.fromEntries(
        uniqueKeys.map((key) => [key, allEntriesObject[key]]),
    );
}
