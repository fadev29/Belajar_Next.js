import { formatCurrency } from "@/helpers/util/formatCurrency";
import { getProductById } from "@/services/products";
import { notFound } from "next/navigation";
import useSWR from "swr";
import React from "react";
import axios from "axios";

const ProductDetailPage = ({ detailProduct }) => {
  //  rumus swr (useSWR) (stale while revalidate) : hooks  third party dari tim varcel untuk fetching data, caching dang revalidate di sisi klien
  //  rumus : const {data, error, isLoading, isValidating} = useSWR(key(endpoint), dataFetcher)
  /**
   * swr pny bberapa properti
   * data : data yang diambil dari API
   * error : error handling saat mengambil data
   * isLoading : status loding
   * isValidating : status validasi ulang data(perbarui data)
   */
  const api = process.env.NEXT_PUBLIC_API;

  const { data, error, isLoading, isValidating } = useSWR(
    `${api}/products/${detailProduct?.id}`,
    async () => {
      const res = await axios.get(`${api}/products/${detailProduct?.id}`);
      return res.data;
    },
    {
      initialData: detailProduct,
      refreshInterval: 1000,
    }
  );
  if (error) return <div className="h-screen text-8xl text-center">Gagal mengambil data</div>;
  if (isLoading) return <div className="h-screen text-8xl text-center">sedang memuat data</div>;
  return (
    <>
      <div className="flex flex-col px-5 py-5 bg-gradient-to-b from-black to-blue-900 min-h-screen">
        <h1 className="text-4xl font-blod text-white">Detail Product</h1>
        <div className="pt-4 mt-5 rounded-2xl bg-white bg-opacity-20 max-w-xl">
          <h2 className="text-2xl font-blod text-white">{data?.title}</h2>
          <p className="text-white font-semibold mt-5">{data?.description}</p>
          <p className="text-white text-xl font-blod mt-5">{formatCurrency(data?.price, "en-US", "USD")}</p>
        </div>
        {isValidating && <p className="text-white text-8xl font-bold">sedang memuat</p>}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const { params } = context;
  console.log(params.id);

  try {
    const detailProduct = await getProductById(id);
    // flalidasi kalau misal nya produk tidak ditemukan kembli ke 404
    if (!detailProduct) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        detailProduct,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        error: "error",
      },
    };
  }
}

export default ProductDetailPage;
