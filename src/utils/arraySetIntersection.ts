import type { SetType } from "../model/index.ts";
import { IsArraySetPartOf } from "./index.ts";

export function arraySetIntersection<T>(a : SetType<T>, b: SetType<T>) : SetType<T> {
    return a.filter( member => IsArraySetPartOf(member, b))
}