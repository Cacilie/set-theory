import { assertEquals, assertInstanceOf } from "@std/assert";


import SetOf from "./SetOf.ts";

Deno.test("Create SetOf instance", () => {
    const setA = new SetOf(['A', 'B']);
    assertInstanceOf(setA, SetOf);
})


Deno.test("Returns value of the set in an instance of Set", () => {
    const setA = new SetOf(['A', 'B']);
    assertInstanceOf(setA.getValue(), Set);
    assertEquals(setA.getValue().size, 2)
})

