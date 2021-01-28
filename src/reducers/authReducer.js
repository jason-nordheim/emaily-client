import { FETCH_USER } from "../actions/types";

/** state initialized to null, indicating that no user
 * is currently authenticated
 */
export default function authReducer(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      /** if empty string, return a false value  */
      return action.payload || false;
    default:
      return state;
  }
}
