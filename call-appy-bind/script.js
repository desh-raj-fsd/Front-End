"use strict";

function bioData(state, country) {
  console.log(
    `My name is ${this.firstName} ${this.lastName}, and I am ${this.age} years old. I live in ${this.city}, ${state}, ${country}.`
  );
}

// Object One
const personOne = {
  firstName: "Desh",
  lastName: "Raj",
  age: 2024 - 1994,
  city: "Mandi",
};

// Object Two
const personTwo = {
  firstName: "Vicky",
  lastName: "Thakur",
  age: 2024 - 1996,
  city: "Sundar Nagar",
};

/**
 * Function Borrowing
 * Function borrowing is a concept in JavaScript where a function defined in one object
 * is borrowed and used in another object. It allows objects to share functionality
 * without duplicating code. This is typically achieved using JavaScript methods
 * like call(), apply(), or bind().
 *
 * Function borrowing is commonly used when an object does not have a particular method,
 * but another object does, and that method can operate on the data of the borrowing object.
 *
 * Key Mechanism of Function Borrowing:
 * The core idea of function borrowing lies in setting the context (`this`) of the borrowed
 * function to the borrowing object.
 */

// Borrowing a Method Using call()
// functionName.call(thisArg, arg1, arg2, ...);

// The first parameter should always be the reference to the `this` variable, which is an object.
// Subsequent arguments are passed as parameters to the function.

bioData.call(personOne, "Mandi", "India");
bioData.call(personTwo, "Mandi", "India");

/**
 * Borrowing a Method Using Apply()
 *
 * The `call()` and `apply()` methods in JavaScript allow functions to be invoked
 * with an explicitly specified `this` context. While both serve a similar purpose,
 * they differ in how they handle arguments.
 *
 * `call()` Method:
 * - Invokes a function with a specific `this` value.
 * - Accepts arguments individually as separate parameters.
 * - Syntax:
 *   functionName.call(thisArg, arg1, arg2, ...);
 *
 * `apply()` Method:
 * - Invokes a function with a specific `this` value.
 * - Accepts arguments as an array or an array-like object.
 * - Syntax:
 *   functionName.apply(thisArg, [arg1, arg2, ...]);
 */

bioData.apply(personOne, ["Mandi", "India"]);
bioData.apply(personTwo, ["Mandi", "India"]);

/**
 * Borrowing a Method Using bind()
 *
 * The `bind()` method in JavaScript creates a new function with a specified `this` context
 * and optionally pre-filled arguments. Unlike `call()` and `apply()`, it does not immediately
 * invoke the function but instead returns a new function that can be called later.
 *
 * Key Points:
 * - `bind()` is used to set the `this` value explicitly for a function.
 * - It can also pre-fill arguments, a technique known as partial application.
 * - The original function remains unmodified; `bind()` returns a new, bound function.
 *
 * Syntax:
 *   const boundFunction = functionName.bind(thisArg, arg1, arg2, ...);
 */

const boundFunction = bioData.bind(personOne, "Mandi", "India");
boundFunction();
