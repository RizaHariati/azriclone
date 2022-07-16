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
      const mainProfile = friendList[2];
      state.mainProfile = mainProfile;
      state.friendList = friendList.filter((friend: FriendType) => {
        return friend.id !== mainProfile.id;
      });
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      /* ---------------- only if you have data you want ---------------- */
      if (!action.payload.friend.friendList) {
        return state;
      }
      if (!action.payload.friend.mainProfile) {
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
