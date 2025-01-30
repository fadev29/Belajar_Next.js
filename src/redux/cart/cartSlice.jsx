import { createSlice } from "@reduxjs/toolkit";

/**
 * createSlice : fungsi untuk bikin slice dari reduce store yang berisi reducer dan action
 * yang merupakan bagian dari state
 */
const cartSlice = createSlice({
  name: "cart", // nama slice
  //   initialState : nilai awal state
  initialState: {
    data: (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) || [],
  },
  //   reducer & action untuk memperbarui nilai state.data yang dikirim dari action.paylod
  reducers: {
    addToCrat: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { addToCrat } = cartSlice.actions; //  export action biar bisa dipake

export default cartSlice.reducer; // export reducer biar bisa disimpan kedalam store
