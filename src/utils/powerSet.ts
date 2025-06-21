
import type { SetType } from "../index.ts";

export default function powerSet<T>(set: SetType<T>): SetType<T> {

    const solution :  Array<T[] | null[]> = []

    solution.push([null])

    set.forEach(pivot => {
        solution.forEach(member => {
            const copy = (member as Array<T> )[0];
            const tmp = [];
            if (copy) tmp.push(copy);
            tmp.push(pivot);
            solution.push(tmp);
        })
    })

    

    return solution as SetType<T>;
}

