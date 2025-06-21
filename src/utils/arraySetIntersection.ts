import isPartOf from "./isPartOf.ts";

export default function arraySetIntersection(a : unknown[], b: unknown[]) : unknown[] {
    return a.filter( member => isPartOf(member, b))
}