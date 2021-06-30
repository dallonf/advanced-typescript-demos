// # Conditional Types

import * as React from "react";

// Example: Extract the type from an array

type ExtractFromArray<Array> = Array extends (infer ItemType)[]
  ? ItemType
  : never;
type StringProbably = ExtractFromArray<string[]>;

// Example: Get the prop types out of a React component

type ExtractPropsFromComponent<Component> =
  Component extends React.ComponentType<infer Props> ? Props : never;

interface Props {
  x: number;
  y: boolean;
  z: string;
}

const Component: React.FC<Props> = (props) => {
  return null;
};

type ExtractedPropsType = ExtractPropsFromComponent<typeof Component>;

// const newProps: ExtractedPropsType = {};

// Hint: this is built into React's types!
type BuiltinExtractedProps = React.ComponentPropsWithoutRef<typeof Component>;
