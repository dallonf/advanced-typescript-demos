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
