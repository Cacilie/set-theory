// deno-lint-ignore-file

import {arrayToSet} from "./transforms.ts";

export default function powerSet<T>(set: Set<T>): Set<T> {

    let solution = []

    solution.push([null])

    set.forEach(pivot => {
        solution.forEach(member => {
            let copy = member[0];
            let tmp = [];
            if (copy) tmp.push(copy);
            tmp.push(pivot);
            solution.push(tmp);
        })
    })

    

    return arrayToSet(solution) as Set<T>;
}

