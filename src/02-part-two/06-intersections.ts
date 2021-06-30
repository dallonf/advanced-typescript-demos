// # Intersection Types

type Intersection = { a: string } & { b: string };
const sampleIntersection: Intersection = {
  a: "one",
  b: "two",
};

type BrokenIntersection = Intersection & { b: number };
// const sampleBrokenIntersection: BrokenIntersection = {
//   a: "one",
//   b: 2,
// };
// Better to use the Override pattern introduced previously

type Character =
  | {
      type: "hero";
      name: string;
      hometown: string;
    }
  | { type: "villain"; name: string; crimes: string };

// This usually isn't a USEFUL pattern, but it's interesting
function printVillain(input: Character & { type: "villain" }) {
  console.log(`${input.name} is wanted for ${input.crimes}`);
}

// Composing function types

// This might not work like you expect...
type FunctionUnion = ((x: number) => string) | ((y: string) => number);
// function unionHoc(input: FunctionUnion) {
//   console.log(input(5));
// }

// But you can use intersection functions instead!
type FunctionIntersection = ((x: number) => string) & ((y: string) => number);
function intersectionHoc(input: FunctionIntersection) {
  console.log(input(5));
}

export {};
