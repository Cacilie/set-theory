import { assertExists } from "@std/assert/exists";
import { assertInstanceOf } from "@std/assert/instance-of";
import { assertEquals } from "@std/assert/equals";
import { OrderedPair } from "../classes/index.ts";
import { arraySetCartesianProduct } from "./index.ts";


Deno.test("the cartesian product of  [1, 2] X [3, 4] is [ (1, 3), (1, 4), (2, 3), (2, 4) ]", () => {
    const a = [ 1, 2 ]
    const b = [ 3, 4 ]

    const cartesianProduct = arraySetCartesianProduct(a, b)
    assertExists(cartesianProduct)
    assertInstanceOf(cartesianProduct[0], OrderedPair)

    assertEquals(cartesianProduct[0].getFirst(), 1)
    assertEquals(cartesianProduct[0].getSecond(), 3)

    assertEquals(cartesianProduct[1].getFirst(), 1)
    assertEquals(cartesianProduct[1].getSecond(), 4)

    assertEquals(cartesianProduct[2].getFirst(), 2)
    assertEquals(cartesianProduct[2].getSecond(), 3)

    assertEquals(cartesianProduct[3].getFirst(), 2)
    assertEquals(cartesianProduct[3].getSecond(), 4)

})

Deno.test("the cartesian product of  [1, [2, 5] ] X [3, 4] is [ (1, 3), (1, 4), ( [2, 5], 3), ([2, 5], 4) ]", () => {
    const a = [ 1, [2, 5] ]
    const b = [ 3, 4 ]

    const cartesianProduct = arraySetCartesianProduct(a, b)
    assertExists(cartesianProduct)
    assertInstanceOf(cartesianProduct[0], OrderedPair)

    assertEquals(cartesianProduct[0].getFirst(), 1)
    assertEquals(cartesianProduct[0].getSecond(), 3)

    assertEquals(cartesianProduct[1].getFirst(), 1)
    assertEquals(cartesianProduct[1].getSecond(), 4)


    const thirdPair : OrderedPair<number | number[]> = cartesianProduct[2]
    assertEquals((thirdPair.getFirst() as number[] )[0], 2)
    assertEquals((thirdPair.getFirst() as number[])[1], 5)
    assertEquals(thirdPair.getSecond(), 3)


    const fourthPair : OrderedPair<number | number[]> = cartesianProduct[3]
    assertEquals((fourthPair.getFirst() as number[])[0], 2)
    assertEquals((fourthPair.getFirst() as number[])[1], 5)
    assertEquals(fourthPair.getSecond(), 4)


})