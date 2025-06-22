import { assertArrayIncludes } from "@std/assert/array-includes";
import { assertEquals } from "@std/assert/equals";
import { assertInstanceOf } from "@std/assert";
import { arrayToSet, setToArray } from "./index.ts";

Deno.test("arrayToSet returns set with same size as original array", () => {
    const array_set = [1, 2, [3, 4]]
    assertEquals(arrayToSet(array_set).size, array_set.length)
})

Deno.test("arrayToSet returns set rank 3 with same size as original array and correctly transofmed", () => {
    
    type numbersArray = number | Array<number> | Array<number | number[] > 
    const array_set : Array<numbersArray> = [1, 2, [3, [4, 5] ] ]

    type numbersSet = Set<number> | Set< number |  Set<number> >

    const set = arrayToSet<numbersArray , numbersSet>(array_set)
    console.log(set)
    let lastElement;

    for(lastElement of set);
    

    assertEquals(set.size, array_set.length)
    assertEquals((lastElement as Set<number>).size, 2)
    assertEquals((lastElement as  Set<number>).values().next().value, 3)


})


Deno.test("arrayToSet returns a set and defines the correct members", () => {

    const array_set = [1, 2];
    const set = arrayToSet(array_set);


    assertEquals(set.has(1), true)
    assertEquals(set.has(2), true)

})


Deno.test("arrayToSet correctly converts an array with null into a set", () => {
    const array_set: [] = [];

    const set = arrayToSet(array_set);

    assertEquals(set.size == 0, true)

})

Deno.test("Set(2) {1, 2} gets transform into [1, 2]", () => {
    const set = new Set([1, 2])
    const arraySet = setToArray(set)
    assertArrayIncludes(arraySet, [1, 2])
})


Deno.test("Set(2) {1, 2, Set(2) {3, 4}  } gets transform into [1, 2, [3, 4]]", () => {
    const set : Set<number | Set<number>> = new Set([1, 2])
    const subSet = new Set([3, 4])
    set.add(subSet)
    const array_set = setToArray(set)

    assertArrayIncludes(array_set, [1, 2])
    assertInstanceOf(array_set[2], Array)
    assertArrayIncludes(array_set[2], [3, 4])
})


Deno.test("Set(2) {1, 2, Set(2) {3, Set(1){5} }  } gets transform into [1, 2, [3, 4, [5]]]", () => {
    const set : Set<number | Set<number> | Set<number | Set<number> > > = new Set([1, 2])
    const subSet  : Set<number | Set<number> >  = new Set([3, 4])
    const thirdSet : Set<number> = new Set([5])
    subSet.add(thirdSet)
    set.add(subSet)
    const array_set = setToArray(set)

    assertArrayIncludes(array_set, [1, 2])
    assertInstanceOf(array_set[2], Array)
    assertArrayIncludes(array_set[2], [3, 4])
    assertArrayIncludes(array_set[2][2] as Array<number>, [5])
})
