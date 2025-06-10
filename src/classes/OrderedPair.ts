export default class OrderedPair {

    private first: unknown;
    private second: unknown;


    constructor(first : unknown, second: unknown){
        this.first = first;
        this.second = second;
    }


    getValues(){
        return Object.freeze([this.first, this.second])
    }

    getFirst(){
        return this.first
    }
    
    getSecond(){
        return this.second
    }
    
    print(){
        return `(${this.first}, ${this.second})`
    }



    
}