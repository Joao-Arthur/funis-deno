import { unique } from "../unique/unique.ts";

export function intersect<T>(
    arrs: readonly (readonly T[])[],
): readonly T[] {
    return unique(arrs.flat())
        .filter(
            (item) => arrs.every((arr) => arr.includes(item)),
        );
}
