//
// Generics
//

// Example: a function that turns the argument into an array, if it isn't one already

// Unsafe and Buggy

function ensureArrayAny(x: any | any[]): any[] {
  // Can you spot the bug? Because TypeScript can't!
  if (x === "array") {
    return x;
  } else {
    return [x];
  }
}

// Better - but annoying to use

function ensureArrayUnknown(x: unknown | unknown[]): unknown[] {
  if (Array.isArray(x)) {
    return x;
  } else {
    return [x];
  }
}

const arrayUnknown = ensureArrayUnknown(2);
// It's perfectly safe, but...
// console.log(arrayUnknown[0] + 2);

// Even Better

function ensureArrayGeneric<T>(x: T | T[]): T[] {
  if (Array.isArray(x)) {
    return x;
  } else {
    return [x];
  }
}

const arrayGeneric = ensureArrayGeneric(2);
console.log(arrayGeneric[0] + 2);

const ensureArrayOneLiner = <T extends unknown>(x: T | T[]): T[] =>
  Array.isArray(x) ? x : [x];

export {};
