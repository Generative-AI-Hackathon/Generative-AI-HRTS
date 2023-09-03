import { createSlice } from "@reduxjs/toolkit";

type historiesState = {
  hitories: any[];
  hitoriesStatus: "loaded" | "loading" | "failed";
  historiesError: string | null;
};

//Authentication Slice Part
const historiesSlice = createSlice({
  name: "auth",
  initialState: <historiesState>{
    hitories: [],
    hitoriesStatus: "loaded",
    historiesError: null,
  },

  reducers: {
    // This is a reducer, that sets the auth status to loading
    setHistoryLoading: (state) => {
      state.hitoriesStatus = "loading";
      state.historiesError = null;
    },

    setHistory: (state, action) => { 
      state.hitories = action.payload;
      state.hitoriesStatus = "loaded";
      state.historiesError = null;
    },

    // This is a reducer, that sets the auth status to failed
    setHistoryFailed: (state, action) => {
      state.hitoriesStatus = "failed";
      state.historiesError = action.payload;
    },

    resetHistoryFaild: (state) => {
      state.hitoriesStatus = "loaded";
      state.historiesError = null;
      state.hitories = [];
    },
  },
});

export const { setHistoryFailed, setHistoryLoading,setHistory, resetHistoryFaild  } =
  historiesSlice.actions;
export default historiesSlice.reducer;
