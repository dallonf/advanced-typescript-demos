//
// Discriminated Unions
//

// Example: A button that can optionally display
// either an icon or an image, but not both

// Allows Impossible States

interface BadIconOrImageProps {
  image?: {
    url: string;
    size: number;
  };
  icon?: {
    name: string;
    iconStyle?: "filled" | "outline";
  };
}

const invalidIconOrImageProps: BadIconOrImageProps = {
  // Can't have both
  image: {
    url: "https://placekitten.com/16/16",
    size: 16,
  },
  icon: {
    name: "cat",
    iconStyle: "outline",
  },
};

// Good

type ButtonVisual =
  | {
      type: "image";
      url: string;
      size: number;
    }
  | {
      type: "icon";
      name: string;
      iconStyle: "filled" | "outline";
    };

interface GoodIconOrImageProps {
  visual?: ButtonVisual;
}

const exampleGoodIconOrImageProps: GoodIconOrImageProps = {
  visual: {
    type: "icon",
    name: "cat",
    iconStyle: "filled",
  },
};

const liveGoodIconOrImageProps: GoodIconOrImageProps = {
  visual: {
    type: "image",
    url: "https://placekitten.com/16/16",
    size: 16,
  },
};

function funcWithDiscriminatedUnions(props: GoodIconOrImageProps) {
  if (props.visual?.type === "image") {
    console.log(props.visual.url);
    // But this doesn't work:
    // console.log(props.visual.iconStyle);
  }
}

export {};
