import { assertEquals } from "std/assert/assert_equals.ts";
import { pascalCase } from "./pascalCase.ts";

Deno.test("pascalCase", () => {
    assertEquals(pascalCase(""), "");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("hey"), "Hey");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("j S o N"), "JSON");
    assertEquals(pascalCase("j_S_o_N"), "JSON");
    assertEquals(pascalCase("j-S-o-N"), "JSON");
});

Deno.test("pascalCase", () => {
    assertEquals(pascalCase("hey Jo3"), "HeyJo3");
    assertEquals(pascalCase("hey_Jo3"), "HeyJo3");
    assertEquals(pascalCase("hey-Jo3"), "HeyJo3");
});
