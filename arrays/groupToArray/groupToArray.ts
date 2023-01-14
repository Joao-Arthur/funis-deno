import { groupToEntries } from "../groupToEntries/groupToEntries.ts";

export function groupToArray<K, V>(
    arr: readonly V[],
    cb: (item: V) => K,
): readonly (readonly V[])[] {
    return groupToEntries(arr, cb).map(([, value]) => value);
}
