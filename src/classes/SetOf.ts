// deno-lint-ignore-file no-explicit-any
export default class SetOf {

    private value : any[]

    constructor (value: any[]){
        this.value = [...value]
    }

    getValue(){
        return new Set(this.value)
    }


}