// deno-lint-ignore-file
// deno-lint-ignore no-explicit-any


const recursiveTransform = (array_set : unknown[]) : Set<unknown> => {
    let set = new Set();
    array_set.forEach( member => {
        if(member instanceof Array){
            set.add(recursiveTransform(member))
        }else{
            set.add(member)
        }
    })

    return set
}

export default function arrayToSet(array_set: unknown[]): Set<unknown> {
    
    let set = recursiveTransform(array_set)
    
    return set
}