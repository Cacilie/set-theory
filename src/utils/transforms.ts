import { SetType } from "../model/index.ts";



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

function recursiveTransformSetToArray<ST, AT>(set: Set<ST>) :  SetType<AT> {
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

    return arraySet as SetType<AT>;
    

}

function arrayToSet<AT, ST>(array_set: SetType<AT>): Set<ST> {
    return recursiveTransformArrayToSet(array_set)
}


function setToArray<ST, AT>( set: Set<ST> ) : SetType<AT> {
    return recursiveTransformSetToArray<ST, AT>(set)
}





export  {
    arrayToSet,
    setToArray
}