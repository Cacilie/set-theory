import type { SetType } from "../model/SetType.ts";
import IsArraySetPartOf from "./isArraySetPartOf.ts";

export default function arraySetIntersection<T>(a : SetType<T>, b: SetType<T>) : SetType<T> {
    return a.filter( member => IsArraySetPartOf(member, b))
}