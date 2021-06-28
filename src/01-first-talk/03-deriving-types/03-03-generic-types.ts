//
// Generic types
//

// Example: A data type for a value that can be updated and observed

// Annoying to Use

interface ObservableValueUnknown {
  currentValue: unknown;
  subscribe(callback: (newValue: unknown) => void): void;
  write(newValue: unknown): void;
}

const exampleUnknown = null as null | ObservableValueUnknown;
exampleUnknown?.write("hello");
exampleUnknown?.write(42);
exampleUnknown?.write({ name: "Batman" });
// exampleUnknown?.write(exampleUnknown.currentValue + 1);

// Good

interface ObservableValueGeneric<T> {
  currentValue: T;
  subscribe(callback: (newValue: T) => void): void;
  write(newValue: T): void;
}

const exampleGeneric = null as null | ObservableValueGeneric<number>;
exampleGeneric?.write(exampleGeneric.currentValue + 1);

// Example: A function that observes a primitive value

function observePrimitive<T extends string | number | boolean>(
  value: T
): ObservableValueGeneric<T> {
  return {
    currentValue: value,
    // just dummy functions, don't wanna write an observable thing
    subscribe: () => {},
    write: () => {},
  };
}

const observableString = observePrimitive("hello world");
// const observableObject = observePrimitive({});

export {};
