//
// String unions
//

// Example: A button that has disabled, active, and pending visual statuses
// Can only display one at a time

// Allows Impossible States

interface StatusPropsManyBools {
  isDisabled?: boolean;
  isActive?: boolean;
  isPending?: boolean;
}

const invalidState: StatusPropsManyBools = {
  isActive: true,
  isDisabled: true,
};

// Good

interface StatusPropsStringUnion {
  // Enums work too, but these are more convenient in a lot of ways
  status: "disabled" | "active" | "pending";
}

const stringUnionStatusProps: StatusPropsStringUnion = {
  status: "active",
};

export {};
