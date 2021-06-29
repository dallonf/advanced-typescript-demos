interface Hero {
  name: string;
  power: string;
}

interface SecretIdentity {
  name: string;
  occupation: string;
}

type Union = Hero | SecretIdentity;

const superman: Union = {
  name: "Clark Kent",
  occupation: "Reporter",
};

// You might think this would work

// function printUnion(hero: Union) {
//   if (hero.occupation) {
//     console.log(`${hero.name} (${hero.occupation})`);
//   } else if (hero.power) {
//     console.log(`${hero.name} has the power of ${hero.power}`);
//   }
// }

interface HeroWithType extends Hero {
  type: "hero";
}
interface SecretIdentityWithType extends SecretIdentity {
  type: "secretIdentity";
}
type DiscriminatedUnion = HeroWithType | SecretIdentityWithType;

function printDiscriminatedUnion(hero: DiscriminatedUnion) {
  if (hero.type === "secretIdentity") {
    console.log(`${hero.name} (${hero.occupation})`);
  } else if (hero.type === "hero") {
    console.log(`${hero.name} has the power of ${hero.power}`);
  } else {
    // This is another way to do an exhaustive check
    const never: never = hero;
    return never;
  }
}

export {};
