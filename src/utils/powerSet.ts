import type { SetType } from "../model/index.ts";
import { IsArraySetPartOf } from "./index.ts";


export function powerSet<T>(set: SetType<T>): SetType<T[]> {

    const solution :  Array<T[]> = []

    solution.push([])

    set.forEach((pivot) => {
        solution.forEach(member => {
            const copy = (member as Array<T> )
            let tmp : T[] = [];
            if (copy.length > 0) tmp = [...copy]
            tmp.push(pivot);
            if(!IsArraySetPartOf<T[]>(tmp, solution)) solution.push(tmp);
        })
    })

    

    return solution;
}

