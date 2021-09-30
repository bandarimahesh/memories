import * as api from "../api";

// actions creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: [] });
  } catch (error) {
    console.error(error.message);
  }
};
