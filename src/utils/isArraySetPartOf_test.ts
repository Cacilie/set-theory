import { assertEquals } from "@std/assert/equals";
import IsArraySetPartOf from "./isArraySetPartOf.ts";

Deno.test( " 1 is part of [1, 2]", () => {
    assertEquals(IsArraySetPartOf(1, [1, 2]), true);
})

Deno.test( " 3 is not part of [1, 2]", () => {
    assertEquals(IsArraySetPartOf(3, [1, 2]), false);
})



Deno.test( " [1] is part of [1, 2, [1]]", () => {
    assertEquals(IsArraySetPartOf([1], [1, 2, [1]]), true);
})


Deno.test( " [4] is not part of [1, 2, [1]]", () => {
    assertEquals(IsArraySetPartOf([4], [1, 2, [1]]), false);
})


Deno.test( " [4] is not part of [1, 2, [1, [4] ]]", () => {
    assertEquals(IsArraySetPartOf([4], [1, 2, [1, [4]  ]]), false);
})


