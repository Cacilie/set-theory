# Set Theory

This library attempts to create a set of utils to apply set theory on JS/TS. (pun intended).

---

Currently, Vanilla JS includes the Set Object  with some methods to do operations. But this methods stop workking properly when the rank of a set is greater than 1.

e.g.
With a set such that S = { 1 , {2}}

The objective ot this library is to provide functions that not just work with the usual sets but also with those sets described above.

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


WIP



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
const setB = ['A', 'B', 'C', 'D'];
const p_of_b =  SetOperations.powerSet(setB);


```

Output

```
[
  [ null ],     [ "A" ],
  [ "B" ],      [ "A", "B" ],
  [ "C" ],      [ "A", "C" ],
  [ "B", "C" ], [ "A", "C" ],
  [ "D" ],      [ "A", "D" ],
  [ "B", "D" ], [ "A", "D" ],
  [ "C", "D" ], [ "A", "D" ],
  [ "B", "D" ], [ "A", "D" ]
]
```

# Contributing

Please read the CONTRIBUTING.md file. (under construction)

