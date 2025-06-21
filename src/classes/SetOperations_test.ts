import { assertEquals } from "@std/assert";
import { SetOperations } from "../index.ts";


Deno.test("[1, 2] and [2, 1] are equal", () => {
    const a = [1, 2]
    const b = [2, 1]

    assertEquals(SetOperations.areSetsEqual(a, b), true)
})

Deno.test("[ 1, [2, 3]] and [ [3, 2], 1 ] " , () => {
    const a = [1, [2, 3]]
    const b = [[3,2] , 1]
    assertEquals(SetOperations.areSetsEqual(a, b), true)
})