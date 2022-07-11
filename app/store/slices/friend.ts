import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";
import { FriendType } from "../../../typing.d";
export const FriendSlice = createSlice({
  name: "friend",

  initialState: {
    mainProfile: {
      id: "",
      title: "",
      firstName: "",
      lastName: "",
      picture: "",
    },
    friendList: [],
  },
  reducers: {
    setFriendData: (state, action) => {
      const friendList = action.payload;

      if (!state.mainProfile.id) {
        state.mainProfile =
          friendList[Math.floor(Math.random() * friendList.length - 1)];
      }
      state.friendList = friendList.filter(
        (friend: FriendType) => friend.id !== state.mainProfile.id
      );
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      /* ---------------- only if you have data you want ---------------- */
      if (
        !action.payload.friend.friendList ||
        !action.payload.friend.mainProfile
      ) {
        return state;
      }

      /* ----------------- handle client state override ----------------- */
      state.friendList = action.payload.friend.friendList;
      state.mainProfile = action.payload.friend.mainProfile;
    },
  },
});

export const { setFriendData } = FriendSlice.actions;
export const selectFriend = (state: AppState) => state.friend;
export default FriendSlice.reducer;
