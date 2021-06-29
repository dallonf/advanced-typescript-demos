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

// the "in" keyword can help narrow types
function printUnionNarrowed(hero: Union) {
  if ("occupation" in hero) {
    console.log(`${hero.name} (${hero.occupation})`);
  } else if ("power" in hero) {
    console.log(`${hero.name} has the power of ${hero.power}`);
  }
}

// You can also write "type predicates"
function isHero(input: Union): input is Hero {
  return "power" in input;
}
function isSecretIdentity(input: Union): input is SecretIdentity {
  return "occupation" in input;
}

function printUnionWithPredicates(hero: Union) {
  if (isSecretIdentity(hero)) {
    console.log(`${hero.name} (${hero.occupation})`);
  } else if (isHero(hero)) {
    console.log(`${hero.name} has the power of ${hero.power}`);
  }
}

// But discriminated unions are generally easier:
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
