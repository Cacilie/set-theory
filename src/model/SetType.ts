/**
 * Represents a generic set type, which is internally modeled as an array of elements.
 * This type alias is used throughout the set-theory library to maintain consistency
 * when referring to the underlying data structure of a set.
 * @template T The type of elements contained within the set.
 */
export type SetType<T> = Array<T>