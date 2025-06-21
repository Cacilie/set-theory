
import  type { SetType } from "../model/SetType.ts";


function recursiveTransformArrayToSet<AT, ST>(array_set : SetType<AT>) : Set<ST> {
    const set  = new Set();
    array_set.forEach( (member : AT) => {
        if(member instanceof Array){
            set.add(recursiveTransformArrayToSet(member))
        }else{
            set.add(member)
        }
    })

    return set as Set<ST>
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

function arrayToSet<AT, ST>(array_set: SetType<AT>): Set<ST> {
    return recursiveTransformArrayToSet(array_set)
}


function setToArray<T>( set: Set<T> ) : SetType<T> {
    return recursiveTransformSetToArray<T>(set)
}





export  {
    arrayToSet,
    setToArray
}