import { plainObject } from "../../types/plainObject.ts";

export function omit<T>(
    obj: plainObject<T>,
    keys: readonly string[],
): plainObject<T> {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !keys.includes(key)),
    );
}
