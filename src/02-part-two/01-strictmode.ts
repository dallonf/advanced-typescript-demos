// # Strict Mode

// Check out tsconfig.json

// function dontKnowWhatThisTypeIs(input) {
//   input.oopsGonnaCallItAnyways(); // kaboom
// }

// // -- -- --

// let x: string | null;
// console.log(x.toUpperCase()); // kaboom

// // -- -- --

// const arrayOfStrings: string[] = ["one"];
// // shouldn't be able to put a `number` in a `string[]`
// arrayOfStrings.push.apply(arrayOfStrings, [2]);

// // -- -- --

// function fn(x: string) {
//   console.log("Hello, " + x.toLowerCase());
// }
// type StringOrNumberFunc = (ns: string | number) => void;
// // shouldn't be able to put a function that needs a string
// // into a function type that also accepts a number
// let func: StringOrNumberFunc = fn;
// func(10); // kaboom

// // -- -- --

// class Person {
//   name: string;

//   constructor() {
//     console.log(this.name.toString()); // kaboom
//   }
// }

export {};
