//
// Null unions
//

// Example: A button that can optionally display an icon
// In order to display this icon, a name, size, and style are needed

// Allows Impossible States

interface BadButtonIconProps {
  icon?: string;
  iconSize?: number;
  iconStyle?: "outline" | "filled";
}

const invalidStateWithIconPropsButNoIcon: BadButtonIconProps = {
  iconSize: 10,
  iconStyle: "filled",
};

const invalidStateWithIconButMissingRequiredProp: BadButtonIconProps = {
  icon: "save",
};

// Good

interface ButtonIconPropsNullable {
  icon?: {
    name: string;
    size: number;
    style: "outline" | "filled";
  };
}

const exampleButtonIconPropsWithIcon: ButtonIconPropsNullable = {
  icon: {
    name: "stuff",
    size: 10,
    style: "filled",
  },
};

const liveButtonIconPropsWithNoIcon: ButtonIconPropsNullable = {};

//
// Flow Control
//

function funcWithIconProps(props: ButtonIconPropsNullable) {
  // Can't do this
  // console.log(props.icon.name);

  if (props.icon) {
    console.log(props.icon.name);
  }

  // or, of course
  console.log(props.icon?.name);

  // Smarter than you might think!

  if (!props.icon) {
    return;
  }
  console.log(props.icon.name);
}

export {};
