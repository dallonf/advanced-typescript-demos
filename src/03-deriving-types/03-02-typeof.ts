//
// Typeof keywoard
//

// Example: A complex object that may have a useful type, but it's only defined inline

const superman = {
  name: "Superman",
  costumeColor: "blue",
  secretIdentity: {
    firstName: "Clark",
    lastName: "Kent",
    coverOccupation: "journalist",
  },
};

type Hero = typeof superman;

// const batman: Hero = {};

export {};
