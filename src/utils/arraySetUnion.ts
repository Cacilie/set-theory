import type { SetType } from "../model/SetType.ts";
import isPartOf from "./isArraySetPartOf.ts";

export default function arraySetUnion<T>(a: SetType<T>, b: SetType<T>){

    const meta_union = [...a, ...b]
    const union : SetType<T> = [];

    meta_union.forEach( member => {
        if(!isPartOf(member, union)){
            union.push(member)
        }
    })

    return union
}