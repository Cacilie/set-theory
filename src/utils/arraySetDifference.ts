import type { SetType } from "../model/index.ts";
import { IsArraySetPartOf } from "./index.ts";

export function arraySetDifference<T>(A : SetType<T>, B : SetType<T>) : SetType<T>{
    return A.filter( member => {
        if(!IsArraySetPartOf(member, B)) return member;
    })
}