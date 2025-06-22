import type { SetType } from "../model/index.ts";
import { IsArraySetPartOf } from "./index.ts";

export function arraySetUnion<T>(a: SetType<T>, b: SetType<T>){

    const meta_union = [...a, ...b]
    const union : SetType<T> = [];

    meta_union.forEach( member => {
        if(!IsArraySetPartOf(member, union)){
            union.push(member)
        }
    })

    return union
}