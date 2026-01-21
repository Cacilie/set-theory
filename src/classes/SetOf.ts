import type { SetType } from "../model/index.ts";
import { SetOperations, type OrderedPair } from "./index.ts";

/**
 * Represents a mathematical set.
 * This class provides an object-oriented wrapper around set operations,
 * using arrays as the underlying data structure.
 * @template T The type of elements in the set.
 */
export class SetOf<T> {

    private value : SetType<T>;
    private _cardinality: number = 0;

    /**
     * Gets the cardinality (the number of elements) of the set.
     * @returns The number of elements in the set.
     */
    public get cardinality(): number {
        this.cardinality = this.value.length
      return this._cardinality;
    }
    
    /**
     * Sets the private `_cardinality` property.
     * @param value The new value for the cardinality.
     */
    public set cardinality(value: number) {
      this._cardinality = value;
    }

    /**
     * Creates an instance of a SetOf.
     * @param value An array of elements to initialize the set with. Duplicates are not removed.
     */
    constructor (value: SetType<T>){
        this.value = [...value]
    }

    /**
     * Checks if this set is equal to another set.
     * @param set The set to compare against.
     * @returns `true` if the sets contain the same elements, `false` otherwise.
     */
    isEqualTo(set: SetOf<T>) : boolean {
        return SetOperations.areSetsEqual(this.value, set.getValue())
    }

    /**
     * Computes the Cartesian product of this set and another set (A × B).
     * @param set The second set for the product.
     * @returns A new `SetOf` containing `OrderedPair` instances representing the product.
     */
    cartesianProduct(set: SetOf<T>) : SetOf<OrderedPair<T>> {
        const product = SetOperations.cartesianProduct(this.value, set.getValue())
        return new SetOf(product)
    }

    /**
     * Computes the difference between this set and another set (this - set).
     * Returns elements that are in this set but not in the other.
     * @param set The set whose elements will be removed from this set.
     * @returns A new `SetOf` representing the difference.
     */
    difference(set: SetOf<T>) : SetOf<T> {
        const difference = SetOperations.setDifference(this.value, set.getValue())
        return new SetOf(difference)
    }

    /**
     * Computes the intersection of this set and another set.
     * Returns elements that are present in both sets.
     * @param set The set to intersect with.
     * @returns A new `SetOf` containing elements present in both sets.
     */
    intersection(set: SetOf<T>) : SetOf<T> {
        const intersection = SetOperations.setIntersection(this.value, set.getValue())
        return new SetOf(intersection)
    } 

    /**
     * Computes the union of this set and another set.
     * Returns a new set with all unique elements from both sets.
     * @param set The set to unite with.
     * @returns A new `SetOf` containing all unique elements from both sets.
     */
    union(set: SetOf<T>) : SetOf<T> {
        const union = SetOperations.setUnion(this.value, set.getValue())
        return new SetOf(union)
    } 

    /**
     * Checks if this set is a subset of another set.
     * @param set The potential superset.
     * @returns `true` if all elements of this set are also in the specified set, `false` otherwise.
     */
    isPartOf(set: SetOf<T>) : boolean {
        const p = SetOperations.isSetPartOf(this.value, set.getValue());
        return p
    }

    /**
     * Computes the power set of this set.
     * @returns A new `SetOf` containing all subsets of this set.
     */
    powerSet(): SetOf<T[]> {
        const powerSet = SetOperations.powerSet(this.value);
        return new SetOf<T[]>(powerSet)
    }

    /**
     * Returns the underlying array representation of the set's elements.
     * @returns An array of the elements in the set.
     */
    getValue() : SetType<T> {
        return this.value;
    }


}