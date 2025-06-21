import { assertArrayIncludes, assertEquals } from "@std/assert";
import { SetOperations } from "../index.ts";


Deno.test("[1, 2] and [2, 1] are equal", () => {
    const a = [1, 2]
    const b = [2, 1]

    assertEquals(SetOperations.areSetsEqual<number>(a, b), true)
})

Deno.test("[ 1, [2, 3]] and [ [3, 2], 1 ] " , () => {
    const a = [1, [2, 3]]
    const b = [[3,2] , 1]
    assertEquals(SetOperations.areSetsEqual<number | number[]>(a, b), true)
})

Deno.test("[1, 2] X [3, 4] = [ (1, 3), (1, 4), (2, 3), (2, 4) ]", () => {
    const a = [1, 2]
    const b = [3, 4]

    const product = SetOperations.cartesianProduct(a, b);

    assertEquals(product.length, 4)
    assertEquals(product[0].getFirst(), 1)
    assertEquals(product[1].getFirst(), 1)
    assertEquals(product[2].getFirst(), 2)
    assertEquals(product[2].getFirst(), 2)
})

Deno.test("[1] X [ [3, 4] ] = [(1, [3, 4])]", () => {

    const a = [1]
    const b = [ [3, 4] ]

    const product = SetOperations.cartesianProduct<number | number[]>(a, b);

    assertEquals(product.length, 1)
    assertEquals(product[0].getFirst(), 1)
    assertEquals((product[0].getSecond() as Array<number> )[0], 3)
    assertEquals((product[0].getSecond() as Array<number> )[1], 4)
})

Deno.test("[1, 2] - [2] = [1]", () => {

    const a = [1, 2]
    const b = [2]

    const difference = SetOperations.setDifference(a, b);
    assertEquals(difference.length, 1)
    assertArrayIncludes(difference, [1])
})

Deno.test("[1 ,2] - [1, 2] = [] ", () => {

    const a = [1, 2]
    const b = [1, 2]

    const difference = SetOperations.setDifference(a, b);
    assertEquals(difference.length, 0)
})

Deno.test("[1, [2]] - [2] = [1, [2]]", () => {
    const a = [1, [2]]
    const b = [2]
    const difference = SetOperations.setDifference(a, b);
    assertEquals(difference.length, 2)
    assertEquals(difference[1], [2])
    assertEquals(difference[0], 1)

})