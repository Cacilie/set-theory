import isPartOf from "./isPartOf.ts";

export default function arraySetDifference(A : Array<unknown>, B : Array<unknown>) : Array<unknown>{
    return A.filter( member => {
        if(!isPartOf(member, B)) return member;
    })
}