import type { SetType } from "../model/index.ts";
import { SetOperations, type OrderedPair } from "./index.ts";

export class SetOf<T> {

    private value : SetType<T>;
    private _cardinality: number = 0;


    public get cardinality(): number {
        this.cardinality = this.value.length
      return this._cardinality;
    }
    
    public set cardinality(value: number) {
      this._cardinality = value;
    }



    constructor (value: SetType<T>){
        this.value = [...value]
    }

    isEqualTo(set: SetOf<T>) : boolean {
        return SetOperations.areSetsEqual(this.value, set.getValue())
    }

    cartesianProduct(set: SetOf<T>) : SetOf<OrderedPair<T>> {
        const product = SetOperations.cartesianProduct(this.value, set.getValue())
        return new SetOf(product)
    }

    difference(set: SetOf<T>) : SetOf<T> {
        const difference = SetOperations.setDifference(this.value, set.getValue())
        return new SetOf(difference)
    }

    intersection(set: SetOf<T>) : SetOf<T> {
        const intersection = SetOperations.setIntersection(this.value, set.getValue())
        return new SetOf(intersection)
    } 

    union(set: SetOf<T>) : SetOf<T> {
        const union = SetOperations.setUnion(this.value, set.getValue())
        return new SetOf(union)
    } 

    isPartOf(set: SetOf<T>) : boolean {
        const p = SetOperations.isSetPartOf(this.value, set.getValue());
        return p
    }

    powerSet(): SetOf<T[]> {
        const powerSet = SetOperations.powerSet(this.value);
        return new SetOf<T[]>(powerSet)
    }




    
    getValue() : SetType<T> {
        return this.value;
    }


}