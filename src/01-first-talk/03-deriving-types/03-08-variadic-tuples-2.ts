// Example: A function that crawls into a path and retrieves a result
// TOY EXAMPLE ONLY, this slows the compiler down significantly

type Path<T> = T[keyof T] extends never
  ? []
  :
      | {
          [P in keyof T]: [P, ...Path<T[P]>];
        }[keyof T]
      | [keyof T];
type Access<T, TPath extends Path<T>> = TPath extends [keyof T, ...infer Tail]
  ? Tail extends Path<T[TPath[0]]>
    ? Access<T[TPath[0]], Tail>
    : T[TPath[0]]
  : never;

function getValue<T, TPath extends Path<T>>(
  obj: T,
  path: TPath
): Access<T, TPath> {
  // The internals of this function are a bit too much for TypeScript to handle
  // so we'll lean on `any` just within this scope
  const [key, ...restPath] = path as string[];
  if (key == null) {
    return obj as any;
  } else if (restPath.length) {
    return getValue((obj as any)[key] as any, restPath as any) as any;
  } else {
    return (obj as any)[key];
  }
}

const nested = {
  a: {
    b: {
      c: 1,
      b: {
        a: 2,
      },
    },
  },
  x: {
    y: {
      z: 1,
    },
  },
};

const result = getValue(nested, ["a", "b", "c"]);
console.log(result); // 1

export {};
