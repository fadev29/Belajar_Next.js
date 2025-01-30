import { createSlice } from "@reduxjs/toolkit";
// createSlice : fungsi untuk bikin =sclice dari redux store yang berisi reducer dan action
// yang merupakan bagian dari state
const screenSlice = createSlice({
  name: "screen", // nama slice ini
  initialState: {
    isMobileScreen: false,
    isLargeScreen: false,
  },
  //    objek yang berisi kumpulan reducer yang akan dipakai buat mengubah state
  reducers: {
    // setMobileScreen : nama reducer
    //  sama kaya const [..., setData]
    setIsMobileScreen: (state, action) => {
      // untuk mengubah perubahan/perbarui nilai state isMobilScreen menjadi nilai yang dikirim dari action.paylod
      state.isMobileScreen = action.payload;
    },
    setIsLargeScreen: (state, action) => {
      state.isLargeScreen = action.payload;
    },
  },
});

/**
 * ekpor action creator yang bernama setMObilescreen dari slice screenSlice untuk mengirim action ke store
 */

export const { setIsMobileScreen, setIsLargeScreen } = screenSlice.actions;

export default screenSlice.reducer;
