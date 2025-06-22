import type { SetType } from "../model/index.ts";

export function areArraySetsEqual<T>( A : SetType<T> , B : SetType<T>) : boolean {
    return A.every( a => {
        if( a instanceof Array){
            return  B.some( b => {
                if(b instanceof Array){
                    return areArraySetsEqual(a, b)
                }
                return false
            })
        }else {
            return B.includes(a);
        }
    }) && B.every( b => {
        if(b instanceof Array){
            return A.some( a => {
                if(a instanceof Array){
                    return areArraySetsEqual(b, a)
                }
                return false
            })
        }else {
            return A.includes(b)
        }
    })
}