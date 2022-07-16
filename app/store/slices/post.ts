import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    stories: [
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
    page: 1,
    comments: [
      {
        id: "",
        message: "",
        owner: { id: "", title: "", firstName: "", lastName: "", picture: "" },
        post: "",
        publishDate: "",
      },
    ],
    commentPage: 0,
  },

  reducers: {
    setStories: (state, action) => {
      state.stories = [...action.payload];
    },

    addMorePosts: (state, action) => {
      state.posts = [...action.payload];
      state.page = state.page + 1;
    },

    addMoreComments: (state, action) => {
      state.comments = [...action.payload];
      state.commentPage = state.commentPage + 1;
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
      if (!action.payload.post.comments) {
        return state;
      }
      state.posts = action.payload.post.posts;
      state.stories = action.payload.post.stories;
      state.comments = action.payload.post.comments;
    },
  },
});

export const { addMorePosts, setStories, addMoreComments } = PostSlice.actions;
export const selectPost = (state: AppState) => state.post;
export default PostSlice.reducer;
