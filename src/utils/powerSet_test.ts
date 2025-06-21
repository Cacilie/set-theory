import { assertEquals, assertInstanceOf } from "@std/assert";

import powerSet from './powerSet.ts'

Deno.test("powerSet function returns a set", () => {
    const setA = ['A', 'B'];
    assertInstanceOf(powerSet(setA), Array);
})

Deno.test("powerSet returns a set with at least 2 elements, the empty set and the set itself", () => {
    const setA = ["A", "B"]

    const p_of_a = powerSet(setA);


    assertEquals(p_of_a.length >= 2, true);
    
})

Deno.test("powerSet returns a set with at least n + 2 elements, where n is the cardinality of the set", () => {
    const setA = ['A', 'B'];
    const p_of_a = powerSet(setA);
    assertEquals(p_of_a.length >= 2 + setA.length, true);
})

Deno.test("power set returns a set with at least the triangle number of n for subsets with cardinality equal to two", () =>{
    const triangle_number = (n: number) => ((n**2)+2)/2

    const setB = ['A', 'B', 'C', 'D'];
    const p_of_b = powerSet(setB);

    assertEquals(p_of_b.length >= triangle_number(setB.length - 1), true)

})

Deno.test("power set returns a set which cardinality is at least the triangle number of (n-1) + n + 2", () => {
    const triangle_number = (n: number) => ((n**2)+2)/2

    const setB = ['A', 'B', 'C', 'D'];
    const p_of_b = powerSet(setB);

    assertEquals(p_of_b.length >= triangle_number(setB.length-1) + 2 + setB.length, true)
})

