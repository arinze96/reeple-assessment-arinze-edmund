import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IAppState {
  appLockState?: any;
}

const initialState: IAppState = {
  appLockState: "active",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState: initialState,
  reducers: {
    setAppLockState: (state, action: PayloadAction<boolean>) => {
      state.appLockState = action.payload;
    },
  },
});

export const {
  setAppLockState,
} = appStateSlice.actions;
export default appStateSlice.reducer;
