import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { intersect } from "./intersect.ts";

Deno.test("intersect", () => {
    assertEquals(intersect([[1, 2, 3], [4, 5, 6]]), []);
    assertEquals(intersect([[false, true], []]), []);
    assertEquals(intersect([[""]]), [""]);

    assertEquals(intersect([[1]]), [1]);
    assertEquals(intersect([[4, 5, 6], [5, 6, 7]]), [
        5,
        6,
    ]);
    assertEquals(
        intersect([
            ["George", "Paul", "John", "Ringo", "Ringo"],
            ["Ringo"],
            ["Ringo", "John"],
        ]),
        ["Ringo"],
    );
});
