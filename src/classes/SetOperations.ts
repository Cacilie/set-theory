import type { SetType } from "../model/SetType.ts";
import areArraySetsEqual from "../utils/areArraySetsEqual.ts";
import arraySetCartesianProduct from "../utils/arraySetCartesianProduct.ts";
import arraySetDifference from "../utils/arraySetDifference.ts";
import arraySetIntersection from "../utils/arraySetIntersection.ts";
import arraySetUnion from "../utils/arraySetUnion.ts";
import isPartOf from "../utils/isPartOf.ts";
import powerSet from "../utils/powerSet.ts";
import { arrayToSet } from "../utils/transforms.ts";
import type  OrderedPair from "./OrderedPair.ts";

export default abstract class SetOperations {

    static areSetsEqual<T>(a: SetType<T>, b : SetType<T>) : boolean {
        return areArraySetsEqual(a ,b)
    }

    static cartesianProduct<T>(a: SetType<T>, b : SetType<T>): OrderedPair[] {
        return arraySetCartesianProduct<T>(a, b)
    }

    static setDifference<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetDifference<T>(a, b);
    }

    static setIntersection<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetIntersection<T>(a, b)
    }

    static setUnion<T>(a: SetType<T>, b : SetType<T>): SetType<T> {
        return arraySetUnion<T>(a, b);
    }

    static isSetPartOf<T>(a : T | SetType<T>, b: SetType<T>) : boolean {
        return isPartOf(a, b)
    }

    static powerSet<T>(a: SetType<T>) : Set<T>{
        const set = arrayToSet(a)
        return powerSet(set)
    }
}