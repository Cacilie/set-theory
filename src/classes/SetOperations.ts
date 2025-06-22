import type { SetType } from "../model/index.ts";
import { areArraySetsEqual, arraySetCartesianProduct, arraySetDifference, arraySetIntersection, arraySetUnion, IsArraySetPartOf, powerSet } from "../utils/index.ts";
import type { OrderedPair } from "./index.ts";


export abstract class SetOperations {

    static areSetsEqual<T>(a: SetType<T>, b : SetType<T>) : boolean {
        return areArraySetsEqual(a ,b)
    }

    static cartesianProduct<T>(a: SetType<T>, b : SetType<T>): OrderedPair<T>[] {
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
        return IsArraySetPartOf(a, b)
    }

    static powerSet<T>(a: SetType<T>) : SetType<T[]>{
        return powerSet(a)
    }
}