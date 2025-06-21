// deno-lint-ignore-file
// deno-lint-ignore no-explicit-any


const recursiveTransformArrayToSet = (array_set : unknown[]) : Set<unknown> => {
    let set = new Set();
    array_set.forEach( member => {
        if(member instanceof Array){
            set.add(recursiveTransformArrayToSet(member))
        }else{
            set.add(member)
        }
    })

    return set
}

const recursiveTransformSetToArray = (set: Set<unknown>) :  Array<unknown> => {
    let arraySet = new Array();

    let setValues = set.values()

    let nextValues = setValues.next();


    while(nextValues.value){
        if(nextValues.value instanceof Set){
            arraySet.push(recursiveTransformSetToArray(nextValues.value))
        }else{
            arraySet.push(nextValues.value)
        }
        nextValues = setValues.next()
    }

    return arraySet;
    

}

function arrayToSet(array_set: unknown[]): Set<unknown> {
    return recursiveTransformArrayToSet(array_set)
}


function setToArray( set: Set<unknown> ) : Array<unknown> {
    return recursiveTransformSetToArray(set)
}





export  {
    arrayToSet,
    setToArray
}