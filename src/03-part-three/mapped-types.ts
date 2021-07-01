// # Mapped Types

// Example: An object that might have some form of ID

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

interface ObservableValue<InnerValue> {
  currentValue: InnerValue;
  subscribe(callback: (newValue: InnerValue) => void): void;
  write(newValue: InnerValue): void;
}

type ObservableObject<InnerObject> = {
  [ObjectKey in keyof InnerObject]: ObservableValue<InnerObject[ObjectKey]>;
};

interface Rectangle {
  width: number;
  height: number;
}

type ObservableRectangle = ObservableObject<Rectangle>;

export {};
