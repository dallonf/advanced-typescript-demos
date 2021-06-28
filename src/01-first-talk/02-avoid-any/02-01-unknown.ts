//
// Unknown
//

// Example: A function that takes a JSON API response and returns the ID

// Unsafe

export function getIdFromResponseAny(response: any) {
  return (
    response.id ??
    response.uid ??
    response.guid ??
    response.uuid ??
    response.key
  );
}

const idAny = getIdFromResponseAny({ id: { imitation_door_id: 32 } });
// uh oh, it's also any-typed

// Better

interface PossibleResponseWithId {
  id?: string;
  uid?: string;
  guid?: string;
  uuid?: string;
  key?: string;
}

export function getIdFromResponseUnknown(response: unknown) {
  // unknown can be cast to anything
  const castResponse = response as PossibleResponseWithId;
  return (
    castResponse.id ??
    castResponse.uid ??
    castResponse.guid ??
    castResponse.uuid ??
    castResponse.key
  );
}

// Even Better (can't error at runtime)
export function getIdFromResponseObject(response: { [key: string]: unknown }) {
  const possibleId =
    response.id ??
    response.uid ??
    response.guid ??
    response.uuid ??
    response.key;
  if (typeof possibleId === "string" || typeof possibleId === "number") {
    return possibleId;
  } else {
    return undefined;
  }
}
