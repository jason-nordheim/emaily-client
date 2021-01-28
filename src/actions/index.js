import axios from "axios";
import { FETCH_USER } from "./types";

/** Action Creator - Fetch User */
export const fetchUser = () => {
  /**
   * the dispatch function is applied via reduxthunk
   * middleware
   */
  return async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
  };
};
