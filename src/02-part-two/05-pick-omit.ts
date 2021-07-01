// # Utility types

interface JustSomeProps {
  x: string;
  y: number;
  z: boolean;
}

type Picked = Pick<JustSomeProps, "x" | "y">;
type Omitted = Omit<JustSomeProps, "z">;

export {};
