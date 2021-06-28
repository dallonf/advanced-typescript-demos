//
// Mapped Types
//

// Example: Remember this thing?

// Verbose

interface PossibleResponseWithIdExplicit {
  id?: string;
  uid?: string;
  guid?: string;
  uuid?: string;
  key?: string;
}

// Concise

type PossibleResponseWithIdMapped = {
  [P in "id" | "uid" | "guid" | "uuid" | "key"]?: string;
};

// Example: A list of possible ID props

type IdName = keyof PossibleResponseWithIdExplicit;
const id: IdName = "uid";

// Example: An observable version of an input object
// feat. Generics!

interface ObservableValue<T> {
  currentValue: T;
  subscribe(callback: (newValue: T) => void): void;
  write(newValue: T): void;
}

type ObservableObject<T> = {
  [P in keyof T]: ObservableValue<T[P]>;
};

interface Rectangle {
  width: number;
  height: number;
}

type ObservableRectangle = ObservableObject<Rectangle>;

export {};
