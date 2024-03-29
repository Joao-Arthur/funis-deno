import { assertEquals } from "std/assert/assert_equals.ts";
import { disjoint } from "./disjoint.ts";

Deno.test("disjoint", () => {
    assertEquals(disjoint([]), {});
});

Deno.test("disjoint", () => {
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
