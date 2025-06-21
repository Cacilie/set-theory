import type { SetType } from "../model/SetType.ts";
import isPartOf from "./isPartOf.ts";

export default function arraySetDifference<T>(A : SetType<T>, B : SetType<T>) : SetType<T>{
    return A.filter( member => {
        if(!isPartOf(member, B)) return member;
    })
}