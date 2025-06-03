// deno-lint-ignore-file
import arrayToSet from "../utils/utils.ts";

// deno-lint-ignore-file no-explicit-any\
// deno-lint-ignore-file no-explicit-any
export default class SetOf {

    private value : any[]

    constructor (value: any[]){
        this.value = [...value]
    }

    
    getValue() : Set<any>{
        return arrayToSet(this.value)
    }


}