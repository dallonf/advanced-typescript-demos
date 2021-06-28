//
// Variadic Tuples
//

import { curry } from "lodash";

// Example: Currying a function

function functionToCurry(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): number {
  return a + b + c + d + e + f;
}

// too many arguments; Lodash's built-in types fall back to any
const curriedWithLodash = curry(functionToCurry);

// but with some new-ish TS features...

type Arr = readonly unknown[];

type CurriedFunction<TArgs extends Arr, TReturn> = ((
  ...args: TArgs
) => TReturn) &
  InnerCurriedFunction<[], TArgs, TReturn>;

type InnerCurriedFunction<
  TBeforeArgs extends Arr,
  TAfterArgs extends Arr,
  TReturn
> = (TBeforeArgs extends []
  ? {}
  : (
      ...args: TBeforeArgs
    ) => TAfterArgs extends []
      ? TReturn
      : CurriedFunction<TAfterArgs, TReturn>) &
  (TAfterArgs extends [infer Head, ...infer Tail]
    ? InnerCurriedFunction<[...TBeforeArgs, Head], Tail, TReturn>
    : {});

function curryWithNewTypes<T extends (...args: any) => any>(
  f: T
): CurriedFunction<Parameters<T>, ReturnType<T>> {
  return curry(f) as any;
}

const curriedWithCustomTypes = curryWithNewTypes(functionToCurry);
const result = curriedWithCustomTypes(1, 1, 1)(1, 1)(1);

export {};
