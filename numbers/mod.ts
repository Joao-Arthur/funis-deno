import { clamp } from "./clamp/clamp.ts";
import { parse } from "./parse/parse.ts";
import { range } from "./range/range.ts";
import { isValid } from "./isValid/isValid.ts";
import { random } from "./random/random.ts";
import { compareAsc } from "./compareAsc/compareAsc.ts";
import { compareDesc } from "./compareDesc/compareDesc.ts";

export const numbers = {
    clamp,
    parse,
    range,
    isValid,
    random,
    compareAsc,
    compareDesc,
} as const;
