import array_to_set from "./utils.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("array_to_set returns set with same size as original array", () => {
    const array_set = [1, 2, [3, 4]]
    assertEquals(array_to_set(array_set).size, array_set.length)
})

Deno.test("array_to_set returns a set and defines the correct members", () => {

    const array_set = [1, 2];
    const set = array_to_set(array_set);


    assertEquals(set.has(1), true)
    assertEquals(set.has(2), true)

})


Deno.test("array_to_set correctly converts an array with null into a set", () => {
    const array_set: unknown[] = [];

    const set = array_to_set(array_set);

    assertEquals(set.size == 0, true)

})