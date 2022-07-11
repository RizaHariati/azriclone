import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import friendReducer from "./slices/friend";
import postReducer from "./slices/post";

const store = configureStore({
  reducer: {
    friend: friendReducer,
    post: postReducer,
  },
  devTools: true,
});
const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;
// export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
