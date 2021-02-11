//
// Indexing Types
//

// Example: A complex "secretIdentity" type that may be useful on its own, but isn't defined seperately

interface Hero {
  name: string;
  costumeColor: string;
  secretIdentity: {
    firstName: string;
    lastName: string;
    coverOccupation: string;
  };
}

const superman: Hero = {
  name: "Superman",
  costumeColor: "blue",
  secretIdentity: {
    firstName: "Clark",
    lastName: "Kent",
    coverOccupation: "journalist",
  },
};

const clark: Hero["secretIdentity"] = superman.secretIdentity;

export {};
