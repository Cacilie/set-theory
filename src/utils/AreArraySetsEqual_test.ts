import { assertEquals } from "@std/assert/equals";
import areArraySetsEqual from "./areArraySetsEqual.ts";

Deno.test( "[1, 2] is equal to [1,2]", () => {
    const a = [1, 2]
    const b = [1, 2]   

    assertEquals( areArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2] is equal to [2, 1]", () => {
    const a = [1, 2]
    const b = [2, 1]   

    assertEquals( areArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2 , [1]] is equal to [2, 1, [1]]", () => {
    const a = [1, 2, [1]]
    const b = [2, 1, [1]]   

    assertEquals( areArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2 , [1, [2]]] is equal to [2, 1, [1, [2]]]", () => {
    const a = [ 1, 2, [1, [2]] ]
    const b = [ 2, 1, [1, [2]] ]   

    assertEquals( areArraySetsEqual(a, b), true )
})



Deno.test( "[ [1, [2 , [3] ]], 1, 2 ]  is equal to [ 1, 2, [1, [2 , [3] ]] ]", () => {
    const a = [ [1, [2 , [3] ]], 1, 2 ] 
    const b = [ 1, 2, [1, [2 , [3] ]] ]

    assertEquals( areArraySetsEqual(a, b), true )
})


Deno.test(" [[4]] is not equal to  [ [ [4] ] ]  ", () => {
    const a = [[4]];
    const b = [ [ [4] ] ];
    assertEquals( areArraySetsEqual(a,b), false )
})


Deno.test(" [] is equal to [] ", () => {
    assertEquals( areArraySetsEqual([],[]), true )

})

Deno.test(" [] is not equal to [null] ", () => {
    assertEquals( areArraySetsEqual([],[null]), false )
})