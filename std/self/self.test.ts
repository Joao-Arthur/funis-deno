import { assertEquals } from "std/assert/assert_equals.ts";
import { self } from "./self.ts";

Deno.test("self", () => {
    const symbol = Symbol("symbol");

    assertEquals(self(1), 1);
    assertEquals(self("hello world"), "hello world");
    assertEquals(self(true), true);
    assertEquals(self({ a: "a" }), { a: "a" });
    assertEquals(self([3, 2, 1]), [3, 2, 1]);
    assertEquals(self(symbol), symbol);
});
