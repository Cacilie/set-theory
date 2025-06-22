# Set Theory

This library attempts to create a set of utils to apply set theory on JS/TS. (pun intended).

---
# Motivation.

Currently, Vanilla JS includes the Set Object  with some methods to do set operations. But this methods stop working properly when the rank of a set is greater than 1.

e.g.
With sets such that:

S = { 1 , {2} }

S = { 1 , {2, { 3, {4} } } }

In other words. Vanilla JS fails when applying the operations to sets that have sets within.


The objective of this library is to provide functions that work with the basic sets but also with those sets described above.

---

# Instalation

[Package](https://jsr.io/@discrete-math/set-theory)


### npm
`npx jsr add @discrete-math/set-theory`


`import * as set_theory from "@discrete-math/set-theory";`

---

### deno


`deno add jsr:@discrete-math/set-theory`

`import * as set_theory from "@discrete-math/set-theory";`

***Import directly with a jsr specifier***

`import * as set_theory from "jsr:@discrete-math/set-theory";`

---

# Usage.

The library provide the SetOf class. A class that can be used to create discrete math set objects and manipulate them through set operations. 


## Set Equality
```ts
const p = new SetOf([1, 2]).isEqualTo(new SetOf([2, 1]));
//p is true. Returns a boolean.
```

## Cartesian Product
```ts
const a = [ 1, [2, 5] ]
const b = [ 3, 4 ]

const cartesianProduct = new SetOf(a).cartesianProduct(new SetOf(b)) 
// returns a SetOf object.
```

## Set Difference
```ts
const difference = new SetOf([1, [2]]).difference(new SetOf([2]))
// returns a SetOf object.
```

## Intersection
```ts
const a = [1, [2]];
const b = [1, 2];

const intersection = new SetOf(a).intersection(new SetOf(b))
// returns a SetOf object.
```

## Union
```ts
const a = [1, 2, [3, 4]]
const b = [[3, 4]]

const aUnionb = new SetOf(a).union(new SetOf(b))
// returns a SetOf object.
```

## Powerset
```ts
const setB = new SetOf(['A', 'B', 'C', 'D']);

const p_of_b = setB.powerSet()
// returns a SetOf object.
```

## Cardinality
```ts
const cardinality = new SetOf([1, 2, 3, 4]).cardinality
// returns a number
```

## Get Value
Gets the values of the set in [Array_Set Notation](https://github.com/Cacilie/set-theory/wiki/array_set-Notation.)

```ts
new SetOf([1, 2, 3, 4]).getValue()
// [1, 2, 3, 4]
```
---

Also, this library provides the SetOperations abstract class. The abstract class is a set of utils that can directly be used with sets in array_set notation. [Array_Set Notation](https://github.com/Cacilie/set-theory/wiki/array_set-Notation.) But I highly recommend ratter using the SetOf class.


## Set Equality
```ts

const a = [1, [2, 3]]
const b = [[3,2] , 1]
SetOperations.areSetsEqual<number | number[]>(a, b) // true

```

## Cartesian product

```ts
const a = [1, 2]
const b = [3, 4]

const product = SetOperations.cartesianProduct(a, b);

// [ (1, 3), (1, 4), (2, 3), (2, 4) ]
```

## Set Difference

```ts
const a = [1, 2]
const b = [2]

const difference = SetOperations.setDifference(a, b);

// [1]

```

## Set Intersection

```ts
const a = [1, [2]];
const b = [1, 2];

const intersection = SetOperations.setIntersection(a, b)
// [1]
```

## Set Union

```ts
const a = [1, 2, [3, 4]]
const b = [[3, 4], 5]

const aUnionb = SetOperations.setUnion(a, b)

// [1, 2, [3, 4], 5]

```

## Is Part Of
```ts
SetOperations.isSetPartOf([1], [1, 2, [1]]) // true
```

## PowerSet
```ts
const setB = ['1', '2', '3'];
const p_of_b = powerSet(setB);
```

Output

```
[
  [],
  [ "1" ],
  [ "2" ],
  [ "1", "2" ],
  [ "3" ],
  [ "1", "3" ],
  [ "2", "3" ],
  [ "1", "2", "3" ]
]
```

# Contributing

Please read the CONTRIBUTING.md file. (under construction)

