import isPartOf from "./isPartOf.ts";

export default function arraySetUnion(a: unknown[], b: unknown[]){

    const meta_union = [...a, ...b]
    const union : unknown[] = [];

    meta_union.forEach( member => {
        if(!isPartOf(member, union)){
            union.push(member)
        }
    })

    return union
}