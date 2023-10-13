import { createSlice } from "@reduxjs/toolkit";

export const websiteInfoSlice = createSlice({
  name: "websitesInfo",
  initialState: {},
  reducers: {
    setWebsiteInfo: (state, action) => {
      return state = action.payload
    }
  }
})

export const { setWebsiteInfo } = websiteInfoSlice.actions
export default websiteInfoSlice.reducer 
