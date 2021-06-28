//
// Exhaustive flow control
//

type PrimaryColor = "red" | "green" | "blue" // | "white" | "black";

// Footgun

function hexCodeFor(color: PrimaryColor) {
  switch (color) {
    case "red":
      return "#ff0000";
    case "green":
      return "#00ff00";
    case "blue":
      return "#0000ff";
  }
}

// Better

function betterHexCodeFor(color: PrimaryColor): string {
  switch (color) {
    case "red":
      return "#ff0000";
    case "green":
      return "#00ff00";
    case "blue":
      return "#0000ff";
  }
}

// Future-proof

function exhaustive(input: never): never {
  throw new Error("Unexpected: " + input);
}

function exhaustiveHexCodeFor(color: PrimaryColor) {
  switch (color) {
    case "red":
      return "#ff0000";
    case "green":
      return "#00ff00";
    case "blue":
      return "#0000ff";
    default:
      return exhaustive(color);
  }
}

export {};
