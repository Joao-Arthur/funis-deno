import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { once } from "./once.ts";

Deno.test("once", () => {
    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item === "Roses",
        ),
        false,
    );
    assertEquals(once([5, 3, 1], (item) => item < 0), false);

    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) => item === "Buckethead",
        ),
        true,
    );
    assertEquals(once([5, 3, 1], (item) => item > 4), true);

    assertEquals(
        once(
            ["Axl", "Slash", "Duff", "Buckethead"],
            (item) =>
                [
                    "Axl",
                    "Slash",
                    "Duff",
                    "Buckethead",
                ].includes(item),
        ),
        false,
    );
    assertEquals(once([5, 3, 1], (item) => item > 0), false);
});
