import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { fromMap } from "./fromMap.ts";

Deno.test("fromMap", () => {
    assertEquals(fromMap(new Map([])), {});

    assertEquals(
        fromMap(
            new Map([
                ["Paul", "Bass"],
                ["John", "Guitar"],
                ["George", "Guitar"],
                ["Ringo", "Drums"],
            ]),
        ),
        {
            Paul: "Bass",
            John: "Guitar",
            George: "Guitar",
            Ringo: "Drums",
        },
    );
});
