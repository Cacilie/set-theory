import { assertEquals, assertInstanceOf } from "@std/assert";

import powerSet from './powerSet.ts'

Deno.test("powerSet function returns a set", () => {
    const setA = new Set(['A', 'B']);
    assertInstanceOf(powerSet(setA), Set);
})

Deno.test("powerSet returns a set with at least 2 elements, the empty set and the set itself", () => {
    const setA = new Set();
    setA.add("A")
    setA.add("B")

    const p_of_a = powerSet(setA);


    assertEquals(p_of_a.size >= 2, true);
    
})

Deno.test("powerSet returns a set with at least n + 2 elements, where n is the cardinality of the set", () => {
    const setA = new Set(['A', 'B']);
    const p_of_a = powerSet(setA);
    assertEquals(p_of_a.size >= 2 + setA.size, true);
})

Deno.test("power set returns a set with at least the triangle number of n for subsets with cardinality equal to two", () =>{
    const triangle_number = (n: number) => ((n**2)+2)/2

    const setB = new Set(['A', 'B', 'C', 'D']);
    const p_of_b = powerSet(setB);

    assertEquals(p_of_b.size >= triangle_number(setB.size - 1), true)

})

Deno.test("power set returns a set which cardinality is at least the triangle number of (n-1) + n + 2", () => {
    const triangle_number = (n: number) => ((n**2)+2)/2

    const setB = new Set(['A', 'B', 'C', 'D']);
    const p_of_b = powerSet(setB);

    assertEquals(p_of_b.size >= triangle_number(setB.size-1) + 2 + setB.size, true)
})

