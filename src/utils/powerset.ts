// deno-lint-ignore-file
// deno-lint-ignore no-explicit-any
export default function power_set(set: Set<any>) : Set<any>{

    const power_set = new Set();
    
    // P(A) always include the empty set and A.
    power_set.add(set);
    power_set.add(new Set());

    // O(n)
    set.forEach( member => {
        power_set.add(new Set(member))
    })

   

    const copy_of_set = Array.from(set)

    
    let pivot: any;

    // O(n**2)
    while(copy_of_set.length > 1) {
        pivot = copy_of_set.shift();
        copy_of_set.forEach( member => {
            const tmpSet = new Set([ pivot, member ]);
            power_set.add(tmpSet);
        });
    };

    
    return power_set;
}
