import type { SetType } from "../model/index.ts";
import { areArraySetsEqual, arraySetCartesianProduct, arraySetDifference, arraySetIntersection, arraySetUnion, IsArraySetPartOf, powerSet } from "../utils/index.ts";
import type { OrderedPair } from "./index.ts";


export abstract class SetOperations {

    /**
     * Checks if two sets are equal. Sets are considered equal if they contain the exact same elements, regardless of order.
     * @param a The first set.
     * @param b The second set.
     * @returns `true` if the sets are equal, `false` otherwise.
     */
    static areSetsEqual<T>(a: SetType<T>, b : SetType<T>) : boolean {
        return areArraySetsEqual(a ,b)
    }

    /**
     * Computes the Cartesian product of two sets (A × B).
     * @param a The first set.
     * @param b The second set.
     * @returns An array of `OrderedPair` instances representing the Cartesian product.
     */
    static cartesianProduct<T>(a: SetType<T>, b : SetType<T>): OrderedPair<T>[] {
        return arraySetCartesianProduct<T>(a, b)
    }

    /**
     * Computes the difference between two sets (A - B), returning elements that are in set A but not in set B.
     * @param a The set to subtract from.
     * @param b The set whose elements will be removed from set A.
     * @returns A new set representing the difference.
     */
    static setDifference<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetDifference<T>(a, b);
    }

    /**
     * Computes the intersection of two sets, returning elements that are present in both sets.
     * @param a The first set.
     * @param b The second set.
     * @returns A new set containing the common elements.
     */
    static setIntersection<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetIntersection<T>(a, b)
    }

    /**
     * Computes the union of two sets, returning a new set with all unique elements from both sets.
     * @param a The first set.
     * @param b The second set.
     * @returns A new set representing the union.
     */
    static setUnion<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetUnion<T>(a, b);
    }

    /**
     * Checks if an element or a subset is a member of a given set.
     * @param a The element or subset to check for membership.
     * @param b The set to check within.
     * @returns `true` if `a` is a member of `b`, `false` otherwise.
     */
    static isSetPartOf<T>(a : T | SetType<T>, b: SetType<T>) : boolean {
        return IsArraySetPartOf(a, b)
    }

    /**
     * Computes the power set of a given set. The power set is the set of all possible subsets, including the empty set and the set itself.
     * @param a The input set.
     * @returns A new set containing all subsets of `a`.
     */
    static powerSet<T>(a: SetType<T>) : SetType<T[]>{
        return powerSet(a)
    }
}