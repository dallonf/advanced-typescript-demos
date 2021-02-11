//
// Automatic Type Guards
//

// Example: A function that tries to get a representative string out of any object

function message(x: unknown): string | null {
  if (typeof x === "string") {
    return x;
  } else if (x instanceof Error) {
    return x.message;
  } else if (x == null) {
    return null;
  } else if (typeof x === "object" && x != null) {
    // note it's not quite smart enough to infer != null from the above condition
    return x.toString();
  } else {
    throw new Error(`Don't know how to extract a message from a ${typeof x}`);
  }
}

//
// Type Guard Functions
//

// Example: A function that could clean up the above function a bit

function isStringableObject(x: unknown): x is Object {
  return typeof x === "object" && x != null && Boolean(x.toString);
  // Note that you can do type-unsafe things with these functions; unit test them thoroughly!
  // return true;
}

const x: unknown = {};
// x.toString();
if (isStringableObject(x)) {
  console.log(x.toString());
}

export {};
