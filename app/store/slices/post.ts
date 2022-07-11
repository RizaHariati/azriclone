import { createSlice, current } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    stories: [],
    posts: [
      {
        id: "",
        image: "",
        likes: 0,
        owner: { id: "", title: "", firstName: "", lastName: "", picture: "" },
        publishDate: "",
        tags: [],
        text: "",
      },
    ],
    page: 2,
  },
  reducers: {
    setStories: (state, action) => {
      state.stories = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = [...action.payload];
    },
    addMorePosts: (state, action) => {
      state.posts = [...action.payload];
      state.page = state.page + 1;
    },
    openLoading: (state) => {
      state.loading = true;
    },
    closeLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload.post.posts) {
        return state;
      }
      if (!action.payload.post.stories) {
        return state;
      }
      state.posts = action.payload.post.posts;
      state.stories = action.payload.post.stories;
    },
  },
});

export const { addMorePosts, setStories, setPosts, openLoading, closeLoading } =
  PostSlice.actions;
export const selectPost = (state: AppState) => state.post;
export default PostSlice.reducer;
