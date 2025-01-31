//  import library axios untuk bikin request HTTP
import axios from "axios";

const api = process.env.NEXT_PUBLIC_API;
//  fungsi buat ambil semua data produl dari fake Api
export const getProducts = async () => {
  // jalanin di dalam blok trycatch
  try {
    // request GET ke url API pake axios.get
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/products`);
    // kembalikan data produk yang disimpan dalam respone
    return response.data;
  } catch (error) {
    // error handling
    throw new Error("Failed to fetch data : ", error);
  }
};

export const getProductById = async (id) => {
  try {
    const res = await axios.get(`${api}/products/${id}`);
    return res.data;
  } catch (error) {
    throw new error("falide to fecth data :", error);
  }
};
