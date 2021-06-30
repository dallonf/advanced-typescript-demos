// # Whats the difference between `type` and `interface`?

// Interfaces declare a new type
interface MyInterface {
  a: string;
  b: string;
  c: string;
}
const objectOfMyInterface: MyInterface = {
  a: "one",
  b: "two",
  c: "three",
};

// Types are essentially aliases - you give a name to a type expression that already exists
type MyType = {
  a: string;
  b: string;
  c: string;
};
const objectOfMyType: MyType = {
  a: "one",
  b: "two",
  c: "three",
};

// They're basically interchangable!
// Here's the one thing I thought might be the difference
class MyExtendedType implements MyType {
  a: string = "one";
  b: string = "two";
  c: string = "three";
}

// Conclusion: Interfaces are basically just types with fewer features...
// but they can often play better with intellisense

export {};
