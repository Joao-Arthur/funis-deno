import { assertEquals } from "std/assert/assert_equals.ts";
import { intersect } from "./intersect.ts";

Deno.test("intersect", () => {
    assertEquals(intersect([]), {});
});

Deno.test("intersect", () => {
    assertEquals(
        intersect([{ name: "Steve Harris", country: "UK" }]),
        { name: "Steve Harris", country: "UK" },
    );
});

Deno.test("intersect", () => {
    assertEquals(
        intersect(
            [
                {
                    name: "Cliff Burton",
                    band: "Metallica",
                    country: "US",
                },
                {
                    name: "James Hetfield",
                    band: "Metallica",
                    country: "US",
                },
                {
                    name: "Kirk Hammett",
                    band: "Metallica",
                    country: "US",
                },
            ],
        ),
        { band: "Metallica", country: "US" },
    );
});
