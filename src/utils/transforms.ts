
import  type { SetType } from "../model/SetType.ts";


function recursiveTransformArrayToSet<T>(array_set : SetType<T>) : Set<T> {
    const set  = new Set();
    array_set.forEach( (member : T) => {
        if(member instanceof Array){
            set.add(recursiveTransformArrayToSet(member))
        }else{
            set.add(member)
        }
    })

    return set as Set<T>
}

function recursiveTransformSetToArray<T>(set: Set<T>) :  SetType<T> {
    const arraySet = [];

    const setValues = set.values()

    let nextValues = setValues.next();


    while(nextValues.value){
        if(nextValues.value instanceof Set){
            arraySet.push(recursiveTransformSetToArray(nextValues.value))
        }else{
            arraySet.push(nextValues.value)
        }
        nextValues = setValues.next()
    }

    return arraySet as SetType<T>;
    

}

function arrayToSet<T>(array_set: SetType<T>): Set<T> {
    return recursiveTransformArrayToSet(array_set)
}


function setToArray<T>( set: Set<T> ) : SetType<T> {
    return recursiveTransformSetToArray<T>(set)
}





export  {
    arrayToSet,
    setToArray
}