import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { disjoint } from "./disjoint.ts";

Deno.test("disjoint", () => {
    assertEquals(disjoint([]), {});

    assertEquals(
        disjoint([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );

    assertEquals(
        disjoint(
            [
                { name: "Steve Harris", country: "UK" },
                { name: "Megadeth", foundation: 1983 },
            ],
        ),
        { country: "UK", foundation: 1983 },
    );
});
