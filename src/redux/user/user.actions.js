import { UserActionTypes } from "./users.types";

export function setCurrentUser(user) {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
}
