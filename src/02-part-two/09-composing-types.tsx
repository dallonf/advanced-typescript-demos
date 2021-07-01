import * as React from "react";

// # Type Composition

// Example: A component that wants to pass some props to a lower component it renders

interface InnerProps {
  textColor: string;
  buttonColor: string;
}

// ## 1: Don't
// Just duplicate whatever needs to be duplicated
interface OuterPropsDuplicated {
  textColor: string;
  buttonColor: string;
  margin: number;
}

// The benefits of DRY are mainly that you won't forget to update something
// in more than one place
// But that doesn't matter much here because TypeScript will catch
// those mistakes

// It can actually be MORE readable to have duplication if definitions are
// explicit near the place it is actually used

// # 1.5: Don't; use composition instead

const InnerComponent: React.FC<InnerProps> = () => <div />;

const OuterComponentNotLikeThis: React.FC<OuterPropsDuplicated> = ({
  buttonColor,
  margin,
  textColor,
}) => {
  return (
    <div style={{ margin }}>
      <InnerComponent buttonColor={buttonColor} textColor={textColor} />
    </div>
  );
};

const OuterComponentComposed: React.FC<{
  margin: number;
  children?: React.ReactChild;
}> = ({ margin, children }) => {
  return <div style={{ margin }}>{children}</div>;
};

<OuterComponentComposed margin={1}>
  <InnerComponent buttonColor="red" textColor="blue" />
</OuterComponentComposed>;

// -- Before going further, make sure the types you're trying to share
// are actually related!
// Often properties might be the same type, but have different purposes

// ## 2: Nesting
// Include external dependencies as sub-objects

interface OuterPropsNested {
  margin: number;
  innerProps: InnerProps;
}

// This keeps things very clear and understandable

// # 3: Explicitly declare common fields

// TODO: ask for realistic examples

// # 4: Discussion of various techniques to merge object types

interface OuterPropsExtended extends InnerProps {
  margin: number;
}

type OuterPropsIntersected = InnerProps & {
  margin: number;
};

interface OuterPropsIndividuallyIndexed {
  margin: number;
  textColor: InnerProps["textColor"];
}

type InnerPropsCommonPicked = Pick<InnerProps, "textColor">;
type InnerPropsCommonOmitted = Omit<InnerProps, "buttonColor">;
type Override<Type, Overrides> = Omit<Type, keyof Overrides> & Overrides;
type OuterPropsOverriden = Override<
  InnerProps,
  {
    buttonColor?: string;
  }
>;

export {};
