import {
    assertEquals,
    assertRejects,
} from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { retry } from "./retry.ts";

Deno.test("retry", async () => {
    assertEquals(
        await retry(() => Promise.reject("Donatello"), 0),
        undefined,
    );

    let i = 1;
    assertEquals(
        await retry(() => {
            i++;
            if (i === 5) {
                return Promise.resolve("Ludwig van Beethoven");
            } else {
                return Promise.reject("Johann Sebastian Bach");
            }
        }, 10),
        "Ludwig van Beethoven",
    );

    try {
        await assertRejects(
            () => retry(() => Promise.reject("Donatello"), 5),
        );
    } catch (e) {
        assertEquals(e, "Donatello");
    }
});
