//
// Utility types
//

interface JustSomeProps {
  x: string;
  y: number;
  z: boolean;
}

type Picked = Pick<JustSomeProps, "x" | "y">;
type Omitted = Omit<JustSomeProps, "z">;

// Example: Override an existing interface

type Override<T, TOverrides> = Omit<T, keyof TOverrides> & TOverrides;

type Modified = Override<JustSomeProps, { z?: number }>;
const modified: Modified = {
  x: "1",
  y: 2,
};

export {};
