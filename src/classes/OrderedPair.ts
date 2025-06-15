import type { Member } from "../utils/Types.ts";


export default class OrderedPair {

    

    private first: Member;
    private second:  Member;


    constructor(first : Member, second: Member){
        this.first = first;
        this.second = second;
    }


    getValues(){
        return Object.freeze([this.first, this.second])
    }

    getFirst() : Member {
        return this.first
    }
    
    getSecond() : Member{
        return this.second
    }
    
    print(){
        return `(${this.first}, ${this.second})`
    }



    
}