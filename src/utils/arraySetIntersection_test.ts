import { assertArrayIncludes } from "@std/assert/array-includes";
import arraySetIntersection from "./arraySetIntersection.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test(" [1] intersection [1, 2] = [1] ", () => {
    const a = [1];
    const b = [1, 2];

    const intersection = arraySetIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 1)

})



Deno.test(" [1, [2]] intersection [1, 2] = [1] ", () => {
    const a = [1, [2]];
    const b = [1, 2];

    const intersection = arraySetIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 1)
})


Deno.test(" [1, [2, 4]] intersection [1, [4 , 2]] = [1, [2, 4]] ", () => {
    const a = [1, [2, 4]];
    const b = [1, [4, 2]];

    const intersection = arraySetIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 2)
    assertArrayIncludes(intersection[1] as Array<unknown>, [2 , 4])

})