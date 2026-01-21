
/**
 * Represents a mathematical ordered pair (a, b), where the order of elements matters.
 * This class is typically used to represent the elements of a Cartesian product of two sets.
 * @template T The base type of the elements in the pair.
 */
export class OrderedPair<T> {

    /** @private The first element of the ordered pair. */
    private first: T | T[];
    /** @private The second element of the ordered pair. */
    private second:   T | T[];


    /**
     * Creates an instance of an OrderedPair.
     * @param first The first element of the pair.
     * @param second The second element of the pair.
     */
    constructor(first : T | T[], second: T | T[]){
        this.first = first;
        this.second = second;
    }


    /**
     * Returns the elements of the pair as a frozen (read-only) array.
     * @returns A read-only array containing the first and second elements of the pair.
     */
    getValues() : readonly (T | T[])[] {
        return Object.freeze([this.first, this.second])
    }

    /**
     * Retrieves the first element of the ordered pair.
     * @returns The first element.
     */
    getFirst() : T | T[] {
        return this.first
    }
    
    /**
     * Retrieves the second element of the ordered pair.
     * @returns The second element.
     */
    getSecond() : T | T[]{
        return this.second
    }
    
    /**
     * Returns a string representation of the ordered pair in the format `(first, second)`.
     * @returns A formatted string representing the pair.
     */
    print() : string {
        return `(${this.first}, ${this.second})`
    }



    
}