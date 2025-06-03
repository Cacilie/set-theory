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

The library provide a set of utils that can be used with sets in array-set notation. (array-set notation definition is below)

Here they are some examples.

*Set Difference*

> Math example
>
>A = {1, 2, {3, 4} }
>
>B = {1, 2}
>
>A∖B = { x ∊ A ∣ x ∉ B }
>
>A\B = { {3, 4} }
>
```
import { arraySetDifference } from "@discrete-math/set-theory";


//basic example on deno
if (import.meta.main) {

  const A = [ 1, 2, [3, 4] ]
  const B = [ 1, 2 ]

  
  const A_B_diff = arraySetDifference(A, B);

  console.log(A_B_diff) // Output [ [ 3, 4 ] ]

}
```

---

*Is Part Of*

>Math example
>
>A = {1, 2, {3, 4}}
>C = {3, 4}
>
>C ∊ A


```
import { isPartOf } from "@discrete-math/set-theory";

const A = [ 1, 2, [3, 4] ]
const C = [3, 4]

const C_member_of_A = isPartOf(C, A)

console.log(C_member_of_A) // Output true

```

---
*Set equality*

>Math example
>
>S = { 1, 4, 3, {5, 6} }
>
>V = { {6, 5}, 4, 1, 3 }
>
> S = V

```
import { areArraySetsEqual } from "@discrete-math/set-theory";


const S = [ 1, 4, 3, [5, 6] ]

const V = [ [6 ,5 ], 4, 1, 3 ]

const S_equal_V = areArraySetsEqual(S, V)

console.log(S_equal_V) // Output true
```
---


## the SetOf Object

*Currently under development*

---

# Contributing

Please read the CONTRIBUTING.md file. (under construction)

