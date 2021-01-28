import axios from "axios";
import { FETCH_USER } from "./types";

/** Action Creator - Fetch User */
export const fetchUser = () => {
  /**
   * the dispatch function is applied via reduxthunk
   * middleware
   */
  return function (dispatch) {
    axios.get("/api/current_user").then((res) =>
      dispatch({
        type: FETCH_USER,
        payload: res,
      })
    );
  };
};
