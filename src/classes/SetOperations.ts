// deno-lint-ignore-file no-explicit-any
import areArraySetsEqual from "../utils/areArraySetsEqual.ts";
import arraySetCartesianProduct from "../utils/arraySetCartesianProduct.ts";
import arraySetDifference from "../utils/arraySetDifference.ts";
import arraySetIntersection from "../utils/arraySetIntersection.ts";
import arraySetUnion from "../utils/arraySetUnion.ts";
import isPartOf from "../utils/isPartOf.ts";
import powerSet from "../utils/powerSet.ts";
import { arrayToSet } from "../utils/utils.ts";
import type  OrderedPair from "./OrderedPair.ts";

export default class SetOperations {

    static areSetsEqual(a: any, b : any) : boolean {
        return areArraySetsEqual(a ,b)
    }

    static cartesianProduct(a: any, b: any): OrderedPair[] {
        return arraySetCartesianProduct(a, b)
    }

    static setDifference(a : any, b: any): any {
        return arraySetDifference(a, b);
    }

    static setIntersection(a : any, b: any): any {
        return arraySetIntersection(a, b)
    }

    static setUnion(a : any, b: any): any {
        return arraySetUnion(a, b);
    }

    static isSetPartOf(a : any, b: any) : boolean {
        return isPartOf(a, b)
    }

    static powerSet(a: any) : Set<any>{
        const set = arrayToSet(a)
        return powerSet(set)
    }
}