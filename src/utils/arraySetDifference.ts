import type { SetType } from "../model/SetType.ts";
import IsArraySetPartOf from "./isArraySetPartOf.ts";

export default function arraySetDifference<T>(A : SetType<T>, B : SetType<T>) : SetType<T>{
    return A.filter( member => {
        if(!IsArraySetPartOf(member, B)) return member;
    })
}