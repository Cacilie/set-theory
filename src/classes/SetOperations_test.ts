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

Deno.test(" [1] intersection [1, 2] = [1] ", () => {
    const a = [1];
    const b = [1, 2];

    const intersection = SetOperations.setIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 1)

})



Deno.test(" [1, [2]] intersection [1, 2] = [1] ", () => {
    const a = [1, [2]];
    const b = [1, 2];

    const intersection = SetOperations.setIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 1)
})


Deno.test(" [1, [2, 4]] intersection [1, [4 , 2]] = [1, [2, 4]] ", () => {
    const a = [1, [2, 4]];
    const b = [1, [4, 2]];

    const intersection = SetOperations.setIntersection(a, b)
    assertArrayIncludes(intersection, [1])
    assertEquals(intersection.length, 2)
    assertArrayIncludes(intersection[1] as Array<number>, [2 , 4])

})


Deno.test("[1 ,2] U [2, 3] = [1, 2 ,3, ]", () => {
    const a = [1, 2]
    const b = [2, 3]

    
    const aUnionb = SetOperations.setUnion(a, b)
    assertArrayIncludes(aUnionb, [1, 2, 3])
    assertEquals(aUnionb.length, 3)
})

Deno.test("[1, 2, [3, 4]] U [[3, 4]] = [1, 2, [3, 4]]", () => {
    const a = [1, 2, [3, 4]]
    const b = [[3, 4]]

    const aUnionb = SetOperations.setUnion(a, b)

    assertArrayIncludes(aUnionb, [1, 2])
    assertArrayIncludes(aUnionb[2] as Array<number>, [3, 4])
    assertEquals(aUnionb.length, 3)
})


Deno.test( " 1 is part of [1, 2]", () => {
    assertEquals(SetOperations.isSetPartOf(1, [1, 2]), true);
})

Deno.test( " 3 is not part of [1, 2]", () => {
    assertEquals(SetOperations.isSetPartOf(3, [1, 2]), false);
})



Deno.test( " [1] is part of [1, 2, [1]]", () => {
    assertEquals(SetOperations.isSetPartOf([1], [1, 2, [1]]), true);
})


Deno.test( " [4] is not part of [1, 2, [1]]", () => {
    assertEquals(SetOperations.isSetPartOf([4], [1, 2, [1]]), false);
})


Deno.test( " [4] is not part of [1, 2, [1, [4] ]]", () => {
    assertEquals(SetOperations.isSetPartOf([4], [1, 2, [1, [4]  ]]), false);
})


Deno.test("power set returns a set with at least the triangle number of n for subsets with cardinality equal to two", () =>{
    const triangle_number = (n: number) => ((n**2)+2)/2

    const setB = ['A', 'B', 'C', 'D'];
    const p_of_b =  SetOperations.powerSet(setB);

    assertEquals(p_of_b.length >= triangle_number(setB.length - 1), true)

})