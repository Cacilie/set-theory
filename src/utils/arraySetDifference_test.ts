import { assertArrayIncludes } from "@std/assert/array-includes";
import { assertEquals } from "@std/assert/equals";
import arraySetDifference from "./arraySetDifference.ts";

Deno.test( "[1, 2] - [2] = [1]", () =>  {
    assertArrayIncludes(arraySetDifference([1, 2], [2]), [1])
})


Deno.test( "[1, [2]] - [2] = [1, [2]]", () =>  {
    const difference = arraySetDifference([1, [2]], [2])
    assertEquals(difference.length, 2)
    assertEquals(difference[1], [2])
    assertEquals(difference[0], 1)
})

Deno.test(" [1 ,2] - [1, 2] = [] ", () => {
    const difference = arraySetDifference([1, 2], [1, 2])
    assertEquals(difference.length, 0)

})