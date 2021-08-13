import * as type from "../types";
export function getMovies() {
  return {
    type: type.GET_MOVIES_REQUESTED,
  };
}
