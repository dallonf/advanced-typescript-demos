// Function overloads

// 1. Can always use optional props, args spread, or union types

function addThirdMaybe(a: number, b: number, c?: number): number {
  return a + b + (c ?? 0);
}
function addMany(a: number, b: number, ...more: number[]): number {
  return [a, b, ...more].reduce((c, d) => c + d);
}
function add(a: string | number, b: string | number) {
  const toNumber = (x: string | number) =>
    typeof x === "number" ? x : Number(x);
  return toNumber(a) + toNumber(b);
}

// 2. Sometimes you get a function from a third-party lib that does something a bit wacky, though...

const wildWestFunc: any = () => {};
interface WildWestLib {
  findUser(): string[];
  findUser(id: number): string;
  findUser(firstName: string, lastName: string): string;
}
const wildWestLib: WildWestLib = {
  findUser: wildWestFunc,
};
wildWestLib.findUser();
wildWestLib.findUser(1234);
wildWestLib.findUser("Homer", "Simpson");

// Can also define an interface as callable!

type FindUserFn = {
  (): string[];
  (id: number): string;
  (firstName: string, lastName: string): string;
};
const findUser: FindUserFn = wildWestFunc;
findUser();
findUser(1234);
findUser("Homer", "Simpson");

// 3. But I want to make one of these myself!

// Don't, it's nicer to use different names
interface SaneLib {
  findAllUsers(): string[];
  findUserById(id: number): string;
  findUserByName(firstName: string, lastName: string): string;
}

// 4. But I REALLY want to...

// Fine
function overloadedFindUserDefinition<T extends unknown[]>(...args: T): any {
  if (args.length === 0) {
    // find all users
    return ["user1", "user2", "user3"];
  } else if (args.length === 1 && typeof args[0] === "number") {
    // find by id
    const id: number = args[0];
    return "user1";
  } else if (
    args.length === 2 &&
    typeof args[0] === "string" &&
    typeof args[1] === "string"
  ) {
    // find by name
    const firstName: string = args[0];
    const lastName: string = args[1];
    return "user2";
  }
}
const overloadedFindUser: FindUserFn = overloadedFindUserDefinition;
overloadedFindUser();
overloadedFindUser(1234);
overloadedFindUser("Homer", "Simpson");

export {};
