import { assertExists } from "@std/assert/exists";
import OrderedPair from "./OrderedPair.ts";
import { assertArrayIncludes } from "@std/assert/array-includes";
import { assertEquals } from "@std/assert/equals";

Deno.test('OrderedPair should exist', () => {
    const op = new OrderedPair(1, 2);
    assertExists(op)
})

Deno.test('OrderedPair getValue should return a freezed array with a and b', () => {
    const op = new OrderedPair(1, 2);

    assertArrayIncludes(op.getValues(), [1]);
    assertArrayIncludes(op.getValues(), [2]);

})

Deno.test('OrderedPair getFirst returns first value or Ordered pair', () => {
    const op = new OrderedPair(1, 2);
    assertEquals(op.getFirst(), 1)
})

Deno.test('OrderedPair get second returns second value or Ordered pair', () => {
    const op = new OrderedPair(1, 2);
    assertEquals(op.getSecond(), 2)
})

Deno.test('OrderedPair print() prints a formatted ordered pair with its values', () => {
    const op = new OrderedPair(1, 2);
    assertEquals(op.print(), '(1, 2)')
})