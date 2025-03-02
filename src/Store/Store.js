import { configureStore } from "@reduxjs/toolkit"
import pinCodeReducer from "./Slices/pinCode"

export default configureStore({
  reducer: {
    pinCode: pinCodeReducer,
  },
})
