import { createSlice } from "@reduxjs/toolkit"

export const pinCodeSlice = createSlice({
  name: "pinCode",
  initialState: {
    value: "",
    correctPinCode: "6489",
    pinCodeMaxLength: 4,
    isAuthorized: false
  },
  reducers: {
    appendNum: (state, action) => {
      if (state.value.length < 4) {
        state.value += action.payload
      }
    },
    removeNum: (state) => {
      state.value = state.value.slice(0, -1)
    },
    resetPin: (state) => {
      state.value = ""
    },
    checkPin: (state) => {
      state.isAuthorized = state.value === state.correctPinCode
      if(!state.isAuthorized) {
        state.value = ""
      }
    }
  }
})

export const { appendNum, removeNum, resetPin, checkPin } = pinCodeSlice.actions

export default pinCodeSlice.reducer;
