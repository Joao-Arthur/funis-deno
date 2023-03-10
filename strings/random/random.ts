import { random as randomNum } from "../../numbers/random/random.ts";

/**
 * # strings.random
 *
 * Returns a random character of the string.
 *
 * ## Example
 *
 * ```ts
 * strings.random('') // ''
 * strings.random('a') // 'a'
 * strings.random('Rafael') // 'R' | 'a' | 'f' | 'a' | 'e' | 'l'
 * ```
 */
export function random(str: string): string {
    if (!str.length) {
        return "";
    }

    return str[randomNum(0, str.length - 1)];
}
