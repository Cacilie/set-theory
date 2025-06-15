import OrderedPair from "../classes/OrderedPair.ts";
import type { Member } from "./Types.ts";

export default function arraySetCartesianProduct( setA : unknown[], setB : unknown[] ) : OrderedPair[] {

    const cartesianProduct : OrderedPair[] = []

    setA.forEach((memberOfA : Member) => {
        setB.forEach((memberOfB : Member) => {
            const pair = new OrderedPair(memberOfA, memberOfB)
            cartesianProduct.push(pair);
        })
    });

    return cartesianProduct;
}