import { assertArrayIncludes } from "@std/assert/array-includes";
import { assertEquals } from "@std/assert/equals";
import { arraySetUnion } from "./index.ts";

Deno.test("[1 ,2] U [3, 4] = [1, 2 ,3, 4]", () => {
    const a = [1, 2]
    const b = [3, 4]

    
    const aUnionb = arraySetUnion(a, b)
    assertArrayIncludes(aUnionb, [1, 2, 3, 4])
})


Deno.test("[1 ,2] U [2, 3] = [1, 2 ,3, ]", () => {
    const a = [1, 2]
    const b = [2, 3]

    
    const aUnionb = arraySetUnion(a, b)
    assertArrayIncludes(aUnionb, [1, 2, 3])
    assertEquals(aUnionb.length, 3)
})

Deno.test("[1, 2, [3, 4]] U [[3, 4]] = [1, 2, [3, 4]]", () => {
    const a = [1, 2, [3, 4]]
    const b = [[3, 4]]

    const aUnionb = arraySetUnion(a, b)

    assertArrayIncludes(aUnionb, [1, 2])
    assertArrayIncludes(aUnionb[2] as Array<number>, [3, 4])
    assertEquals(aUnionb.length, 3)
})