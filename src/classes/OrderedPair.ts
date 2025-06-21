// deno-lint-ignore-file no-explicit-any


export default class OrderedPair {

    

    private first: any;
    private second:  any;


    constructor(first : any, second: any){
        this.first = first;
        this.second = second;
    }


    getValues(){
        return Object.freeze([this.first, this.second])
    }

    getFirst() : any {
        return this.first
    }
    
    getSecond() : any{
        return this.second
    }
    
    print(){
        return `(${this.first}, ${this.second})`
    }



    
}