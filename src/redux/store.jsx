import { configureStore } from "@reduxjs/toolkit";
import screenSlice from "./screenSlice/screenSlice";
/**
 * store : objek yang menyimpan semua state aplikasi
 * dan menyediakan method untuk dispacth(ngirim) action dengan mengakses state
 */
export const store = configureStore({
  reducer: {
    // panggil reducer-reducer yang dibuat
    screen: screenSlice,
  },
});

export default store;
