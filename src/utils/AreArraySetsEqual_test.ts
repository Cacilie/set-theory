import { assertEquals } from "@std/assert/equals";
import AreArraySetsEqual from "./AreArraySetsEqual.ts";

Deno.test( "[1, 2] is equal to [1,2]", () => {
    const a = [1, 2]
    const b = [1, 2]   

    assertEquals( AreArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2] is equal to [2, 1]", () => {
    const a = [1, 2]
    const b = [2, 1]   

    assertEquals( AreArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2 , [1]] is equal to [2, 1, [1]]", () => {
    const a = [1, 2, [1]]
    const b = [2, 1, [1]]   

    assertEquals( AreArraySetsEqual(a, b), true )
})


Deno.test( "[1, 2 , [1, [2]]] is equal to [2, 1, [1, [2]]]", () => {
    const a = [ 1, 2, [1, [2]] ]
    const b = [ 2, 1, [1, [2]] ]   

    assertEquals( AreArraySetsEqual(a, b), true )
})



Deno.test( "[ [1, [2 , [3] ]], 1, 2 ]  is equal to [ 1, 2, [1, [2 , [3] ]] ]", () => {
    const a = [ [1, [2 , [3] ]], 1, 2 ] 
    const b = [ 1, 2, [1, [2 , [3] ]] ]

    assertEquals( AreArraySetsEqual(a, b), true )
})