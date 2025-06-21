// deno-lint-ignore-file no-explicit-any
import OrderedPair from "../classes/OrderedPair.ts";

export default function arraySetCartesianProduct( setA : unknown[], setB : unknown[] ) : OrderedPair[] {

    const cartesianProduct : OrderedPair[] = []

    setA.forEach((memberOfA : any) => {
        setB.forEach((memberOfB : any) => {
            const pair = new OrderedPair(memberOfA, memberOfB)
            cartesianProduct.push(pair);
        })
    });

    return cartesianProduct;
}