// deno-lint-ignore-file
import array_to_set from "../utils/utils.ts";

// deno-lint-ignore-file no-explicit-any\
// deno-lint-ignore-file no-explicit-any
export default class SetOf {

    private value : any[]

    constructor (value: any[]){
        this.value = [...value]
    }

    
    getValue() : Set<any>{
        return array_to_set(this.value)
    }


}