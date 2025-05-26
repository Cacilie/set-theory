// deno-lint-ignore-file

import array_to_set from "./utils.ts";

// deno-lint-ignore no-explicit-any
export default function power_set(set: Set<any>): Set<any> {

    let solution: any[] = [];

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

    

    return array_to_set(solution);
}

