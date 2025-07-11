import { OrderedPair } from "../classes/index.ts";
import type { SetType } from "../model/index.ts";

export function arraySetCartesianProduct<T>( setA : SetType<T>, setB : SetType<T> ) : OrderedPair<T>[] {

    const cartesianProduct : OrderedPair<T>[] = []

    setA.forEach((memberOfA : T) => {
        setB.forEach((memberOfB : T) => {
            const pair = new OrderedPair(memberOfA, memberOfB)
            cartesianProduct.push(pair);
        })
    });

    return cartesianProduct;
}