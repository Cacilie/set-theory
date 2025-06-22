
export class OrderedPair<T> {

    
    

    private first: T | T[];
    private second:   T | T[];


    constructor(first : T | T[], second: T | T[]){
        this.first = first;
        this.second = second;
    }


    getValues() : readonly (T | T[])[] {
        return Object.freeze([this.first, this.second])
    }

    getFirst() : T | T[] {
        return this.first
    }
    
    getSecond() : T | T[]{
        return this.second
    }
    
    print() : string {
        return `(${this.first}, ${this.second})`
    }



    
}