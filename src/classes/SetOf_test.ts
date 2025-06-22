import { assertArrayIncludes, assertEquals, assertExists, assertInstanceOf } from "@std/assert";
import { OrderedPair, SetOf } from "./index.ts";



Deno.test("Create SetOf instance", () => {
    const setA = new SetOf(['A', 'B']);
    assertInstanceOf(setA, SetOf);
})


Deno.test("Returns value of the set in an instance of Set", () => {
    const setA = new SetOf(['A', 'B']);
    assertInstanceOf(setA.getValue(), Array);
    assertEquals(setA.getValue().length, 2)
})

Deno.test("statement [1 , 2] is equal to [2, 1] is true", () => {
    const p = new SetOf([1, 2]).isEqualTo(new SetOf([2, 1]));
    assertEquals(p, true)
})

Deno.test("Statememt [1, 2] is equal to [A, B] is false", () => {
    const p = new SetOf<unknown>([1, 2]).isEqualTo(new SetOf<unknown>(["A", "B"]));
    assertEquals(p, false)
})


Deno.test("statement [1 , 2, [4, 3]] is equal to [2, 1, [3, 4]] is true", () => {
    const p = new SetOf([1, 2, [4, 3]]).isEqualTo(new SetOf([2, 1, [3, 4]]));
    assertEquals(p, true)
})


Deno.test("the cartesian product of  [1, [2, 5] ] X [3, 4] is [ (1, 3), (1, 4), ( [2, 5], 3), ([2, 5], 4) ]", () => {
    const a = [ 1, [2, 5] ]
    const b = [ 3, 4 ]

    const cartesianProduct = new SetOf(a).cartesianProduct(new SetOf(b)).getValue()
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


Deno.test( "[1, [2]] - [2] = [1, [2]]", () =>  {
    const difference = new SetOf([1, [2]]).difference(new SetOf([2])).getValue()
    assertEquals(difference.length, 2)
    assertEquals(difference[1], [2])
    assertEquals(difference[0], 1)
})

Deno.test(" [1 ,2] - [1, 2] = [] ", () => {
    const difference = new SetOf([1, 2]).difference(new SetOf([1, 2])).getValue()
    assertEquals(difference.length, 0)

})

Deno.test(" [1, [2]] intersection [1, 2] = [1] ", () => {
    const a = [1, [2]];
    const b = [1, 2];

    const intersection = new SetOf(a).intersection(new SetOf(b)).getValue()
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 1)
})

Deno.test("[1, 2, [3, 4]] U [[3, 4]] = [1, 2, [3, 4]]", () => {
    const a = [1, 2, [3, 4]]
    const b = [[3, 4]]

    const aUnionb = new SetOf(a).union(new SetOf(b)).getValue()

    assertArrayIncludes(aUnionb, [1, 2])
    assertArrayIncludes(aUnionb[2] as Array<number>, [3, 4])
    assertEquals(aUnionb.length, 3)
})


Deno.test( " [4] is not part of [1, 2, [1, [4] ]]", () => {
    const a = [4]
    const b = [1, 2, [1, [4]  ]]

    const p = new SetOf<unknown>(a).isPartOf(new SetOf(b))

    assertEquals(p, false);
})

Deno.test("V = [A, B, C, C]; P(V) is correct ", () => {
    const setB = new SetOf(['A', 'B', 'C', 'D']);

    const p_of_b = setB.powerSet().getValue()

    assertEquals(p_of_b[0].length, 0)
    const elementOfSize1 = p_of_b.filter( (member) => member.length === 1)
    assertEquals(elementOfSize1.length, 4)

    const elementOfSize2 = p_of_b.filter( (member) => member.length === 2)
    assertEquals(elementOfSize2.length, 6)

    const elementOfSize3 = p_of_b.filter( (member) => member.length === 3)
    assertEquals(elementOfSize3.length, 4)
})


Deno.test("[1, 2, 3, 4] cardinality is 4", () => {
    const cardinality = new SetOf([1, 2, 3, 4]).cardinality

    assertEquals(cardinality, 4)
})
