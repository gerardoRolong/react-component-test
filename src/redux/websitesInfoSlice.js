import { createSlice } from "@reduxjs/toolkit";

export const websiteInfoSlice = createSlice({
  name: "websitesInfo",
  initialState: {},
  reducers: {
    setWebsiteInfo: (state, action) => {
      return state = action.payload
      // state[title] = {
      //   url: url,
      //   status: status
      // }
      // state.algo = "aaaaaaaaaaa"
    }
  }
})

export const { setWebsiteInfo } = websiteInfoSlice.actions
export default websiteInfoSlice.reducer 
