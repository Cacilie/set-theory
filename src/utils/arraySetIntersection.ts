import type { SetType } from "../model/SetType.ts";
import isPartOf from "./isPartOf.ts";

export default function arraySetIntersection<T>(a : SetType<T>, b: SetType<T>) : SetType<T> {
    return a.filter( member => isPartOf(member, b))
}